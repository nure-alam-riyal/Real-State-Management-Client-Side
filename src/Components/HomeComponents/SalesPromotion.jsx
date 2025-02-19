import { Link } from "react-router-dom";


const SalesPromotion = () => {
    return (
        <section className="bg-yellow-100 py-12 px-6 md:px-12 lg:px-24 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Limited Time Sales Promotion</h2>
          <p className="text-gray-600 mt-2">
            Grab exclusive deals on premium properties before they're gone! Contact us today to learn more.
          </p>
         <Link to='/allProperties'> <button className="mt-6 bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
            View Offers
          </button></Link>
        </div>
      </section>
    );
};

export default SalesPromotion;