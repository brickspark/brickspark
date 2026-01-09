import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this suitable for our team size?",
    answer: "Absolutely! Our workshops are specifically designed for teams of 5-20 people—the sweet spot where LEGO® Serious Play® works best. In this size range, everyone gets meaningful participation time, and the group is large enough for diverse perspectives. We've found smaller teams often get even more value because every voice matters."
  },
  {
    question: "What if our team is skeptical about using LEGO?",
    answer: "This is the #1 concern we hear—and the #1 thing people are amazed by afterward. Within 5 minutes of building, even the most skeptical executives are deeply engaged. The methodology is backed by neuroscience: using hands activates different brain regions than talking alone. We've never had a team leave disappointed."
  },
  {
    question: "How quickly will we see results?",
    answer: "Immediately. Unlike traditional workshops where insights fade, you leave with concrete, assigned action items. Teams typically report visible changes in communication and collaboration within the first week. The 30-day follow-up call helps ensure sustained implementation."
  },
  {
    question: "What's the time commitment?",
    answer: "We offer half-day (4 hours) and full-day (6-8 hours) workshops. Most teams choose the full day for maximum depth, but half-day sessions can address focused challenges effectively. We work around your schedule—including weekends if needed."
  },
  {
    question: "What do we need to prepare?",
    answer: "Nothing! We bring all materials and handle all logistics. Your only job is to show up with an open mind. Before the workshop, we'll have a discovery call to understand your challenges—that's your only prep."
  },
  {
    question: "Can this be done remotely?",
    answer: "While in-person workshops deliver the deepest impact, we do offer virtual sessions using shipped LEGO kits. However, for teams that can gather in one location, we strongly recommend in-person. The physical, shared experience creates connections that virtual can't replicate."
  },
  {
    question: "What makes this different from other team-building?",
    answer: "Three things: First, 100% participation—no observers, everyone builds. Second, tangible outcomes—you leave with assigned tasks, not just feelings. Third, lasting impact—the techniques become part of how your team communicates daily. This isn't an escape room or trust fall. It's a strategic tool used by NASA, Google, and the EU."
  },
  {
    question: "How does pricing work?",
    answer: "Pricing depends on team size, workshop duration, location, and customization level. Complete our quick questionnaire to receive a personalized quote within 24 hours. We're transparent about costs—no hidden fees or surprise upsells."
  }
];

// Generate FAQ Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export const FAQSection = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <section className="py-20 md:py-28 bg-muted">
        <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Questions? We've Got Answers.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Brick Spark workshops 
            before making your decision.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-soft transition-all"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};
