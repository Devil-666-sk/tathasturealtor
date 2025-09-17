import React from "react";
import {
  FaSwimmer,
  FaChild,
  FaDumbbell,
  FaTree,
  FaShieldAlt,
  FaBuilding,
} from "react-icons/fa";

const amenities = [
  { name: "Club House", icon: <FaBuilding className="text-yellow-500 text-4xl mb-3" /> },
  { name: "Swimming Pool", icon: <FaSwimmer className="text-yellow-500 text-4xl mb-3" /> },
  { name: "Kids Play Area", icon: <FaChild className="text-yellow-500 text-4xl mb-3" /> },
  { name: "Gym & Sports Facilities", icon: <FaDumbbell className="text-yellow-500 text-4xl mb-3" /> },
  { name: "Green & Open Spaces", icon: <FaTree className="text-yellow-500 text-4xl mb-3" /> },
  { name: "24x7 Security", icon: <FaShieldAlt className="text-yellow-500 text-4xl mb-3" /> },
];

const Amenities = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        Our <span className="text-yellow-500">Amenities</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl shadow-lg border border-yellow-600 hover:scale-105 hover:border-yellow-400 transition-all duration-500"
          >
            {item.icon}
            <p className="text-lg font-semibold text-white">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
