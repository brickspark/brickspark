import { useState, useEffect } from "react";
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

  const openPopup = () => {
    const popup = document.getElementById("popup-I7fThpLfkWrmPkg3y9AX") as HTMLIFrameElement;
    if (popup) {
      popup.style.display = "block";
    }
  };

  useEffect(() => {
    // Load the funnels.so form embed script
    const script = document.createElement("script");
    script.src = "https://link.funnels.so/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
        <HeroSection onOpenQualify={openPopup} />
        <ProblemSection />
        <SolutionSection />
        <WorkshopTypesSection onOpenPopup={openPopup} />
        <section id="benefits">
          <BenefitsSection />
        </section>
        <HowItWorksSection />
        <LogoCarousel />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <ValueStackSection onOpenPopup={openPopup} />
        <FacilitatorSection />
        <section id="faq">
          <FAQSection />
        </section>
        <FinalCTASection onOpenQualify={openPopup} />
      </main>

      <Footer />
      
      <QualifyModal open={qualifyOpen} onOpenChange={setQualifyOpen} />

      {/* Funnels.so Popup Form */}
      <iframe
        src="https://link.funnels.so/widget/form/I7fThpLfkWrmPkg3y9AX"
        style={{ display: "none", width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
        id="popup-I7fThpLfkWrmPkg3y9AX"
        data-layout='{"id":"POPUP"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="PRE-LAUNCH"
        data-height="900"
        data-layout-iframe-id="popup-I7fThpLfkWrmPkg3y9AX"
        data-form-id="I7fThpLfkWrmPkg3y9AX"
        title="PRE-LAUNCH"
      />
    </>
  );
};

export default Index;
