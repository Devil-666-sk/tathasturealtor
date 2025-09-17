// testimonialsData.js
export const testimonials = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  role: i % 2 === 0 ? "Investor" : "Client",
  text: "Tathastu Realtor provided excellent service. Luxury experience with professional handling. Highly recommended!",
  image: `https://i.pravatar.cc/150?img=${i + 10}`, // random avatar
}));
