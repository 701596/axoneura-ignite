import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import LeadForm from "@/components/LeadForm";
import CaseStudy from "@/components/CaseStudy";
import FadeIn from "@/components/FadeIn";

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

export const metadata: Metadata = {
  title: 'Web Development & Local Digital Marketing India | Axoneura',
  description: 'Professional web development and digital marketing for Indian businesses. Axoneura builds websites, runs SEO campaigns, and automates operations.',
  keywords: ['web development digital marketing India', 'business website India', 'local SEO India', 'digital marketing agency', 'Google Ads India'],
  alternates: {
    canonical: 'https://axoneura.in/business',
  },
  openGraph: {
    title: 'Web Development & Local Digital Marketing India | Axoneura',
    description: 'Professional web development and digital marketing for Indian businesses — websites, SEO, CRM, and automation.',
    type: 'website',
    url: 'https://axoneura.in/business',
    siteName: 'Axoneura',
    images: [{ url: 'https://axoneura.in/axoneura-og-1200x630.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & Local Digital Marketing India | Axoneura',
    description: 'Websites, SEO, CRM, and automation — web development and digital marketing for Indian businesses.',
    images: ['https://axoneura.in/axoneura-og-1200x630.png'],
  },
};

export default function Business() {
  return (
    <>
      <SectionWrapper className="!pt-28 sm:!pt-36">
        <div className="max-w-3xl">
          <span className="eyebrow mb-6 block">FOR LOCAL BUSINESS OWNERS</span>
          <h1
            className="text-white font-bold leading-tight tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3.25rem)" }}
          >
            Web Development and Digital Marketing for Businesses in India
          </h1>
          <p className="mt-5 text-lg leading-[1.7]" style={{ color: "rgba(255,255,255,0.5)" }}>
            We help local businesses across India with professional web development and digital
            marketing — build a professional digital presence, automate operations, and get more
            customers through the door.
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
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Business Challenges Before Web Development</h2>
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

      {/* Solutions */}
      <SectionWrapper>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Our Web Development and Digital Marketing Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {solutions.map((solution) => (
            <div key={solution} className="glass-card p-5 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }} />
              <span className="text-sm text-white">{solution}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* What changes when you go digital */}
      <SectionWrapper>
        <div className="max-w-3xl mb-10">
          <span className="eyebrow mb-6 block uppercase tracking-widest text-[11px] text-white/30">THE TRANSFORMATION</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">What changes when you go digital</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              before: "Customers can't find you — you rely on word of mouth only",
              after: "Ranking on Google, getting calls from people who never heard of you"
            },
            {
              before: "Bills, stock, appointments tracked in notebooks or WhatsApp",
              after: "One dashboard. Everything tracked, automated, and auditable"
            },
            {
              before: "Competitors with worse services are winning because they look more professional",
              after: "You look like the category leader — and now you are"
            }
          ].map((card, i) => (
            <div 
              key={i}
              className="flex relative gap-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "28px"
              }}
            >
              <div className="flex-1 pr-6" style={{ borderRight: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="text-[11px] font-bold block mb-3" style={{ color: "rgba(239, 68, 68, 0.4)" }}>BEFORE</span>
                <p className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.3)" }}>{card.before}</p>
              </div>
              
              <div className="flex-1">
                <span className="text-[11px] font-bold block mb-3" style={{ color: "rgba(34, 197, 94, 0.6)" }}>AFTER</span>
                <p className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.8)" }}>{card.after}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="w-full text-center mt-8 italic text-[15px]" style={{ color: "rgba(255,255,255,0.5)" }}>
          Your competitors are already doing this. The question is how long you wait.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Let's grow your business</h2>
            <p className="mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Tell us about your business and we'll build a custom digital
              strategy — free of charge.
            </p>
          </div>
          <LeadForm source="business" />
        </div>
      </SectionWrapper>
    </>
  );
}
