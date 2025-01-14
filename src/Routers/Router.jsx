import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../LayOuts/MainLayOuts";
import Home from "../Pages/Home";
import LogIn from "../Pages/Authentication/LogIn";
import Register from "../Pages/Authentication/Register";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Mysoldproperties from "../Pages/DashBoard/Mysoldproperties";
import Wishlist from "../Pages/DashBoard/Wishlist";
import Propertybought from "../Pages/DashBoard/Propertybought";
import AgentProfile from "../Pages/DashBoard/AgentProfile";
import AdminPrpfile from "../Pages/DashBoard/AdminPrpfile";
import UserProfile from "../Pages/DashBoard/UserProfile";
import Myreviews from "../Pages/DashBoard/Myreviews";
import Managereviews from "../Pages/DashBoard/Managereviews";
import ManageUsers from "../Pages/DashBoard/ManageUsers";
import ManageProperties from "../Pages/DashBoard/ManageProperties";
import AddProperty from "../Pages/DashBoard/AddProperty";
import Myaddedproperties from "../Pages/DashBoard/Myaddedproperties";
import Requestedproperties from "../Pages/DashBoard/Requestedproperties";
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
    },
    {
        path: '/dashboard',
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:'/dashboard/userProfile',
                element:<UserProfile></UserProfile>   
            },
            {
                path:'/dashboard/wishlist',
                element:<Wishlist></Wishlist>   
            },
             
            {
                path:'/dashboard/propertyBought',   
                element:<Propertybought></Propertybought>
            },
            {
                path:'/dashboard/myReveiws',
                element:<Myreviews></Myreviews>   
            },
            //agent
            {
                path:'/dashboard/agentProfile',
                element:<AgentProfile></AgentProfile>   
            },
            {
                path:'/dashboard/mySoldProperties',
                element:<Mysoldproperties></Mysoldproperties>   
            },
            {
                path:'/dashboard/addProperty',
                element:<AddProperty></AddProperty>   
            },
            {
                path:'/dashboard/myaddedProperty',
                element:<Myaddedproperties></Myaddedproperties>   
            },
            {
                path:'/dashboard/requestProperty',
                element:<Requestedproperties></Requestedproperties>   
            },
            //admin
            {

                path:'/dashboard/adminProfile',
                element:<AdminPrpfile></AdminPrpfile>
            },
           
          
            {
                path:'/dashboard/manageReviews',
                element:<Managereviews></Managereviews>   
            },
            
            {
                path:'/dashboard/manageUser',
                element:<ManageUsers></ManageUsers>   
            },
          
            {
                path:'/dashboardadminPropertis',
                element:<ManageProperties></ManageProperties>   
            },
          
         
            
            
        ]
    }

])