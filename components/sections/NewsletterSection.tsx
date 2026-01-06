"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="py-20 relative border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#880c0c]/20 via-[#aa0f0f]/20 to-[#e21b1b]/20 animate-gradient" />
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-[#880c0c]/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#e21b1b]/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-3">Get Started</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">Get a Proposal</span>
          </h2>
          <p className="text-gray-400 text-xl mb-8">Ready to scale your Web3 project? Let&apos;s discuss how we can help.</p>
          <div className="glass-strong rounded-2xl p-8">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e21b1b]/50 transition-colors"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e21b1b]/50 transition-colors resize-none"
              />
              <Button className="w-full">Send Proposal Request</Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
