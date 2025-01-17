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
import AllProperties from "../Pages/AllProperties";
import CardDetails from "../Pages/CardDetails";
import Reveiws from "../Pages/DashBoard/Reveiws";
import WishListPages from "../Pages/DashBoard/WishListPages";
import MakeAnOffer from "../Pages/DashBoard/MakeAnOffer";
import PrivateRoute from "./PrivateRoute";
import AgentRoute from "./AgentRoute";
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
            },{
                path:'/allProperties',
                element:<AllProperties></AllProperties>
            },{
                path:'/allProperties/:id',
                element:<CardDetails></CardDetails>
            },{
                   path:'/allProperties/review/:id',
                   element:<Reveiws></Reveiws>
            }

        ]
    },
    {
        path: '/dashboard',
        element:<DashBoard></DashBoard>,
        children:[
            //user
            {
                path:'/dashboard/userProfile',
                element:<PrivateRoute><UserProfile></UserProfile> </PrivateRoute>  
            },
            {
                path:'/dashboard/wishlist',
                element:<PrivateRoute><WishListPages></WishListPages> </PrivateRoute> 
            },
             
            {
                path:'/dashboard/propertyBought',   
                element:<PrivateRoute><Propertybought></Propertybought></PrivateRoute>
            },
            {
                path:'/dashboard/myReveiws',
                element:<PrivateRoute><Myreviews></Myreviews></PrivateRoute>
            },
            //agent
            {
                path:'/dashboard/agentProfile',
                element:<AgentRoute><AgentProfile></AgentProfile>   </AgentRoute>
            },
            {
                path:'/dashboard/mySoldProperties',
                element:<AgentRoute><Mysoldproperties></Mysoldproperties></AgentRoute>   
            },
            {
                path:'/dashboard/addProperty',
                element:<AgentRoute><AddProperty></AddProperty>   </AgentRoute>
            },
            {
                path:'/dashboard/myaddedProperty',
                element:<AgentRoute><Myaddedproperties></Myaddedproperties>  </AgentRoute> 
            },
            {
                path:'/dashboard/requestProperty',
                element:<AgentRoute><Requestedproperties></Requestedproperties>  </AgentRoute> 
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
          {
            path:"/dashboard/wishlist/offer/:id",
            element:<MakeAnOffer></MakeAnOffer>
            
          },{

          }
         
            
            
        ]
    }

])