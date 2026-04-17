import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { CheckCircle } from "lucide-react";
import Hero from "@/components/Hero";
import BentoServices from "@/components/BentoServices";
import Audience from "@/components/Audience";
import LeadForm from "@/components/LeadForm";
import FadeIn from "@/components/FadeIn";

const GlobeSection = dynamic(() => import('@/components/Globe'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Digital Systems for Schools and Businesses India | Axoneura',
  description: 'Axoneura builds digital systems for schools and businesses in India — custom software, websites, school ERPs, and digital marketing from Lucknow.',
  keywords: ['digital systems for schools and businesses India', 'web development India', 'school ERP India', 'fee management software', 'digital marketing Lucknow'],
  alternates: {
    canonical: 'https://axoneura.in/',
  },
  openGraph: {
    title: 'Digital Systems for Schools and Businesses India | Axoneura',
    description: 'Axoneura builds digital systems for schools and businesses in India — custom software, school ERPs, and digital marketing.',
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
    title: 'Digital Systems for Schools and Businesses India | Axoneura',
    description: 'Custom software, school ERPs, and digital marketing for schools and businesses across India.',
    images: ['https://axoneura.in/axoneura-og-1200x630.png'],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <BentoServices />
      <GlobeSection />
      <Audience />

      <section className="section-padding">
        <div className="container-max">
          <FadeIn className="mb-14 text-left">
            <span className="eyebrow mb-6 block uppercase tracking-widest text-[11px] text-white/30">
              THE DIFFERENCE
            </span>
            <h2 className="text-white font-bold tracking-[-0.02em] text-3xl md:text-5xl">
              Why Axoneura for Digital Systems in India
            </h2>
          </FadeIn>

          <div className="flex flex-col">
            {[
              {
                num: "01",
                title: "Built for your market, not a generic template",
                body: "Every system we build is designed around how our clients actually operate — their workflows, their market, their customers. Whether you're a school in Lucknow or a startup in London, we build for your reality, not a generic template."
              },
              {
                num: "02",
                title: "End-to-end ownership, not handoffs",
                body: "Strategy, design, development, launch, and support — all under one roof. No agency middlemen. No freelancer chaos. You deal with one team that owns the entire result."
              },
              {
                num: "03",
                title: "We measure success in rupees and admissions",
                body: "Every system we deliver has a job: generate leads, save time, or protect revenue. We track outcomes, not just deliverables. If it doesn't perform, we fix it — that's the commitment."
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
