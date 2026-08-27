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
            <Crown className="h-4 w-4 text-[#FF0099]" /> HEARTFELT TRIBUTE
          </span>

          <h2 className="mt-4 font-display text-3xl sm:text-6xl leading-tight">
            A LETTER FOR <span className="text-[#CCFF00]">KARIMA</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base font-bold text-white/80">
            For the most beautiful and kindest girl in the entire world.
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
                <h3 className="font-display text-2xl sm:text-3xl">SEALED LETTER 💌</h3>
                <p className="mt-2 text-sm font-bold text-black/70">
                  Tap to unseal Habib's tribute and prayers for you.
                </p>
                <div className="mt-6">
                  <PowButton bg="#CCFF00" color="#000" className="w-full">
                    READ THE MESSAGE 🌸✨
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
                    FOREVER SPECIAL
                  </span>
                </div>

                <div className="space-y-4 font-bold text-sm sm:text-base leading-relaxed text-black/90">
                  <p className="text-base sm:text-lg text-[#310062] font-extrabold">
                    Dear Karima (Fultusi),
                  </p>
                  <p>
                    Out of all the people in the world, you are truly <span className="bg-[#FF0099]/20 px-1 rounded font-extrabold">the most beautiful girl</span> and <span className="bg-[#CCFF00] px-1 rounded text-black font-extrabold">the kindest soul</span> I have ever known.
                  </p>
                  <p>
                    Your smile has a magic that can instantly turn a bad day into pure peace. Even when you tell me <span className="underline decoration-wavy decoration-[#FF0099]">“30 min por sms koro”</span> and reply 1.5 hours later, or delete your posts at lightning speed, every second spent talking to you is a blessing.
                  </p>
                  <p>
                    I asked if anyone ever proposed to you in a filmy style 🎬 — but truth is, no movie script can match how genuinely special you are to me.
                  </p>
                  <div className="rounded-2xl border-3 border-black bg-[#CCFF00]/40 p-4 font-extrabold text-[#1a0033]">
                    🤲 <span className="underline">My Deepest Prayer for You:</span><br />
                    “I wish and pray that you will be happy forever, smiling through every moment of your life, Insha'Allah.”
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-3 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500 fill-red-500 animate-bounce" />
                    <span className="font-display text-sm">With endless admiration — Habib</span>
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
