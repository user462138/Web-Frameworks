import './App.css'
import { DataProvider } from './components/DataContext'
import { QuizApp } from './components/Quiz'
import { ThemeProvider } from './components/ThemeContext';


const App = () => {

  return (
    <>
      <DataProvider>
        <ThemeProvider>
          <QuizApp />
        </ThemeProvider>
      </DataProvider>
    </>
  )
}

export default App