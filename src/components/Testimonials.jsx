// src/components/Testimonials.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

// Realistic Names
const names = [
  "Rohan Sharma", "Mohit Verma", "Priya Mehta", "Aditi Singh", "Arjun Malhotra",
  "Neha Kapoor", "Rahul Yadav", "Simran Kaur", "Ananya Gupta", "Karan Joshi",
  "Ishita Bansal", "Vikram Chauhan", "Pooja Reddy", "Sahil Khanna", "Tanvi Nair",
  "Aditya Raj", "Sneha Dutta", "Manish Kumar", "Shruti Pandey", "Ritika Jain",
  "Akash Sinha", "Megha Chawla", "Nikhil Arora", "Kavya Pillai", "Deepak Das",
  "Rhea Thomas", "Varun Saxena", "Swati Mishra", "Harsh Vardhan", "Muskaan Gill",
  "Abhinav Taneja", "Divya Narang", "Parth Goyal", "Sanya Kapoor", "Aarav Chauhan",
  "Ira Sharma", "Yash Mehta", "Avni Patel", "Raghav Gupta", "Manya Kaul",
  "Reyansh Bedi", "Tanya Sehgal", "Kabir Kapoor", "Aarohi Jain", "Dev Mishra",
  "Jiya Malhotra", "Arnav Saxena", "Diya Reddy", "Vivaan Khurana", "Navya Joshi"
];

// Testimonials Data (50+)
const testimonials = names.map((name, i) => ({
  id: i + 1,
  name,
  text:
    i % 3 === 0
      ? "Tathastu Realtor ne meri property purchase process ko hassle-free aur luxury feel banaya."
      : i % 3 === 1
      ? "Service bahut fast aur professional thi. Main apne doston ko bhi recommend karunga."
      : "Customer support aur transparency dono hi lajawab the. Bahut hi reliable team!",
  image: `https://i.pravatar.cc/150?img=${i + 10}`,
  rating: Math.floor(Math.random() * 2) + 4, // Random 4 or 5 stars
}));

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear", // smooth infinite movement
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black py-16 px-6">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
        What Our Clients <span className="text-yellow-500">Say</span>
      </h2>
      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t.id} className="px-4">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-6 shadow-lg border border-yellow-600 hover:scale-105 transition-transform duration-500">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-yellow-500"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">{t.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
