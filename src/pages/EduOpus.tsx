import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import CaseStudy from "@/components/CaseStudy";

const features = [
  {
    title: "Automatic everything",
    sharp: "The moment a parent pays, everything happens automatically.",
    body: "A professional receipt generates instantly. Their balance updates in real time. A beautifully designed email lands in their inbox with full payment details. No staff intervention. No manual entry. No errors."
  },
  {
    title: "Parents stop calling",
    sharp: "Because they already know.",
    body: "Every parent gets their own portal — on their phone, as an app — where they can see their child's fees, attendance, homework, and payment history anytime. The school stops fielding 50 calls a day about how much is remaining."
  },
  {
    title: "Absent today? Parents know in seconds.",
    sharp: "No phone calls from the office. No manual messages. It just works.",
    body: "The moment a teacher marks a student absent, an automatic alert fires to the parent's phone — even if the app is closed."
  },
  {
    title: "Your finance team goes from overwhelmed to in control",
    sharp: "What used to take days to compile takes seconds.",
    body: "Real-time dashboards show exactly who has paid, who hasn't, and how much is outstanding — across every class, every fee category, every month."
  }
];

const results = [
  { stat: "Zero", label: "Fee-related chaos" },
  { stat: "Zero", label: "Manual receipts" },
  { stat: "Zero", label: "Missed parent communications" },
  { stat: "100%", label: "Financial accuracy" },
];

const EduOpus = () => (
  <>
    {/* 1. Hero Section */}
    <SectionWrapper className="!pt-28 sm:!pt-36">
      <div className="max-w-4xl text-center mx-auto">
        <span className="eyebrow mb-6 flex justify-center">PRODUCT</span>
        <h1
          className="font-bold leading-tight tracking-[-0.03em]"
          style={{ 
            fontSize: "clamp(2rem, 12vw, 5.5rem)",
            background: "linear-gradient(115deg, #ffffff 0%, #ffffff 30%, #d4d4d4 50%, #ffffff 70%, #a0a0a0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          EduOpus
        </h1>
        <p className="mt-6 text-base md:text-2xl font-medium text-white max-w-3xl mx-auto leading-relaxed md:leading-tight">
          The last fee management system your school will ever need
        </p>
        <p className="mt-4 text-base md:text-lg leading-relaxed md:leading-[1.7]" style={{ color: "rgba(255,255,255,0.5)" }}>
          Schools across India lose hundreds of hours every year to manual fee registers, handwritten receipts, unanswered parent calls, and chaotic spreadsheets. EduOpus ends all of that — permanently.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="flex items-center justify-center w-full gap-2 bg-white text-black rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
              Book a free demo <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <a href="#features" className="w-full sm:w-auto">
            <button className="flex items-center justify-center w-full gap-2 bg-transparent text-white border border-white/20 rounded-full px-8 py-3 text-sm font-semibold hover:bg-white/5 transition-colors">
              See how it works
            </button>
          </a>
        </div>
      </div>
    </SectionWrapper>

    {/* 2. Feature Cards */}
    <SectionWrapper id="features">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, idx) => (
          <div key={idx} className="glass-card p-6 md:p-8 flex flex-col items-start text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="font-semibold mb-4 text-base md:text-lg" style={{ color: "rgba(255,255,255,0.9)" }}>{feature.sharp}</p>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{feature.body}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* 3. Results Strip */}
    <SectionWrapper>
      <div className="glass-card p-8 md:p-12" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="grid grid-cols-2 gap-y-6 md:flex md:flex-row justify-between items-center md:divide-x divide-white/10">
          {results.map((result, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center justify-center text-center px-4 py-4 md:py-0 w-full md:w-auto">
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{result.stat}</span>
              <span className="text-xs md:text-sm tracking-wider font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>
                {result.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* 4. Case Study Block */}
    <SectionWrapper>
      <div className="flex justify-center mb-6">
        <span className="eyebrow" style={{ display: "inline-block" }}>REAL RESULT</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center max-w-4xl mx-auto leading-tight tracking-tight">
        How schools across India stopped losing money they didn't know they were losing
      </h2>
      <CaseStudy />
    </SectionWrapper>

    {/* 5. Bottom CTA Section */}
    <SectionWrapper>
      <div className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center" style={{ background: "rgba(139, 92, 246, 0.05)", border: "1px solid rgba(139, 92, 246, 0.2)" }}>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Ready to modernize your school?</h2>
        <p className="text-base md:text-lg mb-8 max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
          Book a free 30-minute demo. We'll show you exactly how EduOpus works for your institution.
        </p>
        <Link to="/contact" className="w-full sm:w-auto">
          <button className="flex items-center justify-center w-full sm:w-auto gap-2 bg-white text-black rounded-full px-8 py-4 text-base font-semibold hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Book a free demo <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </SectionWrapper>
  </>
);

export default EduOpus;
