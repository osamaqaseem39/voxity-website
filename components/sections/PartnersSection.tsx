"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Partner = { name: string; logo: string };

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="py-20 relative border-y border-white/10 bg-[#880c0c] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-base font-semibold text-white/80 uppercase tracking-wider mb-3">Partnerships</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">Our Trusted Web3 Partners</h2>
          <p className="text-white/70 text-xl max-w-2xl mx-auto mt-4">
            Collaborating with industry leaders to drive innovation
          </p>
        </motion.div>

        <div className="relative py-8">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 py-4"
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
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center justify-center cursor-default group border border-white/20 flex-shrink-0 gap-4 hover:border-[#e21b1b]/50 transition-all duration-300"
                  style={{ width: "300px" }}
                >
                  <div className="relative w-full h-32 transition-all duration-300">
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain" sizes="300px" />
                  </div>
                  <p className="text-white text-base font-medium text-center">{partner.name}</p>
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
