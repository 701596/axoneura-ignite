import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";
import InfiniteSlider from "@/components/ui/InfiniteSlider";

const HERO_HLS_URL =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const techStack = [
  "React",
  "TypeScript",
  "Supabase",
  "Vercel",
  "Node.js",
  "Tailwind CSS",
  "GitHub",
  "PostgreSQL",
  "Vite",
  "Framer Motion",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* ── Desktop Video Background (hidden on mobile) ── */}
      <div
        className="absolute inset-0 w-full h-full hidden md:block"
        style={{ zIndex: 0, opacity: 0.35 }}
      >
        <VideoPlayer
          hlsUrl={HERO_HLS_URL}
          className="w-full h-full object-cover mix-blend-screen"
        />
      </div>

      {/* ── Mobile Static Background (hidden on desktop) ── */}
      <div
        className="absolute inset-0 w-full h-full md:hidden"
        style={{
          zIndex: 0,
          background: "radial-gradient(ellipse 120% 60% at 50% 100%, rgba(80,40,160,0.35) 0%, transparent 65%), #000000",
        }}
      />

      {/* ── Gradient overlay for top/bottom fade — z-1 ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* ── Hero content (z-20, above everything) ─────── */}
      <motion.div
        className="relative flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-32 sm:pt-40 pb-10"
        style={{ zIndex: 20 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge pill */}
        <motion.div variants={childVariants} className="mb-8">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "999px", padding: "8px 18px", boxShadow: "0 0 20px rgba(255,255,255,0.06), 0 0 60px rgba(139,92,246,0.08)" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8B5CF6", boxShadow: "0 0 8px rgba(139,92,246,0.8)", flexShrink: 0, display: "inline-block" }}></span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", fontWeight: 500, letterSpacing: "0.01em", textShadow: "0 0 20px rgba(255,255,255,0.3)" }}>Trusted by schools and businesses across the world</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={childVariants}
          className="max-w-4xl font-bold tracking-[-0.03em] leading-[1.05] text-4xl md:text-6xl lg:text-7xl"
        >
          <span className="text-white">Your Vision</span>
          <br />
          <span className="gradient-text">Our Digital Reality.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={childVariants}
          className="mt-6 max-w-2xl leading-[1.7] text-base md:text-lg"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          We turn bold ideas into digital systems that run your school or
          business on autopilot.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={childVariants} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/contact">
            <button className="flex items-center gap-2 bg-white text-black font-semibold rounded-full px-8 py-3 text-base hover:bg-white/90 transition-colors">
              Book a free call
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          <Link to="/services">
            <button className="flex items-center gap-2 rounded-full px-7 py-3 text-white/80 text-sm font-medium border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300">
              See our services
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Logo Cloud ────────────────────────────── */}
      <div className="relative" style={{ zIndex: 20 }}>
        <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)", background: "transparent" }}>
          <div className="container-max flex flex-col md:flex-row items-center gap-6 md:gap-0 py-8 px-4 sm:px-6 lg:px-8">
            <div className="shrink-0 md:pr-8 md:border-r" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <p className="text-sm font-medium whitespace-nowrap" style={{ color: "rgba(255,255,255,0.35)" }}>
                Built with modern technology
              </p>
            </div>

            <div className="flex-1 min-w-0 md:pl-8">
              <InfiniteSlider speed={25} gap={56}>
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      borderRadius: "999px",
                      padding: "6px 14px",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.45)",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </InfiniteSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
