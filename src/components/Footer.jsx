import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/TathastuLogo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="relative text-white py-12 px-6 overflow-hidden flex flex-col justify-between bg-gradient-to-r from-black via-gray-900 to-black">
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left mb-8">
        {/* Company Info */}
        <div data-aos="fade-right" className="flex flex-col items-center md:items-start">
          {/* Logo and Name in one line */}
          <div className="flex items-center space-x-3 mb-4">
            <img src={Logo} alt="Tathastu Realtor Logo" className="h-10 rounded-full shadow-lg" />
            <h2 className="text-2xl font-extrabold text-yellow-500">Tathastu Realtor</h2>
          </div>
          <p className="text-sm text-gray-300 mt-1 leading-relaxed">
            Building trust with luxury properties and professional real estate services.
          </p>
        </div>

        {/* Important Links */}
        <div data-aos="fade-up" className="space-y-3">
          <h3 className="text-lg font-semibold text-yellow-500">Important Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Home", "About Us", "Services", "Contact", ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-yellow-400 transition duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div data-aos="fade-left" className="space-y-4">
          <h3 className="text-lg font-semibold text-yellow-500">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="#"
              className="group relative text-gray-300 transition duration-300 transform hover:scale-125"
            >
              <FaFacebookF size={22} className="group-hover:text-blue-500" />
              <span className="absolute -bottom-2 left-1/2 w-0 group-hover:w-full h-[2px] bg-yellow-500 transition-all duration-300 rounded-full -translate-x-1/2"></span>
            </a>

            <a
              href="#"
              className="group relative text-gray-300 transition duration-300 transform hover:rotate-12 hover:scale-125"
            >
              <FaInstagram size={22} className="group-hover:text-pink-500" />
              <span className="absolute -bottom-2 left-1/2 w-0 group-hover:w-full h-[2px] bg-yellow-500 transition-all duration-300 rounded-full -translate-x-1/2"></span>
            </a>

            <a
              href="#"
              className="group relative text-gray-300 transition duration-300 transform hover:-rotate-12 hover:scale-125"
            >
              <FaYoutube size={22} className="group-hover:text-red-600" />
              <span className="absolute -bottom-2 left-1/2 w-0 group-hover:w-full h-[2px] bg-yellow-500 transition-all duration-300 rounded-full -translate-x-1/2"></span>
            </a>
          </div>

          {/* Emails and Phones */}
          <div className="mt-4 space-y-2 text-gray-300 text-sm flex flex-col items-center md:items-start">
            <a
              href="mailto:info@tathasturealtor.com"
              className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer"
            >
              <FaEnvelope className="text-yellow-500" />
              <span>info@tathasturealtor.com</span>
            </a>
            <a
              href="mailto:ContactUs@tathasturealtor.com"
              className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer"
            >
              <FaEnvelope className="text-yellow-500" />
              <span>ContactUs@tathasturealtor.com</span>
            </a>
            <a
              href="tel:+917669600008"
              className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer"
            >
              <FaPhoneAlt className="text-yellow-500" />
              <span>+91 76696 00008</span>
            </a>
            {/* <a
              href="tel:+917669600009"
              className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer"
            >
              <FaPhoneAlt className="text-yellow-500" />
              <span>+91 76696 00009</span>
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative text-center text-sm text-gray-300 mt-auto border-t border-yellow-500 pt-4 flex flex-col md:flex-row md:justify-center md:items-center space-y-2 md:space-y-0 md:space-x-2">
        <span>© {new Date().getFullYear()} Tathastu Realtor. All rights reserved.</span>
        <span>|</span>
        <a href="#" className="hover:text-yellow-400 transition duration-300">
          Terms & Conditions
        </a>
        <span>|</span>
        <a href="#" className="hover:text-yellow-400 transition duration-300">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
