import {
  createBrowserRouter
} from "react-router";
import Main from "../Layout/Main";
import Homes from "../Pages/Homes.jsx";
import Menu from "../Pages/Menu/Menu.jsx";
import Order from "../Pages/Order/Order.jsx";
import Login from "../Pages/login/Login.jsx";




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
      },
      {
        path: "/order/:category",
        element: <Order></Order>
      },
      {
        path: "/login",
        element: <Login></Login>
      }

    ]
  },
]);