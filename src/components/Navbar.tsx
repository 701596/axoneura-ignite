import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <nav
      className="fixed top-0 left-0 right-0"
      style={{ zIndex: 100, overflow: 'visible' }}
    >
      {/* Separate background layer — keeps backdrop-filter isolated from text */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : ""
        }`}
        style={{
          background: scrolled ? "rgba(0,0,0,0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          zIndex: -1,
        }}
      />
      <div className="container-max flex items-center justify-between h-16 sm:h-18 px-4 sm:px-6 lg:px-8" style={{ overflow: 'visible' }}>
        <a href="/" style={{
          textDecoration: 'none',
          display: 'inline-block',
          flexShrink: 0,
          lineHeight: 1,
        }}>
          <span style={{
            fontWeight: 800,
            fontSize: '20px',
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}>Axoneura</span><span style={{
            fontWeight: 800,
            fontSize: '18px',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '-0.02em',
          }}></span>
        </a>

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
          className="md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          style={{
            cursor: "pointer",
            zIndex: 999999,
            position: "relative",
            background: "none",
            border: "none",
            color: "#ffffff",
            padding: "8px",
          }}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile full-screen menu overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999999,
            background: "#000000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              color: "#ffffff",
              fontSize: "24px",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            <X size={28} />
          </button>

          {/* Nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "28px",
                color: "#ffffff",
                padding: "16px 0",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ marginTop: "32px", textDecoration: "none" }}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#ffffff",
                color: "#000000",
                borderRadius: "9999px",
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
            >
              Book a free call
              <ArrowRight style={{ width: "20px", height: "20px" }} />
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
