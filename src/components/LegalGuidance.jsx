import React, { useEffect } from "react";
import { FaFileSignature, FaBalanceScale, FaShieldAlt, FaBookReader } from "react-icons/fa";
import legalImage from "../assets/BgImg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const LegalGuidance = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const services = [
    {
      icon: <FaFileSignature className="text-yellow-400 text-4xl mb-3" />,
      title: "Document Verification",
      desc: "Our experts carefully verify all property documents ensuring authenticity and accuracy.",
    },
    {
      icon: <FaBalanceScale className="text-yellow-400 text-4xl mb-3" />,
      title: "Title & Ownership Check",
      desc: "We conduct detailed title checks to ensure property ownership is clear and legally sound.",
    },
    {
      icon: <FaShieldAlt className="text-yellow-400 text-4xl mb-3" />,
      title: "Legal Compliance",
      desc: "All transactions are reviewed for compliance with local and national real estate laws.",
    },
    {
      icon: <FaBookReader className="text-yellow-400 text-4xl mb-3" />,
      title: "Risk-Free Transactions",
      desc: "Get peace of mind with legally verified deals, ensuring safe and transparent transactions.",
    },
  ];

  return (
    <section
      id="legal-guidance"
      className="bg-gradient-to-r from-black via-gray-900 to-black py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADING ===== */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Legal <span className="text-yellow-400">Guidance</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our legal experts ensure every property transaction is verified,
            compliant, and completely secure — giving you confidence at every step.
          </p>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative group">
              <img
                src={legalImage}
                alt="Legal Guidance"
                className="rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>
          </div>

          {/* Right Services */}
          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-8" data-aos="fade-left">
            {services.map((item, index) => (
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

export default LegalGuidance;
