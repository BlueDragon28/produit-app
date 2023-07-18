import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteIndex from "./routes/RouteIndex";
import Produits from "./routes/produits/Produits";
import ProduitDetail from "./routes/produits/ProduitDetail";

import './App.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouteIndex/>,
        children: [
            {
                index: true,
                element: <Produits/>
            },
            {
                path: "produit/:produitID",
                element: <ProduitDetail/>
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
