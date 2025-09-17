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
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find Your Dream Home Today
        </h1>
        <p className="text-base md:text-lg mb-6">
          Discover luxury apartments, modern homes, and prime real estate
          tailored just for you.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSections;
