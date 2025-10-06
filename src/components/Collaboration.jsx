import React, { useEffect } from "react";
import { FaHandshake, FaUsers, FaRegLightbulb, FaChartLine } from "react-icons/fa";
import collaborationImage from "../assets/BgImg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Collaboration = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const features = [
    {
      icon: <FaHandshake className="text-yellow-400 text-4xl mb-3" />,
      title: "Trusted Partnerships",
      desc: "Work with reliable real estate experts and agencies to ensure transparency and quick solutions.",
    },
    {
      icon: <FaUsers className="text-yellow-400 text-4xl mb-3" />,
      title: "Networking for Growth",
      desc: "Expand your professional circle and unlock access to exclusive property deals and investors.",
    },
    {
      icon: <FaRegLightbulb className="text-yellow-400 text-4xl mb-3" />,
      title: "Shared Expertise",
      desc: "Collaborate with industry professionals to share resources, market insights, and technology.",
    },
    {
      icon: <FaChartLine className="text-yellow-400 text-4xl mb-3" />,
      title: "Client Success",
      desc: "Deliver improved customer satisfaction through efficient teamwork and combined expertise.",
    },
  ];

  return (
    <section
      id="collaboration"
      className="bg-gradient-to-r from-black via-gray-900 to-black py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADING ===== */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Collaboration <span className="text-yellow-400">Network</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We collaborate with trusted partners and industry experts to deliver
            innovative and efficient real estate solutions — ensuring success
            through unity.
          </p>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div
            className="lg:w-1/2"
            data-aos="fade-right"
          >
            <div className="relative group">
              <img
                src={collaborationImage}
                alt="Collaboration"
                className="rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-8" data-aos="fade-left">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border border-yellow-600 shadow-lg p-6 text-center hover:scale-105 hover:border-yellow-400 transition-all duration-500"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
