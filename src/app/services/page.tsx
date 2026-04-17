import type { Metadata } from 'next';
import { ArrowRight, Code, Megaphone, Server, Shield, Smartphone, Zap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: 'Digital Services for Indian Businesses | Axoneura',
  description: 'Axoneura provides web development, custom software, ERPs, SEO, and digital marketing services for businesses and schools across India.',
  keywords: ['web development India', 'custom software India', 'SEO agency Lucknow', 'school ERP software'],
  alternates: {
    canonical: 'https://axoneura.in/services',
  },
  openGraph: {
    title: 'Digital Services for Indian Businesses | Axoneura',
    description: 'Web development, custom software, SEO, and digital marketing services for Indian businesses.',
    type: 'website',
    url: 'https://axoneura.in/services',
    siteName: 'Axoneura',
    images: [{ url: 'https://axoneura.in/axoneura-og-1200x630.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Services for Indian Businesses | Axoneura',
    description: 'Web development, custom software, SEO, and digital marketing services.',
    images: ['https://axoneura.in/axoneura-og-1200x630.png'],
  },
};

const services = [
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
            Digital Engineering & Marketing
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
          {services.map((service, index) => (
            <div
              key={service.id}
              className="glass-card group p-8 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03]"
            >
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
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
