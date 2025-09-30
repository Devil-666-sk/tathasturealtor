// src/components/AboutUs.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com"; // npm install emailjs-com

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Modal states
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  // Demo properties
  const properties = [
    {
      id: 1,
      title: "Luxury Flat in Zirakpur",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      budgets: ["40 Lakh", "60 Lakh", "80 Lakh", "1 Cr"],
    },
    {
      id: 2,
      title: "Premium Villa in Mohali",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      budgets: ["80 Lakh", "1 Cr", "1.5 Cr"],
    },
    {
      id: 3,
      title: "Residential Plot in Chandigarh",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      budgets: ["60 Lakh", "80 Lakh", "1 Cr+"],
    },
  ];

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // EmailJS service ID
        "your_template_id", // EmailJS template ID
        {
          property: selectedProperty.title,
          budget: selectedBudget,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        "your_user_id" // EmailJS public key
      )
      .then(
        () => {
          alert("Thank you! Our team will contact you shortly.");
          setShowForm(false);
          setSelectedProperty(null);
          setSelectedBudget("");
          setFormData({ name: "", email: "", phone: "" });
        },
        () => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black py-24 px-6">
      {/* About Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center mb-20">
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-yellow-500">Tathastu Realtor</span>
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            <span className="text-yellow-500 font-semibold">Tathastu Realtor</span>{" "}
            has earned the trust of thousands of families and investors across the{" "}
            <span className="text-yellow-500 font-semibold">Tricity region</span>. 
            With a strong reputation for honesty, transparency, and customer-first 
            service, we stand as one of the most reliable real estate companies in the area.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            From <span className="text-yellow-500">luxury flats</span> and{" "}
            <span className="text-yellow-500">villa houses</span> to{" "}
            <span className="text-yellow-500">prime plots</span> and{" "}
            <span className="text-yellow-500">commercial spaces</span>, 
            we offer a wide range of real estate solutions designed to match 
            your lifestyle, investment goals, and dreams.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Over the years, we have successfully delivered and collaborated on 
            numerous projects across the Tricity, building a strong community of 
            happy clients and investors. Our dedicated team of experts guides you 
            through every step — from property selection to legal assurance — 
            ensuring your investment is always secure and rewarding.
          </p>
          <p className="text-gray-300 mt-6 font-semibold text-lg">
            <span className="text-yellow-500">Tathastu Realtor</span> – 
            where your dreams of luxury living and profitable investments come true.
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-lg border border-yellow-600 hover:border-yellow-400 transition-all duration-500"
          data-aos="fade-left"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="About Tathastu Realtor"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Flats & Villas Section */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        Explore Our <span className="text-yellow-500">Flats & Villas</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-6 shadow-lg border border-yellow-600 hover:border-yellow-400 transition-all cursor-pointer"
            onClick={() => setSelectedProperty(property)}
          >
            <img
              src={property.img}
              alt={property.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-white">{property.title}</h3>
            <p className="text-gray-400 mt-2">Click to view budgets & details</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-6 w-full max-w-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-300 hover:text-yellow-500"
              onClick={() => {
                setSelectedProperty(null);
                setSelectedBudget("");
                setShowForm(false);
              }}
            >
              <FaTimes size={20} />
            </button>

            {!showForm ? (
              <>
                <img
                  src={selectedProperty.img}
                  alt={selectedProperty.title}
                  className="w-full h-60 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                  {selectedProperty.title}
                </h3>
                <p className="text-gray-300 mb-4">Select your budget range:</p>
                <div className="flex flex-wrap gap-3">
                  {selectedProperty.budgets.map((budget, i) => (
                    <button
                      key={i}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedBudget === budget
                          ? "bg-yellow-500 text-black border-yellow-400"
                          : "bg-transparent text-white border-yellow-600 hover:bg-yellow-500 hover:text-black"
                      } transition`}
                      onClick={() => {
                        setSelectedBudget(budget);
                        setShowForm(true);
                      }}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                  Enquire Now
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Property: <span className="text-white">{selectedProperty.title}</span> <br />
                  Budget: <span className="text-white">{selectedBudget}</span>
                </p>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-500"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-500"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
