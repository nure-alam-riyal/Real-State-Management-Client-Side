
import { DollarSign, TrendingUp, Home, Users } from "lucide-react";
import { motion } from "framer-motion";

const salesData = [
  {
    id: 1,
    title: "Total Sales",
    amount: "$1,250,000",
    icon: <DollarSign className="text-green-500" size={30} />,
  },
  {
    id: 2,
    title: "Properties Sold",
    amount: "150 Units",
    icon: <Home className="text-blue-500" size={30} />,
  },
  {
    id: 3,
    title: "Revenue Growth",
    amount: "+12% This Month",
    icon: <TrendingUp className="text-orange-500" size={30} />,
  },
  {
    id: 4,
    title: "New Clients",
    amount: "320 This Month",
    icon: <Users className="text-purple-500" size={30} />,
  },
];

export default function SalesEstimated() {
  return (
    <div className="p-6 bg-gray-100 py-20 rounded-xl shadow-md w-full  mx-auto">
      <h2 className="text-2xl  font-semibold text-gray-800 mb-12 text-center">
        Sales Estimated
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {salesData.map((data) => (
          <motion.div
            key={data.id}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm p-6 flex items-center gap-4 bg-white rounded-2xl shadow-lg">
              {data.icon}
              <div className="p-0">
                <p className="text-gray-600">{data.title}</p>
                <h3 className="text-xl font-bold text-gray-900">{data.amount}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}