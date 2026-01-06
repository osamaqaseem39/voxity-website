"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return <>{children}</>;
}

export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionP = motion.p;
export const MotionArticle = motion.article;







