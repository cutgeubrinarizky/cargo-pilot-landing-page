
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "CargoPilot - Solusi Manajemen Logistik Terpadu";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <AboutSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default Index;
