import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { QuizApp } from './components/Quiz'
import { ThemeProvider } from './components/ThemeContext';
import { Home, Page1, Page2, Root } from './components/root/root';
// import { Difficulty } from './types';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "quiz/Easy",
          element: <QuizApp difficulty={"easy"} />
        },
        {
          path: "quiz/Medium",
          element: <QuizApp difficulty={"medium"} />
        },
        {
          path: "quiz/Hard",
          element: <QuizApp difficulty={"hard"} />
        }
        ,
        {
          path: "quiz",
          element: <QuizApp difficulty={"easy"} />
        }
      ]
    }
  ]);


  return (
    <>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
    </>
  )
}

export default App