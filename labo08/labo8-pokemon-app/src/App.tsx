import './App.css'
import { HomePage } from './components/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './components/root'
import { PokemonsListPage } from './components/PokemonsListPage'
import { DataProvider } from './components/dataContext'
import { PokemonsDetailPage } from './components/PokemonDetailPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path: "pokemonslistPage",
          element: <PokemonsListPage />
        },
        {
          path: "detail/:id",
          element: <PokemonsDetailPage />
      }
      ]
    }
  ]);

  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  )
}

export default App
