"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AnalyticsSection from "@/components/sections/AnalyticsSection";
import AboutSection from "@/components/sections/AboutSection";
import QuoteSection from "@/components/sections/QuoteSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import PerspectivesSection from "@/components/sections/PerspectivesSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ContactSection from "@/components/sections/ContactSection";
import { getAllPerspectives } from "@/lib/perspectives";
import { partners, services, projects } from "@/lib/constants";
import { useState } from "react";

const perspectives = getAllPerspectives().slice(0, 6) as any[]; // Show first 6 on homepage

export default function Home() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AnalyticsSection />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <QuoteSection />
      <ServicesSection
        services={services}
        selectedServiceIndex={selectedServiceIndex}
        setSelectedServiceIndex={setSelectedServiceIndex}
      />
      <PartnersSection partners={partners} />
      <PerspectivesSection perspectives={perspectives} />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
