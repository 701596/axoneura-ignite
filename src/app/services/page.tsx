import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code, Megaphone, Server, Shield, Smartphone, Zap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: 'Web Development & Custom Software Services India | Axoneura',
  description: 'Axoneura provides web development, custom software, ERPs, SEO, and digital marketing services for businesses and schools across India.',
  keywords: ['web development India', 'custom software India', 'SEO agency Lucknow', 'school ERP software'],
  alternates: {
    canonical: 'https://axoneura.in/services',
  },
  openGraph: {
    title: 'Web Development & Custom Software Services India | Axoneura',
    description: 'Web development, custom software, SEO, and digital marketing services for Indian businesses.',
    type: 'website',
    url: 'https://axoneura.in/services',
    siteName: 'Axoneura',
    images: [{ url: 'https://axoneura.in/axoneura-og-1200x630.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & Custom Software Services India | Axoneura',
    description: 'Web development, custom software, SEO, and digital marketing services.',
    images: ['https://axoneura.in/axoneura-og-1200x630.png'],
  },
};

const services = [
  {
    id: "eduopus",
    title: "School Management ERP — EduOpus",
    icon: Server,
    description:
      "Our flagship school management system handles fees, attendance, parent communication, and admissions automatically. Used by schools across UP.",
    features: ["Online Admissions", "Fee Automation", "Parent App", "100% Financial Accuracy"],
    href: "/eduopus",
  },
  {
    id: "web-development",
    title: "Web & Mobile Development",
    icon: Code,
    description:
      "We build fast, responsive, mobile-first websites and web applications tailored for Indian networks.",
    features: ["Custom React/Next.js Apps", "E-commerce Platforms", "Mobile Applications", "High-Performance Landing Pages"],
  },
  {
    id: "custom-software",
    title: "Custom Software & ERPs",
    icon: Server,
    description:
      "From school management systems like EduOpus to custom inventory software, we automate your operations.",
    features: ["Complex Admin Dashboards", "Database Architecture", "Legacy System Modernization", "API Development"],
  },
  {
    id: "digital-marketing",
    title: "SEO & Digital Marketing",
    icon: Megaphone,
    description:
      "We get you ranked on Google and drive real, local leads to your business through targeted campaigns.",
    features: ["Local & Technical SEO", "Google & Meta Ads", "Social Media Growth", "Conversion Rate Optimization"],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Security",
    icon: Shield,
    description:
      "We deploy and manage secure, scalable infrastructure on modern cloud providers.",
    features: ["AWS/Vercel Deployment", "Database Security", "99.9% Uptime SLAs", "Automated Backups"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper className="!pt-28 sm:!pt-36">
        <div className="max-w-3xl">
          <span className="eyebrow">Our Services</span>
          <h1
            className="text-white font-bold leading-tight tracking-[-0.03em] mt-4"
            style={{ fontSize: "clamp(2.5rem, 4vw + 1rem, 5rem)" }}
          >
            Web Development & Custom Software Services
          </h1>
          <p
            className="mt-5 text-lg leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            We don't just build websites. We build complete digital systems designed
            to solve operational problems and drive revenue for Indian businesses and schools.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="!pt-0 !pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const content = (
              <>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mt-auto border-t border-white/10 pt-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-white/70">
                      <Zap className="w-4 h-4 mr-3 text-white/40" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            );

            return service.href ? (
              <Link
                key={service.id}
                href={service.href}
                className="glass-card group p-8 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03]"
              >
                {content}
              </Link>
            ) : (
              <div
                key={service.id}
                className="glass-card group p-8 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03]"
              >
                {content}
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Detailed Service Sections */}
      <SectionWrapper className="!pt-0 !pb-32 bg-axn-near-black">
        <div className="max-w-4xl mx-auto space-y-24">
          <div id="web-mobile-development">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Web & Mobile Application Development</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              A slow or unresponsive website directly translates to lost revenue. We specialize in building lightning-fast, mobile-optimized web applications tailored specifically for Indian network conditions. Using modern frameworks like React and Next.js, our digital products ensure seamless user experiences and higher conversion rates, whether it&apos;s a landing page, an e-commerce platform, or a native mobile app.
            </p>
          </div>

          <div id="custom-software-erp">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Custom Software & ERP Solutions</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              When off-the-shelf software falls short, we build custom solutions tailored strictly to your operational workflows. From complex school management systems like EduOpus to specialized inventory trackers, we architect robust databases and intuitive admin dashboards that eliminate manual data entry and connect fragmented departments within your business.
            </p>
          </div>

          <div id="seo-digital-marketing">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">SEO & Performance Digital Marketing</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              Having a great product doesn't matter if nobody can find you. We run targeted, data-driven SEO campaigns designed specifically to dominate local search results in India. We handle deep technical SEO, localized keyword targeting, and conversion-focused Google and Meta ad campaigns that deliver measurable outcomes — more calls, more leads, and increased walking traffic.
            </p>
          </div>

          <div id="cloud-infrastructure-security">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cloud Infrastructure & Security Management</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              We ensure your applications stay online and secure, regardless of traffic spikes. By leveraging modern cloud providers like AWS and Vercel, we deploy scalable infrastructure backed by automated backups and strict security protocols. We guarantee 99.9% uptime, secure database architecture, and strict compliance with modern data protection standards.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
