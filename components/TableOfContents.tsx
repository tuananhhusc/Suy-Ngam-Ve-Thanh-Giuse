"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { List, X } from "lucide-react";

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 150;

    for (let i = items.length - 1; i >= 0; i--) {
      const element = document.getElementById(items[i].id);
      if (element && element.offsetTop <= scrollPosition) {
        setActiveId(items[i].id);
        break;
      }
    }
  }, [items]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-accent text-primary-alt shadow-xl lg:hidden hover:scale-105 transition-transform"
        aria-label="Toggle Table of Contents"
      >
        {isOpen ? <X size={24} /> : <List size={24} />}
      </button>

      <nav className={cn(
        "fixed lg:sticky top-0 lg:top-8 z-40 w-80 lg:w-72 h-[100dvh] lg:h-[calc(100vh-4rem)] bg-surface border-r lg:border border-border p-6 shadow-2xl lg:shadow-md lg:rounded-2xl transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <h3 className="text-2xl font-serif font-bold text-primary mb-6 pb-4 border-b border-border/50">
          Nội Dung
        </h3>
        <ul className="space-y-4 flex-1">
          {items.map((item) => (
            <li key={item.id} className={cn("transition-all", item.level === 2 ? "ml-4" : "")}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block text-sm leading-relaxed tracking-wide transition-all duration-200 border-l-2 py-1",
                  activeId === item.id 
                    ? "text-primary font-bold border-accent pl-4 bg-primary/5 rounded-r-md" 
                    : "text-foreground/70 hover:text-primary hover:border-primary/30 border-transparent pl-3"
                )}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-30 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
