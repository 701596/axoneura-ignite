import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/schools", label: "Schools" },
  { to: "/business", label: "Business" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(0,0,0,0.8)", zIndex: 100, willChange: 'auto' } : { zIndex: 100, willChange: 'auto' }}
    >
      <div className="container-max flex items-center justify-between h-16 sm:h-18 px-4 sm:px-6 lg:px-8">
        {/* Logo — "Axon" white + "eura" dimmed, NO purple, NO clipping */}
        <Link to="/" className="text-xl shrink-0 pl-5 md:pl-0" style={{ 
          display: "flex",
          alignItems: "center",
          color: "#ffffff", 
          fontWeight: 700, 
          background: "none",
          backgroundClip: "unset", 
          WebkitBackgroundClip: "unset", 
          WebkitTextFillColor: "white",
          overflow: "visible",
          lineHeight: "1.5",
          height: "auto"
        }}>
          Axon<span style={{ color: "rgba(255,255,255,0.4)", WebkitTextFillColor: "rgba(255,255,255,0.4)", background: "none", backgroundClip: "unset", WebkitBackgroundClip: "unset" }}>eura</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link
                to={link.to}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === link.to
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="navActiveIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}

          {/* CTA — white bg, black text, no gradient border */}
          <motion.div custom={navLinks.length} initial="hidden" animate="visible" variants={navItemVariants}>
            <Link to="/contact">
              <button className="ml-4 flex items-center gap-2 bg-white text-black rounded-full px-5 py-2 text-sm font-semibold hover:bg-white/90 transition-colors">
                Book a free call
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile full-screen menu overlay */}
      <AnimatePresence>
        {mobileOpen && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col"
            style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#000000", overflow: "hidden", zIndex: 999999 }}
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between h-16 sm:h-18 px-4 sm:px-6">
              <Link to="/" onClick={() => setMobileOpen(false)} className="text-xl shrink-0 pl-5" style={{ 
                display: "flex",
                alignItems: "center",
                color: "#ffffff", 
                fontWeight: 700, 
                background: "none",
                backgroundClip: "unset", 
                WebkitBackgroundClip: "unset", 
                WebkitTextFillColor: "white",
                overflow: "visible",
                lineHeight: "1.5",
                height: "auto"
              }}>
                Axon<span style={{ color: "rgba(255,255,255,0.4)", WebkitTextFillColor: "rgba(255,255,255,0.4)", background: "none", backgroundClip: "unset", WebkitBackgroundClip: "unset" }}>eura</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2 rounded-lg hover:bg-white/5 transition-colors absolute top-4 right-4"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Links Centered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-[20px]">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white font-medium hover:text-white/70 transition-colors"
                    style={{ fontSize: "24px" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * navLinks.length }}
                className="mt-8"
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <button className="flex items-center gap-2 bg-white text-black rounded-full px-8 py-4 text-base font-semibold hover:bg-white/90 transition-colors">
                    Book a free call
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
