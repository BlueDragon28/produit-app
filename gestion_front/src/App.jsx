import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteIndex from "./routes/RouteIndex";
import ListeProduits from "./routes/produits/ListeProduits";

import './App.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouteIndex/>,
        children: [
            {
                index: true,
                element: <ListeProduits/>
            }
        ]
    }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
