import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../LayOuts/MainLayOuts";
import Home from "../Pages/Home";
import LogIn from "../Pages/Authentication/LogIn";
import Register from "../Pages/Authentication/Register";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Mysoldproperties from "../Pages/DashBoard/Mysoldproperties";

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
import AdminRoute from "./AdminRoute";
import PayPages from "../Pages/DashBoard/PayPages";
import UpdateProperty from "../Pages/DashBoard/UpdateProperty";
import AdverticesProperty from "../Pages/DashBoard/AdverticesProperty";
import Errorpage from "../Pages/Error/Errorpage";
import ProtectRoute from "./protectRoute";
import ClientOverAll from "../Pages/DashBoard/ClientOverAll";
import AgentOverAll from "../Pages/DashBoard/AgentOverAll";
import AdminOverAll from "../Pages/DashBoard/AdminOverAll";
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
                element:<ProtectRoute><AllProperties></AllProperties></ProtectRoute>
            },{
                path:'/allProperties/:id',
                element:<ProtectRoute><CardDetails></CardDetails></ProtectRoute>
            },{
                   path:'/allProperties/review/:id',
                   element:<Reveiws></Reveiws>
            }

        ]
    },
    {
        path: '/dashboard',
        element:<ProtectRoute><DashBoard></DashBoard></ProtectRoute>,
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
            {
              path:"/dashboard/wishlist/offer/:id",
              element:<PrivateRoute><MakeAnOffer></MakeAnOffer></PrivateRoute>
              
            },{
                     path:"/dashboard/payBil/:id" ,
                     element:<PrivateRoute><PayPages></PayPages></PrivateRoute>
            },{
                path:"/dashboard/clientOverAll",
                element:<ClientOverAll></ClientOverAll>
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
            {
                path:"/dashboard/addedproperty/:id",
                element:<AgentRoute><UpdateProperty></UpdateProperty></AgentRoute>
            },
            {
                path:"/dashboard/AgentOverAll",
                element:<AgentOverAll></AgentOverAll>
            },
            //admin
            {

                path:'/dashboard/adminProfile',
                element:<AdminRoute><AdminPrpfile></AdminPrpfile></AdminRoute>
            },
           
          
            {
                path:'/dashboard/manageReviews',
                element:<AdminRoute><Managereviews></Managereviews></AdminRoute>
            },
            
            {
                path:'/dashboard/manageUser',
                element:<AdminRoute><ManageUsers></ManageUsers>  </AdminRoute>
            },
          
            {
                path:'/dashboardadminPropertis',
                element:<AdminRoute><ManageProperties></ManageProperties></AdminRoute>
            },{
                path:'/dashboard/advertices',
                element:<AdminRoute><AdverticesProperty></AdverticesProperty></AdminRoute>
            }
            ,{
                path:"/dashboard/AdminOverAll",
                element:<AdminOverAll></AdminOverAll>

            }
            
        ]
    },{
        path:'*',
        element:<Errorpage></Errorpage>
    }

])