"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, LucideIcon } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: LucideIcon;
  description: string;
  features?: string[];
  benefits?: string[];
}

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  icon: Icon,
  description,
  features,
  benefits,
}: ServiceModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="relative z-10 w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-strong rounded-xl sm:rounded-2xl w-full max-h-[90vh] overflow-hidden border border-white/20">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 border-b border-white/10">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#880c0c]/30 to-[#e21b1b]/30 flex-shrink-0">
                    <Icon className="text-[#e21b1b] w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white truncate">{title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 sm:p-2.5 md:p-3 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white flex-shrink-0 ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                  {description}
                </p>

                {features && features.length > 0 && (
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4 uppercase tracking-wider">
                      Key Features
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-300">
                          <span className="text-[#e21b1b] mt-0.5 sm:mt-1 flex-shrink-0 text-base sm:text-lg md:text-xl">▸</span>
                          <span className="text-sm sm:text-base md:text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {benefits && benefits.length > 0 && (
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4 uppercase tracking-wider">
                      Benefits
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-300">
                          <span className="text-[#e21b1b] mt-0.5 sm:mt-1 flex-shrink-0 text-base sm:text-lg md:text-xl">✓</span>
                          <span className="text-sm sm:text-base md:text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
