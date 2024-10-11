import { useState } from "react";
import TodoInput from "./todoInput";
import {TodoItemProps} from "../types"
import TodoItem from "./TodoItem";


const TodoList = () => {
    const [todos, setTodos] = useState<TodoItemProps[]>([]);
    const [todo, setTodo] = useState("");

    const addTodo = (todo: string) => {
        setTodos([...todos, {
            name: todo,
            completed: false,
            markCompleted: () => { }
        }]);
        setTodo("");
    };

    const markCompleted = (index: number, _completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo));
    };
    return (
        <div>
            <TodoInput todo={todo} addTodo={(todo) => addTodo(todo)} setTodo={(todo) => setTodo(todo)}></TodoInput>
            <div>
                {todos.map((todo, index) => (
                    <TodoItem key={index} name={todo.name} completed={todo.completed} markCompleted={() => markCompleted(index, todo.completed)} ></TodoItem>
                ))}
            </div>
        </div>
    );

}

export default TodoList;