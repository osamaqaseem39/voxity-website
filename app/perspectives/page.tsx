"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { getAllPerspectives } from "@/lib/perspectives";

export default function PerspectivesPage() {
  const perspectives = getAllPerspectives();

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 grid-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-2 sm:mb-3">
              Insights & Perspectives
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">New Perspectives</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 px-2">
              Stay ahead with insights, trends, and strategies from the Web3
              frontier
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {perspectives.map((perspective, index) => {
              const Icon = perspective.icon;
              return (
                <motion.div
                  key={perspective.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link 
                    href={`/perspectives/${perspective.slug}`}
                    className="block h-full"
                  >
                    <GlassCard hover className="h-full flex flex-col cursor-pointer group">
                      <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                        <div className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-gradient-to-br from-[#880c0c]/20 to-[#e21b1b]/20 flex-shrink-0">
                          <Icon className="text-[#e21b1b]" size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-semibold text-[#e21b1b] bg-[#e21b1b]/10 rounded-full mb-2 sm:mb-3">
                            {perspective.category}
                          </span>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-[#e21b1b] transition-colors">
                            {perspective.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 flex-1">
                        {perspective.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 pt-3 sm:pt-4 border-t border-white/10">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                          <span>{perspective.date}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 text-[#e21b1b] group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                          <span>{perspective.readTime}</span>
                          <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

