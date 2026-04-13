import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const footerLinks = [
  { to: "/services", label: "Services" },
  { to: "/schools", label: "Schools" },
  { to: "/business", label: "Business" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => (
  <footer className="bg-[#000000]" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", boxShadow: "none", backgroundImage: "none" }}>
    <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Brand */}
        <div className="max-w-xs">
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
            Building digital India
          </p>
        </div>

        {/* Center links */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — social buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/917015964277?text=Hi%20Axoneura%2C%20I%20want%20to%20book%20a%20free%20call"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            WhatsApp
            <ArrowRight className="w-3 h-3" />
          </a>

          <a
            href="https://www.instagram.com/axoneura?igsh=d3htcGUwZTJjcmY3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-3 py-2 rounded-full border transition-colors"
            style={{ color: "rgba(255,255,255,0.4)", borderColor: "rgba(255,255,255,0.1)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.4)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-14 pt-6 border-t border-white/5 text-center">
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          © {new Date().getFullYear()} Axoneura · <a href="https://axoneura.in" className="hover:text-white/40 transition-colors">axoneura.in</a> · <a href="https://www.google.com/maps/search/?api=1&query=Lucknow,+Uttar+Pradesh" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">Lucknow, India</a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
