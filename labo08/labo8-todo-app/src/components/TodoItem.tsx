import {TodoItemProps} from "../types"


const TodoItem = ({ title, completed, markCompleted }: TodoItemProps) => {
    return (
        <>
            <div>
                <input type="checkbox" checked={completed} onChange={() => markCompleted()} />
                <span style={{ textDecoration: completed ? "line-through" : "none" }}>{title}</span>
            </div>
        </>
    )
}

export default TodoItem;