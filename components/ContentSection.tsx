"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ContentSection({ id, title, children, className }: ContentSectionProps) {
  return (
    <motion.section 
      id={id} 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("py-12 md:py-16 scroll-mt-24 max-w-4xl", className)}
    >
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-12 pb-6 border-b border-border relative">
        {title}
        <div className="absolute bottom-0 left-0 w-24 h-2 bg-accent transform translate-y-px"></div>
      </h2>
      <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed text-justify font-sans">
        {children}
      </div>
    </motion.section>
  );
}
