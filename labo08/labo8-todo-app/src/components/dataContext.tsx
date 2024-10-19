import React, { useEffect, useState } from "react";
import { IDataContext, TodoItemProps } from "../types";

export const DataContext = React.createContext<IDataContext>({ todos: [], loading: true, loadData: () => { }, setTodos: (_todos:TodoItemProps[]) => {} });

export const DataProvider = ({children}: {children: React.ReactNode}) => {
    const [todos, setTodos] = useState<TodoItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
  
    const loadData = async () => {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const json = await response.json();
        setTodos(json);
        console.log(todos[1])
        setLoading(false);
    }
    useEffect(() => {
        loadData();
    }, []);
  
    return (
        <DataContext.Provider value={{todos, loadData, loading, setTodos}}>
            {children}
        </DataContext.Provider>
    )
  }
  
  
  