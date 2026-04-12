import { MessageCircle, Mail, MapPin } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import LeadForm from "@/components/LeadForm";

const Contact = () => (
  <>
    <SectionWrapper className="!pt-28 sm:!pt-36">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Get in touch</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Have a project in mind? Fill out the form below or reach out directly. We respond within 24 hours.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="!pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <LeadForm source="contact" />

        <div className="space-y-6">
          {[
            { icon: Mail, label: "Email", value: "hello@axoneura.in" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with us" },
            { icon: MapPin, label: "Location", value: "India" },
          ].map((item) => (
            <div key={item.label} className="glass-card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  </>
);

export default Contact;
