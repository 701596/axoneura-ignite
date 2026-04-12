import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import LeadForm from "@/components/LeadForm";

const painPoints = [
  "Managing admissions on paper or WhatsApp",
  "No professional website — parents judge you for it",
  "Fee collection is manual and chaotic",
  "No way to broadcast updates except WhatsApp groups",
  "Competitor schools look more professional online",
];

const solutions = [
  "Custom school management software (admissions, fees, attendance)",
  "Professional website that ranks on Google",
  "Automated fee reminders via WhatsApp & SMS",
  "Parent communication portal",
  "Online admission forms with auto-acknowledgement",
  "Digital report cards & progress tracking",
];

const Schools = () => (
  <>
    <SectionWrapper className="!pt-28 sm:!pt-36">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
          For School Principals & Administrators
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Your school deserves better than WhatsApp management
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          We help schools across India go digital — from admissions to parent communication — so you can focus on education, not administration.
        </p>
        <Link to="/contact" className="mt-6 inline-block">
          <Button size="lg" className="glow-border">
            Book a free call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>

    {/* Pain points */}
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

    {/* Solutions */}
    <SectionWrapper>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Here's what we build for schools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {solutions.map((s) => (
          <div key={s} className="glass-card p-5 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{s}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* Case study placeholder */}
    <SectionWrapper>
      <div className="glass-card p-8 sm:p-12 text-center glow-border">
        <p className="text-xs text-primary font-medium uppercase tracking-wider mb-2">Case Study</p>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
          How a Tier-2 city school increased admissions by 3x with Axoneura
        </h3>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Coming soon — we're documenting our impact stories. In the meantime, book a call and we'll share real results.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Let's digitize your school</h2>
          <p className="mt-3 text-muted-foreground">Tell us about your school and we'll build a custom plan — free of charge.</p>
        </div>
        <LeadForm source="schools" />
      </div>
    </SectionWrapper>
  </>
);

export default Schools;
