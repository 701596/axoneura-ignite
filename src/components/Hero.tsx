import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";
import InfiniteSlider from "@/components/ui/InfiniteSlider";

const HERO_HLS_URL =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const partnerLogos = [
  { name: "OpenAI", url: "https://html.tailus.io/blocks/customers/openai.svg" },
  { name: "Nvidia", url: "https://html.tailus.io/blocks/customers/nvidia.svg" },
  { name: "GitHub", url: "https://html.tailus.io/blocks/customers/github.svg" },
  { name: "Google", url: "https://html.tailus.io/blocks/customers/google.svg" },
  { name: "Microsoft", url: "https://html.tailus.io/blocks/customers/microsoft.svg" },
  { name: "Loom", url: "https://html.tailus.io/blocks/customers/loom.svg" },
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

      {/* ── Mobile Aurora Background (hidden on desktop) ── */}
      <div
        className="absolute inset-0 w-full h-full md:hidden"
        style={{
          zIndex: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(90,40,180,0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(60,20,140,0.15) 0%, transparent 50%), #000000",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 100% 80% at 50% 100%, rgba(100,50,200,0.2) 0%, transparent 70%)",
            animation: "auroraShift 20s ease-in-out infinite alternate",
          }}
        />
      </div>

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
        <motion.div variants={childVariants} className="glass-pill mb-8">
          <Zap className="w-4 h-4 text-white/60" />
          <span 
            className="text-sm font-medium text-white/80" 
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.15)" }}
          >
            Trusted by schools and businesses across the world
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={childVariants}
          className="max-w-4xl font-bold tracking-[-0.03em] leading-[1.05]"
          style={{ fontSize: "clamp(3rem, 5vw + 1rem, 5.5rem)" }}
        >
          <span className="text-white">Your Vision</span>
          <br />
          <span className="gradient-text">Our Digital Reality.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={childVariants}
          className="mt-6 max-w-2xl leading-[1.7]"
          style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(1rem, 1.5vw + 0.5rem, 1.25rem)" }}
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
                Trusted by teams building the future
              </p>
            </div>

            <div className="flex-1 min-w-0 md:pl-8">
              <InfiniteSlider speed={25} gap={56}>
                {partnerLogos.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.url}
                    alt={logo.name}
                    className="h-6 w-auto brightness-0 invert opacity-25 hover:opacity-50 transition-opacity duration-300"
                    loading="lazy"
                  />
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
