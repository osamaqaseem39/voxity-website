"use client";

import { motion } from "framer-motion";
import { Mail, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logo.png"
              alt="Voxity"
              width={120}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Your Ultimate Web3 Partner
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a
                href="mailto:partnership.voxity@gmail.com"
                className="flex items-center gap-2 hover:text-[#e21b1b] transition-colors"
              >
                <Mail size={16} />
                <span>Email: partnership.voxity@gmail.com</span>
              </a>
              <a
                href="https://twitter.com/voxity"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#e21b1b] transition-colors"
              >
                <Twitter size={16} />
                <span>X: @voxity</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a
                href="#about"
                className="block text-gray-400 hover:text-[#e21b1b] transition-colors"
              >
                About Us
              </a>
              <a
                href="#services"
                className="block text-gray-400 hover:text-[#e21b1b] transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-[#e21b1b] transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-[#e21b1b] transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Voxity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

