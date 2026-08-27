import React from "react";

export default function PowButton({ children, onClick, bg = "#CCFF00", color = "#000", className = "" }) {
  return (
    <button
      onClick={onClick}
      style={{ background: bg, color }}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full border-4 border-black px-7 py-3 font-display text-lg tracking-wide
        shadow-[6px_6px_0_0_#000] transition-all duration-150 active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0_0_#000]
        hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000] ${className}`}
    >
      {children}
    </button>
  );
}