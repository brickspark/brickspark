import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { WorkshopTypesSection } from "@/components/sections/WorkshopTypesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LogoCarousel } from "@/components/sections/LogoCarousel";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ValueStackSection } from "@/components/sections/ValueStackSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { QualifyModal } from "@/components/QualifyModal";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [qualifyOpen, setQualifyOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Brick Spark | Transform Team Collaboration with LEGO® Workshops</title>
        <meta 
          name="description" 
          content="Transform your small team's collaboration with hands-on LEGO® Serious Play® workshops. Get actionable results, 100% participation, and lasting cultural change." 
        />
        <meta name="keywords" content="LEGO Serious Play, team building, workshop, collaboration, small business, team engagement" />
        <link rel="canonical" href="https://brickspark.com" />
      </Helmet>

      <Header />
      
      <main>
        <HeroSection onOpenQualify={() => setQualifyOpen(true)} />
        <ProblemSection />
        <SolutionSection />
        <WorkshopTypesSection />
        <section id="benefits">
          <BenefitsSection />
        </section>
        <HowItWorksSection />
        <LogoCarousel />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <ValueStackSection />
        <section id="faq">
          <FAQSection />
        </section>
        <FinalCTASection onOpenQualify={() => setQualifyOpen(true)} />
      </main>

      <Footer />
      
      <QualifyModal open={qualifyOpen} onOpenChange={setQualifyOpen} />
    </>
  );
};

export default Index;
