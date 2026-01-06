"use client";

import Button from "@/components/Button";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-background noise-overlay"
    >
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Voxity</span>
            <br />
            <span className="text-white">Your Ultimate Web3 Partner</span>
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Driving your success in the decentralized world with tailored Web3 solutions—from go-to-market
            strategies and community building to smart contract development
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button href="/contact">Launch Your Project</Button>
            <Button variant="outline" href="/about">
              Talk to Us <ArrowRight className="inline ml-2" size={24} />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/4 left-10 text-[#e21b1b]/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Sparkles size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 text-[#aa0f0f]/20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Sparkles size={40} />
      </motion.div>
    </section>
  );
}
