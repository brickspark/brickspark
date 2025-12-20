import { Lightbulb, Puzzle, MessageSquare, Rocket } from "lucide-react";
import { LegoBrick } from "@/components/LegoBrick";

export const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-dark text-secondary-foreground relative overflow-hidden">
      {/* Decorative bricks */}
      <div className="absolute top-10 right-10 opacity-20">
        <LegoBrick color="yellow" size="lg" studs={4} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <LegoBrick color="red" size="md" studs={2} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
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

          <div className="grid md:grid-cols-2 gap-8">
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

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                {/* Animated brick composition */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
                  <div className="flex gap-2 justify-center animate-float">
                    <LegoBrick color="red" size="lg" studs={4} />
                    <LegoBrick color="blue" size="lg" studs={4} />
                  </div>
                  <div className="flex gap-2 justify-center animate-float animation-delay-200">
                    <LegoBrick color="yellow" size="lg" studs={4} />
                    <LegoBrick color="green" size="lg" studs={4} />
                  </div>
                  <div className="flex gap-2 justify-center animate-float animation-delay-400">
                    <LegoBrick color="primary" size="lg" studs={4} />
                    <LegoBrick color="red" size="lg" studs={4} />
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
