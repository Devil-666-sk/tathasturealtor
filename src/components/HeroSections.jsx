import React from "react";
import Background from "../assets/BgImg.jpg";

const HeroSections = () => {
  return (
    <section
      className="relative h-screen w-full bg-center bg-no-repeat bg-cover flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find Your <span className="text-yellow-500">Dream Home</span> Today
        </h1>
        <p className="text-base md:text-lg mb-6 text-yellow-200">
          Discover luxury apartments, modern homes, and prime real estate tailored just for you.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-black font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSections;
