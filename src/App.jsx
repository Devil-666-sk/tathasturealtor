import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AboutUs from "./components/AboutUs";
import Collaboration from "./components/Collaboration";
import LegalGuidance from "./components/LegalGuidance";
import ListingMarketing from "./components/ListingMarketing";
import PropertyManagement from "./components/PropertyManagement";
import Services from "./components/Services";
import OurProjects from "./components/OurProjects";

// ----------------------------
// PAGE COMPONENTS
// ----------------------------

const HomePage = () => (
  <>
    <HeroSection />
    <ProjectHighlights />
    <PropertyOptions />
    <Amenities />
    <OurProjects />
    <Gallery />
    <WhyChoose />
    <Testimonials />
    <LocationMap />
    <ContactForm />
  </>
);

const ContactPage = () => (
  <>
    <HeroSection />
    <LocationMap />
    <ContactForm />
  </>
);

const AboutPage = () => (
  <>
    <HeroSection />
    <AboutUs />
    <PropertyOptions />
    <Testimonials />
  </>
);

const ServicesPage = () => (
  <>
    <HeroSection />
    <Services />
    <ProjectHighlights />
    <PropertyOptions />
    <Amenities />
    <OurProjects />
    <Gallery />
    <WhyChoose />
    <Testimonials />
  </>
);

// ----------------------------
// INDIVIDUAL SERVICE PAGES
// ----------------------------

const CollaborationPage = () => (
  <>
    <HeroSection />
    <Collaboration />
    <ProjectHighlights />
    <PropertyOptions />
    <Amenities />
    <OurProjects />
    <Gallery />
    <WhyChoose />
    <Testimonials />
  </>
);

const LegalGuidancePage = () => (
  <>
    <HeroSection />
    <LegalGuidance />
    <ProjectHighlights />
    <PropertyOptions />
    <Amenities />
    <OurProjects />
    <Gallery />
    <WhyChoose />
    <Testimonials />
  </>
);

const ListingMarketingPage = () => (
  <>
    <HeroSection />
    <ListingMarketing />
    <ProjectHighlights />
    <PropertyOptions />
    <Amenities />
    <OurProjects />
    <Gallery />
    <WhyChoose />
    <Testimonials />
  </>
);

const PropertyManagementPage = () => (
  <>
    <HeroSection />
    <PropertyManagement />
    <ProjectHighlights />
    <PropertyOptions />
    <Amenities />
    <OurProjects />
    <Gallery />
    <WhyChoose />
    <Testimonials />
  </>
);

// ----------------------------
// MAIN APP ROUTES
// ----------------------------

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* ↓ Individual service routes */}
        <Route path="/services/collaboration" element={<CollaborationPage />} />
        <Route path="/services/legal-guidance" element={<LegalGuidancePage />} />
        <Route path="/services/listing-&-marketing" element={<ListingMarketingPage />} />
        <Route path="/services/property-management" element={<PropertyManagementPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
