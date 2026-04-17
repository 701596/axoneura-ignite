"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/eduopus", label: "EduOpus" },
  { href: "/schools", label: "Schools" },
  { href: "/business", label: "Business" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index, duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0"
      style={{ zIndex: 100, overflow: 'visible' }}
    >
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
        <Link href="/" style={{
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
          }}>Axoneura</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navActiveIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div custom={navLinks.length} initial="hidden" animate="visible" variants={navItemVariants}>
            <Link href="/contact" className="ml-4 flex items-center gap-2 bg-white text-black rounded-full px-5 py-2 text-sm font-semibold hover:bg-white/90 transition-colors">
              Book Free Demo
              <ArrowRight className="w-3.5 h-3.5" />
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
              key={link.href}
              href={link.href}
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
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ marginTop: "32px", textDecoration: "none" }}
            className="flex items-center gap-2 bg-white text-black rounded-full px-8 py-4 text-base font-semibold border-none cursor-pointer"
          >
            Book Free Demo
            <ArrowRight style={{ width: "20px", height: "20px" }} />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
