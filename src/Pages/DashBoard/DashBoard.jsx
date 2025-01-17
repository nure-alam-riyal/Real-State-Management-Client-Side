import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="lg:flex w-11/12 lg:gap-6 mx-auto ">
            <div className="lg:w-3/12 hidden lg:flex flex-col text-center font-semibold text-xl">
            <div><NavLink to='/dashboard/userProfile'>My Profile</NavLink></div>
            <div><NavLink to='/dashboard/wishlist'>Wishlist</NavLink></div>
            <div><NavLink to='/dashboard/propertyBought'>Property Bought</NavLink></div>
            <div><NavLink to='/dashboard/myReveiws'>My reviews</NavLink></div>

            <div><NavLink to='/dashboard/adminProfile'>My Profile</NavLink></div>
            <div><NavLink to='/dashboard/manageUser'>Manage User</NavLink></div>
            <div><NavLink to='/dashboard/manageReviews'>Manage Reviews</NavLink></div>
            <div><NavLink to='/dashboard/adminPropertis'>Manage Properties</NavLink></div>

            
            <div><NavLink to='/dashboard/agentProfile'>My Profile</NavLink></div>
            <div><NavLink to='/dashboard/mySoldProperties'></NavLink>My Sold Properties</div>
            <div><NavLink to='/dashboard/addProperty'>Add Property</NavLink></div>
            <div><NavLink to='/dashboard/myaddedProperty'>My Added Properties</NavLink></div>
            <div><NavLink to='/dashboard/requestProperty'>Requested Properties</NavLink></div>
            <div className="divider divider-warning"></div>
            <div><NavLink to={'/'}>Home</NavLink></div>
            <div><NavLink to={'/dashboard'}>DashBoard</NavLink></div>
            </div>
            <div className="lg:w-9/12 mt-10"
            >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;