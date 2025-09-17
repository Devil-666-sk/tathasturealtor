import React, { useState, useEffect } from 'react';
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
    'Property Management',
    'Collaboration',
    'Legal Guidance',
    'Listing & Marketing',
  ];

  // Menu order: Home → Services → About Us → Contact Us
  const menuItems = ['Home', 'About Us', 'Contact Us'];

  return (
    <nav className="relative z-50 bg-gradient-to-r from-black via-gray-900 to-black shadow-xl">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <img
            src={Logo}
            className="h-10 transition-transform duration-500 group-hover:scale-110 rounded-full shadow-lg"
            alt="Tathastu Realtor Logo"
          />
          <span className="text-2xl font-bold text-yellow-400 drop-shadow-lg animate-pulse">
            Tathastu Realtor
          </span>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-yellow-400 p-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-8 text-yellow-400 font-medium relative">
          {menuItems.map((item, i) => {
            // Insert Services after "Home"
            if (item === 'About Us') {
              return (
                <React.Fragment key={i}>
                  {/* Services Dropdown */}
                  <li className="relative group">
                    <button className="flex items-center hover:text-yellow-200 transition duration-300">
                      Services <FaChevronDown className="ml-1" />
                    </button>
                    <div className="absolute left-0 top-full min-w-[200px] bg-black/95 backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-md overflow-hidden shadow-lg">
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block p-4 text-yellow-400 hover:text-yellow-200 hover:bg-black/50 transition"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  </li>

                  {/* About Us */}
                  <li>
                    <a
                      href="#"
                      className="hover:text-yellow-200 transition duration-300"
                      data-aos="fade-down"
                      data-aos-delay={i * 100}
                    >
                      {item}
                    </a>
                  </li>
                </React.Fragment>
              );
            }

            // Render normal menu items
            return (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-yellow-200 transition duration-300"
                  data-aos="fade-down"
                  data-aos-delay={i * 100}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-black/95 backdrop-blur-md z-50 transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-yellow-400">
          <h2 className="text-yellow-400 font-bold text-xl">Menu</h2>
          <button onClick={() => setMobileMenuOpen(false)} className="text-yellow-400">
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-3 text-yellow-400 font-medium">
          {['Home', 'Services', 'About Us', 'Contact Us'].map((item, i) => {
            if (item === 'Services') {
              return (
                <li key={i}>
                  <button
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    className="flex justify-between items-center w-full py-2 px-2 hover:text-yellow-200 hover:bg-yellow-900/20 rounded transition"
                  >
                    Services <FaChevronDown />
                  </button>
                  {isDropdownOpen && (
                    <ul className="pl-4 mt-2 flex flex-col space-y-2">
                      {services.map((service, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="block py-2 px-2 hover:text-yellow-200 hover:bg-yellow-900/20 rounded transition"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            return (
              <li key={i}>
                <a
                  href="#"
                  className="block py-2 px-2 hover:text-yellow-200 hover:bg-yellow-900/20 rounded transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
