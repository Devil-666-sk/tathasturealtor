import React from "react";
import collaborationImage from "../assets/BgImg.jpg";

const Collaboration = () => {
  return (
    <section id="collaboration" className="py-16 px-4 bg-gray-800 text-yellow-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Collaboration</h2>
          <p className="text-lg mb-4">
            We partner with trusted agencies and experts to deliver seamless real estate solutions.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Trusted Partners for Quick Solutions</li>
            <li>Networking for Better Deals</li>
            <li>Shared Expertise & Resources</li>
            <li>Enhanced Client Satisfaction</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img src={collaborationImage} alt="Collaboration" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
