import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { getPerspectiveBySlug, getAllPerspectives } from "@/lib/perspectives";
import ReactMarkdown from "react-markdown";
import { MotionDiv, MotionH1, MotionP, MotionArticle } from "./client";

// Generate static paths for export
export function generateStaticParams() {
  const perspectives = getAllPerspectives();
  return perspectives.map((perspective) => ({
    slug: perspective.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function PerspectivePage({ params }: PageProps) {
  const perspective = getPerspectiveBySlug(params.slug);

  if (!perspective) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <section className="relative pt-32 pb-20 grid-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-7xl md:text-8xl font-bold mb-6">
                <span className="gradient-text">404</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                This perspective article could not be found.
              </p>
              <Link
                href="/perspectives"
                className="inline-flex items-center gap-2 text-[#e21b1b] hover:text-[#aa0f0f] transition-colors group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Perspectives</span>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const Icon = perspective.icon;

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Article Header */}
      <section className="relative pt-32 pb-20 grid-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/perspectives"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#e21b1b] transition-colors mb-8 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Perspectives</span>
            </Link>

            {/* Category and Date */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-4 py-2 text-base font-semibold text-[#e21b1b] bg-[#e21b1b]/10 rounded-full">
                {perspective.category}
              </span>
              <div className="flex items-center gap-2 text-gray-400 text-base">
                <Calendar size={16} />
                <span>{perspective.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-base">
                <Clock size={16} />
                <span>{perspective.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
              <span className="gradient-text">{perspective.title}</span>
            </h1>

            {/* Excerpt */}
            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              {perspective.excerpt}
            </p>

            {/* Author and Tags */}
            <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-white/10">
              {perspective.author && (
                <div className="text-gray-400">
                  <span className="text-gray-500">By </span>
                  <span className="text-white">{perspective.author}</span>
                </div>
              )}
              {perspective.tags && perspective.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {perspective.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm text-gray-400 bg-white/5 rounded-full border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl mx-auto prose prose-invert prose-lg prose-headings:text-white prose-p:text-white prose-a:text-[#e21b1b] prose-strong:text-white prose-ul:text-white prose-ol:text-white prose-li:text-white">
            <div className="markdown-content">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-8 text-white gradient-text">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-8 text-white">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-3xl md:text-4xl font-semibold mb-3 mt-6 text-white">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-white leading-relaxed mb-4 text-xl">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 space-y-2 text-white">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-2 text-white">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-white">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-white font-semibold">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="text-white italic">{children}</em>
                  ),
                  code: ({ children }) => (
                    <code className="px-2 py-1 bg-white/10 rounded text-[#e21b1b] text-base">
                      {children}
                    </code>
                  ),
                }}
              >
                {perspective.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </section>

      {/* Back to Perspectives */}
      <section className="py-12 relative border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/perspectives"
              className="inline-flex items-center gap-2 text-[#e21b1b] hover:text-[#aa0f0f] transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>View All Perspectives</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
