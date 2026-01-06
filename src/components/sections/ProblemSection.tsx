import { AlertTriangle, Users, Frown, Target } from "lucide-react";
const problems = [{
  icon: Users,
  title: "Team Meetings That Go Nowhere",
  description: "The same voices dominate. The quiet ones stay quiet. You leave with vague ideas and no clear next steps."
}, {
  icon: Frown,
  title: "Workshops That Waste Time & Budget",
  description: "You've invested in team-building before. Trust falls, escape rooms, personality tests—fun but forgettable. Zero lasting impact."
}, {
  icon: AlertTriangle,
  title: "Collaboration Breakdowns Hurt More in Small Teams",
  description: "When every person matters, one disengaged team member affects everyone. Dysfunction is magnified, not hidden."
}, {
  icon: Target,
  title: "Ideas Die Before Implementation",
  description: "Great discussions in the room, but nothing translates to action. Insights evaporate by Monday morning."
}];
export const ProblemSection = () => {
  return <section className="py-20 md:py-28 bg-card">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sound Familiar?
          </h2>
          <p className="text-lg text-muted-foreground">If you're leading a team of people, you know these frustrations all too well. And with limited training budgets, you can't afford another workshop that doesn't deliver.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => <div key={index} className="group p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-destructive/10 text-destructive group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-display font-semibold text-foreground">
            You don't need another generic team activity.
            <br />
            <span className="text-gradient-primary">You need a breakthrough.</span>
          </p>
        </div>
      </div>
    </section>;
};