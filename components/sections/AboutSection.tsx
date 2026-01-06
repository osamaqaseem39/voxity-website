"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative grid-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <p className="text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-3">Who We Are</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">About us</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mt-4">
              Building the future of Web3, one project at a time
            </p>
          </div>
          <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
            <p>
              Voxity is a Web3-focused marketing and development studio built to help projects scale without noise or
              gimmicks. We work where strategy meets execution, building communities, shaping narratives, developing
              products, and delivering growth that actually sticks.
            </p>
            <p>
              We&apos;ve supported startups, protocols, and global teams across every stage from pre-launch groundwork to
              ecosystem expansion. Our approach is simple, understand the market, design a plan that actually makes
              sense, and execute it with precision.
            </p>
            <p className="text-2xl font-semibold text-[#e21b1b]">Web3 moves fast. We move faster.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
