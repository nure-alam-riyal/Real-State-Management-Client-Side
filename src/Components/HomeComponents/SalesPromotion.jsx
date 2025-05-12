import { Link } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle";


const SalesPromotion = () => {
    return (
        <section className=" px-6 md:px-12 lg:px-24 pb-6 ">
        <div className="max-w-3xl mx-auto text-center">
        <SectionTitle head={'Limited Time Sales Promotion'} subhead={'  Grab exclusive deals on premium properties before they`re gone! Contact us today to learn more.'}></SectionTitle>
         <Link to='/allProperties'> <button className="mt-6 bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
            View Offers
          </button></Link>
        </div>
      </section>
    );
};

export default SalesPromotion;