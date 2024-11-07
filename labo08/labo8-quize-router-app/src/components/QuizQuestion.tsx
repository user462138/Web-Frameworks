import { decode } from "html-entities";
import { QuizQuestionProps } from "../types"
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TrueFalseQuestion from "./TrueFalseQuestion";

const QuizQuestion = ({ quiz, setUserAnswer, userAnswer }: QuizQuestionProps) => {
    return (
        <div>
            {decode(quiz.question)}
            <div>
                {quiz.user_answer ?
                    (<>
                        <div style={{ backgroundColor: "greenyellow", color: "black" }}>{quiz.user_answer === quiz.correct_answer && <p>You answered {quiz.user_answer} which is the correct answer</p>}</div>
                        <div style={{ backgroundColor: "red", color: "black" }}>{quiz.user_answer != quiz.correct_answer && <p>You answered {quiz.user_answer} which is the wrong answer</p>}</div>
                    </>)
                    :
                    (<>
                        {quiz.type === "multiple" && <MultipleChoiceQuestion quiz={quiz} setUserAnswer={(event) => setUserAnswer(event)} userAnswer={userAnswer} />}
                        {quiz.type === "boolean" && <TrueFalseQuestion quiz={quiz} setUserAnswer={(event) => setUserAnswer(event)} userAnswer={userAnswer} />}
                    </>)}
            </div>
        </div>
    )
}

export default QuizQuestion;