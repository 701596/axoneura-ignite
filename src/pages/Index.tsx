import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import BentoServices from "@/components/BentoServices";
import GlobeSection from "@/components/Globe";
import Audience from "@/components/Audience";
import LeadForm from "@/components/LeadForm";

/* ── Trust signals ────────────────────────── */
const trustPoints = [
  "Built for Indian businesses — we understand your market",
  "End-to-end: design, develop, deploy, and support",
  "Transparent pricing, no hidden costs",
  "Mobile-first — because your users are on phones",
  "Fast delivery with modern tech stack",
  "Dedicated support — we're a WhatsApp message away",
];

const Home = () => (
  <>
    {/* 1. Hero */}
    <Hero />

    {/* 2. Services — Bento Grid */}
    <BentoServices />

    {/* 3. Globe */}
    <GlobeSection />

    {/* 4. Audience */}
    <Audience />

    {/* 5. Why Axoneura */}
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-left"
        >
          <span className="eyebrow mb-6 block uppercase tracking-widest text-[11px] text-white/30">THE DIFFERENCE</span>
          <h2
            className="text-white font-bold tracking-[-0.02em] text-3xl md:text-5xl"
          >
            Why Axoneura
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {[
            {
              num: "01",
              title: "Built for your market, not a generic template",
              body: "Every system we build is designed around how our clients actually operate — their workflows, their market, their customers. Whether you're a school in Lucknow or a startup in London, we build for your reality, not a generic template."
            },
            {
              num: "02",
              title: "End-to-end ownership, not handoffs",
              body: "Strategy, design, development, launch, and support — all under one roof. No agency middlemen. No freelancer chaos. You deal with one team that owns the entire result."
            },
            {
              num: "03",
              title: "We measure success in rupees and admissions",
              body: "Every system we deliver has a job: generate leads, save time, or protect revenue. We track outcomes, not just deliverables. If it doesn't perform, we fix it — that's the commitment."
            }
          ].map((row, index) => (
            <motion.div
              key={row.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 sm:gap-10 py-10"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="shrink-0 sm:min-w-[80px]">
                <span className="text-[64px] font-[800] leading-none" style={{ color: "rgba(255,255,255,0.15)" }}>{row.num}</span>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[22px] text-white font-[600]">{row.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.55)" }}>{row.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* 6. Lead Form CTA */}
    <section className="section-padding pb-[80px]" id="book-call">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2
              className="text-white font-bold tracking-[-0.02em] text-3xl md:text-5xl"
            >
              Ready to go digital?
            </h2>
            <p className="mt-4 leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.5)" }}>
              Tell us about your school or business. We'll get back within 24
              hours with a free consultation plan.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {[
                "Free consultation — no strings attached",
                "Response within 24 hours",
                "India's fastest-growing digital agency",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4" style={{ color: "rgba(255,255,255,0.2)" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <LeadForm source="homepage" />
          </motion.div>
        </div>
      </div>
    </section>
  </>
);

export default Home;
