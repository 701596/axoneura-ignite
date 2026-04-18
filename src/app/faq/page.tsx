import type { Metadata } from 'next';
import SectionWrapper from "@/components/SectionWrapper";
import FaqAccordion from "@/components/FaqAccordion";

const faqCategories = [
  {
    title: "General",
    items: [
      {
        question: "What does Axoneura do?",
        answer:
          "Axoneura builds digital systems for schools and businesses across India. This includes custom software, school fee management ERPs, websites, digital marketing, SEO, automation, and ongoing support. We handle everything from strategy to launch to maintenance.",
      },
      {
        question: "Where is Axoneura based?",
        answer:
          "We are headquartered in Lucknow, Uttar Pradesh, India. We work with clients across India and internationally.",
      },
      {
        question: "How much does it cost to work with Axoneura?",
        answer:
          "Every project is scoped individually — pricing depends on what you need. We don't believe in one-size-fits-all packages. Book a free call and we'll give you a clear, honest estimate with no hidden costs.",
      },
      {
        question: "How long does a project take?",
        answer:
          "A basic website takes 2-3 weeks. A full custom SaaS or ERP system takes 6-12 weeks depending on complexity. We give you a clear timeline before we start and we stick to it.",
      },
    ],
  },
  {
    title: "For Schools",
    items: [
      {
        question: "What is EduOpus?",
        answer:
          "EduOpus is Axoneura's school management ERP — a complete system for managing fees, attendance, parent communication, and financial reporting. It automates everything that currently takes your staff hours every day.",
      },
      {
        question:
          "Can EduOpus replace our current fee register and spreadsheets?",
        answer:
          "Yes — completely. EduOpus handles fee collection, automatic receipt generation, real-time balance tracking, payment reminders, and full financial reporting. No more manual entries, no more spreadsheets.",
      },
      {
        question: "Will parents need to download an app?",
        answer:
          "Parents get a mobile-friendly portal they can access from any smartphone browser — no app download required. They can see fees, attendance, homework, and payment history anytime.",
      },
      {
        question: "Is our school's financial data secure?",
        answer:
          "Yes. All data is stored in encrypted cloud databases with role-based access control. Only authorized staff can access financial records. We use the same infrastructure as enterprise-grade software companies.",
      },
      {
        question: "Do you provide training for school staff?",
        answer:
          "Yes. Every EduOpus deployment includes full staff training, documentation, and a dedicated support period. Your team will be confident using the system before we hand it over.",
      },
      {
        question: "How have other schools benefited from EduOpus?",
        answer:
          "Schools using EduOpus have reported 100% financial accuracy since day one, elimination of fee-related discrepancies that had gone undetected for years, and significant reductions in parent inquiry calls. Some schools have also seen measurable increases in admissions after improving their digital presence with Axoneura.",
      },
    ],
  },
  {
    title: "For Businesses",
    items: [
      {
        question: "I just need a website. Can you help?",
        answer:
          "Absolutely. A professional website is often where we start. We build mobile-first, SEO-optimized websites that are fast on Indian networks and designed to convert visitors into customers.",
      },
      {
        question: "What is SEO and why does my business need it?",
        answer:
          "SEO — Search Engine Optimization — is the process of making your business appear on Google when people search for what you offer. If someone in your city searches for your service and you don't appear, your competitor gets that customer. We fix that.",
      },
      {
        question:
          "Do you work with small local businesses or only large companies?",
        answer:
          "We work with businesses of all sizes. Some of our best work has been for local shops, clinics, coaching centres, and service businesses that needed a professional digital presence to compete with larger competitors.",
      },
      {
        question: "What happens after my website launches?",
        answer:
          "We offer monthly maintenance and support retainers. We don't disappear after launch. Updates, security, performance, SEO monitoring — we handle all of it so you can focus on running your business.",
      },
      {
        question:
          "Can you help me get more customers through digital marketing?",
        answer:
          "Yes. We run Google Ads, Meta Ads, local SEO campaigns, and content strategies specifically designed for Indian markets. Every campaign is tied to a real business outcome — more calls, more walk-ins, more leads.",
      },
    ],
  },
  {
    title: "Technical",
    items: [
      {
        question: "Do I own my website and software after it's built?",
        answer:
          "Yes — 100%. You own all the code, the design, the domain, and the data. We hand over everything. No lock-in, no ongoing fees unless you choose our support retainer.",
      },
      {
        question: "What technology do you use to build software?",
        answer:
          "We use React, TypeScript, Node.js, Supabase, PostgreSQL, and deploy on Vercel and AWS. Modern, scalable, well-supported technology that won't become obsolete.",
      },
      {
        question: "Can you integrate with software we already use?",
        answer:
          "In most cases yes. We build API integrations with existing tools — payment gateways, accounting software, CRMs, messaging platforms. Tell us what you use and we'll tell you what's possible.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: 'Complete School ERP & Business Services FAQ | Axoneura',
  description: 'Find answers to common questions about school ERP systems in India, EduOpus fee management, website development, SEO, and digital marketing by Axoneura.',
  keywords: ['school ERP questions India', 'EduOpus FAQ', 'school management software FAQ', 'digital marketing FAQ India'],
  alternates: {
    canonical: 'https://axoneura.in/faq',
  },
  openGraph: {
    title: 'Complete School ERP & Business Services FAQ | Axoneura',
    description: 'Answers to common questions about school ERP systems, fee management, website development, and digital marketing in India.',
    type: 'website',
    url: 'https://axoneura.in/faq',
    siteName: 'Axoneura',
    images: [{ url: 'https://axoneura.in/axoneura-og-1200x630.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete School ERP & Business Services FAQ | Axoneura',
    description: 'Common questions about school ERP, fee management, and digital marketing in India — answered by Axoneura.',
    images: ['https://axoneura.in/axoneura-og-1200x630.png'],
  },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does Axoneura do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Axoneura builds digital systems for schools and businesses across India. This includes custom software, school fee management ERPs, websites, digital marketing, SEO, automation, and ongoing support."
        }
      },
      {
        "@type": "Question",
        "name": "What is EduOpus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EduOpus is Axoneura's school management ERP — a complete system for managing fees, attendance, parent communication, and financial reporting."
        }
      },
      {
        "@type": "Question",
        "name": "Can EduOpus replace our current fee register and spreadsheets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — completely. EduOpus handles fee collection, automatic receipt generation, real-time balance tracking, payment reminders, and full financial reporting."
        }
      },
      {
        "@type": "Question",
        "name": "Is our school's financial data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All data is stored in encrypted cloud databases with role-based access control. Only authorized staff can access financial records."
        }
      },
      {
        "@type": "Question",
        "name": "What technology do you use to build software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use React, TypeScript, Node.js, Supabase, PostgreSQL, and deploy on Vercel and AWS. Modern, scalable, well-supported technology."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to work with Axoneura?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every project is scoped individually. Book a free call and we'll give you a clear, honest estimate with no hidden costs."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectionWrapper className="!pt-28 sm:!pt-36">
        <div className="max-w-3xl">
          <span className="eyebrow">FAQ</span>
          <h1
            className="text-white font-bold leading-tight tracking-[-0.03em] mt-4"
            style={{ fontSize: "clamp(2.5rem, 4vw + 1rem, 5rem)" }}
          >
            School ERP Questions and Answers for India
          </h1>
          <p
            className="mt-5 text-lg leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Everything schools and businesses ask about school ERP systems in India
            before getting started with Axoneura.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="!pt-0 !pb-24">
        <div className="max-w-3xl">
          <FaqAccordion faqCategories={faqCategories} />
        </div>
      </SectionWrapper>
    </>
  );
}
