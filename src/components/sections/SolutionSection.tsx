import { useState } from "react";
import { Lightbulb, Puzzle, MessageSquare, Rocket, X } from "lucide-react";
import workshopPhoto1 from "@/assets/workshop-photo-1.jpg";
import workshopPhoto2 from "@/assets/workshop-photo-2.jpg";
import workshopPhoto3 from "@/assets/workshop-photo-3.jpg";
import workshopPhoto4 from "@/assets/workshop-photo-4.jpg";

const workshopPhotos = [
  { src: workshopPhoto1, alt: "LEGO workshop model with elephant and landscape" },
  { src: workshopPhoto2, alt: "LEGO minifigures in team meeting scenario" },
  { src: workshopPhoto3, alt: "Creative LEGO build with dolphin and figures" },
  { src: workshopPhoto4, alt: "Team hands-on with LEGO bricks" },
];

export const SolutionSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-dark text-secondary-foreground relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
                The Brick Spark Method
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                What If Your Team Could{" "}
                <span className="text-accent">Think With Their Hands?</span>
              </h2>
              <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
                LEGO® Serious Play® isn't arts and crafts. It's a scientifically-backed methodology 
                used by Fortune 500 companies, adapted specifically for small teams who need 
                real results fast.
              </p>
            </div>

            {/* Photo Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16">
              {workshopPhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer"
                  onClick={() => setSelectedImage(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/20 shrink-0">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2">Unlock Hidden Perspectives</h3>
                    <p className="text-secondary-foreground/80">
                      When everyone builds, everyone speaks. Introverts share insights. 
                      Dominant personalities listen. Ideas emerge that meetings never surface.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/20 shrink-0">
                    <Puzzle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2">Make Abstract Concrete</h3>
                    <p className="text-secondary-foreground/80">
                      "Improve communication" becomes a 3D model you can point to. 
                      Vague concepts become tangible plans everyone understands.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/20 shrink-0">
                    <MessageSquare className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2">100% Participation, Guaranteed</h3>
                    <p className="text-secondary-foreground/80">
                      No more checking phones. No side conversations. Every person is fully engaged 
                      because the methodology demands hands-on participation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/20 shrink-0">
                    <Rocket className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2">Leave With Action Items</h3>
                    <p className="text-secondary-foreground/80">
                      Not "maybe we should..." but "Here's exactly what we're doing Monday." 
                      Concrete, assigned tasks with deadlines—delivered before the workshop ends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-secondary/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
