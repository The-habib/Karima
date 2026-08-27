import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Sticker from "./Sticker";
import Marquee from "./Marquee";
import { Heart, Crown, Eye, X } from "lucide-react";
import PowButton from "./PowButton";
import { playSparkleChime } from "@/lib/soundEffects";

const PHOTOS = [
  "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/39c8ab633_Picsart_26-08-28_02-18-53-102.jpg",
  "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/e4e30c706_Picsart_26-08-28_02-18-20-048.jpg",
  "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/6c68a2051_Picsart_26-08-28_02-17-59-854.jpg",
  "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/1f18c0b44_IMG_20260828_020612.jpg",
];

export default function Hero({ replayKey }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleHeroBlast = () => {
    playSparkleChime();
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#FF0099", "#CCFF00", "#310062", "#FFFFFF", "#FFD700"],
    });
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "#CCFF00" }}>
      <Marquee text="THE MOST BEAUTIFUL & KINDEST GIRL IN THE WORLD ✷ KARIMA ✷ FULTUSI ✷" />

      {/* Lightbox Modal for Photo Tap */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -3 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 3 }}
              className="relative max-w-sm sm:max-w-md rounded-[32px] border-4 border-black bg-white p-3 shadow-[12px_12px_0_0_#000]"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full border-3 border-black bg-[#FF0099] text-white flex items-center justify-center font-display shadow-[3px_3px_0_0_#000] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={selectedPhoto}
                alt="Karima"
                className="w-full h-auto rounded-[20px] object-cover border-2 border-black"
              />
              <div className="mt-3 text-center py-2">
                <p className="font-display text-lg text-black">
                  THE MOST BEAUTIFUL SMILE 🌸
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-5 py-12">
        <motion.div
          key={replayKey}
          initial={{ scale: 0.7, opacity: 0, rotate: -3 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 10 }}
          className="relative z-10 text-center"
        >
          {/* Top Pill Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border-3 border-black bg-white px-4 py-1 font-display text-xs sm:text-sm tracking-wider shadow-[4px_4px_0_0_#000]">
              <Crown className="h-4 w-4 text-[#FF0099]" /> 1 IN 8 BILLION
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border-3 border-black bg-[#310062] px-4 py-1 font-display text-xs sm:text-sm text-white tracking-wider shadow-[4px_4px_0_0_#000]">
              <Heart className="h-4 w-4 text-[#CCFF00] fill-[#CCFF00]" /> KINDEST SOUL
            </span>
          </div>

          <h1
            className="mt-2 font-display leading-[0.82] text-black tracking-tight"
            style={{ fontSize: "clamp(3.2rem, 13vw, 7.8rem)" }}
          >
            <span className="inline-block -rotate-3 hover:rotate-0 transition-transform">HAPPY</span>{" "}
            <span className="inline-block rotate-2 hover:rotate-0 transition-transform">BIRTH</span>
            <span className="inline-block -rotate-1 hover:rotate-0 transition-transform">DAY</span>
          </h1>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <p className="inline-block rounded-full border-4 border-black bg-[#FF0099] px-7 py-2.5 font-display text-3xl sm:text-5xl text-white shadow-[8px_8px_0_0_#000] rotate-[-2deg]">
              KARIMA
            </p>
            <span className="inline-block rounded-full border-4 border-black bg-white px-5 py-2.5 font-display text-xl sm:text-3xl text-black shadow-[6px_6px_0_0_#000] rotate-[2deg]">
              aka FULTUSI 🌸
            </span>
          </div>

          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg font-extrabold text-black/85 leading-relaxed">
            “The most beautiful and kindest girl in the entire world. May you always stay happy, smiling, and protected forever, Insha'Allah 🤲”
          </p>

          <div className="mt-5">
            <PowButton
              onClick={handleHeroBlast}
              bg="#FFFFFF"
              color="#000000"
              className="text-sm sm:text-base py-2.5 px-6"
            >
              SPARKLE CELEBRATION 💥✨
            </PowButton>
          </div>
        </motion.div>

        {/* Big photo showcase */}
        <div className="relative z-10 mt-10 w-full">
          {/* Desktop: original 4 scattered stickers */}
          <div className="relative hidden sm:block mx-auto h-[30rem] max-w-2xl">
            <div onClick={() => setSelectedPhoto(PHOTOS[0])} className="cursor-pointer">
              <Sticker
                src={PHOTOS[0]}
                rotate={-8}
                delay={0.15}
                replayKey={replayKey}
                className="left-0 top-0 w-44 h-60 hover:scale-105 transition-transform"
              />
            </div>
            <div onClick={() => setSelectedPhoto(PHOTOS[1])} className="cursor-pointer">
              <Sticker
                src={PHOTOS[1]}
                rotate={9}
                delay={0.3}
                replayKey={replayKey}
                className="right-0 top-4 w-44 h-56 hover:scale-105 transition-transform"
              />
            </div>
            <div onClick={() => setSelectedPhoto(PHOTOS[2])} className="cursor-pointer">
              <Sticker
                src={PHOTOS[2]}
                rotate={6}
                delay={0.45}
                replayKey={replayKey}
                className="left-8 bottom-0 w-40 h-52 hover:scale-105 transition-transform"
              />
            </div>
            <div onClick={() => setSelectedPhoto(PHOTOS[3])} className="cursor-pointer">
              <Sticker
                src={PHOTOS[3]}
                rotate={-11}
                delay={0.6}
                replayKey={replayKey}
                className="right-8 bottom-6 w-48 h-40 hover:scale-105 transition-transform"
              />
            </div>
          </div>

          {/* Mobile: original 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 sm:hidden w-full">
            {PHOTOS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: i % 2 ? 5 : -5, opacity: 0 }}
                animate={{ scale: 1, rotate: i % 2 ? 5 : -5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 * i }}
                onClick={() => setSelectedPhoto(p)}
                className="relative aspect-[3/4] rounded-[20px] border-4 border-black bg-white p-1.5 shadow-[6px_6px_0_0_#000] cursor-pointer"
              >
                <img src={p} alt="Karima" className="h-full w-full rounded-[12px] object-cover" />
                <div className="absolute bottom-2 right-2 bg-black/60 text-white rounded-full p-1">
                  <Eye className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Marquee text="FOREVER HAPPY INSHA'ALLAH ✷ PURE KINDNESS ✷ NO.1 BEAUTIFUL" bg="#310062" color="#FFFFFF" reverse />
    </section>
  );
}
