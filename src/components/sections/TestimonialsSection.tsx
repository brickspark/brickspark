import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Best team-building investment we made. The storytelling techniques are now part of our culture.",
    author: "John Smith",
    role: "CEO",
    company: "StartupXYZ",
    highlight: "Best team-building investment we made"
  },
  {
    quote: "We came in skeptical about using Lego for serious business discussions. We left with a complete quarterly strategy and every team member fully aligned. The ROI was visible within a week.",
    author: "Sarah Chen",
    role: "Head of Product",
    company: "TechCorp",
    highlight: "ROI was visible within a week"
  },
  {
    quote: "Our 12-person team had communication issues for months. One workshop uncovered problems we didn't even know existed, and gave us the tools to solve them. Everyone participated—first time ever.",
    author: "Marcus Rivera",
    role: "Operations Director",
    company: "GrowthLabs",
    highlight: "Everyone participated—first time ever"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what team leaders like you 
            experienced after their Brick Spark workshop.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6">
                <div className="p-2 rounded-full bg-primary text-primary-foreground shadow-medium">
                  <Quote className="w-4 h-4" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Highlight */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {testimonial.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
