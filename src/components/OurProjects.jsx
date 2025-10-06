import React, { useState } from "react";
import { FaBuilding, FaTree, FaHome, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// === SAMPLE IMAGES (replace with real images) ===
const sampleImages = {
  Trident: "https://via.placeholder.com/300x200?text=Trident",
  "Myst Aerotown": "https://via.placeholder.com/300x200?text=Myst+Aerotown",
  Joynest: "https://via.placeholder.com/300x200?text=Joynest",
  Ananta: "https://via.placeholder.com/300x200?text=Ananta",
  "Lotus Affinity": "https://via.placeholder.com/300x200?text=Lotus+Affinity",
  Belgravia: "https://via.placeholder.com/300x200?text=Belgravia",
  "Escon Villas": "https://via.placeholder.com/300x200?text=Escon+Villas",
  "North View": "https://via.placeholder.com/300x200?text=North+View",
  "Aiver Ale": "https://via.placeholder.com/300x200?text=Aiver+Ale",
  Aerovoja: "https://via.placeholder.com/300x200?text=Aerovoja",
  "Falcon View": "https://via.placeholder.com/300x200?text=Falcon+View",
  "Marbela Grand": "https://via.placeholder.com/300x200?text=Marbela+Grand",
  "Noble Cillsta": "https://via.placeholder.com/300x200?text=Noble+Cillsta",
};

// === DATA ===
const projectCategories = [
  {
    title: "Premium Plots",
    icon: <FaTree className="text-yellow-500 text-5xl mb-4" />,
    projects: [
      { name: "Trident", price: "₹50 Lakh", location: "Panchkula" },
      { name: "Myst Aerotown", price: "₹60 Lakh", location: "New Mohali Airport" },
      { name: "Joynest", price: "₹45 Lakh", location: "Barnala" },
    ],
  },
  {
    title: "Luxury Apartments",
    icon: <FaBuilding className="text-yellow-500 text-5xl mb-4" />,
    projects: [
      { name: "Ananta", price: "₹90 Lakh", location: "Zirakpur" },
      { name: "Lotus Affinity", price: "₹70 Lakh", location: "Zirakpur" },
      { name: "Belgravia", price: "₹95 Lakh", location: "Mohali" },
    ],
  },
  {
    title: "Exclusive Villas",
    icon: <FaHome className="text-yellow-500 text-5xl mb-4" />,
    projects: [
      { name: "Escon Villas", price: "₹2.5 Cr", location: "Zirakpur" },
      { name: "North View", price: "₹3 Cr", location: "Mohali" },
      { name: "Aiver Ale", price: "₹2.8 Cr", location: "Dera Bassi" },
    ],
  },
  {
    title: "Residential Projects",
    icon: <FaMapMarkerAlt className="text-yellow-500 text-5xl mb-4" />,
    projects: [
      { name: "Aerovista", price: "₹1.2 Cr", location: "Mohali" },
      { name: "Falcon View", price: "₹1.5 Cr", location: "Mohali" },
      { name: "Marbela Grand", price: "₹1.8 Cr", location: "Zirakpur" },
    ],
  },
];

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  React.useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // ===== SEND MAIL =====
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:shubhamtechsolutions6@gmail.com?subject=Inquiry about ${selectedProject.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black py-20 px-6">
      <h2
        className="text-center text-4xl md:text-5xl font-bold text-white mb-14"
        data-aos="fade-up"
      >
        Our <span className="text-yellow-500">Projects</span>
      </h2>

      {/* ===== PROJECT CARDS ===== */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {projectCategories.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-8 text-center shadow-lg border border-yellow-600 hover:scale-105 hover:border-yellow-400 transition-all duration-500"
            data-aos="zoom-in"
          >
            {item.icon}
            <h3 className="text-2xl font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300 mb-6">
              Explore the finest {item.title.toLowerCase()} available across top
              locations.
            </p>
            <button
              onClick={() => setSelectedCategory(item)}
              className="px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* ===== PROJECT DETAILS MODAL ===== */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6 overflow-y-auto">
          <div className="bg-gray-900 rounded-2xl p-6 max-w-5xl w-full relative shadow-lg">
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-4 right-4 text-yellow-400 text-3xl font-bold"
            >
              ×
            </button>
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
              {selectedCategory.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.projects.map((proj, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={sampleImages[proj.name]}
                    alt={proj.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {proj.name}
                    </h4>
                    <p className="text-gray-400 mb-2">{proj.location}</p>
                    <p className="text-yellow-400 font-semibold mb-4">
                      {proj.price}
                    </p>
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== CONTACT FORM MODAL ===== */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-yellow-400 text-3xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
              Contact for {selectedProject.name}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
              <textarea
                placeholder="Message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-yellow-400"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProjects;
