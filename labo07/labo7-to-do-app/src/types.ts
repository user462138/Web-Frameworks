export interface TodoInputProps {
    addTodo: (todo: string) => void
}

export interface TodoItemProps {
    name: string
    completed: boolean
    markCompleted: () => void
}