import Lottie from "lottie-react";
import SectionTitle from "../../Components/Shared/SectionTitle";
import error from '../../assets/lottie/error.json'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const Errorpage = () => {
    return (
        <div>
             <Helmet>
        <title>Error | Dream Nest Real Estate</title>
         </Helmet>
            <SectionTitle head={"404"} subhead={'NoT Found Page '}></SectionTitle>
            <div className="flex justify-center">
                <div className="w-10/12 h-[300px]">
                    <Lottie className="w-full h-full" animationData={error}></Lottie>
                </div>
            </div>
            <div className="text-center text-white">
                <Link className="btn  text-white bg-green-900" to={'/'}>Back Home Page</Link>
            </div>
        </div>
    );
};

export default Errorpage;