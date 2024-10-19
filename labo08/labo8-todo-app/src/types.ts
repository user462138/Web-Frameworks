export interface TodoInputProps {
    addTodo: (todo: string) => void
}

export interface TodoItemProps {
    title: string
    completed: boolean
    markCompleted: () => void
}

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface IDataContext {
    todos: TodoItemProps[];
    loading: boolean;
    loadData: () => void;
    setTodos: (todos:TodoItemProps[]) => void
  }