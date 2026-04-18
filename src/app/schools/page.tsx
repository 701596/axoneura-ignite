import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import LeadForm from "@/components/LeadForm";
import CaseStudy from "@/components/CaseStudy";
import FadeIn from "@/components/FadeIn";

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

export const metadata: Metadata = {
  title: 'Complete School Management System Software India | Axoneura',
  description: "Axoneura's school management system for India digitizes admissions, fees, attendance, and parent communication. 100% financial accuracy guaranteed.",
  keywords: ['school management system India', 'school digitization', 'school ERP India', 'school automation Lucknow', 'school software UP'],
  alternates: {
    canonical: 'https://axoneura.in/schools',
  },
  openGraph: {
    title: 'Complete School Management System Software India | Axoneura',
    description: "Digitize admissions, fees, attendance, and parent communication with Axoneura's school management system for India.",
    type: 'website',
    url: 'https://axoneura.in/schools',
    siteName: 'Axoneura',
    images: [{ url: 'https://axoneura.in/axoneura-og-1200x630.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete School Management System Software India | Axoneura',
    description: 'Digitize admissions, fees, and parent communication — school management system built for India.',
    images: ['https://axoneura.in/axoneura-og-1200x630.png'],
  },
};

export default function Schools() {
  return (
    <>
      <SectionWrapper className="!pt-28 sm:!pt-36">
        <div className="max-w-3xl">
          <span className="eyebrow mb-6 block">FOR SCHOOL PRINCIPALS & ADMINISTRATORS</span>
          <h1
            className="text-white font-bold leading-tight tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3.25rem)" }}
          >
            A Complete School Management System for India
          </h1>
          <p className="mt-5 text-lg leading-[1.7]" style={{ color: "rgba(255,255,255,0.5)" }}>
            Our school management system helps schools across India go digital — from admissions
            to fee collection, attendance to parent communication — so you can focus on education,
            not administration.
          </p>
          <Link href="/contact" className="mt-6 inline-block" passHref>
            <button className="flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
              Book a free call <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Pain points — numbered list */}
      <SectionWrapper>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">School Management Challenges That Sound Familiar?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {painPoints.map((point, index) => (
            <FadeIn
              key={point}
              className="rounded-2xl p-5 flex items-start gap-4 transition-colors hover:border-white/10"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                className="text-sm font-bold shrink-0 mt-0.5 select-none"
                style={{ color: "rgba(255,255,255,0.15)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                {point}
              </span>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Case study */}
      <SectionWrapper>
        <CaseStudy />
      </SectionWrapper>

      {/* Solutions */}
      <SectionWrapper>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">What Our School Management System Includes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {solutions.map((solution) => (
            <div key={solution} className="glass-card p-5 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }} />
              <span className="text-sm text-white">{solution}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Every month you wait is another month of manual work, financial gaps, and admissions lost to schools that simply look more organized than you.
          </h2>
          <p className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            The principals who book a demo this month will have EduOpus live before the next academic year begins.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Let's digitize your school</h2>
            <p className="mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Tell us about your school and we'll build a custom plan — free of charge.
            </p>
          </div>
          <LeadForm source="schools" />
        </div>
      </SectionWrapper>
    </>
  );
}
