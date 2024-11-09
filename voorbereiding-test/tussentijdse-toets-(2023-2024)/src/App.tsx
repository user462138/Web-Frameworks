import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/root/root";
import { Home } from "./components/Home";
import { Oefening1 } from "./components/Oefening1";
import { Oefening2 } from "./components/Oefening2";
import { Oefening3 } from "./components/Oefening3";

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
                  path: "oefening1",
                  element: <Oefening1/>
              },
              {
                  path: "oefening2",
                  element: <Oefening2/>
              },
              {
                  path: "oefening3",
                  element: <Oefening3/>
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