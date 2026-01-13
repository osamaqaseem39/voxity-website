"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import SMTPForm from "@/components/SMTPForm";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
          subject: 'New Contact Form Submission from Voxity Website',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 md:py-20 relative border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-2 sm:mb-3">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">Get a Proposal</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 px-2">
              Ready to scale your Web3 project? Let&apos;s discuss how we can help.
            </p>
            <div className="glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              {submitStatus.type && (
                <div
                  className={`mb-4 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e21b1b]/50 transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#e21b1b]/50 transition-colors resize-none text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <Button className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Proposal Request'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 relative grid-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-2 sm:mb-3">
              Reach Out
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">Contact us</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              Let&apos;s build something amazing together
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <GlassCard>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                  Ready to build the future of Web3 together?
                </p>
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
                    <p className="text-sm sm:text-base text-gray-500 mb-1">LinkedIn:</p>
                    <a
                      href="https://www.linkedin.com/company/voxityio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e21b1b] hover:text-[#aa0f0f] transition-colors text-sm sm:text-base"
                    >
                      Voxity
                    </a>
                  </div>
                </div>
              </GlassCard>
              <GlassCard>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                  Start Your Project
                </h3>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
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
      <section className="py-12 sm:py-16 md:py-20 relative border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm md:text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-2 sm:mb-3">
                Email Configuration
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
                <span className="gradient-text">SMTP Settings</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
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
