"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 relative grid-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm md:text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-2 sm:mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="gradient-text">About us</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mt-3 sm:mt-4 px-2">
                Building the future of Web3, one project at a time
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-2">
              <p>
                Voxity is a Web3-focused marketing and development studio built
                to help projects scale without noise or gimmicks. We work where
                strategy meets execution, building communities, shaping
                narratives, developing products, and delivering growth that
                actually sticks.
              </p>
              <p>
                We&apos;ve supported startups, protocols, and global teams across
                every stage from pre-launch groundwork to ecosystem expansion.
                Our approach is simple, understand the market, design a plan
                that actually makes sense, and execute it with precision.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#e21b1b]">
                Web3 moves fast. We move faster.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 sm:py-16 md:py-20 relative border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-300 italic px-4">
              &ldquo;In a space driven by speed and noise, we choose clarity,
              strategy, and real outcomes&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </section>

      <Footer />
    </main>
  );
}
