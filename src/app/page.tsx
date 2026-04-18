import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { CheckCircle, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import FadeIn from "@/components/FadeIn";

const GlobeSection = dynamic(() => import('@/components/Globe'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Complete School ERP & Online Admission System | Axoneura',
  description: 'Axoneura builds complete digital systems for Indian schools — increasing admissions, automating fee management, and reducing manual workload.',
  keywords: ['school ERP India', 'school admission system', 'fee management system', 'school management software'],
  alternates: {
    canonical: 'https://axoneura.in/',
  },
  openGraph: {
    title: 'Complete School ERP & Online Admission System | Axoneura',
    description: 'Complete digital systems for Indian schools — increasing admissions and automating fee management.',
    url: 'https://axoneura.in/',
    siteName: 'Axoneura',
    images: [
      {
        url: 'https://axoneura.in/axoneura-og-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Axoneura OG Image',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete School ERP & Online Admission System | Axoneura',
    description: 'Complete digital systems for Indian schools — increasing admissions and automating fee management.',
    images: ['https://axoneura.in/axoneura-og-1200x630.png'],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <GlobeSection />

      {/* Introducing EduOpus Section */}
      <section className="section-padding" id="eduopus">
        <div className="container-max">
          <FadeIn className="mb-14 text-center">
            <span className="eyebrow mb-6 block uppercase tracking-widest text-[11px] text-white/30">
              INTRODUCING EDUOPUS
            </span>
            <h2 className="text-white font-bold tracking-[-0.02em] text-3xl md:text-5xl max-w-3xl mx-auto">
              Your School&apos;s Complete Digital System
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
              Say goodbye to fragmented tools. We provide everything you need to grow your school and manage daily operations automatically.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "1. Website",
                subtitle: "Parents find you on Google. Enquiries come to you.",
                description: "A professional, fast-loading website that showcases your school's strengths and ranks high on Google, bringing more inquiries directly to your office."
              },
              {
                title: "2. Admission System",
                subtitle: "Never lose a potential admission again.",
                description: "Stop relying on paper forms. Process applications online digitally, send automatic WhatsApp updates to parents, and never lose track of a potential admission."
              },
              {
                title: "3. Complete ERP",
                subtitle: "100% financial accuracy. Zero manual work. From day one.",
                description: "Eliminate manual fee tracking errors. Keep attendance, issue automated fee reminders, and handle payroll with 100% financial accuracy from day one."
              }
            ].map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.1} className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <h4 className="text-sm font-semibold mb-4" style={{ color: "rgba(139,92,246,0.9)" }}>{feature.subtitle}</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{feature.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn className="mb-14 text-left">
            <span className="eyebrow mb-6 block uppercase tracking-widest text-[11px] text-white/30">
              THE DIFFERENCE
            </span>
            <h2 className="text-white font-bold tracking-[-0.02em] text-3xl md:text-5xl">
              Why Schools Choose Axoneura Over Other Systems
            </h2>
          </FadeIn>

          <div className="flex flex-col">
            {[
              {
                num: "01",
                title: "Versus Traditional ERPs",
                body: "Traditional softwares are built for engineers, not educators. They are clunky, hard to train staff on, and look outdated. Axoneura is modern, incredibly simple to use, and focuses entirely on increasing your admissions. Schools report 3x more qualified enquiries within 6 months."
              },
              {
                num: "02",
                title: "Versus Manual Excel & Registers",
                body: "Excel leads to manual entry errors and unseen financial leaks. Axoneura automates your receipts, sending immediate WhatsApp payment proofs, ensuring zero discrepancies at the end of the month. Proven across multiple UP schools — zero discrepancies since deployment."
              },
              {
                num: "03",
                title: "Versus Complex Platforms",
                body: "You shouldn't pay for 100 features if you only need 10. We don't overwhelm you with bloated modules. You get a fast, affordable platform designed specifically for the core needs of Indian schools. Built by a team in Lucknow that understands how Indian schools actually operate."
              }
            ].map((row, index) => (
              <FadeIn
                key={row.num}
                delay={index * 0.1}
                className="flex flex-col md:flex-row gap-6 sm:gap-10 py-10"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="shrink-0 sm:min-w-[80px]">
                  <span className="text-[64px] font-[800] leading-none" style={{ color: "rgba(255,255,255,0.15)" }}>
                    {row.num}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[22px] text-white font-[600]">{row.title}</h3>
                  <p className="mt-2 text-[16px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {row.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      {/* Packages Section */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn className="text-center flex flex-col items-center justify-center">
            <p className="text-[16px] max-w-[560px] mx-auto text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
              Affordable plans built for Indian schools — starting at less than the cost of one staff member's monthly salary. Book a demo and we'll give you a custom quote within 24 hours.
            </p>
            <Link href="/contact" className="mt-6 inline-flex font-medium text-white/90 hover:text-white transition-colors items-center gap-2">
              Book a free demo <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding pb-[80px]" id="book-call">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn xOffset={-30} yOffset={0} duration={0.7}>
              <h2 className="text-white font-bold tracking-[-0.02em] text-3xl md:text-5xl">
                Ready to go digital?
              </h2>
              <p className="mt-4 leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.5)" }}>
                Tell us about your school. We'll get back within 24
                hours with a free consultation plan.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Free 30-minute demo — see EduOpus live",
                  "Response within 24 hours",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4" style={{ color: "rgba(255,255,255,0.2)" }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn xOffset={30} yOffset={0} duration={0.7}>
              <LeadForm source="homepage" />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
