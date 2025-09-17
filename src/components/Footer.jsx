// src/components/Footer.jsx
import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer
      className="relative text-white py-12 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 30%, #d4af37 60%, #000000 100%)",
      }}
    >
      {/* Overlay shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-yellow-300/10 to-yellow-600/10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Company Info */}
        <div data-aos="fade-right">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            Tathastu Realtor
          </h2>
          <p className="text-sm text-gray-300 mt-3 leading-relaxed">
            Building trust with luxury properties and professional real estate services.
          </p>
          <p className="text-sm text-gray-400 mt-3">
            © {new Date().getFullYear()} Tathastu Realtor. All rights reserved.
          </p>
        </div>

        {/* Important Links */}
        <div data-aos="fade-up" className="space-y-3">
          <h3 className="text-lg font-semibold text-yellow-300">Important Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-yellow-400 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition duration-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition duration-300">
                Properties
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div data-aos="fade-left" className="space-y-4">
          <h3 className="text-lg font-semibold text-yellow-300">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/16ZDYjtEy4/"
              className="group relative text-gray-300 transition duration-300 transform hover:scale-125"
            >
              <FaFacebookF size={22} className="group-hover:text-blue-500" />
              <span className="absolute -bottom-2 left-1/2 w-0 group-hover:w-full h-[2px] bg-yellow-400 transition-all duration-300 rounded-full -translate-x-1/2"></span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/tathastu_realtor/"
              className="group relative text-gray-300 transition duration-300 transform hover:rotate-12 hover:scale-125"
            >
              <FaInstagram size={22} className="group-hover:text-pink-500" />
              <span className="absolute -bottom-2 left-1/2 w-0 group-hover:w-full h-[2px] bg-yellow-400 transition-all duration-300 rounded-full -translate-x-1/2"></span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCXmr1dZ0fyD-WwMb0O-xdrQ"
              className="group relative text-gray-300 transition duration-300 transform hover:-rotate-12 hover:scale-125"
            >
              <FaYoutube size={22} className="group-hover:text-red-600" />
              <span className="absolute -bottom-2 left-1/2 w-0 group-hover:w-full h-[2px] bg-yellow-400 transition-all duration-300 rounded-full -translate-x-1/2"></span>
            </a>

           
          </div>

          {/* Terms & Conditions */}
          <div className="text-sm text-gray-300 space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400 transition duration-300">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-400 transition duration-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
