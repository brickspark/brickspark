import { Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const valueItems = [
  {
    title: "High-impact Workshops — From Two Hours To Half a Day",
    description: "Tailored to your team's schedule and goals",
    value: "£2,500+"
  },
  {
    title: "Custom Challenge Design",
    description: "Pre-workshop discovery to design exercises around YOUR specific challenges",
    value: "£500"
  },
  {
    title: "Premium LEGO® Materials",
    description: "All materials provided—nothing to buy or prepare",
    value: "Included"
  },
  {
    title: "Professional Facilitation",
    description: "Certified LEGO® Serious Play® facilitator guides every step",
    value: "Certified Expert"
  },
  {
    title: "Action Item Documentation",
    description: "Walk away with a written summary of all tasks, owners, and deadlines",
    value: "£300"
  },
  {
    title: "30-Day Follow-Up Call",
    description: "Check-in session to ensure implementation and address obstacles",
    value: "£200"
  }
];

export const ValueStackSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              What's Included
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Everything You Get With a{" "}
              <span className="text-accent">Brick Spark</span> Workshop
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              No hidden costs. No surprise upsells. Here's the complete package 
              designed to maximize your team's transformation.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {valueItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-foreground">{item.title}</h4>
                    <p className="text-sm text-secondary-foreground/70">{item.description}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-display font-bold text-accent">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-accent shadow-strong">
            <p className="text-accent-foreground/80 mb-2">Total Value</p>
            <div className="font-display text-4xl font-bold text-accent-foreground mb-2">
              £3,500+
            </div>
            <p className="text-accent-foreground/80 mb-6">
              Starting from a fraction of that investment
            </p>
            <Link to="/qualify">
              <Button variant="secondary" size="xl" className="group shadow-medium">
                Get Custom Pricing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-sm text-accent-foreground/60 mt-4">
              Complete our quick questionnaire for a personalized quote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
