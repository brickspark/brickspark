import { MessageCircle, Wrench, Presentation, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    description: "We learn about your team's specific challenges and goals. Every workshop is custom-designed for your context."
  },
  {
    number: "02",
    icon: Wrench,
    title: "Build & Explore",
    description: "Your team constructs 3D models representing challenges, solutions, and visions. Hands-on engagement sparks insights."
  },
  {
    number: "03",
    icon: Presentation,
    title: "Share & Connect",
    description: "Each person shares their model's meaning. Deep understanding emerges as the team sees different perspectives."
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Action & Implement",
    description: "Transform insights into assigned tasks with deadlines. Leave with a concrete plan, not just good feelings."
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            From Chaos to Clarity in{" "}
            <span className="text-gradient-primary">4 Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven process ensures every workshop delivers measurable results 
            for your team—no matter where you're starting from.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border z-0">
                    <div className="absolute top-1/2 right-0 w-3 h-3 -translate-y-1/2 rotate-45 border-t-2 border-r-2 border-primary" />
                  </div>
                )}

                <div className="relative z-10 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display font-bold text-3xl text-primary/30">{step.number}</span>
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
