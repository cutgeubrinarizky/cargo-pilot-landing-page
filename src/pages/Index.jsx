import React, { useEffect } from "react";
import Navbar from "@/components/Navbar.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import FeaturesSection from "@/components/FeaturesSection.jsx";
import BenefitsSection from "@/components/BenefitsSection.jsx";
import TestimonialsSection from "@/components/TestimonialsSection.jsx";
import IntegrationsSection from "@/components/IntegrationsSection.jsx";
import PricingSection from "@/components/PricingSection.jsx";
import FaqSection from "@/components/FaqSection.jsx";
import CtaSection from "@/components/CtaSection.jsx";
import AboutSection from "@/components/AboutSection.jsx";
import BlogSection from "@/components/BlogSection.jsx";
import FooterSection from "@/components/FooterSection.jsx";

const Index = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "SiLogistik - Solusi Manajemen Logistik Terpadu";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      {/* <TestimonialsSection /> */}
      {/* <IntegrationsSection /> */}
      <PricingSection />
      <FaqSection />
      <CtaSection />
      {/* <AboutSection /> */}
      {/* <BlogSection /> */}
      <FooterSection />
    </div>
  );
};

export default Index; 