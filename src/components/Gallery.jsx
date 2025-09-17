import React from "react";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Luxury villa
  "https://images.unsplash.com/photo-1582407947304-0e7f0b6a2a32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Family with keys
  "https://images.unsplash.com/photo-1600585154209-90f1b8a5dc67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Plot view
  "https://images.unsplash.com/photo-1599420186946-7b81f9d3a52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Griha pravesh pooja
  "https://images.unsplash.com/photo-1582407947371-9fffa54f9b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Keys handover
  "https://images.unsplash.com/photo-1628595351029-1d1a5d2a7be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Luxury apartment
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Our <span className="text-yellow-500">Gallery</span>
      </h2>
      <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
        Moments of joy, trust, and celebration with our clients. From handing
        over keys to luxury views – every story is special at{" "}
        <span className="text-yellow-500 font-semibold">Tathastu Realtor</span>.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg border-2 border-transparent hover:border-yellow-500 transition-all duration-500"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-72 object-cover transform hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
