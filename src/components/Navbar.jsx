import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../assets/TathastuLogo.png';
import { FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    'Collaboration',
    'Legal Guidance',
    'Listing & Marketing',
    'Property Management',
  ];

  return (
    <nav className="relative z-50 bg-gradient-to-r from-black via-gray-900 to-black shadow-xl">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={Logo}
            className="h-10 transition-transform duration-500 group-hover:scale-110 rounded-full shadow-lg"
            alt="Tathastu Realtor Logo"
          />
          <span className="text-2xl font-bold text-yellow-400 drop-shadow-lg animate-pulse">
            Tathastu Realtor
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-yellow-400 p-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FaTimes size={24} />
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-8 text-yellow-400 font-medium relative">
          {/* Home */}
          <li>
            <Link
              to="/"
              className="hover:text-yellow-200 transition duration-300"
              data-aos="fade-down"
              data-aos-delay="0"
            >
              Home
            </Link>
          </li>

          {/* Services with Dropdown */}
          <li className="relative flex items-center space-x-1">
            <Link
              to="/services"
              className="hover:text-yellow-200 transition duration-300 flex items-center"
            >
              Services
            </Link>
            <button
              className="hover:text-yellow-200 transition duration-300"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <FaChevronDown className="ml-1" />
            </button>
            {/* Dropdown */}
            <div
              className={`absolute left-0 top-full min-w-[200px] bg-black/95 backdrop-blur-md transition-all duration-300 z-50 rounded-md overflow-hidden shadow-lg ${
                isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block p-4 text-yellow-400 hover:text-yellow-200 hover:bg-black/50 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  {service}
                </Link>
              ))}
            </div>
          </li>

          {/* About Us */}
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-200 transition duration-300"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              About Us
            </Link>
          </li>

          {/* Contact Us */}
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-200 transition duration-300"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-black/95 backdrop-blur-md z-50 transform transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-yellow-400">
          <h2 className="text-yellow-400 font-bold text-xl">Menu</h2>
          <button onClick={() => setMobileMenuOpen(false)} className="text-yellow-400">
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-3 text-yellow-400 font-medium">
          {/* Home */}
          <li>
            <Link
              to="/"
              className="block py-2 px-2 hover:text-yellow-200 hover:bg-yellow-900/20 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          {/* Services with dropdown */}
          <li>
            <div className="flex justify-between items-center">
              <Link
                to="/services"
                className="py-2 px-2 hover:text-yellow-200 hover:bg-yellow-900/20 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="text-yellow-400"
              >
                <FaChevronDown />
              </button>
            </div>
            {isDropdownOpen && (
              <ul className="pl-4 mt-2 flex flex-col space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-2 px-2 hover:text-yellow-200 hover:bg-yellow-900/20 rounded transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* About Us */}
          <li>
            <Link
              to="/about"
              className="block py-2 px-2 hover:text-yellow-200 hover:bg-yellow-900/20 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>

          {/* Contact Us */}
          <li>
            <Link
              to="/contact"
              className="block py-2 px-2 hover:text-yellow-200 hover:bg-yellow-900/20 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
