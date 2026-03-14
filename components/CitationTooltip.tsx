"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CitationTooltipProps {
  id: string;
  children: React.ReactNode;
  content: string;
}

export default function CitationTooltip({ id, children, content }: CitationTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="relative inline-block group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute z-[100] bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-surface border border-primary/20 shadow-xl rounded-lg text-xs leading-relaxed text-foreground/80 pointer-events-none"
          >
            <div className="font-serif font-bold text-primary mb-1 border-b border-primary/10 pb-1">
              Chú thích [{id}]
            </div>
            {content}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-surface border-r border-b border-primary/20 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
