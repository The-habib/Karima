import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import PowButton from "./PowButton";
import Confetti from "./Confetti";

export default function StoryCard({
  bg,
  textColor = "#000",
  eyebrow,
  headline,
  subtext,
  mascot,
  buttonLabel = "VIEW",
  buttonBg = "#CCFF00",
  buttonColor = "#000",
  onAction,
  burstKey,
  offset = "",
  pulse = false,
  wideButton = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 160, damping: 12 }}
      className={`relative rounded-[36px] border-4 border-black p-6 sm:p-8 shadow-[10px_10px_0_0_#000] overflow-hidden ${offset}`}
      style={{ background: bg, color: textColor }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#000 1.2px, transparent 1.2px)",
          backgroundSize: "12px 12px",
        }}
      />
      <Confetti burstKey={burstKey} />
      <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-[24px] border-4 border-black bg-white overflow-hidden">
          <Image src={mascot} alt={headline} className="w-full h-full" fittingType="fit" />
        </div>
        <div className="flex-1">
          {eyebrow && (
            <p className="font-display text-sm tracking-[0.25em] opacity-80">{eyebrow}</p>
          )}
          <h3 className="font-display text-3xl sm:text-5xl leading-[0.95] mt-1">{headline}</h3>
          <p className="mt-3 text-[1.125rem] font-bold leading-[1.6]">{subtext}</p>
          <div className={`mt-5 ${wideButton ? "w-full" : ""}`}>
            <PowButton
              onClick={onAction}
              bg={buttonBg}
              color={buttonColor}
              className={`${wideButton ? "w-4/5" : ""} ${pulse ? "animate-pow-pulse" : ""}`}
            >
              {buttonLabel}
            </PowButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}