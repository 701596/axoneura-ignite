import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Twitter, Linkedin } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts } from "@/data/blog";
import SectionWrapper from "@/components/SectionWrapper";
import LeadForm from "@/components/LeadForm";

const DEFAULT_OG_IMAGE = "https://axoneura.in/axoneura-og-1200x630.png";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return { title: "Post Not Found | Axoneura" };
  }

  return {
    title: `${post.title} | Axoneura Blog`,
    description: post.excerpt,
    keywords: [post.targetKeyword],
    alternates: {
      canonical: `https://axoneura.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://axoneura.in/blog/${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: [post.targetKeyword],
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.title,
      description: post.excerpt,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://axoneura.in/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.excerpt,
    image: DEFAULT_OG_IMAGE,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Axoneura",
      logo: {
        "@type": "ImageObject",
        url: "https://axoneura.in/logo.png",
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pb-24">
        {/* Article Header */}
        <header className="pt-32 pb-16 relative overflow-hidden">
          <SectionWrapper>
            <div className="max-w-3xl mx-auto relative z-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/40 border border-white/10 rounded-full px-3 py-1">
                  {post.targetKeyword}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/40">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/40">
                  <Clock size={14} />
                  {post.readingTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                {post.title}
              </h1>

              <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{post.author}</p>
                    <p className="text-xs text-white/40">Axoneura Team</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/40">
                  <span className="text-sm hidden sm:inline-block border-r border-white/10 pr-3 mr-1">
                    Share
                  </span>
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://axoneura.in/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://axoneura.in/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </header>

        {/* Article Content */}
        <SectionWrapper className="!py-0">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-white prose-a:underline-offset-4 hover:prose-a:text-white/80
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-white/70 prose-ul:my-6
                prose-li:my-2
                prose-blockquote:border-l-2 prose-blockquote:border-white/20 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper className="!pt-32">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-12 text-center rounded-3xl relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to upgrade your digital infrastructure?
                </h3>
                <p className="text-white/60 mb-8 max-w-xl mx-auto">
                  Whether you need a custom web application, an SEO strategy, or
                  comprehensive school management like EduOpus, Axoneura is here to
                  help.
                </p>
                <div className="flex justify-center">
                  <LeadForm source={`blog_${post.slug}`} />
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </article>
    </>
  );
}
