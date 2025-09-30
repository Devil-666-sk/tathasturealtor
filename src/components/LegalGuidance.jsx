import React from "react";
import legalImage from "../assets/BgImg.jpg";

const LegalGuidance = () => {
  return (
    <section id="legal-guidance" className="py-16 px-4 bg-gray-900 text-yellow-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Legal Guidance</h2>
          <p className="text-lg mb-4">
            Our experts provide comprehensive legal support for smooth property transactions.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Document Verification & Preparation</li>
            <li>Property Ownership & Title Checks</li>
            <li>Compliance with Local Laws</li>
            <li>Risk-Free Transactions</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img src={legalImage} alt="Legal Guidance" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </section>
  );
};

export default LegalGuidance;
