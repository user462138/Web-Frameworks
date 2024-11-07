import { decode } from "html-entities";
import { MultipleChoiceQuestionProps } from "../types";

const MultipleChoiceQuestion = ({ quiz: question, setUserAnswer, userAnswer }: MultipleChoiceQuestionProps) => {
    const allQuestions = [question.correct_answer, ...question.incorrect_answers];
    allQuestions.sort(() => Math.random() - 0.5);
    // {console.log(question.correct_answer)}
    return (
        <>
            <div>
                <select onChange={(event) => setUserAnswer(event.target.value)} value={userAnswer}>
                    <option>Select an answer</option>
                    {allQuestions.map((option, index) => {
                        return (<option key={index}>{decode(option)}</option>)
                    })}
                </select>
            </div>
        </>
    )
}

export default MultipleChoiceQuestion