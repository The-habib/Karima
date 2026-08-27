import React from "react";
import { motion } from "framer-motion";

const COLORS = ["#CCFF00", "#FF0099", "#310062", "#FFFFFF"];

export default function Confetti({ burstKey }) {
  if (!burstKey) return null;
  const pieces = Array.from({ length: 26 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[36px]">
      {pieces.map((_, i) => (
        <motion.span
          key={`${burstKey}-${i}`}
          initial={{ x: "50%", y: "60%", scale: 0, opacity: 1 }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            rotate: Math.random() * 720,
            scale: 1,
            opacity: 0,
          }}
          transition={{ duration: 1.1 + Math.random() * 0.5, ease: "easeOut" }}
          className="absolute h-3 w-3 border-2 border-black"
          style={{
            background: COLORS[i % COLORS.length],
            borderRadius: i % 3 === 0 ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
}