import { useContext } from "react";
import { DataContext } from "./DataContext";
import QuizQuestion from "./QuizQuestion";
import LoadingIndicator from "./LoadingIndicator";
import { ThemeButton } from "./ThemeButton";
import { QuizAppProps } from "../types";

export const QuizApp = ({ difficulty }: QuizAppProps) => {
    const { loading } = useContext(DataContext);
    const { questions } = useContext(DataContext);
    const { setQuestions } = useContext(DataContext);
    const { loadData } = useContext(DataContext);
    return (
        <>
            <ThemeButton></ThemeButton>
            {questions.filter(question => question.difficulty == difficulty).map((question, index) => {
                return (
                    <>
                    {    console.log(question)
                    }
                        <QuizQuestion key={index} quiz={question} userAnswer={""} setUserAnswer={(answer) => {
                            let newQuestions = [...questions];
                            newQuestions[index].user_answer = answer;
                            setQuestions(newQuestions);
                        }}></QuizQuestion>
                    </>
                )
            })}
            <button style={{ margin: "25px" }} onClick={loadData}>Load More</button>
            {loading && <div><LoadingIndicator /></div>}
        </>
    )
}

