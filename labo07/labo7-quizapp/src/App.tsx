import { useEffect, useState } from 'react'
import './App.css'
import { QuizProps, QuizQuestionProps, QuizResonseProps } from './types'
import { ColorRing } from 'react-loader-spinner'


const QuizApp = () => {
  const [questions, setQuestions] = useState<QuizProps[]>([])
  const [loding, setLoading] = useState(false)
  // const [userAnswer, setUserAnswer] = useState("")

  const loadQuestions = async () => {
    setLoading(true);
    let response = await fetch("https://opentdb.com/api.php?amount=10")
    let questionsResponse: QuizResonseProps = await response.json();
    setQuestions([...questions, ...questionsResponse.results]);
    setLoading(false);
  }

  useEffect(() => {
    loadQuestions()
  }, [])

  return (
    <>
      {loding && <LoadingIndicator></LoadingIndicator>}
      {questions.map((question, index) => {
        return (
          <>
            <QuizQuestion key={index} quiz={question} userAnswer={""} setUserAnswer={(answer) => {
                    let newQuestions = [...questions];
                    newQuestions[index].user_answer = answer;
                    setQuestions(newQuestions);
                }}></QuizQuestion>
          </>
        )
      })}
    </>
  )
}

const QuizQuestion = ({ quiz, setUserAnswer, userAnswer }: QuizQuestionProps) => {
  return (
    <div>
      {quiz.question}
      <div>
        {quiz.type === "multiple" && <MultipleChoiceQuestion quiz={quiz} setUserAnswer={(event) => setUserAnswer(event)} userAnswer={userAnswer} />}
        {quiz.type === "boolean" && <TrueFalseQuestion quiz={quiz} />}
      </div>
    </div>
  )
}

interface TrueFalseQuestionProps {
  quiz: QuizProps
}
const TrueFalseQuestion = ({ quiz: _question }: TrueFalseQuestionProps) => {
  return (
    <>
      <div>
        <input type="radio" /> True
        <input type="radio" /> False
      </div>
    </>
  )
}

interface MultipleChoiceQuestionProps {
  quiz: QuizProps
  setUserAnswer: (answer:string) => void
  userAnswer: string
}
const MultipleChoiceQuestion = ({ quiz: question, setUserAnswer, userAnswer }: MultipleChoiceQuestionProps) => {
  const allQuestions = [question.correct_answer, ...question.incorrect_answers];
  allQuestions.sort(() => Math.random() - 0.5);
  {console.log(question.correct_answer)}
  return (
    <>
      <div>
        {userAnswer ?
          (
            <>
              <div style={{backgroundColor:"greenyellow",color:"black"}}>{userAnswer === question.correct_answer && <p>You answered {userAnswer} which is the correct answer</p>}</div>
              <div style={{backgroundColor:"red",color:"black"}}>{userAnswer != question.correct_answer && <p>You answered {userAnswer} which is the wrong answer</p>}</div>
            </>
          )
          :
          (<select onChange={event => setUserAnswer(event.target.value)} value={userAnswer}>
            <option>Select an answer</option>
            {allQuestions.map((option, index) => {
              return (<option key={index}>{option}</option>)
            })}
          </select>
          )
        }
      </div>
    </>
  )
}
const LoadingIndicator = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  )
}
const App = () => {
  return (
    <>
      <QuizApp />
    </>
  )
}

export default App
