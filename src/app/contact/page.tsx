import type { Metadata } from 'next';
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: 'Hire a Digital Agency in Lucknow | Axoneura',
  description: 'Hire Axoneura — a digital agency in Lucknow, India. Custom software, web development, and digital marketing. Book a free consultation today.',
  keywords: ['hire digital agency Lucknow', 'web developer Lucknow', 'software company India', 'digital marketing agency UP'],
  alternates: {
    canonical: 'https://axoneura.in/contact',
  },
  openGraph: {
    title: 'Hire a Digital Agency in Lucknow | Axoneura',
    description: 'Hire Axoneura — a digital agency in Lucknow, India. Custom software, web development, and digital marketing. Book a free consultation today.',
    type: 'website',
    url: 'https://axoneura.in/contact',
    siteName: 'Axoneura',
    images: [{ url: 'https://axoneura.in/axoneura-og-1200x630.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Digital Agency in Lucknow | Axoneura',
    description: 'Book a free consultation with Axoneura — Lucknow\'s leading digital agency for software and marketing.',
    images: ['https://axoneura.in/axoneura-og-1200x630.png'],
  },
};

export default function Contact() {
  return (
    <>
      <SectionWrapper className="!pt-28 sm:!pt-36">
        <div className="max-w-2xl">
          <h1
            className="text-white font-bold tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3.25rem)" }}
          >
            Hire a Digital Agency in Lucknow
          </h1>
          <p className="mt-4 text-lg leading-[1.7]" style={{ color: "rgba(255,255,255,0.5)" }}>
            Looking to hire a digital agency in Lucknow? Fill out the form below or reach out
            directly. We respond within 24 hours with a free consultation plan tailored to
            your business.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="!pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <LeadForm source="contact" />

          <div className="space-y-4">
            {[
              { 
                icon: Mail, 
                label: "Email", 
                render: () => (
                  <div className="flex flex-col gap-1">
                    <a href="mailto:axoeduopus@gmail.com" className="hover:text-white/80 transition-colors">axoeduopus@gmail.com</a>
                    <a href="mailto:axoneura@gmail.com" className="hover:text-white/80 transition-colors">axoneura@gmail.com</a>
                  </div>
                )
              },
              { 
                icon: MessageCircle, 
                label: "WhatsApp", 
                render: () => <a href="https://wa.me/917015964277?text=Hi%20Axoneura%2C%20I%20want%20to%20book%20a%20free%20call" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Chat with us on WhatsApp</a> 
              },
              { 
                icon: Phone, 
                label: "Phone", 
                render: () => <a href="tel:+917015964277" className="hover:text-white/80 transition-colors">+91 70159 64277</a> 
              },
              { 
                icon: MapPin, 
                label: "Location", 
                render: () => <a href="https://www.google.com/maps/search/?api=1&query=Lucknow,+Uttar+Pradesh" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Lucknow, Uttar Pradesh, India</a> 
              },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-5 flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <item.icon className="w-5 h-5 text-white/50" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {item.label}
                  </p>
                  <div className="text-sm font-medium text-white">{item.render()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
