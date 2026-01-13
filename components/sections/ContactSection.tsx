"use client";

import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative grid-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs sm:text-sm md:text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-2 sm:mb-3">Reach Out</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">Contact us</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-2">Let&apos;s build something amazing together</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <GlassCard>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Let&apos;s Connect</h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">Ready to build the future of Web3 together?</p>
              <div className="space-y-3 sm:space-y-4 text-left">
                <div>
                  <p className="text-sm sm:text-base text-gray-500 mb-1">Email:</p>
                  <a
                    href="mailto:partnership.voxity@gmail.com"
                    className="text-[#e21b1b] hover:text-[#aa0f0f] transition-colors text-sm sm:text-base break-all"
                  >
                    partnership.voxity@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm sm:text-base text-gray-500 mb-1">X (Twitter):</p>
                  <a
                    href="https://twitter.com/voxity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e21b1b] hover:text-[#aa0f0f] transition-colors text-sm sm:text-base"
                  >
                    @voxity
                  </a>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Start Your Project</h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">Launch your Web3 project with confidence</p>
              <Button href="/contact" className="w-full">
                Get Started
              </Button>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
