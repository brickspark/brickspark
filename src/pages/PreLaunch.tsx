import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Load the funnels.so form embed script
    const script = document.createElement("script");
    script.src = "https://link.funnels.so/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        data-height="410"
        data-layout-iframe-id="popup-I7fThpLfkWrmPkg3y9AX"
        data-form-id="I7fThpLfkWrmPkg3y9AX"
        title="PRE-LAUNCH"
      />
    </>
  );
};

export default PreLaunch;
