"use client";

import React, { useState, useEffect } from "react";
import { Maximize2, Minimize2, Music, Volume2, VolumeX, Type, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ScholarlyControls() {
  const [isZenMode, setIsZenMode] = useState(false);

  const toggleZenMode = () => {
    const nextZenState = !isZenMode;
    setIsZenMode(nextZenState);
    
    if (nextZenState) {
      document.body.classList.add("zen-mode-active");
    } else {
      document.body.classList.remove("zen-mode-active");
    }
    
    // Smoothly hide/show non-zen elements
    const elementsToHide = document.querySelectorAll(".no-zen");
    elementsToHide.forEach(el => {
      if (nextZenState) {
        el.classList.add("zen-hide");
      } else {
        el.classList.remove("zen-hide");
      }
    });
  };

  return (
    <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-[60] no-print">
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col gap-3"
        >
          {/* Zen Mode Toggle */}
          <button
            onClick={toggleZenMode}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg border",
              isZenMode 
                ? "bg-primary text-white border-primary" 
                : "bg-surface text-primary border-border hover:border-primary/50"
            )}
            title={isZenMode ? "Thoát chế độ tập trung" : "Chế độ tập trung (Zen Mode)"}
          >
            {isZenMode ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
