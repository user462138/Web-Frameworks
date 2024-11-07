import React, { useEffect, useState } from "react";
import { IDataContext, QuizProps, QuizResonseProps } from "../types";




export const DataContext = React.createContext<IDataContext>({ questions: [], loading: false, loadData: () => { }, setQuestions: (_questions:QuizProps[]) => { }})

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [questions, setQuestions] = useState<QuizProps[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    const loadData = async () => {
        setLoading(true);
        let response = await fetch("https://opentdb.com/api.php?amount=33")
        let questionsResponse: QuizResonseProps = await response.json();
        setQuestions([...questions, ...questionsResponse.results]);
        setLoading(false);
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <DataContext.Provider value={{ questions, loadData, loading, setQuestions }}>
            {children}
        </DataContext.Provider>
    )
}


