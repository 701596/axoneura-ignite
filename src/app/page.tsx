import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { CheckCircle, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import FadeIn from "@/components/FadeIn";

const GlobeSection = dynamic(() => import('@/components/Globe'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'School ERP & Admission System India | Axoneura',
  description: 'Axoneura builds complete digital systems for Indian schools — increasing admissions, automating fee management, and reducing manual workload.',
  keywords: ['school ERP India', 'school admission system', 'fee management system', 'school management software'],
  alternates: {
    canonical: 'https://axoneura.in/',
  },
  openGraph: {
    title: 'School ERP & Admission System India | Axoneura',
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
    title: 'School ERP & Admission System India | Axoneura',
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
                subtitle: "Build trust & attract parents",
                description: "A professional, fast-loading website that showcases your school's strengths and ranks high on Google, bringing more inquiries directly to your office."
              },
              {
                title: "2. Admission System",
                subtitle: "Capture & track inquiries",
                description: "Stop relying on paper forms. Process applications online digitally, send automatic WhatsApp updates to parents, and never lose track of a potential admission."
              },
              {
                title: "3. Complete ERP",
                subtitle: "Manage students, fees & staff",
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
                body: "Traditional softwares are built for engineers, not educators. They are clunky, hard to train staff on, and look outdated. Axoneura is modern, incredibly simple to use, and focuses entirely on increasing your admissions."
              },
              {
                num: "02",
                title: "Versus Manual Excel & Registers",
                body: "Excel leads to manual entry errors and unseen financial leaks. Axoneura automates your receipts, sending immediate WhatsApp payment proofs, ensuring zero discrepancies at the end of the month."
              },
              {
                num: "03",
                title: "Versus Complex Platforms",
                body: "You shouldn't pay for 100 features if you only need 10. We don't overwhelm you with bloated modules. You get a fast, affordable platform designed specifically for the core needs of Indian schools."
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
      <section className="section-padding">
        <div className="container-max">
          <FadeIn className="text-center mb-14">
            <h2 className="text-white font-bold tracking-[-0.02em] text-3xl md:text-5xl">
              Simple, Honest Pricing Packages
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              No hidden fees. Choose a plan that fits your school&apos;s current needs and seamlessly upgrade as you grow.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <FadeIn delay={0.1} className="glass-card p-8 flex flex-col relative" style={{ background: "rgba(255,255,255,0.02)" }}>
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>Perfect for getting your school online quickly.</p>
              <ul className="space-y-4 mb-8 flex-1">
                {["Professional Modern Website", "SEO for Google Ranking", "Basic Admission Enquiries", "Mobile Responsive"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#book-call" className="block text-center w-full py-3 rounded-full text-sm font-semibold border border-white/20 text-white hover:bg-white/5 transition-colors">
                Contact Us
              </a>
            </FadeIn>

            {/* Growth */}
            <FadeIn delay={0.2} className="glass-card p-8 flex flex-col relative" style={{ background: "rgba(139, 92, 246, 0.08)", borderColor: "rgba(139, 92, 246, 0.3)" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8B5CF6] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>For schools ready to automate fee collections.</p>
              <ul className="space-y-4 mb-8 flex-1">
                {["Everything in Starter", "Basic ERP Modules", "Fee Management", "Automated WhatsApp Receipts", "Parent Data Portal"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-[#8B5CF6]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#book-call" className="block text-center w-full py-3 rounded-full text-sm font-semibold bg-white text-black hover:bg-white/90 transition-colors">
                Contact Us
              </a>
            </FadeIn>

            {/* Pro */}
            <FadeIn delay={0.3} className="glass-card p-8 flex flex-col relative" style={{ background: "rgba(255,255,255,0.02)" }}>
              <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>Complete digital transformation for established schools.</p>
              <ul className="space-y-4 mb-8 flex-1">
                {["Everything in Growth", "Full ERP Suite", "Teacher & Staff Payroll", "Advanced Analytics", "Custom Feature Requests"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#book-call" className="block text-center w-full py-3 rounded-full text-sm font-semibold border border-white/20 text-white hover:bg-white/5 transition-colors">
                Contact Us
              </a>
            </FadeIn>
          </div>
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
                Tell us about your school or business. We'll get back within 24
                hours with a free consultation plan.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Free consultation — no strings attached",
                  "Response within 24 hours",
                  "India's fastest-growing digital agency",
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
