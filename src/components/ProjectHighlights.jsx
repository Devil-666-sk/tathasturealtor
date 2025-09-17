import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaMapMarkerAlt, FaLock, FaPlane } from "react-icons/fa";

const highlights = [
  { text: "RERA Approved Project", icon: <FaShieldAlt /> },
  { text: "Prime Location - Tri City", icon: <FaMapMarkerAlt /> },
  { text: "Gated Community with 24x7 Security", icon: <FaLock /> },
  { text: "Near Airport, Metro & IT Hub", icon: <FaPlane /> },
];

const ProjectHighlights = () => {
  return (
    <section className="relative py-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Project <span className="text-yellow-500">Highlights</span>
        </motion.h2>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-black/20 backdrop-blur-lg rounded-2xl shadow-lg border border-yellow-500 flex items-center gap-4 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl text-yellow-500">{item.icon}</div>
              <p className="text-lg font-medium text-yellow-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
