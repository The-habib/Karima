import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Sparkles, Send, Star, Sun, ShieldCheck } from "lucide-react";
import PowButton from "./PowButton";
import { playSparkleChime } from "@/lib/soundEffects";

const BLESSINGS = [
  "I pray you will be happy and smiling forever and ever, Insha'Allah 🤲",
  "May your kind and gentle heart always be protected, loved, and cherished 💖",
  "May every single difficulty turn into a thousand beautiful blessings and joy ✨",
  "May Allah bless your life with immense peace, radiant health, and great success 🌸",
  "You are the most beautiful soul, and I pray your world is always filled with light 🌟",
];

export default function WishLantern() {
  const [lanternCount, setLanternCount] = useState(128);
  const [selectedBlessing, setSelectedBlessing] = useState(0);
  const [floatingLanterns, setFloatingLanterns] = useState([]);

  const handleSendWish = () => {
    playSparkleChime();
    
    // Confetti firework burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#FF0099", "#CCFF00", "#FFD700", "#FFFFFF"],
    });

    const newId = Date.now();
    setLanternCount((prev) => prev + 1);
    setFloatingLanterns((prev) => [
      ...prev,
      { id: newId, text: BLESSINGS[selectedBlessing], x: Math.random() * 60 + 20 },
    ]);

    setTimeout(() => {
      setFloatingLanterns((prev) => prev.filter((l) => l.id !== newId));
    }, 4000);
  };

  return (
    <section className="relative mx-auto max-w-4xl px-5 py-14">
      {/* Container */}
      <div className="relative rounded-[36px] border-4 border-black bg-gradient-to-b from-[#180033] to-[#310062] p-7 sm:p-12 text-white shadow-[12px_12px_0_0_#000] overflow-hidden text-center">
        {/* Glow ambient circle */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF0099]/30 rounded-full blur-3xl" />

        {/* Floating animated lanterns */}
        <AnimatePresence>
          {floatingLanterns.map((l) => (
            <motion.div
              key={l.id}
              initial={{ y: 80, opacity: 1, scale: 0.8, x: `${l.x}%` }}
              animate={{ y: -400, opacity: 0, scale: 1.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3.5, ease: "easeOut" }}
              className="pointer-events-none absolute bottom-10 z-30 flex items-center gap-2 rounded-full border-3 border-black bg-[#CCFF00] px-4 py-2 text-xs font-display text-black shadow-[4px_4px_0_0_#000]"
            >
              🏮 <span>{l.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border-3 border-black bg-[#CCFF00] px-4 py-1 font-display text-xs sm:text-sm tracking-widest text-black shadow-[4px_4px_0_0_#000]">
            <Sparkles className="h-4 w-4 text-[#FF0099]" /> MY SINCERE DU'A FOR YOU
          </span>

          <h2 className="mt-5 font-display text-3xl sm:text-6xl text-white leading-tight">
            I PRAY YOU WILL BE <span className="text-[#CCFF00] underline decoration-[#FF0099] decoration-wavy">HAPPY FOREVER</span>, INSHA'ALLAH
          </h2>

          <p className="mt-4 text-base sm:text-lg font-bold text-white/90 leading-relaxed">
            You are truly the most beautiful and the kindest girl in the world. Tap below to release a glowing wish lantern — each one carries my heartfelt prayers for your life, peace, and eternal happiness.
          </p>

          {/* Blessing selector tabs */}
          <div className="mt-8 flex flex-col gap-2.5 text-left">
            {BLESSINGS.map((blessing, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedBlessing(idx)}
                className={`cursor-pointer rounded-2xl border-3 border-black p-3.5 sm:p-4 text-sm font-extrabold transition-all shadow-[4px_4px_0_0_#000] flex items-center justify-between ${
                  selectedBlessing === idx
                    ? "bg-[#CCFF00] text-black ring-4 ring-[#FF0099]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <span>{blessing}</span>
                {selectedBlessing === idx && (
                  <span className="shrink-0 text-xs font-display bg-black text-[#CCFF00] px-2.5 py-1 rounded-full border border-black">
                    SELECTED 💫
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Action button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PowButton
              onClick={handleSendWish}
              bg="#FF0099"
              color="#FFFFFF"
              className="text-lg py-3.5 px-8 w-full sm:w-auto animate-pow-pulse"
            >
              RELEASE A PRAYER LANTERN FOR YOU 🏮✨
            </PowButton>
          </div>

          {/* Live counter */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-black/40 px-4 py-1.5 text-xs font-mono font-bold text-white/80">
            <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" />
            <span>{lanternCount} prayers & blessings sent with all my heart</span>
          </div>
        </div>
      </div>
    </section>
  );
}
