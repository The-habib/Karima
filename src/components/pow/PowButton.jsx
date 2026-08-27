import React from "react";
import { motion } from "framer-motion";
import { playPopSound } from "@/lib/soundEffects";

export default function PowButton({
  children,
  onClick,
  bg = "#CCFF00",
  color = "#000",
  className = "",
  playAudio = true,
  ...props
}) {
  const handleClick = (e) => {
    if (playAudio) {
      playPopSound();
    }
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        boxShadow: "8px 8px 0px 0px #000000",
        y: -2,
      }}
      whileTap={{
        scale: 0.96,
        boxShadow: "2px 2px 0px 0px #000000",
        y: 2,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onClick={handleClick}
      style={{ background: bg, color }}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full border-4 border-black px-7 py-3 font-display text-lg tracking-wide shadow-[6px_6px_0_0_#000] cursor-pointer select-none ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
