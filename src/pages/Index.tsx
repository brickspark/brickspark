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
import { FacilitatorSection } from "@/components/sections/FacilitatorSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { QualifyModal } from "@/components/QualifyModal";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [qualifyOpen, setQualifyOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>LEGO Serious Play Workshops Melbourne | Team Building & Leadership | Brick Spark</title>
        <meta 
          name="description" 
          content="Transform your team with LEGO® Serious Play® workshops in Melbourne. Expert facilitation for team building, leadership development & strategic planning. 100% participation guaranteed." 
        />
        <meta name="keywords" content="LEGO Serious Play Melbourne, team building workshops Melbourne, corporate team building Victoria, leadership development workshops, strategic planning facilitation, LEGO workshops Australia, team collaboration training, innovation workshops Melbourne, creative problem solving, executive team building" />
        <link rel="canonical" href="https://brickspark.com.au" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Brick Spark" />
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        
        {/* Open Graph */}
        <meta property="og:title" content="LEGO Serious Play Workshops Melbourne | Team Building & Leadership" />
        <meta property="og:description" content="Transform your team with hands-on LEGO® Serious Play® workshops. Expert facilitation for team building, leadership development & strategic planning in Melbourne." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brickspark.com.au" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="Brick Spark" />
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
        <FacilitatorSection />
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
