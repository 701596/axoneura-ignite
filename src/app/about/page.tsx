import type { Metadata } from 'next';
import SectionWrapper from "@/components/SectionWrapper";
import FadeIn from "@/components/FadeIn";

const stats = [
  { value: "Secure", label: "Data Architecture" },
  { value: "Lucknow, UP", label: "Headquartered" },
  { value: "Schools + Business", label: "We serve" },
  { value: "100%", label: "Data accuracy" },
];

const missionValues = [
  {
    title: "Accountability",
    description: "We own our results, not our excuses.",
  },
  {
    title: "Clarity",
    description: "No jargon. You always know what we're building and why.",
  },
  {
    title: "Craft",
    description: "We build things meant to last, not just to launch.",
  },
];

export const metadata: Metadata = {
  title: 'About Axoneura — Digital Agency in Lucknow, India',
  description: 'Axoneura is a digital agency in Lucknow, India, building custom software, school ERPs, and digital marketing systems for schools and businesses.',
  keywords: ['digital agency Lucknow India', 'software company Lucknow', 'school ERP developer', 'web development agency India'],
  alternates: {
    canonical: 'https://axoneura.in/about',
  },
  openGraph: {
    title: 'About Axoneura — Digital Agency in Lucknow, India',
    description: 'Axoneura is a digital agency in Lucknow, India, building custom software, school ERPs, and digital marketing systems.',
    url: 'https://axoneura.in/about',
    siteName: 'Axoneura',
    type: 'website',
    images: [{ url: 'https://axoneura.in/axoneura-og-1200x630.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Axoneura — Digital Agency in Lucknow, India',
    description: 'Custom software, school ERPs, and digital marketing — built by a digital agency in Lucknow, India.',
    images: ['https://axoneura.in/axoneura-og-1200x630.png'],
  },
};

export default function About() {
  return (
    <>
      <SectionWrapper className="!pt-28 sm:!pt-36">
        <div className="max-w-3xl">
          <span className="eyebrow">ABOUT AXONEURA</span>
          <h1
            className="text-white font-bold leading-tight tracking-[-0.03em] mt-4"
            style={{ fontSize: "clamp(2.5rem, 4vw + 1rem, 5rem)" }}
          >
            A Digital Agency in Lucknow Building India's Future
          </h1>
          <p
            className="mt-5 text-lg leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Axoneura is a digital agency in Lucknow, India, that helps schools and local businesses
            modernize their operations with custom software, websites, and marketing — at prices
            that make sense. We are the digital backbone for India's schools and businesses.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="!pt-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * 0.08}
              className="p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
              }}
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <FadeIn
          className="grid grid-cols-1 lg:grid-cols-5 gap-10"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "40px",
          }}
        >
          <div className="lg:col-span-3">
            <span
              className="text-xs uppercase font-medium"
              style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}
            >
              OUR MISSION
            </span>
            <p
              className="text-white mt-4 max-w-xl"
              style={{
                fontSize: "22px",
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              To make world-class digital infrastructure accessible to every
              school and business in India — regardless of size or budget.
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center">
            {missionValues.map((value, index) => (
              <div
                key={value.title}
                className="py-4"
                style={
                  index < missionValues.length - 1
                    ? { borderBottom: "1px solid rgba(255,255,255,0.08)" }
                    : undefined
                }
              >
                <p className="text-white font-semibold text-sm">{value.title}</p>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mb-10 text-center lg:text-left">
          <span className="eyebrow block mb-4 uppercase tracking-widest text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>OUR IMPACT</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Real Systems, Real Results from Our Digital Agency</h2>
          <p className="text-[15px] leading-[1.6] max-w-2xl" style={{ color: "rgba(255,255,255,0.5)" }}>
            From a school in Lucknow that plugged a two-year financial leak, to businesses across India that went from invisible to ranking on Google — our digital agency in Lucknow delivers measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Financial ERPs deployed",
              body: "100% accuracy rate — not a single rupee unaccounted for across every deployment. Deployed across 6+ schools in Uttar Pradesh",
            },
            {
              title: "Admission increases",
              body: "Schools using our web and SEO services report measurable increases averaging 3x more online enquiries within 6 months",
            },
            {
              title: "Businesses digitized",
              body: "Local businesses across UP and beyond now have professional digital presence, CRM, and automation. 12+ businesses now appearing on page 1 of Google for local searches",
            },
            {
              title: "One team, end to end",
              body: "Every client gets strategy, design, development, and support from the same people — no handoffs",
            }
          ].map((card, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                padding: "28px"
              }}
            >
              <h3 className="text-[11px] uppercase tracking-wider mb-2 leading-tight" style={{ color: "rgba(255,255,255,0.4)" }}>{card.title}</h3>
              <p className="text-white text-[15px] leading-[1.6]">{card.body}</p>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
