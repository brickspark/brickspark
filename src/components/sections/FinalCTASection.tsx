import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Sparkles } from "lucide-react";

interface FinalCTASectionProps {
  onOpenQualify: () => void;
}

export const FinalCTASection = ({ onOpenQualify }: FinalCTASectionProps) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-lg bg-primary-foreground rotate-12" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-lg bg-primary-foreground -rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-lg bg-primary-foreground rotate-45" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform How Your Team Works Together?
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take the first step. Complete our 2-minute questionnaire and we'll create 
            a custom workshop proposal tailored to your team's specific needs.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Clock className="w-5 h-5" />
              <span>2-minute questionnaire</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Sparkles className="w-5 h-5" />
              <span>Personalized proposal</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Users className="w-5 h-5" />
              <span>No obligation</span>
            </div>
          </div>

          <Button 
            variant="accent" 
            size="xl" 
            className="group text-lg px-12 animate-pulse-glow"
            onClick={onOpenQualify}
          >
            Start Building Your Breakthrough
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="mt-6 text-sm text-primary-foreground/70">
            We respond to every inquiry within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};
