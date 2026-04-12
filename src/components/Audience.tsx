import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Store, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AudienceTab {
  id: string;
  label: string;
  icon: typeof GraduationCap;
  heading: string;
  description: string;
  features: string[];
  link: string;
  ctaLabel: string;
}

const TABS: AudienceTab[] = [
  {
    id: "schools",
    label: "For Schools",
    icon: GraduationCap,
    heading: "Digitize Every School Operation",
    description:
      "From admissions to fee collection, attendance to report cards — we build complete digital infrastructure so you can focus on what matters: education.",
    features: [
      "Custom SaaS for admissions and fee management",
      "Mobile app for parents and staff",
      "Automated attendance and notifications",
      "Modern website that builds trust with parents",
      "Digital marketing to fill seats faster",
    ],
    link: "/schools",
    ctaLabel: "Explore School Solutions",
  },
  {
    id: "business",
    label: "For Businesses",
    icon: Store,
    heading: "Compete Like a Category Leader",
    description:
      "Stop losing customers to bigger brands. We build you the digital presence and operational systems that make you look like the obvious choice in your city.",
    features: [
      "Premium website design that converts visitors",
      "Google & social media marketing campaigns",
      "CRM and lead management automation",
      "WhatsApp Business API integration",
      "SEO to dominate local search results",
    ],
    link: "/business",
    ctaLabel: "Explore Business Solutions",
  },
];

const Audience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = TABS[activeTab];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-max">
        {/* Section header — no gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-white font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.75rem, 2.5vw + 1rem, 3.25rem)" }}
          >
            Who We Serve
          </h2>
          <p className="mt-4 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Purpose-built solutions for the two sectors that need digital
            transformation the most.
          </p>
        </motion.div>

        {/* Tab switcher — no purple active bg */}
        <div className="flex justify-center mb-10">
          <div className="glass-pill p-1 gap-1">
            {TABS.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "text-white"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 rounded-full border border-white/15"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <tab.icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card-strong p-8 sm:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <currentTab.icon className="w-5 h-5 text-white/60" />
                  </div>
                  <span className="eyebrow">{currentTab.label.toUpperCase()}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {currentTab.heading}
                </h3>
                <p className="mt-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {currentTab.description}
                </p>

                <Link to={currentTab.link} className="inline-block mt-8">
                  <button className="flex items-center gap-2 bg-white text-black font-semibold rounded-full px-6 py-2.5 text-sm hover:bg-white/90 transition-colors">
                    {currentTab.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                {currentTab.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.02] transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Audience;
