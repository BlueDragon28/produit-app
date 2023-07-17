import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteIndex from "./routes/RouteIndex";

import './App.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouteIndex/>,
        children: [
            {
                index: true,
                element: <div>Hello Index</div>
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
