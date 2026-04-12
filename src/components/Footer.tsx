import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/10 section-padding !py-12">
    <div className="container-max">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="text-xl font-bold text-foreground">
            Axon<span className="text-primary">eura</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Building digital systems that automate operations and make you look like a category leader online.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Pages</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/services", label: "Services" },
              { to: "/schools", label: "For Schools" },
              { to: "/business", label: "For Business" },
              { to: "/about", label: "About Us" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>SaaS Development</span>
            <span>Web Design</span>
            <span>Digital Marketing</span>
            <span>Automation</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>hello@axoneura.in</span>
            <span>India</span>
            <Link to="/contact" className="text-primary hover:underline">Get in touch →</Link>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border/10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Axoneura. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
