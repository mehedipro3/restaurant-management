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
import AddItems from "../Pages/Dashboard/AddItems/AddItems.jsx";
import AdminRouter from "./AdminRouter.jsx";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems.jsx";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem.jsx";
import Payments from "../Pages/Dashboard/Payment/Payments.jsx";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory.jsx";
import UserHome from "../Pages/Dashboard/UserHome/UserHome.jsx";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome.jsx";




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
      //user panel routes
      {
        path: "userHome",
        element: <UserHome></UserHome>
      },
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "payment",
        element: <Payments></Payments>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },

      //admin panel routes

      {
        path: "Users",
        element: <AdminRouter><AllUsers></AllUsers></AdminRouter>
      },
      {
        path: "adminHome",
        element: <AdminRouter><AdminHome></AdminHome></AdminRouter>
      },
      {
        path: "addItems",
        element: <AddItems></AddItems>
      },
      {
        path: "manageItems",
        element: <AdminRouter><ManageItems></ManageItems></AdminRouter>
      },
      {
        path: "updateItem/:id",
        element: <AdminRouter><UpdateItem></UpdateItem></AdminRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      },

    ]
  },
]);