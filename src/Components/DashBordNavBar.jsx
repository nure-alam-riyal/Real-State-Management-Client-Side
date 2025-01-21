import { Tooltip } from "react-tooltip";
import useAuth from "../Hooks/useAuth";

import {  HiMiniBars3BottomRight } from "react-icons/hi2";
import {  Navigate, NavLink } from "react-router-dom";
import logo from './../assets/image/logo.avif'
import usePublicAxios from "../Hooks/usePublicAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "./Shared/LoadingSpin";


const DashBordNavBar = () => {
    const { user,loading,} = useAuth()
    const axiosPublic=usePublicAxios()
 
    const {data:user1={},isLoading}=useQuery({
        queryKey:[user.email],
        queryFn:async () => {
          const data=  await axiosPublic.get(`/user/${user.email}`)
          return data.data
        }
    })
    
    if(loading || isLoading) return <LoadingSpin></LoadingSpin>
    return (
        <div className="flex justify-center">
            <div className="navbar bg-base-100 w-11/12 z-20 fixed top-0">
                <div className="navbar-start  ">
                    {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div> */}

                    <div className="flex items-center">
                        <img className="w-20 h-20 hidden md:flex rounded-full" src={logo} alt="" />
                        <div className="px-3 py-2  text-xl">Dream Nest Real Estate</div>
                    </div>
                </div>
                <div className="navbar-center font-semibold hidden lg:flex">
                    {/* <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul> */}

                </div>
                <div className="justify-end navbar-end flex gap-3">
                    <div>
                    {
                        user ?
                            <div className="flex items-center gap-2">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img id="riyal" className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="userName" />
                                        </div>
                                    </div>
                                    <Tooltip position='left' anchorSelect="#riyal">
                                        <h3 className="text-center">{user?.displayName}</h3>
                                        <p className="text-center">{user?.email}</p>
                                    </Tooltip>
                                 
                                </div>

                                {/* <Link onClick={LogOut} className="btn font-bold text-lg bg-blue-300" to='login'>Log Out</Link> */}
                                </div>
                            :
                            <div>
                                {/* <Link className="btn text-lg font-bold bg-blue-300" to='login'>Log In</Link> */}
                                </div>
                    }
                    </div>
                    <div className="lg:hidden">
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className="drawer-button btn text-xl ml-2"><HiMiniBars3BottomRight /></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                    {/* Sidebar content here */}
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
            <div><NavLink to='/dashboard/advertices'>Advertise Property</NavLink></div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBordNavBar;