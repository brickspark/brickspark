import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, Check, Sparkles, Users, Target, Clock, Wallet, User, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface FormData {
  desiredOutcomes: string;
  specificChallenge: string;
  previousSolutions: string;
  whyNotWorked: string;
  teamSize: string;
  teamRoles: string;
  decisionMaker: string;
  timeline: string;
  budgetRange: string;
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

interface QualifyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QualifyModal = ({ open, onOpenChange }: QualifyModalProps) => {
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
        return true;
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
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Application Submitted!",
      description: "We'll be in touch within 24 hours.",
    });
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after modal closes
    setTimeout(() => {
      setCurrentStep(1);
      setIsSubmitted(false);
      setFormData({
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
    }, 300);
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-lg p-0 overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>Thank You</DialogTitle>
          </VisuallyHidden>
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              Thank You, {formData.name}!
            </h2>
            <p className="text-muted-foreground mb-6">
              Your workshop inquiry has been received. We'll be in touch within 24 hours with a personalized proposal.
            </p>
            <div className="p-4 rounded-xl bg-muted text-left mb-6">
              <h3 className="font-semibold text-foreground mb-2 text-sm">What happens next?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>We review your responses and goals</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>You'll receive a custom workshop proposal via email</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>We schedule a brief discovery call to finalize details</span>
                </li>
              </ul>
            </div>
            <Button variant="outline" onClick={handleClose}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <VisuallyHidden>
          <DialogTitle>Get Your Custom Workshop Proposal</DialogTitle>
        </VisuallyHidden>
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Let's Build Your Perfect Workshop
            </h2>
            <p className="text-sm text-muted-foreground">
              Answer a few questions so we can create a customized proposal for your team.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`flex flex-col items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
              >
                <div className="relative flex items-center w-full">
                  <div 
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      currentStep > step.id 
                        ? 'bg-primary text-primary-foreground' 
                        : currentStep === step.id 
                          ? 'bg-primary text-primary-foreground ring-4 ring-primary/20' 
                          : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <step.icon className="w-4 h-4" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      className={`h-1 flex-1 mx-1 md:mx-2 rounded transition-colors ${
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

          {/* Form Content */}
          <div className="bg-card rounded-xl border border-border p-6">
            {/* Step 1 */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    What outcomes do you want from a workshop?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Understanding your goals helps us design the perfect experience.
                  </p>
                </div>
                <div>
                  <Label htmlFor="desiredOutcomes">What would make this workshop a success for you?</Label>
                  <Textarea
                    id="desiredOutcomes"
                    placeholder="E.g., Better team communication, aligned vision for Q1..."
                    value={formData.desiredOutcomes}
                    onChange={(e) => updateFormData("desiredOutcomes", e.target.value)}
                    className="mt-2 min-h-[100px]"
                  />
                </div>
                <div>
                  <Label htmlFor="specificChallenge">What specific challenge is your team facing?</Label>
                  <Textarea
                    id="specificChallenge"
                    placeholder="E.g., Siloed departments, low meeting engagement..."
                    value={formData.specificChallenge}
                    onChange={(e) => updateFormData("specificChallenge", e.target.value)}
                    className="mt-2 min-h-[80px]"
                  />
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    What have you tried before?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This helps us understand what approaches might work for your team.
                  </p>
                </div>
                <div>
                  <Label htmlFor="previousSolutions">Have you tried any team-building activities before?</Label>
                  <Textarea
                    id="previousSolutions"
                    placeholder="E.g., Escape rooms, personality assessments, offsites..."
                    value={formData.previousSolutions}
                    onChange={(e) => updateFormData("previousSolutions", e.target.value)}
                    className="mt-2 min-h-[80px]"
                  />
                </div>
                <div>
                  <Label htmlFor="whyNotWorked">If those didn't fully work, why do you think that was?</Label>
                  <Textarea
                    id="whyNotWorked"
                    placeholder="E.g., Fun but no lasting impact, not everyone participated..."
                    value={formData.whyNotWorked}
                    onChange={(e) => updateFormData("whyNotWorked", e.target.value)}
                    className="mt-2 min-h-[80px]"
                  />
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Tell us about your team
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We design each workshop specifically for your team's size and composition.
                  </p>
                </div>
                <div>
                  <Label>How many people will participate?</Label>
                  <RadioGroup 
                    value={formData.teamSize} 
                    onValueChange={(value) => updateFormData("teamSize", value)}
                    className="mt-2 grid grid-cols-2 gap-2"
                  >
                    {["5-8 people", "9-12 people", "13-16 people", "17-20 people"].map((size) => (
                      <div key={size} className="flex items-center">
                        <RadioGroupItem value={size} id={size} className="peer sr-only" />
                        <Label 
                          htmlFor={size} 
                          className="flex-1 p-3 rounded-lg border border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 text-sm"
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
                    className="mt-2 space-y-2"
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
                          className="flex-1 p-3 rounded-lg border border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 text-sm"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Timeline & Investment
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Help us understand your timeframe and budget.
                  </p>
                </div>
                <div>
                  <Label>When are you looking to run the workshop?</Label>
                  <RadioGroup 
                    value={formData.timeline} 
                    onValueChange={(value) => updateFormData("timeline", value)}
                    className="mt-2 grid grid-cols-2 gap-2"
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
                          className="flex-1 p-3 rounded-lg border border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 text-sm text-center"
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
                    What's your approximate budget?
                  </Label>
                  <RadioGroup 
                    value={formData.budgetRange} 
                    onValueChange={(value) => updateFormData("budgetRange", value)}
                    className="mt-2 grid grid-cols-2 gap-2"
                  >
                    {[
                      "$1,500 - $3,000",
                      "$3,000 - $5,000",
                      "$5,000 - $8,000",
                      "Flexible / Not sure"
                    ].map((budget) => (
                      <div key={budget} className="flex items-center">
                        <RadioGroupItem value={budget} id={budget} className="peer sr-only" />
                        <Label 
                          htmlFor={budget} 
                          className="flex-1 p-3 rounded-lg border border-border cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 text-sm text-center"
                        >
                          {budget}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 5 */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Almost there! How can we reach you?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We'll send your personalized proposal to this email.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="mt-2"
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
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
              onClick={handleNext}
              disabled={!canProceed() || isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : currentStep === 5 ? (
                <>
                  Get My Proposal
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
      </DialogContent>
    </Dialog>
  );
};