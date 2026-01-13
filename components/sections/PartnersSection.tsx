"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Partner = { name: string; logo: string };

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative border-y border-white/10 bg-[#880c0c] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white/80 uppercase tracking-wider mb-2 sm:mb-3">Partnerships</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">Our Trusted Web3 Partners</h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mt-3 sm:mt-4 px-2">
            Collaborating with industry leaders to drive innovation
          </p>
        </motion.div>

        <div className="relative py-4 sm:py-6 md:py-8">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6 md:gap-8 py-2 sm:py-3 md:py-4"
              animate={{
                x: [0, -50 * 100],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: "max-content" }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center cursor-default group border border-white/20 flex-shrink-0 gap-2 sm:gap-3 md:gap-4 hover:border-[#e21b1b]/50 transition-all duration-300"
                  style={{ width: "clamp(180px, 40vw, 300px)" }}
                >
                  <div className="relative w-full h-20 sm:h-24 md:h-32 transition-all duration-300">
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain" sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, 300px" />
                  </div>
                  <p className="text-white text-xs sm:text-sm md:text-base font-medium text-center">{partner.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#880c0c] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#880c0c] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
