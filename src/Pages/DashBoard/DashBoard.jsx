import { Navigate, NavLink, Outlet } from "react-router-dom";
import LoadingSpin from "../../Components/Shared/LoadingSpin";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import usePublicAxios from "../../Hooks/usePublicAxios";
import DashBordNavBar from "../../Components/DashBordNavBar";
import Footer from "../../Components/Shared/Footer";
import { GrUserAdmin, GrUserManager } from "react-icons/gr";
import { GiBuyCard, GiTempleGate } from "react-icons/gi";
import { MdOutlineReviews, MdRateReview, MdSell } from "react-icons/md";
import { FcAdvertising } from "react-icons/fc";
import { FaPallet, FaRegUser, FaUserAstronaut } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { VscDiffAdded } from "react-icons/vsc";
import { CiSquareQuestion } from "react-icons/ci";
import { AiTwotoneFolderAdd } from "react-icons/ai";
import { SiWish } from "react-icons/si";
import { IoIosStats } from "react-icons/io";



const DashBoard = () => {
    const axiosPublic=usePublicAxios()
    const {user,loading}=useAuth()
    const {data:user1={},isLoading}=useQuery({
        queryKey:[user?.email],
        queryFn:async () => {
          const data=  await axiosPublic.get(`/user/${user?.email}`)
          return data.data
        }
    })
    
    if(loading || isLoading) return <LoadingSpin></LoadingSpin>
    
    return (
        <div>
        {
            user?
            <div className="lg:flex w-11/12 lg:gap-6 mx-auto ">
           <div className="lg:hidden"> <DashBordNavBar></DashBordNavBar></div>
                <div className="lg:w-3/12 hidden  lg:flex pt-20 flex-col bg-slate-200 h-svh text-center font-semibold text-xl">
                {(user&& user1?.role==='Customer') &&(<div>
                <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/userProfile'><FaRegUser  className="text-red-950"  /> My Profile</NavLink></div>
                <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/wishlist'><SiWish  className="text-red-950" /> Wishlist</NavLink></div>
                <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/propertyBought'><GiBuyCard  className="text-red-950" /> Property Bought</NavLink></div>
                <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/myReveiws'><MdOutlineReviews  className="text-red-950"  /> My reviews</NavLink></div>
                <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/clientOverAll'><IoIosStats   className="text-red-950"  /> OverAll</NavLink></div>
                <Navigate to={'/dashboard/clientOverAll'}></Navigate>
                </div>)
                }
           { (user&& user1?.role==='Admin')&&(<div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/adminProfile'><GrUserAdmin className="text-red-950" /> My Profile</NavLink></div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/manageUser'><GrUserManager className="text-red-950" /> Manage User</NavLink></div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/manageReviews'><MdRateReview className="text-red-950" /> Manage Reviews</NavLink></div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/adminPropertis'><GiTempleGate className="text-red-950" /> Manage Properties</NavLink></div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/advertices'><FcAdvertising className="text-red-950" /> Advertise Property</NavLink></div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/AdminOverAll'><IoIosStats   className="text-red-950"  /> OverAll</NavLink></div>

            <Navigate to={'/dashboard/AdminOverAll'}></Navigate>
                </div>)
            }

           { (user&& user1?.role==='Agent' || user&& user1?.role==='Fraud')&&(<div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/agentProfile'><FaUserAstronaut className="text-red-950"   /> My Profile</NavLink></div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/addProperty'><VscDiffAdded  className="text-red-950" /> Add Property</NavLink></div>

            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/mySoldProperties'><MdSell  className="text-red-950" /> My Sold Properties</NavLink></div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/myaddedProperty'><AiTwotoneFolderAdd  className="text-red-950"  /> My Added Properties</NavLink></div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/requestProperty'><CiSquareQuestion  className="text-red-950"  /> Requested Properties</NavLink></div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to='/dashboard/AgentOverAll'><IoIosStats   className="text-red-950"  /> OverAll</NavLink></div>

            <Navigate to={'/dashboard/AgentOverAll'}></Navigate>
           </div>)
          }
            <div className="divider divider-warning"></div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to={'/'}><FaHome /> Home</NavLink></div>
            <div><NavLink className={'flex items-center justify-center gap-5'} to={'/allProperties'}><FaPallet /> All Property</NavLink></div>
           
            </div>
            <div className="lg:w-9/12 lg:mt-3 mt-28"
            >
                <Outlet></Outlet>
                
            </div>
        </div>:<Navigate to={'/login'}></Navigate>
        }
        <Footer></Footer>

        </div>
    );
};

export default DashBoard;