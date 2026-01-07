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
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    // Load the funnels.so embed script only when the popup is opened (user click)
    if (!popupOpen) return;

    const existing = document.getElementById("funnels-form-embed");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "funnels-form-embed";
    script.src = "https://link.funnels.so/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [popupOpen]);

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
        <HeroSection onOpenQualify={openPopup} />
        <ProblemSection />
        <SolutionSection />
        <WorkshopTypesSection onOpenPopup={openPopup} />
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
      
      <QualifyModal open={qualifyOpen} onOpenChange={setQualifyOpen} />

      {/* Funnels.so Popup Form (only mounted after a click) */}
      {popupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Workshop enquiry form"
          onClick={(e) => {
            if (e.target === e.currentTarget) closePopup();
          }}
        >
          <div className="w-full max-w-3xl">
            <div className="flex justify-end mb-3">
              <button
                type="button"
                onClick={closePopup}
                className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              >
                Close
              </button>
            </div>
            <iframe
              src="https://link.funnels.so/widget/form/I7fThpLfkWrmPkg3y9AX"
              className="w-full h-[min(90vh,820px)] border-0 rounded-lg bg-background"
              id="popup-I7fThpLfkWrmPkg3y9AX"
              data-layout='{"id":"POPUP"}'
              data-form-name="PRE-LAUNCH"
              data-height="797"
              data-layout-iframe-id="popup-I7fThpLfkWrmPkg3y9AX"
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
