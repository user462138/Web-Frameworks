import {TodoItemProps} from "../types"


const TodoItem = ({ name, completed, markCompleted }: TodoItemProps) => {
    return (
        <>
            <div>
                <input type="checkbox" checked={completed} onChange={() => markCompleted()} />
                <span style={{ textDecoration: completed ? "line-through" : "none" }}>{name}</span>
            </div>
        </>
    )
}

export default TodoItem;