import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight, Check, Sparkles, Users, Target, Clock, Wallet, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";

interface FormData {
  // Step 1: Desired Outcomes
  desiredOutcomes: string;
  specificChallenge: string;
  
  // Step 2: Previous Solutions
  previousSolutions: string;
  whyNotWorked: string;
  
  // Step 3: Team Context
  teamSize: string;
  teamRoles: string;
  decisionMaker: string;
  
  // Step 4: Timeline & Budget
  timeline: string;
  budgetRange: string;
  
  // Step 5: Contact Info
  name: string;
  email: string;
  company: string;
  phone: string;
}

const steps = [
  { id: 1, title: "Your Goals", icon: Target },
  { id: 2, title: "What You've Tried", icon: Users },
  { id: 3, title: "Your Team", icon: User },
  { id: 4, title: "Timeline & Budget", icon: Clock },
  { id: 5, title: "Contact Info", icon: Sparkles },
];

const Qualify = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    desiredOutcomes: "",
    specificChallenge: "",
    previousSolutions: "",
    whyNotWorked: "",
    teamSize: "",
    teamRoles: "",
    decisionMaker: "",
    timeline: "",
    budgetRange: "",
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.desiredOutcomes.length > 0;
      case 2:
        return true; // Optional step
      case 3:
        return formData.teamSize.length > 0;
      case 4:
        return formData.timeline.length > 0;
      case 5:
        return formData.name.length > 0 && formData.email.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Application Submitted!",
      description: "We'll be in touch within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <>
        <SEOHead
          title="Thank You | Brick Spark"
          description="Thank you for your interest in Brick Spark workshops. We'll be in touch soon!"
          canonical="https://www.brickspark.com.au/qualify"
          noIndex={true}
        />
        <Header />
        <main className="min-h-screen pt-24 pb-16 bg-gradient-hero flex items-center">
          <div className="container px-4">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Thank You, {formData.name}!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your workshop inquiry has been received. We're excited to learn more about 
                your team and will be in touch within 24 hours with a personalized proposal.
              </p>
              <div className="p-6 rounded-xl bg-card border border-border text-left">
                <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>We review your responses and goals</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>You'll receive a custom workshop proposal via email</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>We schedule a brief discovery call to finalize details</span>
                  </li>
                </ul>
              </div>
              <Button 
                variant="outline" 
                className="mt-8"
                onClick={() => window.location.href = "/"}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Homepage
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Get Your Custom Workshop Proposal | Brick Spark"
        description="Complete our quick questionnaire to receive a personalized LEGO® Serious Play® workshop proposal for your team."
        canonical="https://www.brickspark.com.au/qualify"
      />
      <Header />
      <main className="min-h-screen pt-24 pb-16 bg-gradient-hero">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let's Build Your Perfect Workshop
              </h1>
              <p className="text-muted-foreground">
                Answer a few questions so we can create a customized proposal for your team.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between mb-10">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`flex flex-col items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
                >
                  <div className="relative flex items-center w-full">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        currentStep > step.id 
                          ? 'bg-primary text-primary-foreground' 
                          : currentStep === step.id 
                            ? 'bg-primary text-primary-foreground ring-4 ring-primary/20' 
                            : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div 
                        className={`h-1 flex-1 mx-2 rounded transition-colors ${
                          currentStep > step.id ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    )}
                  </div>
                  <span className={`text-xs mt-2 hidden md:block ${
                    currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Form Card */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-medium">
              {/* Step 1: Desired Outcomes */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                      What outcomes do you want from a workshop?
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Understanding your goals helps us design the perfect experience.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="desiredOutcomes">What would make this workshop a success for you?</Label>
                      <Textarea
                        id="desiredOutcomes"
                        placeholder="E.g., Better team communication, aligned vision for Q1, resolve ongoing conflicts..."
                        value={formData.desiredOutcomes}
                        onChange={(e) => updateFormData("desiredOutcomes", e.target.value)}
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="specificChallenge">What specific challenge is your team facing right now?</Label>
                      <Textarea
                        id="specificChallenge"
                        placeholder="E.g., Siloed departments, low meeting engagement, unclear priorities..."
                        value={formData.specificChallenge}
                        onChange={(e) => updateFormData("specificChallenge", e.target.value)}
                        className="mt-2 min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Previous Solutions */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                      What have you tried before?
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      This helps us understand what approaches might or might not work for your team.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="previousSolutions">Have you tried any team-building or workshop activities before?</Label>
                      <Textarea
                        id="previousSolutions"
                        placeholder="E.g., Escape rooms, personality assessments, offsite retreats, consultant workshops..."
                        value={formData.previousSolutions}
                        onChange={(e) => updateFormData("previousSolutions", e.target.value)}
                        className="mt-2 min-h-[100px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="whyNotWorked">If those didn't fully work, why do you think that was?</Label>
                      <Textarea
                        id="whyNotWorked"
                        placeholder="E.g., Fun but no lasting impact, not everyone participated, too generic..."
                        value={formData.whyNotWorked}
                        onChange={(e) => updateFormData("whyNotWorked", e.target.value)}
                        className="mt-2 min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Team Context */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                      Tell us about your team
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      We design each workshop specifically for your team's size and composition.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>How many people will participate?</Label>
                      <RadioGroup 
                        value={formData.teamSize} 
                        onValueChange={(value) => updateFormData("teamSize", value)}
                        className="mt-3 grid grid-cols-2 gap-3"
                      >
                        {["5-8 people", "9-12 people", "13-16 people", "17-20 people"].map((size) => (
                          <div key={size} className="flex items-center">
                            <RadioGroupItem value={size} id={size} className="peer sr-only" />
                            <Label 
                              htmlFor={size} 
                              className="flex-1 p-4 rounded-lg border border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                            >
                              {size}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="teamRoles">What roles/departments will be represented?</Label>
                      <Input
                        id="teamRoles"
                        placeholder="E.g., Engineering, Marketing, Leadership..."
                        value={formData.teamRoles}
                        onChange={(e) => updateFormData("teamRoles", e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label>Are you the decision-maker for this workshop?</Label>
                      <RadioGroup 
                        value={formData.decisionMaker} 
                        onValueChange={(value) => updateFormData("decisionMaker", value)}
                        className="mt-3 space-y-2"
                      >
                        {[
                          "Yes, I make the final decision",
                          "I'm part of the decision-making team",
                          "I'm researching options for someone else"
                        ].map((option) => (
                          <div key={option} className="flex items-center">
                            <RadioGroupItem value={option} id={option} className="peer sr-only" />
                            <Label 
                              htmlFor={option} 
                              className="flex-1 p-3 rounded-lg border border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                            >
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Timeline & Budget */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                      Timeline & Investment
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Help us understand your timeframe and budget so we can tailor our proposal.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>When are you looking to run the workshop?</Label>
                      <RadioGroup 
                        value={formData.timeline} 
                        onValueChange={(value) => updateFormData("timeline", value)}
                        className="mt-3 grid grid-cols-2 gap-3"
                      >
                        {[
                          "Within 2 weeks",
                          "Within 1 month",
                          "Within 3 months",
                          "Just exploring options"
                        ].map((time) => (
                          <div key={time} className="flex items-center">
                            <RadioGroupItem value={time} id={time} className="peer sr-only" />
                            <Label 
                              htmlFor={time} 
                              className="flex-1 p-4 rounded-lg border border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 text-center"
                            >
                              {time}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="flex items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        What's your approximate budget for this workshop?
                      </Label>
                      <RadioGroup 
                        value={formData.budgetRange} 
                        onValueChange={(value) => updateFormData("budgetRange", value)}
                        className="mt-3 space-y-2"
                      >
                        {[
                          "Under £1,500",
                          "£1,500 - £2,500",
                          "£2,500 - £4,000",
                          "£4,000+",
                          "Flexible / Need guidance"
                        ].map((budget) => (
                          <div key={budget} className="flex items-center">
                            <RadioGroupItem value={budget} id={budget} className="peer sr-only" />
                            <Label 
                              htmlFor={budget} 
                              className="flex-1 p-3 rounded-lg border border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                            >
                              {budget}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Contact Info */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                      Almost there! How can we reach you?
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      We'll send your personalized proposal within 24 hours.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => updateFormData("company", e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+44 7XXX XXXXXX"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to receive communications from Brick Spark. 
                    We respect your privacy and will never share your information.
                  </p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={currentStep === 1 ? 'invisible' : ''}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>

                <Button
                  variant="hero"
                  onClick={handleNext}
                  disabled={!canProceed() || isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : currentStep === 5 ? (
                    <>
                      Submit Application
                      <Check className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Qualify;
