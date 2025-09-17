import React from "react";
import { FaHome, FaBuilding, FaCrown } from "react-icons/fa";

const options = [
  { type: "2 BHK Apartments", price: "₹45 Lakh Onwards", icon: <FaBuilding /> },
  { type: "3 BHK Apartments", price: "₹65 Lakh Onwards", icon: <FaHome /> },
  { type: "Luxury Villas", price: "₹1.2 Cr Onwards", icon: <FaCrown /> },
];

const PropertyOptions = () => {
  return (
    <section className="relative py-20">
      {/* Background with gradient & image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Property <span className="text-yellow-500">Options</span>
        </h2>
        <p className="text-gray-200 mb-12 max-w-2xl mx-auto">
          Choose from our wide range of premium apartments and villas, designed
          to suit your lifestyle and budget.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-black/20 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-yellow-500"
            >
              <div className="text-5xl text-yellow-500 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-yellow-400">{item.type}</h3>
              <p className="mt-3 text-lg text-yellow-300">{item.price}</p>
              <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-xl hover:bg-yellow-400 transition font-medium shadow">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyOptions;
