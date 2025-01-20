import { Navigate, NavLink, Outlet } from "react-router-dom";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import usePublicAxios from "../../Hooks/usePublicAxios";


const DashBoard = () => {
    const axiosPublic=usePublicAxios()
    const {user,loading}=useAuth()
    const {data:user1={},isLoading}=useQuery({
        queryKey:[user.email],
        queryFn:async () => {
          const data=  await axiosPublic.get(`/user/${user.email}`)
          return data.data
        }
    })
    
    if(loading || isLoading) return <LoadingSpin></LoadingSpin>
    
    return (
        <div className="lg:flex w-11/12 lg:gap-6 mx-auto ">
            
                <div className="lg:w-3/12 hidden  lg:flex pt-20 flex-col bg-slate-200 h-svh text-center font-semibold text-xl">
                {(user&& user1?.role==='Customer') &&(<div>
                    <div><NavLink to='/dashboard/userProfile'>My Profile</NavLink></div>
                <div><NavLink to='/dashboard/wishlist'>Wishlist</NavLink></div>
                <div><NavLink to='/dashboard/propertyBought'>Property Bought</NavLink></div>
                <div><NavLink to='/dashboard/myReveiws'>My reviews</NavLink></div>
                <Navigate to={'/dashboard/userProfile'}></Navigate>
                </div>)
                }
           { (user&& user1?.role==='Admin')&&(<div>
            <div><NavLink to='/dashboard/adminProfile'>My Profile</NavLink></div>
            <div><NavLink to='/dashboard/manageUser'>Manage User</NavLink></div>
            <div><NavLink to='/dashboard/manageReviews'>Manage Reviews</NavLink></div>
            <div><NavLink to='/dashboard/adminPropertis'>Manage Properties</NavLink></div>
            <Navigate to={'/dashboard/adminProfile'}></Navigate>
                </div>)
            }

           { (user&& user1?.role==='Agent' || user&& user1?.role==='Fraud')&&(<div>
            <div><NavLink to='/dashboard/agentProfile'>My Profile</NavLink></div>
            <div><NavLink to='/dashboard/mySoldProperties'>My Sold Properties</NavLink></div>
            <div><NavLink to='/dashboard/addProperty'>Add Property</NavLink></div>
            <div><NavLink to='/dashboard/myaddedProperty'>My Added Properties</NavLink></div>
            <div><NavLink to='/dashboard/requestProperty'>Requested Properties</NavLink></div>
            <Navigate to={'/dashboard/agentProfile'}></Navigate>
           </div>)
          }
            <div className="divider divider-warning"></div>
            <div><NavLink to={'/'}>Home</NavLink></div>
            <div><NavLink to={'/allProperties'}>All Property</NavLink></div>
           
            </div>
            <div className="lg:w-9/12 mt-3"
            >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;