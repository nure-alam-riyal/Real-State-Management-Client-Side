import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";


const MainLayOuts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto mt-24"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOuts;