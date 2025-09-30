import React from "react";
import listingImage from "../assets/BgImg.jpg";

const ListingMarketing = () => {
  return (
    <section id="listing-marketing" className="py-16 px-4 bg-gray-800 text-yellow-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Listing & Marketing</h2>
          <p className="text-lg mb-4">
            We create powerful listings and marketing strategies to sell or rent your property efficiently.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Professional Photography & Videography</li>
            <li>High-Impact Online Listings</li>
            <li>Social Media & Targeted Ads</li>
            <li>Faster Sales & Rentals</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img src={listingImage} alt="Listing & Marketing" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </section>
  );
};

export default ListingMarketing;
