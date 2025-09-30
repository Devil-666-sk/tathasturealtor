import React from "react";
import { FaHandshake, FaGavel, FaBullhorn, FaBuilding } from "react-icons/fa";

const servicesData = [
  {
    title: "Collaboration",
    description:
      "We partner with builders, developers, and investors to create successful real estate projects with mutual growth and trust.",
    icon: <FaHandshake size={40} className="text-yellow-400" />,
  },
  {
    title: "Legal Guidance",
    description:
      "Get expert assistance on property legalities, documentation, and regulatory compliance for hassle-free transactions.",
    icon: <FaGavel size={40} className="text-yellow-400" />,
  },
  {
    title: "Listing & Marketing",
    description:
      "Boost your property visibility with our professional listing and marketing strategies to attract genuine buyers and tenants.",
    icon: <FaBullhorn size={40} className="text-yellow-400" />,
  },
  {
    title: "Property Management",
    description:
      "We take care of your property end-to-end — from tenant management to maintenance — ensuring peace of mind and steady returns.",
    icon: <FaBuilding size={40} className="text-yellow-400" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-900 text-yellow-400" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide complete real estate solutions — from collaboration to
            management — ensuring trust, transparency, and growth.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-black/80 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 border border-yellow-400/30 hover:border-yellow-400"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
