import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/root/root";
import { Home } from "./components/Home";
import { Opdracht1 } from "./components/Opdracht1";
import { Opdracht2 } from "./components/Opdracht2";
import { Opdracht3 } from "./components/Opdracht3";

const App = () => {
  const router = createBrowserRouter([
      {
          path: "/",
          element: <Root/>,
          children: [
              {
                  path: "",
                  element: <Home/>
              },
              {
                  path: "opdracht-1",
                  element: <Opdracht1/>
              },
              {
                  path: "opdracht-2",
                  element: <Opdracht2/>
              },
              {
                  path: "opdracht-3",
                  element: <Opdracht3/>
              }
          ]
      }
  ]);

  return (
      <div>
          <RouterProvider router={router} />
      </div>
  )
}

export default App;