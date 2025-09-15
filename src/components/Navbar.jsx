import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../assets/TathastuLogo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <nav
      className="bg-gradient-to-r from-[#FFD700] via-[#121212] to-[#FFD700] shadow-xl transition-all duration-500"
      data-aos="fade-down"
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <img
            src={Logo}
            className="h-10 transition-transform duration-500 group-hover:scale-110 rounded-full"
            alt="Tathastu Realtor Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-gold-shine drop-shadow-md animate-gold-shimmer">
            Tathastu Realtor
          </span>
        </a>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-[#FFD700] rounded-lg md:hidden hover:bg-[#FFD700] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-colors duration-300"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} items-center justify-between font-medium w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-800 rounded-lg bg-[#121212]/90 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {['Home', 'About Us', 'Contact Us'].map((item, i) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm hover:text-[#FFD700] transition-all duration-300 hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Dropdown */}
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm md:w-auto hover:text-[#FFD700] transition-all duration-300 hover:scale-105"
              >
                Services
                <svg className="w-3 h-3 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Dropdown Panel */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isDropdownOpen ? 'max-h-[500px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        } bg-gradient-to-r from-[#FFD700] via-[#121212] to-[#FFD700] border-t border-[#FFD700]`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-white sm:grid-cols-2 md:px-6">
          <ul className="col-span-2 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Property Management',
                desc: 'Complete care of your property with expert oversight.',
              },
              {
                title: 'Collaboration',
                desc: 'Work with industry partners to maximize results.',
              },
              {
                title: 'Legal Guidance',
                desc: 'Clear legal support for your real estate needs.',
              },
              {
                title: 'Listing & Marketing',
                desc: 'Professional listing and promotion of your property.',
              },
            ].map((service) => (
              <li key={service.title}>
                <a
                  href="#"
                  className="block p-4 rounded-lg hover:bg-[#1a1a1a]/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="font-semibold text-[#FFD700]">{service.title}</div>
                  <span className="text-sm text-gray-300">{service.desc}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
