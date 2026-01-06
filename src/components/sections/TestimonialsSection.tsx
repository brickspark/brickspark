import { Quote, Star } from "lucide-react";
const testimonials = [{
  quote: "Best team-building investment we made. The storytelling techniques are now part of our culture.",
  author: "John Smith",
  role: "CEO",
  company: "StartupXYZ",
  highlight: "Best team-building investment we made"
}, {
  quote: "We came in skeptical about using Lego for serious business discussions. We left with a complete quarterly strategy and every team member fully aligned. The ROI was visible within a week.",
  author: "Sarah Chen",
  role: "Head of Product",
  company: "TechCorp",
  highlight: "ROI was visible within a week"
}, {
  quote: "Our 12-person team had communication issues for months. One workshop uncovered problems we didn't even know existed, and gave us the tools to solve them. Everyone participated—first time ever.",
  author: "Marcus Rivera",
  role: "Operations Director",
  company: "GrowthLabs",
  highlight: "Everyone participated—first time ever"
}];
export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Teams Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real teams who transformed their collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-8 shadow-soft relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};