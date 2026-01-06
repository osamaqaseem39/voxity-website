"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative pt-32 pb-20 grid-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">404</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Page not found
            </p>
            <p className="text-gray-400 mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#880c0c] to-[#e21b1b] text-white rounded-lg hover:shadow-lg hover:shadow-[#e21b1b]/50 transition-all"
              >
                <Home size={18} />
                <span>Go Home</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#e21b1b]/50 text-[#e21b1b] rounded-lg hover:bg-[#e21b1b]/10 transition-all"
              >
                <ArrowLeft size={18} />
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

