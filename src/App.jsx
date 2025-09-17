import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSections";
import ProjectHighlights from "./components/ProjectHighlights";
import PropertyOptions from "./components/PropertyOptions";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import LocationMap from "./components/LocationMap";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectHighlights />
      <PropertyOptions />
      <Amenities />
      <Gallery />
      <LocationMap />
      <WhyChoose />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
