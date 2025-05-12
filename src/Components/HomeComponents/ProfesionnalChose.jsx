import SectionTitle from "../Shared/SectionTitle";

const ProfesionnalChose = () => {
    return (
        <div className="text-center px-6 ">
        {/* Header Section */}
          <SectionTitle head={' 56,000+ Real Estate Professionals Choosed Houzez'}></SectionTitle>
        <p className="text-green-600 text-sm sm:text-base font-semibold mb-8">
        #1 Best Selling Real Estate WordPress Theme
        </p>
  
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-green-600 text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-600 text-sm">
              Expect responsive and expert support that you can count on every step of the way.
            </p>
          </div>
  
          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-green-600 text-4xl mb-4">📂</div>
            <h3 className="text-lg font-semibold mb-2">Extensive Resources</h3>
            <p className="text-gray-600 text-sm">
              Gain instant access to an extensive library of documentation and video tutorials.
            </p>
          </div>
  
          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-green-600 text-4xl mb-4">💻</div>
            <h3 className="text-lg font-semibold mb-2">Continuous Innovation</h3>
            <p className="text-gray-600 text-sm">
              Enjoy updates with new features designed to keep you ahead in the real estate market.
            </p>
          </div>
  
          {/* Feature 4 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-green-600 text-4xl mb-4">🛍️</div>
            <h3 className="text-lg font-semibold mb-2">Lifetime Value</h3>
            <p className="text-gray-600 text-sm">
              Free lifetime updates, ensuring your website remains modern, secure, and competitive.
            </p>
          </div>
        </div>
      </div>
    );
};

export default ProfesionnalChose;