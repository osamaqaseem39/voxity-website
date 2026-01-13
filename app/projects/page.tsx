"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/constants";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 relative border-y border-white/10 bg-[#880c0c] overflow-hidden min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <p className="text-xs sm:text-sm md:text-base font-semibold text-white uppercase tracking-wider mb-2 sm:mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 text-white">
              Projects
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Showcasing our successful Web3 collaborations
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center group cursor-pointer"
              >
                <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-contain p-2 sm:p-3"
                      sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
                    />
                  </div>
                  <h3 className="text-white font-medium text-xs sm:text-sm md:text-base group-hover:text-[#e21b1b] transition-colors">
                    {project.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
