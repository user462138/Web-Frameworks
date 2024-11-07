import { TrueFalseQuestionProps } from "../types"

const TrueFalseQuestion = ({ quiz: _question, setUserAnswer, userAnswer }: TrueFalseQuestionProps) => {
    return (
        <>
            <div>
                <>
                    <input type="radio" checked={userAnswer == "True"} onChange={(_event) => setUserAnswer("True")} /> True
                    <input type="radio" checked={userAnswer == "False"} onChange={(_event) => setUserAnswer("False")} /> False
                </>
            </div>
        </>
    )
}

export default TrueFalseQuestion