import type { Metadata } from 'next';
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import FadeIn from "@/components/FadeIn";
import { blogPosts, formatBlogDate } from "@/data/blog";

export const metadata: Metadata = {
  title: 'Blog — Digital Marketing & School Tech Insights | Axoneura',
  description: 'Practical insights on school ERP systems, fee management software, SEO, and digital marketing for schools and businesses in India — by Axoneura.',
  keywords: ['school ERP blog India', 'digital marketing blog', 'school fee management tips', 'SEO for local business India'],
  alternates: { canonical: 'https://axoneura.in/blog' },
  openGraph: {
    title: 'Blog — Digital Marketing & School Tech Insights | Axoneura',
    description: 'Practical insights on school ERP systems, fee management, SEO, and digital marketing for schools and businesses in India.',
    type: 'website',
    url: 'https://axoneura.in/blog',
    siteName: 'Axoneura',
    images: [{ url: 'https://axoneura.in/axoneura-og-1200x630.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Digital Marketing & School Tech Insights | Axoneura',
    description: 'School ERP, fee management, SEO tips, and digital marketing insights from Axoneura.',
    images: ['https://axoneura.in/axoneura-og-1200x630.png'],
  },
};

export default function Blog() {
  return (
    <>
      <SectionWrapper className="!pt-28 sm:!pt-36 !pb-12">
        <div className="max-w-3xl">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Axoneura Blog
          </span>
          <h1
            className="text-white font-bold leading-tight tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem, 4vw + 1rem, 4.5rem)" }}
          >
            Insights for Schools & Businesses in India
          </h1>
          <p
            className="mt-5 text-lg leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Practical articles on school ERP systems, fee management, digital
            marketing, and building a real online presence — written by the team
            that builds these systems every day.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="!pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1} yOffset={24}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full glass-card p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:ring-1 hover:ring-white/10"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  className="inline-block text-[11px] font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {post.targetKeyword}
                </span>

                <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3 group-hover:text-white/90 transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {formatBlogDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {post.readingTime}
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-white/50 group-hover:text-white/80 transition-colors text-xs font-medium">
                    Read
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
