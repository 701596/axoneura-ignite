import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Globe, Megaphone, Zap, GraduationCap, Store, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import LeadForm from "@/components/LeadForm";

const Home = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden section-padding !pt-28 sm:!pt-36 !pb-20">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            AI & Digital Systems for India
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Stop running your school on WhatsApp groups
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Axoneura builds digital systems that automate operations and make you look like a category leader online.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact">
              <Button size="lg" className="glow-border text-base px-8">
                Book a free call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-base">
                See our services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Trust bar */}
    <SectionWrapper className="!py-10 border-y border-border/10">
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-muted-foreground">
        {["50+ Projects Delivered", "Schools & Businesses", "Made in India 🇮🇳", "24/7 Support"].map((t) => (
          <span key={t} className="text-sm font-medium tracking-wide">{t}</span>
        ))}
      </div>
    </SectionWrapper>

    {/* Services overview */}
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What we build</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">End-to-end digital solutions for schools and local businesses across India.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <ServiceCard icon={Code2} title="SaaS Development" description="Custom software platforms built to solve your specific operational challenges." />
        <ServiceCard icon={Globe} title="Web Design" description="Modern, fast websites that establish your brand as a category leader." />
        <ServiceCard icon={Megaphone} title="Digital Marketing" description="SEO, social media, and ad campaigns that bring real leads to your door." />
        <ServiceCard icon={Zap} title="Automation" description="Eliminate manual work with smart workflows that save you hours every day." />
      </div>
    </SectionWrapper>

    {/* Who we serve */}
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Who we serve</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: GraduationCap,
            title: "Schools & Institutions",
            desc: "From admissions to fee collection, we digitize every process so you can focus on education.",
            link: "/schools",
          },
          {
            icon: Store,
            title: "Local Businesses",
            desc: "Get discovered online, automate operations, and compete with the big brands in your city.",
            link: "/business",
          },
        ].map((item) => (
          <Link key={item.link} to={item.link}>
            <motion.div whileHover={{ y: -4 }} className="glass-card p-8 h-full group hover:glow-border transition-all">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              <span className="mt-4 inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </SectionWrapper>

    {/* Why us */}
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Why Axoneura</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          "Built for Indian businesses — we understand your market",
          "End-to-end: design, develop, deploy, and support",
          "Transparent pricing, no hidden costs",
          "Mobile-first — because your users are on phones",
          "Fast delivery with modern tech stack",
          "Dedicated support — we're a WhatsApp message away",
        ].map((point) => (
          <div key={point} className="glass-card p-5 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm text-foreground leading-relaxed">{point}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* Lead capture */}
    <SectionWrapper id="book-call">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Ready to go digital?</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
            Tell us about your school or business. We'll get back to you within 24 hours with a free consultation plan.
          </p>
        </div>
        <LeadForm source="homepage" />
      </div>
    </SectionWrapper>
  </>
);

export default Home;
