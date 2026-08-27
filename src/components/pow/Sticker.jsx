import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

export default function Sticker({ src, rotate = 0, delay = 0, className = "", replayKey = 0 }) {
  return (
    <motion.div
      key={replayKey}
      initial={{ scale: 0, rotate: 0, opacity: 0 }}
      animate={{ scale: 1, rotate, opacity: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 12, delay }}
      className={`absolute border-4 border-black bg-white p-1 shadow-[8px_8px_0_0_#000] rounded-[18px] ${className}`}
    >
      <Image src={src} alt="Fultusi" className="w-full h-full rounded-[12px]" fittingType="fill" />
    </motion.div>
  );
}