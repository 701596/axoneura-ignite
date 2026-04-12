import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(0,0,0,0.8)" } : undefined}
    >
      <div className="container-max flex items-center justify-between h-16 sm:h-18 px-4 sm:px-6 lg:px-8">
        {/* Logo — "Axon" white + "eura" dimmed, NO purple */}
        <Link to="/" className="text-xl font-bold tracking-tight text-white">
          Axon<span className="text-white/40">eura</span>
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

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#050505]/95 backdrop-blur-2xl border-l border-white/5 z-50 md:hidden"
            >
              <div className="flex items-center justify-between h-16 px-5">
                <span className="text-lg font-bold text-white">
                  Axon<span className="text-white/40">eura</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/60 hover:text-white p-1"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                        location.pathname === link.to
                          ? "text-white bg-white/5 border border-white/10"
                          : "text-white/40 hover:text-white hover:bg-white/[0.02]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-4">
                  <button className="w-full flex items-center justify-center gap-2 bg-white text-black rounded-full py-3 text-sm font-semibold">
                    Book a free call
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
