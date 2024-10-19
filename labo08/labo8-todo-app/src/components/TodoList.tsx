import { useContext } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { DataContext } from "./dataContext";
import LoadingIndicator from "./LoadingIndicator";




const TodoList = () => {
    const { todos } = useContext(DataContext);
    const { setTodos } = useContext(DataContext);
    const { loading } = useContext(DataContext);


    const addTodo = (todo: string) => {
        setTodos([...todos, {
            title: todo,
            completed: false,
            markCompleted: () => { }
        }]);
    };
    const markCompleted = (index: number, _completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo));
    };

    return (
        <div>
            <TodoInput addTodo={(todo) => addTodo(todo)}></TodoInput>
            <div>
                {todos.map((todo, index) => (
                    <TodoItem key={index} title={todo.title} completed={todo.completed} markCompleted={() => markCompleted(index, todo.completed)} ></TodoItem>
                ))}
            </div>
            {loading && <div> <LoadingIndicator></LoadingIndicator> </div>}
        </div>
    );

}

export default TodoList;