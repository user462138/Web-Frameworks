export interface TodoInputProps {
    todo: string
    setTodo: (todo: string) => void
    addTodo: (todo: string) => void
}

export interface TodoItemProps {
    name: string
    completed: boolean
    markCompleted: () => void
}