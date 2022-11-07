import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: 'checkout/:id',
                loader: ({ params }) => fetch(`https://genius-car-server-pratice1.vercel.app/services/${params.id}`),
                element: <PrivateRoute><CheckOut /></PrivateRoute>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders /></PrivateRoute>
            }
        ]
    }
])