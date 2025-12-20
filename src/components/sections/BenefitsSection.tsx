import { Check, Zap, Heart, TrendingUp, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Enhanced Collaboration",
    description: "Break down silos and build genuine connections. Your small team becomes a unified force.",
    stat: "100%",
    statLabel: "Participation Rate"
  },
  {
    icon: Zap,
    title: "Immediate Action Items",
    description: "Walk out with a prioritized task list, assigned owners, and clear deadlines—not vague intentions.",
    stat: "Same Day",
    statLabel: "Implementation Ready"
  },
  {
    icon: Heart,
    title: "Lasting Cultural Shift",
    description: "The storytelling and visualization techniques become embedded in how your team communicates.",
    stat: "90%+",
    statLabel: "Report Culture Change"
  },
  {
    icon: TrendingUp,
    title: "Maximized ROI",
    description: "Get more value from your training budget with results that justify the investment immediately.",
    stat: "3x",
    statLabel: "Average Impact"
  },
  {
    icon: Clock,
    title: "Time-Efficient Process",
    description: "Half-day or full-day options designed for busy teams. No multi-week commitments required.",
    stat: "4-8 hrs",
    statLabel: "Workshop Duration"
  },
  {
    icon: Check,
    title: "Every Voice Matters",
    description: "Perfect for small teams where every contribution is critical. No one gets left out.",
    stat: "5-20",
    statLabel: "Ideal Team Size"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Changes After a{" "}
            <span className="text-gradient-primary">Brick Spark</span> Workshop?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your team dynamics, not just for a day, but for the long run.
            Here's what you can expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="font-display font-bold text-2xl text-primary">{benefit.stat}</div>
                  <div className="text-xs text-muted-foreground">{benefit.statLabel}</div>
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
