"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300 relative",
        hover && "hover:border-[#e21b1b]/50 hover:shadow-lg hover:shadow-[#e21b1b]/20",
        className
      )}
      style={{ pointerEvents: "auto" }}
    >
      {children}
    </motion.div>
  );
}

