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
      <section className="relative pt-32 pb-20 grid-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-3">
              Insights & Perspectives
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="gradient-text">New Perspectives</span>
            </h1>
            <p className="text-xl text-gray-400">
              Stay ahead with insights, trends, and strategies from the Web3
              frontier
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-[#880c0c]/20 to-[#e21b1b]/20 flex-shrink-0">
                          <Icon className="text-[#e21b1b]" size={24} />
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 text-sm font-semibold text-[#e21b1b] bg-[#e21b1b]/10 rounded-full mb-3">
                            {perspective.category}
                          </span>
                          <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#e21b1b] transition-colors">
                            {perspective.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-400 text-base leading-relaxed mb-4 flex-1">
                        {perspective.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{perspective.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#e21b1b] group-hover:gap-3 transition-all">
                          <span>{perspective.readTime}</span>
                          <ArrowRight size={14} />
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

