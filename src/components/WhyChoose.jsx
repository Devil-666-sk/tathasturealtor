// src/components/WhyChooseUs.jsx
import React from "react";
import { FaHome, FaHandshake, FaShieldAlt, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const points = [
    {
      icon: <FaHome className="text-yellow-500 text-5xl mb-4" />,
      title: "Luxury Properties",
      desc: "We provide premium and high-class properties with unmatched comfort and design.",
    },
    {
      icon: <FaHandshake className="text-yellow-500 text-5xl mb-4" />,
      title: "Trusted Deals",
      desc: "Transparency and honesty in every deal ensures 100% client satisfaction.",
    },
    {
      icon: <FaShieldAlt className="text-yellow-500 text-5xl mb-4" />,
      title: "Secure Investment",
      desc: "Your investment is always safe with us, backed by legal expertise and trust.",
    },
    {
      icon: <FaUsers className="text-yellow-500 text-5xl mb-4" />,
      title: "Expert Team",
      desc: "Our experienced professionals guide you at every step of your property journey.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black py-20 px-6">
      <h2
        className="text-center text-4xl md:text-5xl font-bold text-white mb-14"
        data-aos="fade-up"
      >
        Why <span className="text-yellow-500">Choose Us</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {points.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-8 text-center shadow-lg border border-yellow-600 hover:scale-105 hover:border-yellow-400 transition-all duration-500"
            data-aos="zoom-in"
          >
            {item.icon}
            <h3 className="text-2xl font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
