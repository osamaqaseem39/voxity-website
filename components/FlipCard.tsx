"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FlipCardProps {
  front: {
    icon: LucideIcon;
    title: string;
  };
  back: {
    description: string;
    features?: string[];
    benefits?: string[];
  };
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export default function FlipCard({
  front,
  back,
  className,
  delay = 0,
  onClick,
}: FlipCardProps) {
  const Icon = front.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        opacity: { duration: 0.5, delay },
        y: { duration: 0.5, delay },
      }}
      className={cn("h-[120px] sm:h-[130px] md:h-[140px] w-full", className)}
      onClick={onClick}
    >
      <div className="relative w-full h-full">
        {/* Card Content */}
        <div className="glass rounded-xl py-4 sm:py-6 md:py-8 px-4 sm:px-5 md:px-6 flex flex-col items-center justify-center text-center cursor-pointer group border border-white/10 hover:border-[#e21b1b]/50 transition-all duration-300 h-full">
          <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-br from-[#880c0c]/30 to-[#e21b1b]/30 mb-1.5 sm:mb-2">
            <Icon className="text-[#e21b1b] w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 group-hover:text-[#e21b1b] transition-colors px-1">
            {front.title}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            Click to learn more
          </p>
        </div>
      </div>
    </motion.div>
  );
}
