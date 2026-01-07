import { 
  Target, 
  Users, 
  Lightbulb, 
  GitBranch, 
  Compass, 
  MessageCircle 
} from "lucide-react";

const workshopTypes = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Align your team around a shared vision and create actionable strategic roadmaps that everyone owns.",
  },
  {
    icon: Users,
    title: "Team Development",
    description: "Build stronger connections, improve communication, and develop a high-performing team culture.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Ideation",
    description: "Generate breakthrough ideas and explore new possibilities through collaborative creative thinking.",
  },
  {
    icon: GitBranch,
    title: "Change Management",
    description: "Navigate transitions smoothly by building shared understanding and commitment to new directions.",
  },
  {
    icon: Compass,
    title: "Vision & Values",
    description: "Define and articulate your organisation's purpose, values, and guiding principles together.",
  },
  {
    icon: MessageCircle,
    title: "Conflict Resolution",
    description: "Address tensions constructively and build consensus through structured, safe dialogue.",
  },
];

export const WorkshopTypesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Workshop Applications
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Can LEGO® Serious Play® <span className="text-primary">Help With?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Anytime you need to change the normal business dynamic and have a more 
            powerful conversation, LEGO® Serious Play® can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {workshopTypes.map((workshop, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <workshop.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-xl mx-auto">
          Don't see your challenge listed? LEGO® Serious Play® is incredibly versatile. 
          <a href="/qualify" className="text-primary hover:underline ml-1">
            Let's discuss your specific needs.
          </a>
        </p>
      </div>
    </section>
  );
};
