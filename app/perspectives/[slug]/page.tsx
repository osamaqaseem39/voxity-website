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
        <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 grid-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6">
                <span className="gradient-text">404</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-2">
                This perspective article could not be found.
              </p>
              <Link
                href="/perspectives"
                className="inline-flex items-center gap-2 text-[#e21b1b] hover:text-[#aa0f0f] transition-colors group"
              >
                <ArrowLeft className="w-[18px] h-[18px] group-hover:-translate-x-1 transition-transform" />
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
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 grid-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/perspectives"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#e21b1b] transition-colors mb-6 sm:mb-8 group text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Perspectives</span>
            </Link>

            {/* Category and Date */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <span className="inline-block px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-base font-semibold text-[#e21b1b] bg-[#e21b1b]/10 rounded-full">
                {perspective.category}
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs sm:text-sm md:text-base">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{perspective.date}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-xs sm:text-sm md:text-base">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{perspective.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">{perspective.title}</span>
            </h1>

            {/* Excerpt */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
              {perspective.excerpt}
            </p>

            {/* Author and Tags */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 pb-6 sm:pb-8 border-b border-white/10">
              {perspective.author && (
                <div className="text-gray-400 text-sm sm:text-base">
                  <span className="text-gray-500">By </span>
                  <span className="text-white">{perspective.author}</span>
                </div>
              )}
              {perspective.tags && perspective.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {perspective.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm text-gray-400 bg-white/5 rounded-full border border-white/10"
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
      <section className="py-8 sm:py-10 md:py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl mx-auto prose prose-invert prose-lg prose-headings:text-white prose-p:text-white prose-a:text-[#e21b1b] prose-strong:text-white prose-ul:text-white prose-ol:text-white prose-li:text-white">
            <div className="markdown-content">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 mt-6 sm:mt-8 text-white gradient-text">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-8 text-white">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-3 mt-4 sm:mt-6 text-white">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-white leading-relaxed mb-3 sm:mb-4 text-base sm:text-lg lg:text-xl">
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
      <section className="py-8 sm:py-10 md:py-12 relative border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/perspectives"
              className="inline-flex items-center gap-2 text-[#e21b1b] hover:text-[#aa0f0f] transition-colors group text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:-translate-x-1 transition-transform" />
              <span>View All Perspectives</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
