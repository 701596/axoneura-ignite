import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Users } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const values = [
  { icon: Target, title: "Impact First", desc: "Every project must create measurable impact for our clients." },
  { icon: Heart, title: "Built with Care", desc: "We treat every client's business like our own." },
  { icon: Lightbulb, title: "Innovation", desc: "We use modern tech to solve real-world Indian problems." },
  { icon: Users, title: "Partnership", desc: "We're not vendors — we're long-term growth partners." },
];

const About = () => (
  <>
    <SectionWrapper className="!pt-28 sm:!pt-36">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          We're building the digital backbone for India's schools and businesses
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Axoneura is an AI and digital systems company based in India. We help schools and local businesses modernize their operations with custom software, websites, and marketing — at prices that make sense.
        </p>
      </div>
    </SectionWrapper>

    {/* Mission */}
    <SectionWrapper>
      <div className="glass-card p-8 sm:p-12 glow-border">
        <p className="text-xs text-primary font-medium uppercase tracking-wider mb-3">Our Mission</p>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground max-w-2xl">
          To make world-class digital infrastructure accessible to every school and business in India — regardless of size or budget.
        </h2>
      </div>
    </SectionWrapper>

    {/* Values */}
    <SectionWrapper>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {values.map((v) => (
          <motion.div key={v.title} whileHover={{ y: -4 }} className="glass-card p-6 hover:glow-border transition-all">
            <v.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-lg font-semibold text-foreground mb-1">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>

    {/* Team placeholder */}
    <SectionWrapper>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">The Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { name: "Founder", role: "Strategy & Product" },
          { name: "Lead Developer", role: "Engineering" },
          { name: "Marketing Head", role: "Growth & Campaigns" },
        ].map((m) => (
          <div key={m.role} className="glass-card p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">{m.name}</h3>
            <p className="text-sm text-muted-foreground">{m.role}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </>
);

export default About;
