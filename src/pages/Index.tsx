import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AlertBanner from "@/components/AlertBanner";
import FeatureCards from "@/components/FeatureCards";
import VisibilitySection from "@/components/VisibilitySection";
import ComparisonTable from "@/components/ComparisonTable";
import SecuritySection from "@/components/SecuritySection";
import DataSection from "@/components/DataSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the element matching the path (e.g., /contato -> #contato)
    if (pathname !== "/") {
      const elementId = pathname.substring(1); // Remove leading slash
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        
        <AnimatedSection>
          <AlertBanner />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <FeatureCards />
        </AnimatedSection>
        
        <AnimatedSection>
          <VisibilitySection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <ComparisonTable />
        </AnimatedSection>
        
        <AnimatedSection>
          <SecuritySection />
        </AnimatedSection>
        
        <AnimatedSection>
          <DataSection />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <CTASection />
        </AnimatedSection>
        
        <AnimatedSection>
          <FAQSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
