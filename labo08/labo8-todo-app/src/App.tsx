import './App.css'
import { DataProvider } from './components/dataContext';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <DataProvider>
        <TodoList></TodoList>
      </DataProvider>
    </>
  )
}

export default App;
