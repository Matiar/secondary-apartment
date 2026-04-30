"use client";

import * as React from "react";
import { motion, type Transition } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section";
};

const defaultTransition: Transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

export function Reveal({
  children,
  className,
  delay = 0,
  y = 10,
  as = "div",
}: RevealProps) {
  const Comp = as === "section" ? motion.section : motion.div;
  return (
    <Comp
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </Comp>
  );
}

