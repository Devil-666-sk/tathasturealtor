import React from "react";

const LocationMap = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-black text-center">
      <h2 className="text-4xl font-bold mb-6 text-white">
        Our <span className="text-yellow-500">Location</span>
      </h2>
      <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
        Visit us at our office in Zirakpur for professional consultation and trusted real estate services.
      </p>
      <div className="max-w-6xl mx-auto border-2 border-yellow-600 rounded-2xl shadow-xl overflow-hidden">
        <iframe
          title="Tathastu Realtor Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7096231188713!2d76.8191!3d30.6424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f941aebc3df9f%3A0x1234567890abcdef!2sSCO%2037%2C%201st%20Floor%2C%20Silver%20City%20Main%2C%20CHD-AMB%20Highway%2C%20Zirakpur!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;
