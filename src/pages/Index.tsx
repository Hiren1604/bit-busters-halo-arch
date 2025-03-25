
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MarqueeSection from "../components/MarqueeSection";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import PhilosophySection from "../components/PhilosophySection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section when URL has hash
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <TeamSection />
        <PhilosophySection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
