import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../LayOuts/MainLayOuts";
import Home from "../Pages/Home";
import LogIn from "../Pages/Authentication/LogIn";
import Register from "../Pages/Authentication/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOuts></MainLayOuts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: "/login",
                element: <LogIn></LogIn>
            }, {
                path: "/register",
                element: <Register></Register>
            }

        ]
    }

])