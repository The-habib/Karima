import React from "react";

export default function Marquee({ text = "FULTUSI", bg = "#000", color = "#CCFF00", reverse = false }) {
  const items = Array.from({ length: 12 });
  return (
    <div className="overflow-hidden border-y-4 border-black py-2" style={{ background: bg }}>
      <div
        className="flex whitespace-nowrap gap-6"
        style={{
          animation: `pow-marquee 18s linear infinite${reverse ? " reverse" : ""}`,
          color,
        }}
      >
        {items.map((_, i) => (
          <span key={i} className="font-display text-2xl sm:text-3xl tracking-tight">
            {text} <span style={{ color: "#FF0099" }}>✷</span>
          </span>
        ))}
      </div>
    </div>
  );
}