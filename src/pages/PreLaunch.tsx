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
import { Helmet } from "react-helmet-async";
import { X } from "lucide-react";

const PreLaunch = () => {
  const [popupOpen, setPopupOpen] = useState(false);

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

  const openPopup = () => {
    setPopupOpen(true);
  };

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

      <Header onOpenQualify={openPopup} />
      
      <main>
        <HeroSection onOpenQualify={openPopup} />
        <ProblemSection />
        <SolutionSection />
        <WorkshopTypesSection onOpenQualify={openPopup} />
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
        <FinalCTASection onOpenQualify={openPopup} />
      </main>

      <Footer />
      
      {/* Funnels.so Popup Form */}
      {popupOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setPopupOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
              aria-label="Close popup"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src="https://link.funnels.so/widget/form/I7fThpLfkWrmPkg3y9AX"
              style={{ width: "100%", height: "410px", border: "none", borderRadius: "8px" }}
              id="inline-I7fThpLfkWrmPkg3y9AX"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="PRE-LAUNCH"
              data-height="410"
              data-layout-iframe-id="inline-I7fThpLfkWrmPkg3y9AX"
              data-form-id="I7fThpLfkWrmPkg3y9AX"
              title="PRE-LAUNCH"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PreLaunch;
