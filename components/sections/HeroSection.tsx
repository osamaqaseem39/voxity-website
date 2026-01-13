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
        className="absolute top-10 left-4 sm:top-20 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-[#880c0c]/30 rounded-full blur-3xl"
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
        className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#e21b1b]/30 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Voxity</span>
            <br />
            <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Your Ultimate Web3 Partner</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2"
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
        className="absolute top-1/4 left-2 sm:left-10 text-[#e21b1b]/20 hidden sm:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-2 sm:right-10 text-[#aa0f0f]/20 hidden sm:block"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </motion.div>
    </section>
  );
}
