import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import LeadForm from "@/components/LeadForm";

const painPoints = [
  "No website — customers can't find you online",
  "Running everything manually: bills, stock, appointments",
  "Competitors are ranking above you on Google",
  "No social media presence or it's inconsistent",
  "Losing customers to businesses with better online presence",
];

const solutions = [
  "Professional business website optimized for local SEO",
  "Google My Business setup and optimization",
  "Social media management and content creation",
  "Inventory and billing automation",
  "WhatsApp Business API integration",
  "Online booking and appointment scheduling",
];

const Business = () => (
  <>
    <SectionWrapper className="!pt-28 sm:!pt-36">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
          For Local Business Owners
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Your business deserves to be found online
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          We help local businesses across India build a professional digital presence, automate operations, and get more customers through the door.
        </p>
        <Link to="/contact" className="mt-6 inline-block">
          <Button size="lg" className="glow-border">
            Book a free call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Sound familiar?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {painPoints.map((p) => (
          <motion.div key={p} whileHover={{ x: 4 }} className="glass-card p-5 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{p}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Here's what we build for businesses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {solutions.map((s) => (
          <div key={s} className="glass-card p-5 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{s}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="glass-card p-8 sm:p-12 text-center glow-border">
        <p className="text-xs text-primary font-medium uppercase tracking-wider mb-2">Case Study</p>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
          How a local clinic doubled footfall with a website and Google Ads
        </h3>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Coming soon — we're documenting our impact stories. Book a call and we'll share real results.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Let's grow your business</h2>
          <p className="mt-3 text-muted-foreground">Tell us about your business and we'll build a custom digital strategy — free of charge.</p>
        </div>
        <LeadForm source="business" />
      </div>
    </SectionWrapper>
  </>
);

export default Business;
