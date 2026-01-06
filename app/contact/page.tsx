"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import SMTPForm from "@/components/SMTPForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Newsletter Section */}
      <section className="py-20 relative border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-3">
              Get Started
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">Get a Proposal</span>
            </h2>
            <p className="text-gray-400 text-xl mb-8">
              Ready to scale your Web3 project? Let&apos;s discuss how we can help.
            </p>
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

      {/* Contact Section */}
      <section className="py-20 relative grid-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-3">
              Reach Out
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">Contact us</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8">
              Let&apos;s build something amazing together
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassCard>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-400 text-lg mb-6">
                  Ready to build the future of Web3 together?
                </p>
                <div className="space-y-4 text-left">
                  <div>
                    <p className="text-base text-gray-500 mb-1">Email:</p>
                    <a
                      href="mailto:partnership.voxity@gmail.com"
                      className="text-[#e21b1b] hover:text-[#aa0f0f] transition-colors"
                    >
                      partnership.voxity@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-base text-gray-500 mb-1">X (Twitter):</p>
                    <a
                      href="https://twitter.com/voxity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e21b1b] hover:text-[#aa0f0f] transition-colors"
                    >
                      @voxity
                    </a>
                  </div>
                </div>
              </GlassCard>
              <GlassCard>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Start Your Project
                </h3>
                <p className="text-gray-400 text-lg mb-6">
                  Launch your Web3 project with confidence
                </p>
                <Button href="/" className="w-full">
                  Get Started
                </Button>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SMTP Configuration Section */}
      <section className="py-20 relative border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <p className="text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-3">
                Email Configuration
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text">SMTP Settings</span>
              </h2>
              <p className="text-gray-400 text-xl">
                Configure your email server settings
              </p>
            </div>
            <SMTPForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
