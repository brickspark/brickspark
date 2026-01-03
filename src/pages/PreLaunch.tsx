import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LegoBrick } from "@/components/LegoBrick";
import { Sparkles, Users, Zap, Target, Lightbulb, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import heroImage from "@/assets/hero-workshop.jpg";
import brickSparkLogo from "@/assets/brick-spark-logo.svg";

const keyPoints = [
  {
    icon: Users,
    text: "100% Team Participation Guaranteed",
  },
  {
    icon: Zap,
    text: "Same-Day Actionable Outcomes",
  },
  {
    icon: Target,
    text: "Hands-On Problem Solving",
  },
  {
    icon: Lightbulb,
    text: "Unlock Creative Team Potential",
  },
];

const PreLaunch = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error("Please enter your name and email");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("workshop_enquiries")
        .insert({
          name,
          email,
          goals: "Pre-launch interest signup",
        });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("You're on the list! We'll notify you when we launch.");
    } catch (error) {
      console.error("Error submitting:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/95" />
        </div>

        {/* Decorative Lego Bricks */}
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <LegoBrick color="red" size="lg" studs={4} />
        </div>
        <div className="absolute top-40 right-20 animate-brick-bounce animation-delay-200 opacity-30">
          <LegoBrick color="blue" size="md" studs={2} />
        </div>
        <div className="absolute bottom-32 left-20 animate-float animation-delay-400 opacity-30">
          <LegoBrick color="yellow" size="lg" studs={4} />
        </div>
        <div className="absolute bottom-40 right-32 animate-brick-bounce animation-delay-300 opacity-30">
          <LegoBrick color="green" size="md" studs={2} />
        </div>

        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8 animate-slide-up">
              <img 
                src={brickSparkLogo} 
                alt="Brick Spark Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full border border-background/20 mb-8 animate-slide-up animation-delay-100">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-background/90">
                LEGO® Serious Play® Workshops
              </span>
            </div>

            {/* Launch Message */}
            <div className="mb-8 animate-slide-up animation-delay-200">
              <span className="inline-block px-6 py-3 rounded-full bg-accent text-accent-foreground font-display font-bold text-lg md:text-xl">
                Launching Early 2026
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 animate-slide-up animation-delay-200 leading-tight">
              Transform Your Team Through 
              <span className="text-accent"> Play</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-background/85 max-w-2xl mx-auto mb-12 animate-slide-up animation-delay-300 leading-relaxed">
              Hands-on LEGO® workshops that turn abstract ideas into actionable plans.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 animate-slide-up animation-delay-400">
              {keyPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-background/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-background/20"
                >
                  <point.icon className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-background/90 text-sm font-medium text-left">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Email Signup Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-slide-up animation-delay-500">
                <div className="flex flex-col gap-3">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-background/95 border-background/30 text-foreground placeholder:text-muted-foreground h-12"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/95 border-background/30 text-foreground placeholder:text-muted-foreground h-12"
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Let Me Know When Brick Spark Is Live"}
                  </Button>
                </div>
                <p className="text-background/50 text-xs mt-4">
                  We'll only email you when we launch. No spam, ever.
                </p>
              </form>
            ) : (
              <div className="max-w-md mx-auto animate-scale-in bg-background/10 backdrop-blur-sm rounded-xl p-8 border border-background/20">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl text-background mb-2">
                  You're on the list!
                </h3>
                <p className="text-background/80">
                  We'll notify you as soon as Brick Spark is live.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              className="fill-secondary"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default PreLaunch;
