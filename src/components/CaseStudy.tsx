import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const metrics = [
  { value: "100%", label: "Financial accuracy since day one" },
  { value: "2+ years", label: "Of discrepancies surfaced and resolved" },
  { value: "3×", label: "Increase in qualified admission inquiries" },
];

const CaseStudy = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "48px",
    }}
  >
    {/* Top row — pills */}
    <div className="flex flex-wrap items-center gap-3">
      <span
        className="inline-flex items-center rounded-full px-3 py-1 text-xs"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        CASE STUDY — FINANCIAL ERP
      </span>
      <span
        className="inline-flex items-center rounded-full px-3 py-1 text-xs"
        style={{
          background: "rgba(139,92,246,0.1)",
          border: "1px solid rgba(139,92,246,0.2)",
          color: "#A78BFA",
        }}
      >
        100% leak-proof financials
      </span>
    </div>

    {/* Headline */}
    <h3
      className="text-white font-bold mt-5 max-w-[640px]"
      style={{ fontSize: "28px", lineHeight: 1.3 }}
    >
      How a school stopped losing money they didn't know they were losing
    </h3>

    {/* Body copy */}
    <div
      className="mt-6 max-w-[680px] space-y-5"
      style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.75 }}
    >
      <p>
        Across Uttar Pradesh, schools had been managing their finances the same way
        for years — spreadsheets, manual entries, and a lot of trust. On paper,
        everything balanced. In reality, money was quietly leaking in ways no one
        could trace. Today, multiple schools in UP are running Axoneura's Financial
        Management ERP and seeing the same result: complete, auditable financial
        clarity from day one.
      </p>
      <p>
        Axoneura deployed a custom Financial Management ERP built specifically
        for school operations. Within the first month of going live, the system
        flagged discrepancies that had gone unnoticed for over two years. Every
        rupee entering and leaving the institution was now tracked,
        timestamped, and auditable. The school's management had, for the first
        time, a single source of truth.
      </p>
      <p>
        Since deployment, the system has maintained 100% financial accuracy —
        not a single rupee unaccounted for. The school has since expanded their
        Axoneura partnership to include a full digital presence upgrade: a new
        website, online admission portal, and SEO campaign that directly
        contributed to a measurable increase in new admissions the following
        academic year.
      </p>
    </div>

    {/* Metrics row */}
    <div className="mt-10 flex flex-col sm:flex-row">
      {metrics.map((metric, index) => (
        <div
          key={metric.value}
          className="py-4 sm:py-0 sm:px-8 first:sm:pl-0"
          style={
            index < metrics.length - 1
              ? { borderRight: "1px solid rgba(255,255,255,0.08)" }
              : undefined
          }
        >
          <p className="text-3xl font-extrabold text-white">{metric.value}</p>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
            {metric.label}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <p className="mt-8" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
      Want results like this?{" "}
      <Link
        to="/contact"
        className="underline hover:text-white transition-colors"
      >
        Book a free call →
      </Link>
    </p>
  </motion.div>
);

export default CaseStudy;
