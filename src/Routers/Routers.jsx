import {
  createBrowserRouter
} from "react-router";
import Main from "../Layout/Main";
import Homes from "../Pages/Homes.jsx";
import Menu from "../Pages/Menu/Menu.jsx";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h2>error page</h2>,
    children:[
      {
        path: "/",
        element: <Homes></Homes>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      }

    ]
  },
]);