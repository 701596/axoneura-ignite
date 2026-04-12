import { motion } from "framer-motion";

/* ── Bento card data ─────────────────────── */
interface BentoCard {
  number: string;
  title: string;
  description: string;
  tags?: string[];
  span?: string;
}

const bentoCards: BentoCard[] = [
  {
    number: "01",
    title: "Custom SaaS development",
    description:
      "Purpose-built web applications for your exact workflow. Student portals, inventory systems, billing dashboards — we build what off-the-shelf can't.",
    tags: ["React", "Node.js", "Supabase"],
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    number: "02",
    title: "Website design and development",
    description:
      "Sites that convert, not just impress. Mobile-first, SEO-ready, fast on Indian networks.",
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    number: "03",
    title: "Digital marketing and SEO",
    description:
      "Get found by the right people. Local SEO, Google Ads, content that ranks.",
  },
  {
    number: "04",
    title: "Automation and workflows",
    description:
      "Stop doing the same task twice. We connect your tools and automate the repetitive work.",
  },
  {
    number: "05",
    title: "Ongoing support",
    description:
      "We don't vanish after launch. Monthly retainers, updates, and real accountability.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Services = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="eyebrow">WHAT WE BUILD</span>
          <h2
            className="text-white font-bold tracking-[-0.02em] mt-3 text-3xl md:text-5xl"
          >
            Systems that run your operation.
          </h2>
          <p className="mt-4 max-w-xl" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            From a simple website to a full SaaS — we scope exactly what you need.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {bentoCards.map((card, index) => (
            <motion.div
              key={card.number}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className={`glass-card p-7 sm:p-8 relative group ${card.span || ""}`}
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm leading-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>
                {card.description}
              </p>

              {/* Tech tags */}
              {card.tags && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[10px] font-medium"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.3)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
