"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="py-20 relative border-y border-white/10 bg-[#880c0c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-light text-white italic">
            &ldquo;In a space driven by speed and noise, we choose clarity, strategy, and real outcomes&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
