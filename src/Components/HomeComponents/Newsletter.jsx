

const Newsletter = () => {
    return (
        <div className="mb-2 mt-2">
    <section className="bg-gray-100 rounded-lg py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Stay Updated with Our Listings</h2>
        <p className="text-gray-600 mt-2">
          Subscribe to our newsletter and be the first to know about new properties and real estate news.
        </p>
        <form className="mt-6 flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  

        </div>
    );
};

export default Newsletter;