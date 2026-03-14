"use client";

import React from 'react';

export default function ScholarlyDivider() {
  return (
    <div className="flex items-center justify-center py-12 opacity-40">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
      <div className="mx-4 text-primary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
    </div>
  );
}
