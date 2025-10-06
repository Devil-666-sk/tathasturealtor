import React, { useEffect } from "react";
import { FaCamera, FaBullhorn, FaAd, FaRocket } from "react-icons/fa";
import listingImage from "../assets/BgImg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ListingMarketing = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const services = [
    {
      icon: <FaCamera className="text-yellow-400 text-4xl mb-3" />,
      title: "Professional Photography",
      desc: "Showcase your property with stunning visuals that attract serious buyers and renters.",
    },
    {
      icon: <FaAd className="text-yellow-400 text-4xl mb-3" />,
      title: "High-Impact Listings",
      desc: "Optimized online listings across top platforms for maximum visibility and engagement.",
    },
    {
      icon: <FaBullhorn className="text-yellow-400 text-4xl mb-3" />,
      title: "Targeted Marketing",
      desc: "Reach the right audience through social media campaigns and digital advertising.",
    },
    {
      icon: <FaRocket className="text-yellow-400 text-4xl mb-3" />,
      title: "Faster Sales & Rentals",
      desc: "Our advanced marketing approach ensures your property gets sold or rented quickly.",
    },
  ];

  return (
    <section
      id="listing-marketing"
      className="bg-gradient-to-r from-black via-gray-900 to-black py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADING ===== */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Listing <span className="text-yellow-400">& Marketing</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We create impactful listings and marketing strategies that help
            your property stand out and sell faster in competitive markets.
          </p>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image Section */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative group">
              <img
                src={listingImage}
                alt="Listing & Marketing"
                className="rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>
          </div>

          {/* Right Services Grid */}
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

export default ListingMarketing;
