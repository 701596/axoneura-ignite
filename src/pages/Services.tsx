import { Code2, Globe, Megaphone, Zap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import LeadForm from "@/components/LeadForm";

const services = [
  {
    icon: Code2,
    title: "SaaS Development",
    description: "Custom software platforms tailored for Indian schools and businesses. We build everything from student management systems to inventory trackers.",
    features: ["Custom dashboards & admin panels", "Role-based access control", "API integrations with existing tools", "Scalable cloud infrastructure"],
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Modern, blazing-fast websites that convert visitors into customers and establish your online authority.",
    features: ["Mobile-first responsive design", "SEO-optimized from day one", "Google My Business integration", "Fast loading on Indian networks"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns that bring genuine leads to your doorstep — not just vanity metrics.",
    features: ["Google Ads & Meta Ads management", "Local SEO for city-level ranking", "Social media content strategy", "Lead tracking & analytics"],
  },
  {
    icon: Zap,
    title: "Automation & Workflows",
    description: "Stop doing things manually. We automate repetitive tasks so your team can focus on what matters.",
    features: ["WhatsApp & SMS automation", "Fee reminders & payment follow-ups", "Admission funnel automation", "Report generation & scheduling"],
  },
];

const Services = () => (
  <>
    <SectionWrapper className="!pt-28 sm:!pt-36">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          End-to-end digital solutions designed for Indian schools and local businesses. We don't just build — we strategize, launch, and support.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="!pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Let's discuss your project</h2>
          <p className="mt-3 text-muted-foreground">Book a free consultation and we'll create a custom plan for you.</p>
        </div>
        <LeadForm source="services" />
      </div>
    </SectionWrapper>
  </>
);

export default Services;
