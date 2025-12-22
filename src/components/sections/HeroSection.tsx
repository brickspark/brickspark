import { Button } from "@/components/ui/button";
import { LegoBrick } from "@/components/LegoBrick";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-workshop.jpg";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/75 to-secondary/90" />
      </div>

      {/* Decorative Lego Bricks */}
      <div className="absolute top-20 left-10 animate-float opacity-40">
        <LegoBrick color="red" size="lg" studs={4} />
      </div>
      <div className="absolute top-40 right-20 animate-brick-bounce animation-delay-200 opacity-40">
        <LegoBrick color="blue" size="md" studs={2} />
      </div>
      <div className="absolute bottom-32 left-20 animate-float animation-delay-400 opacity-40">
        <LegoBrick color="yellow" size="lg" studs={4} />
      </div>
      <div className="absolute bottom-40 right-32 animate-brick-bounce animation-delay-300 opacity-40">
        <LegoBrick color="green" size="md" studs={2} />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full border border-background/20 mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-background/90">
              LEGO® Serious Play® Certified Facilitators
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 animate-slide-up animation-delay-100 leading-tight">
            Your Team Is{" "}
            <span className="text-accent">Stuck</span>.
            <br />
            Let's Build the Solution—
            <span className="text-accent">Literally</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-background/85 max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-200 leading-relaxed">
            Transform your small team's collaboration with hands-on LEGO® workshops 
            that turn abstract ideas into <strong className="text-background">actionable plans you can implement the same day</strong>. 
            Perfect for teams of 5-20 who are tired of workshops that go nowhere.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-300">
            <Link to="/qualify">
              <Button variant="hero" size="xl" className="group">
                Build Your Breakthrough
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 hover:text-background">
                See How It Works
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-background/20 animate-slide-up animation-delay-400">
            <p className="text-sm text-background/60 mb-4">
              Trusted by innovative teams at
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-background/50">
              <span className="font-display font-semibold text-lg">StartupXYZ</span>
              <span className="font-display font-semibold text-lg">TechCorp</span>
              <span className="font-display font-semibold text-lg">InnovateCo</span>
              <span className="font-display font-semibold text-lg">FutureWorks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className="fill-card" />
        </svg>
      </div>
    </section>;
};