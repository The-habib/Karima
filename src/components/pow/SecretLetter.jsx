import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Gift, Sparkles, Mail, Star, Crown } from "lucide-react";
import PowButton from "./PowButton";
import { playSparkleChime } from "@/lib/soundEffects";

export default function SecretLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    playSparkleChime();
    if (!isOpen) {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#FF0099", "#CCFF00", "#FFD700", "#FFFFFF"],
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <section className="mx-auto max-w-4xl px-5 py-14">
      <div className="relative rounded-[36px] border-4 border-black bg-gradient-to-br from-[#310062] via-[#240046] to-[#120024] p-6 sm:p-12 shadow-[12px_12px_0_0_#000] text-white text-center overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border-3 border-black bg-[#CCFF00] px-4 py-1 font-display text-xs sm:text-sm tracking-widest text-black shadow-[4px_4px_0_0_#000]">
            <Crown className="h-4 w-4 text-[#FF0099]" /> A PERSONAL LETTER FOR YOU
          </span>

          <h2 className="mt-4 font-display text-3xl sm:text-6xl leading-tight">
            TO MY DEAR <span className="text-[#CCFF00]">KARIMA</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base font-bold text-white/80">
            A message from the deepest corner of my heart.
          </p>

          <div className="mt-8">
            {!isOpen ? (
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                onClick={toggleLetter}
                className="cursor-pointer mx-auto max-w-md rounded-[28px] border-4 border-black bg-white p-7 sm:p-9 text-black shadow-[8px_8px_0_0_#000]"
              >
                <div className="w-18 h-18 mx-auto rounded-full border-4 border-black bg-[#FF0099] flex items-center justify-center text-white mb-4 shadow-[4px_4px_0_0_#000]">
                  <Mail className="h-9 w-9" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl">SEALED FOR YOU 💌</h3>
                <p className="mt-2 text-sm font-bold text-black/70">
                  Tap to unseal my letter and prayers for you.
                </p>
                <div className="mt-6">
                  <PowButton bg="#CCFF00" color="#000" className="w-full">
                    OPEN MY LETTER TO YOU 🌸✨
                  </PowButton>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="mx-auto rounded-[32px] border-4 border-black bg-[#FFFDF5] p-6 sm:p-9 text-black text-left shadow-[8px_8px_0_0_#000]"
              >
                <div className="flex items-center justify-between border-b-3 border-black pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-[#FF0099]" />
                    <span className="font-display text-lg sm:text-xl text-[#310062]">TO MY FAVOURITE PERSON 🌸</span>
                  </div>
                  <span className="text-xs font-mono font-extrabold bg-[#CCFF00] px-3 py-1 rounded-full border-2 border-black">
                    MADE WITH LOVE
                  </span>
                </div>

                <div className="space-y-4 font-bold text-sm sm:text-base leading-relaxed text-black/90">
                  <p className="text-base sm:text-lg text-[#310062] font-extrabold">
                    My Dearest Karima (Fultusi),
                  </p>
                  <p>
                    I made this entire website just for you on your birthday, because you deserve to know how truly special, cherished, and loved you are.
                  </p>
                  <p>
                    Out of everyone in this world, to me, you are <span className="bg-[#FF0099]/20 px-1 rounded font-extrabold">the most beautiful girl</span> and <span className="bg-[#CCFF00] px-1 rounded text-black font-extrabold">the kindest soul</span> I have ever known. Your smile has a gentle warmth that can brighten even my hardest day, and your kind heart is something so rare and precious.
                  </p>
                  <p>
                    Thank you for being in my life and for every smile you bring to my face.
                  </p>
                  <div className="rounded-2xl border-3 border-black bg-[#CCFF00]/40 p-4 font-extrabold text-[#1a0033]">
                    🤲 <span className="underline">My Deepest Prayer For You:</span><br />
                    “I pray to Allah from the bottom of my heart that you will be happy forever, smiling through every single moment of your life, surrounded by boundless peace, radiant health, and love, Insha'Allah.”
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-3 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500 fill-red-500 animate-bounce" />
                    <span className="font-display text-sm">Always praying for your happiness — Habib</span>
                  </div>
                  <PowButton onClick={toggleLetter} bg="#FF0099" color="#FFFFFF" className="text-xs py-2 px-4">
                    CLOSE LETTER
                  </PowButton>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
