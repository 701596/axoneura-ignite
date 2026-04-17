import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Axoneura',
  description: 'The requested page could not be found on Axoneura.',
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background glow logic to match Axoneura style */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      
      <SectionWrapper className="relative z-10 text-center">
        <h1 
          className="text-white font-bold leading-none tracking-tighter"
          style={{ fontSize: "clamp(6rem, 15vw, 12rem)" }}
        >
          404
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mt-6 mb-10 max-w-md mx-auto">
          We couldn't locate the page you're searching for.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-white text-black font-medium py-4 px-8 rounded-full hover:bg-white/90 transition-all duration-300"
        >
          Return to Homepage
          <ArrowRight className="w-5 h-5" />
        </Link>
      </SectionWrapper>
    </div>
  );
}
