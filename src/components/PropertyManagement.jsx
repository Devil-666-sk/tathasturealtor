import React from "react";
import propertyImage from "../assets/BgImg.jpg"; // replace with your image

const PropertyManagement = () => {
  return (
    <section id="property-management" className="py-16 px-4 bg-gray-900 text-yellow-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Property Management</h2>
          <p className="text-lg mb-4">
            We manage your property with full professionalism, ensuring peace of mind and maximum returns.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>24/7 Maintenance & Monitoring</li>
            <li>Tenant Screening & Management</li>
            <li>Rent Collection & Financial Reporting</li>
            <li>Property Inspection & Upkeep</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img src={propertyImage} alt="Property Management" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </section>
  );
};

export default PropertyManagement;
