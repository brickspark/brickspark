import { Award, Briefcase, GraduationCap, MapPin, Users } from "lucide-react";

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
            {/* Photo Placeholder */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl bg-muted border-2 border-dashed border-border flex items-center justify-center overflow-hidden">
                  {/* [PHOTO PLACEMENT: Professional headshot - centered, portrait orientation] */}
                  <div className="text-center p-6">
                    <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-primary/60" />
                    </div>
                    <p className="text-sm text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent/20 rounded-xl -z-10" />
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary/10 rounded-lg -z-10" />
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Chris Pepper
                </h3>
                <p className="text-primary font-medium">
                  Certified LEGO® Serious Play® Facilitator & L&D Specialist
                </p>
              </div>

              <div className="prose prose-lg text-muted-foreground">
                <p>
                  With over 22 years of experience in Learning and Development, Chris brings a dynamic blend of facilitation expertise, coaching mastery, and instructional design excellence to every workshop. His passion lies in empowering individuals through engaging, empathetic, and transparent learning experiences that create lasting impact.
                </p>
                <p>
                  As a Certified LEGO® Serious Play® Facilitator and Social Styles trainer, Chris creates spaces where hands and minds work together—where building with bricks becomes a powerful catalyst for building stronger teams. From intimate workshops to large-scale sessions with 60+ attendees, Chris adapts his approach to ensure content is impactful and relevant for every audience.
                </p>
                <p>
                  Chris has partnered with leading organisations including Nine Publishing Network, WorkSafe Victoria, Australian Unity, Boral, and Melba Support Services to design and deliver transformative training programs. Whether you're navigating change, strengthening collaboration, or sparking innovation, you'll find a facilitator who genuinely cares about your team's success.
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  <Briefcase className="w-4 h-4" />
                  22+ Years L&D Experience
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  Australia-Wide
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Award className="w-4 h-4" />
                  LSP Certified
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <GraduationCap className="w-4 h-4" />
                  Cert IV Training & Assessment
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  <Award className="w-4 h-4" />
                  Social Styles Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
