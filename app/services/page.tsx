"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FlipCard from "@/components/FlipCard";
import ServiceModal from "@/components/ServiceModal";
import { motion } from "framer-motion";
import { useState } from "react";
import { services } from "@/lib/constants";

export default function ServicesPage() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 relative grid-background overflow-visible min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[#e21b1b] uppercase tracking-wider mb-2 sm:mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Comprehensive Web3 solutions tailored to your project&apos;s needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {services.map((service, index) => (
              <FlipCard
                key={service.title}
                front={{
                  icon: service.icon,
                  title: service.title,
                }}
                back={{
                  description: service.description,
                  features: service.features,
                  benefits: service.benefits,
                }}
                delay={index * 0.1}
                onClick={() => setSelectedServiceIndex(index)}
              />
            ))}
          </div>
          
          {/* Service Modal */}
          {selectedServiceIndex !== null && (
            <ServiceModal
              isOpen={selectedServiceIndex !== null}
              onClose={() => setSelectedServiceIndex(null)}
              title={services[selectedServiceIndex].title}
              icon={services[selectedServiceIndex].icon}
              description={services[selectedServiceIndex].description}
              features={services[selectedServiceIndex].features}
              benefits={services[selectedServiceIndex].benefits}
            />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
