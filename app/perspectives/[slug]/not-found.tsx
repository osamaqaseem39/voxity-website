import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative pt-32 pb-20 grid-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">404</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This perspective article could not be found.
            </p>
            <Link
              href="/perspectives"
              className="inline-flex items-center gap-2 text-[#e21b1b] hover:text-[#aa0f0f] transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Perspectives</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

