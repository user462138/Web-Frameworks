import { useEffect, useState } from 'react'
import './App.css'
import { QuizProps, QuizResonseProps } from './types'
import LoadingIndicator from './components/LoadingIndicator'
import QuizQuestion from './components/QuizQuestion'


const QuizApp = () => {
  const [questions, setQuestions] = useState<QuizProps[]>([])
  const [loading, setLoading] = useState(false)
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
      <button style={{ margin: "25px" }} onClick={loadQuestions}>Load More</button>
      {loading && <div><LoadingIndicator /></div>}
    </>
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
