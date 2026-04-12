import BentoServices from "@/components/BentoServices";
import LeadForm from "@/components/LeadForm";
import SectionWrapper from "@/components/SectionWrapper";

const Services = () => (
  <>
    {/* Offset for fixed navbar */}
    <div className="pt-20" />

    {/* Bento services grid */}
    <BentoServices />

    {/* CTA + Lead form */}
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="text-white font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.75rem, 2.5vw + 1rem, 3.25rem)" }}
          >
            Let's discuss your project
          </h2>
          <p className="mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
            Book a free consultation and we'll create a custom plan for you.
          </p>
        </div>
        <LeadForm source="services" />
      </div>
    </SectionWrapper>
  </>
);

export default Services;
