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
      className={cn("h-[140px] w-full", className)}
      onClick={onClick}
    >
      <div className="relative w-full h-full">
        {/* Card Content */}
        <div className="glass rounded-xl py-8 px-6 flex flex-col items-center justify-center text-center cursor-pointer group border border-white/10 hover:border-[#e21b1b]/50 transition-all duration-300 h-full">
          <div className="p-2  rounded-xl bg-gradient-to-br from-[#880c0c]/30 to-[#e21b1b]/30 mb-2">
            <Icon className="text-[#e21b1b]" size={32} />
          </div>
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#e21b1b] transition-colors">
            {front.title}
          </h3>
          <p className="text-gray-400 text-sm">
            Click to learn more
          </p>
        </div>
      </div>
    </motion.div>
  );
}
