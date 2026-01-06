"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "px-10 py-5 rounded-lg font-semibold text-lg md:text-xl transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#880c0c] to-[#e21b1b] text-white hover:shadow-lg hover:shadow-[#e21b1b]/50",
    secondary:
      "bg-gradient-to-r from-[#aa0f0f] to-[#e21b1b] text-white hover:shadow-lg hover:shadow-[#aa0f0f]/50",
    outline:
      "border-2 border-[#e21b1b]/50 text-[#e21b1b] hover:bg-[#e21b1b]/10 hover:border-[#e21b1b]",
  };

  const content = (
    <motion.div
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {variant !== "outline" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#aa0f0f] to-[#e21b1b] opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        />
      )}
    </motion.div>
  );

  if (href) {
    // Use Next.js Link for internal routes, regular anchor for external/hash links
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    if (isInternal) {
      return (
        <Link href={href} className="inline-block">
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}

