import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { WorkshopTypesSection } from "@/components/sections/WorkshopTypesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { QualifyModal } from "@/components/QualifyModal";
import { Helmet } from "react-helmet-async";

const PreLaunch = () => {
  const [qualifyOpen, setQualifyOpen] = useState(false);


  return (
    <>
      <Helmet>
        <title>Brick Spark | LEGO® Serious Play® Workshops - Launching Early 2026</title>
        <meta 
          name="description" 
          content="Brick Spark is launching early 2026. Be the first to know when our LEGO® Serious Play® workshops for team building and collaboration go live." 
        />
        <meta name="robots" content="index, follow" />
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
        {/* LogoCarousel (Trusted by) - Hidden for pre-launch */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        {/* ValueStackSection (Pricing) - Hidden for pre-launch */}
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

export default PreLaunch;
