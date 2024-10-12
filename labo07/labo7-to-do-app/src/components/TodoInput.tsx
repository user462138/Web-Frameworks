import { useState } from "react";
import {TodoInputProps} from "../types"

const TodoInput = ({ addTodo }: TodoInputProps) => {
    const [todo, setTodo] = useState("");
    const addButtunClicked = () => {
        setTodo(""),
        addTodo(todo)
    }
    return (
        <>
            <div>
                <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)} />
                <button onClick={addButtunClicked}>Add</button>
            </div>
        </>
    )
}

export default TodoInput;