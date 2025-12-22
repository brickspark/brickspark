import { Award, MapPin, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
const credentials = [{
  icon: Award,
  label: "20+ Years Experience",
  description: "Trusted facilitation expertise"
}, {
  icon: MapPin,
  label: "Australia-Wide",
  description: "Delivering workshops nationally"
}, {
  icon: Users,
  label: "Certified Facilitator",
  description: "LEGO® SERIOUS PLAY® trained"
}, {
  icon: Briefcase,
  label: "Corporate Specialist",
  description: "Enterprise to SME focus"
}];
export const AboutSection = () => {
  return <section className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image/Profile Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-10 blur-xl" />
                
                {/* Profile card */}
                <div className="relative bg-card rounded-2xl border border-border p-8 shadow-medium">
                  {/* Avatar placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-5xl font-display font-bold shadow-large">
                    CP
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                      Christopher Pepper
                    </h3>
                    <p className="text-primary font-medium">
                      Founder & Lead Facilitator
                    </p>
                  </div>

                  {/* Credentials grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {credentials.map((credential, index) => <div key={index} className="p-3 rounded-lg bg-background border border-border text-center hover:border-primary/30 transition-colors">
                        <credential.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                        <div className="font-semibold text-sm text-foreground">
                          {credential.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {credential.description}
                        </div>
                      </div>)}
                  </div>

                  {/* LinkedIn link */}
                  <div className="mt-6 text-center">
                    <a href="https://www.linkedin.com/in/cjpepper" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet the Mind Behind{" "}
                <span className="text-gradient-primary">Brick Spark</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  With <strong className="text-foreground">over 20 years of professional facilitation experience</strong>, 
                  I've dedicated my career to transforming how teams communicate, collaborate, and solve complex challenges together.
                </p>
                <p>
                  As a certified LEGO® SERIOUS PLAY® facilitator, I bring a unique blend of 
                  strategic thinking and hands-on creativity to every workshop. My approach 
                  isn't about playing with bricks—it's about unlocking insights that traditional 
                  meetings simply can't reach.
                </p>
                <p>
                  I've had the privilege of working with organizations <strong className="text-foreground">across Australia</strong>, 
                  from innovative startups to established enterprises, helping teams break through 
                  communication barriers and align on shared visions.
                </p>
                <p>
                  Every workshop I deliver is customized to your team's specific challenges, 
                  ensuring you walk away with actionable outcomes—not just good memories.
                </p>
              </div>

              <Button asChild size="lg" className="shadow-medium">
                <a href="/qualify">Start Building Your Breakthrough </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};