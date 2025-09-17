// import React, { useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import emailjs from "emailjs-com";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     number: "",
//     email: "",
//     budget: "",
//   });

//   const [message, setMessage] = useState("");

//   React.useEffect(() => {
//     Aos.init({ duration: 1200, once: true });
//   }, []);

//   // Validation function
//   const validateForm = () => {
//     const { name, number, email, budget } = formData;
//     const phoneRegex = /^[0-9]{10}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!name || !number || !email || !budget) {
//       setMessage("⚠️ Please fill all fields.");
//       return false;
//     }
//     if (!phoneRegex.test(number)) {
//       setMessage("⚠️ Mobile number must be 10 digits.");
//       return false;
//     }
//     if (!emailRegex.test(email)) {
//       setMessage("⚠️ Please enter a valid email.");
//       return false;
//     }
//     return true;
//   };

//   // Handle submit with EmailJS
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     emailjs
//       .send(
//         "service_c7r5pxg", 
//         "template_1mnodiq", 
//         formData,
//         "1QK2QmEPfHy6RXhea" 
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           setMessage("✅ Form submitted successfully! We will contact you soon.");
//           setFormData({ name: "", number: "", email: "", budget: "" });
//         },
//         (err) => {
//           console.error("FAILED...", err);
//           setMessage("❌ Something went wrong. Try again later.");
//         }
//       );
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6 py-12"
//       data-aos="fade-up"
//     >
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-lg bg-black/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-yellow-500"
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 text-white">
//           Contact <span className="text-yellow-500">Tathastu Realtor</span>
//         </h2>

//         {/* Name */}
//         <div className="mb-4">
//           <label className="block text-white mb-2">Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 transition"
//             style={{ caretColor: "gold" }}
//           />
//         </div>

//         {/* Number */}
//         <div className="mb-4">
//           <label className="block text-white mb-2">Mobile Number</label>
//           <input
//             type="tel"
//             placeholder="Enter 10 digit number"
//             value={formData.number}
//             onChange={(e) =>
//               setFormData({ ...formData, number: e.target.value })
//             }
//             className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 transition"
//             style={{ caretColor: "gold" }}
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block text-white mb-2">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 transition"
//             style={{ caretColor: "gold" }}
//           />
//         </div>

//         {/* Budget */}
//         <div className="mb-6">
//           <label className="block text-white mb-2">Select Budget</label>
//           <select
//             value={formData.budget}
//             onChange={(e) =>
//               setFormData({ ...formData, budget: e.target.value })
//             }
//             className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 transition"
//           >
//             <option value="">-- Select Budget --</option>
//             <option value="40 Lakh - 60 Lakh">40 Lakh - 60 Lakh</option>
//             <option value="60 Lakh - 1 Crore">60 Lakh - 1 Crore</option>
//             <option value="1 Crore +">1 Crore +</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
//         >
//           Send Message
//         </button>

//         {/* Message */}
//         {message && (
//           <p className="mt-4 text-center text-yellow-400 font-semibold">
//             {message}
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    budget: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  // ✅ Validation function
  const validateForm = () => {
    const { name, number, email, budget } = formData;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !number || !email || !budget) {
      setMessage("⚠️ Please fill all fields.");
      return false;
    }
    if (!phoneRegex.test(number)) {
      setMessage("⚠️ Mobile number must be 10 digits.");
      return false;
    }
    if (!emailRegex.test(email)) {
      setMessage("⚠️ Please enter a valid email.");
      return false;
    }
    return true;
  };

  // ✅ Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
     .send(
        "service_c7r5pxg", 
        "template_1mnodiq", 
        formData,
        "1QK2QmEPfHy6RXhea" 
           )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage("✅ Form submitted successfully! We will contact you soon.");
          setFormData({ name: "", number: "", email: "", budget: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setMessage("❌ Something went wrong. Try again later.");
        }
      );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
                 bg-gradient-to-br from-black via-gray-950 to-black 
                 relative overflow-hidden px-6 py-12"
      data-aos="fade-up"
    >
      {/* Golden Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-black/70 backdrop-blur-xl 
                   p-8 rounded-2xl shadow-[0_0_25px_rgba(255,215,0,0.4)] 
                   border border-yellow-500 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Contact <span className="text-yellow-500">Tathastu Realtor</span>
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-white mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-black text-white 
                       border border-gray-700 focus:border-yellow-500 
                       focus:ring-2 focus:ring-yellow-400 transition"
            style={{ caretColor: "gold" }}
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-white mb-2">Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter 10 digit number"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg bg-black text-white 
                       border border-gray-700 focus:border-yellow-500 
                       focus:ring-2 focus:ring-yellow-400 transition"
            style={{ caretColor: "gold" }}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg bg-black text-white 
                       border border-gray-700 focus:border-yellow-500 
                       focus:ring-2 focus:ring-yellow-400 transition"
            style={{ caretColor: "gold" }}
          />
        </div>

        {/* Budget */}
        <div className="mb-6">
          <label className="block text-white mb-2">Select Budget</label>
          <select
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg bg-black text-white 
                       border border-gray-700 focus:border-yellow-500 
                       focus:ring-2 focus:ring-yellow-400 transition"
          >
            <option value="">-- Select Budget --</option>
            <option value="40 Lakh - 60 Lakh">40 Lakh - 60 Lakh</option>
            <option value="60 Lakh - 80 Lakh">60 Lakh - 80 Lakh</option>
            <option value="80 Lakh - 1 Crore">80 Lakh - 1 Crore</option>
            <option value="1 Crore +">1 Crore +</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 
                     text-black font-bold rounded-lg shadow-lg 
                     hover:scale-105 transform transition duration-300"
        >
          Send Message
        </button>

        {/* Response Message */}
        {message && (
          <p className="mt-4 text-center text-yellow-400 font-semibold">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
