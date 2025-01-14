import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-3/12">
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

            </div>
            <div className="w-9/12"
            >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;