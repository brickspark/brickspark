import { Award, MapPin, Users } from "lucide-react";
import cjPepperPhoto from "@/assets/cj-pepper-photo.jpg";

export const FacilitatorSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Meet Your Facilitator
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Guided by <span className="text-primary">Experience</span>, Driven by <span className="text-primary">Connection</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                {/* Retro single-line border using lego yellow */}
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-lg" style={{ border: '5px solid hsl(var(--lego-yellow))' }}>
                  <img 
                    src={cjPepperPhoto} 
                    alt="Christopher Pepper - Certified LEGO® Serious Play® Facilitator" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-lg -z-10" />
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-3 space-y-6">
              <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Christopher Pepper
              </h3>
                <p className="text-primary font-medium">
                  Certified LEGO® Serious Play® Facilitator
                </p>
              </div>

              <div className="prose prose-lg text-muted-foreground">
                <p>
                  With over 21 years of experience in Learning and Development, Chris brings a rare combination of deep expertise and genuine warmth to every workshop. Having facilitated programs for teams across Australia, Chris understands that the best insights emerge when people feel comfortable enough to play, explore, and truly connect.
                </p>
                <p>
                  As a Certified LEGO® Serious Play® Facilitator, Chris creates spaces where hands and minds work together—where building with bricks becomes a powerful catalyst for building stronger teams. This isn't about corporate jargon or textbook theories; it's about unlocking the creative potential that exists within every team member.
                </p>
                <p>
                  Chris's approach is refreshingly human: attentive, encouraging, and focused on helping your team discover solutions they already have within them. Whether you're navigating change, strengthening collaboration, or sparking innovation, you'll find a facilitator who genuinely cares about your team's success.
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  <Award className="w-4 h-4" />
                  21+ Years L&D Experience
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  Australia-Wide
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Award className="w-4 h-4" />
                  LSP Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
