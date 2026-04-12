import { Mail, MapPin, MessageCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import LeadForm from "@/components/LeadForm";

const Contact = () => (
  <>
    <SectionWrapper className="!pt-28 sm:!pt-36">
      <div className="max-w-2xl">
        <h1
          className="text-white font-bold tracking-[-0.03em]"
          style={{ fontSize: "clamp(2rem, 3vw + 1rem, 3.25rem)" }}
        >
          Get in touch
        </h1>
        <p className="mt-4 text-lg leading-[1.7]" style={{ color: "rgba(255,255,255,0.5)" }}>
          Have a project in mind? Fill out the form below or reach out directly.
          We respond within 24 hours.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="!pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <LeadForm source="contact" />

        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "hello@axoneura.in" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with us" },
            { icon: MapPin, label: "Location", value: "Lucknow, India" },
          ].map((item) => (
            <div key={item.label} className="glass-card p-5 flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <item.icon className="w-5 h-5 text-white/50" />
              </div>
              <div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {item.label}
                </p>
                <p className="text-sm font-medium text-white">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  </>
);

export default Contact;
