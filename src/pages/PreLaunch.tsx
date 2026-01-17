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
import { SEOHead } from "@/components/SEOHead";

const PreLaunch = () => {
  const [qualifyOpen, setQualifyOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [formLoaded, setFormLoaded] = useState(false);

  const openPopup = () => {
    console.log("[popup] open");
    setFormLoaded(false);
    setPopupOpen(true);
  };

  const closePopup = () => {
    console.log("[popup] close");
    setPopupOpen(false);
  };

  return (
    <>
      <SEOHead
        title="Brick Spark | LEGO® Serious Play® Workshops - Launching Early 2026"
        description="Brick Spark is launching early 2026. Be the first to know when our LEGO® Serious Play® workshops for team building and collaboration go live in Melbourne."
        canonical="https://brickspark.com.au/pre-launch"
        ogImage="https://brickspark.com.au/og-image.jpg"
      />

      <Header onOpenPopup={openPopup} />
      
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

      {/* Funnels form Popup */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 transition-opacity ${
          popupOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Workshop enquiry form"
        aria-hidden={!popupOpen}
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

          <div className="relative rounded-lg overflow-hidden bg-background">
            {!formLoaded && (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                Loading form...
              </div>
            )}
            <iframe
              key={popupOpen ? "open" : "closed"}
              src={popupOpen ? "https://link.funnels.so/widget/form/I7fThpLfkWrmPkg3y9AX" : "about:blank"}
              style={{
                display: "block",
                width: "100%",
                height: "min(90vh, 820px)",
                border: "none",
                borderRadius: 8,
              }}
              allow="clipboard-write"
              referrerPolicy="no-referrer-when-downgrade"
              id="popup-I7fThpLfkWrmPkg3y9AX-prelaunch"
              data-layout='{"id":"POPUP"}'
              data-form-name="PRE-LAUNCH"
              data-height="797"
              data-layout-iframe-id="popup-I7fThpLfkWrmPkg3y9AX-prelaunch"
              data-form-id="I7fThpLfkWrmPkg3y9AX"
              title="PRE-LAUNCH"
              onLoad={() => {
                console.log("[popup] iframe loaded");
                setFormLoaded(true);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreLaunch;
