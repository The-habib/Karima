import React from "react";

export default function Marquee({
  text = "FOR YOU KARIMA ✦ THE MOST BEAUTIFUL & KINDEST SOUL",
  bg = "#000000",
  color = "#CCFF00",
  reverse = false,
}) {
  const words = Array.from({ length: 6 });
  return (
    <div className="overflow-hidden border-y-4 border-black py-2.5 select-none" style={{ background: bg }}>
      <div
        className="flex w-max whitespace-nowrap gap-6"
        style={{
          animation: `pow-marquee ${reverse ? "25s" : "22s"} linear infinite${reverse ? " reverse" : ""}`,
          color,
        }}
      >
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-6">
          {words.map((_, i) => (
            <span key={`a-${i}`} className="flex items-center gap-4 font-display text-xl sm:text-2xl tracking-wide">
              <span>{text}</span>
              <span className="text-[#FF0099] text-base">✦</span>
            </span>
          ))}
        </div>
        {/* Track 2 for seamless infinite loop */}
        <div className="flex shrink-0 items-center gap-6" aria-hidden="true">
          {words.map((_, i) => (
            <span key={`b-${i}`} className="flex items-center gap-4 font-display text-xl sm:text-2xl tracking-wide">
              <span>{text}</span>
              <span className="text-[#FF0099] text-base">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
