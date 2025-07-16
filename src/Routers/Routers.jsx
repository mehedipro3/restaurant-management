import {
  createBrowserRouter
} from "react-router";
import Main from "../Layout/Main";
import Homes from "../Pages/Homes.jsx";
import Menu from "../Pages/Menu/Menu.jsx";
import Order from "../Pages/Order/Order.jsx";
import Login from "../Pages/login/Login.jsx";
import SingUp from "../Pages/SingUp/SingUp.jsx";
import Cart from "../Pages/Dashboard/Cart/Cart.jsx";
import DashBoard from "../Layout/DashBoard.jsx";
import PrivateRouter from "../Routers/PrivateRouter.jsx"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers.jsx";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h2>error page</h2>,
    children: [
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
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>
      }

    ]
  },
  {
    path: "dashboard",
    element: <PrivateRouter><DashBoard></DashBoard></PrivateRouter>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "Users",
        element: <AllUsers></AllUsers>
      },

    ]
  },
]);