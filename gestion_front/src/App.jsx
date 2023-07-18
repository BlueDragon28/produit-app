import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteIndex from "./routes/RouteIndex";
import Produits from "./routes/produits/Produits";
import ProduitDetail from "./routes/produits/ProduitDetail";
import ModificationProduit from "./routes/produits/ModificationProduit";

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
            },
            {
                path: "produit/:produitID/edit",
                element: <ModificationProduit/>
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
