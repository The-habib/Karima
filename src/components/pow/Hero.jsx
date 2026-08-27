import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Sticker from "./Sticker";
import Marquee from "./Marquee";
import { Heart, Crown, Eye, X, Sparkles, Gift, Flame } from "lucide-react";
import PowButton from "./PowButton";
import { playSparkleChime } from "@/lib/soundEffects";

const PHOTO_DETAILS = [
  {
    src: "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/39c8ab633_Picsart_26-08-28_02-18-53-102.jpg",
    title: "YOUR INCREDIBLE DRESSING SENSE ✨👗",
    badge: "100/10 STYLE",
    caption: "I truly admire your style — you look effortlessly stunning, graceful, and beautiful every single time!",
  },
  {
    src: "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/e4e30c706_Picsart_26-08-28_02-18-20-048.jpg",
    title: "YOUR ICONIC ATTITUDE & VIBE 👑✨",
    badge: "100% ICONIC",
    caption: "I truly love your attitude — confident, charming, bold, and unmatched in every single way!",
  },
  {
    src: "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/6c68a2051_Picsart_26-08-28_02-17-59-854.jpg",
    title: "EFFORTLESS ELEGANCE ✨",
    badge: "GRACE & WARMTH",
    caption: "Pure grace, warmth, and the kindest soul in the world.",
  },
  {
    src: "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/1f18c0b44_IMG_20260828_020612.jpg",
    title: "NATURAL CHARM 💖",
    badge: "PRECIOUS SOUL",
    caption: "My absolute favourite person in the entire universe.",
  },
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
      <Marquee text="FOR YOU KARIMA ✦ THE MOST BEAUTIFUL & KINDEST SOUL" />

      {/* Lightbox Modal for Photo Tap */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -3 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm sm:max-w-md rounded-[32px] border-4 border-black bg-white p-4 shadow-[12px_12px_0_0_#000]"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full border-3 border-black bg-[#FF0099] text-white flex items-center justify-center font-display shadow-[3px_3px_0_0_#000] cursor-pointer hover:scale-105"
              >
                <X className="h-5 w-5" />
              </button>
              
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto rounded-[20px] object-cover border-3 border-black shadow-[4px_4px_0_0_#000]"
              />
              
              <div className="mt-4 text-center">
                <span className="inline-block rounded-full border-2 border-black bg-[#CCFF00] px-3 py-0.5 font-display text-xs text-black shadow-[2px_2px_0_0_#000] mb-2">
                  {selectedPhoto.badge}
                </span>
                <h4 className="font-display text-xl sm:text-2xl text-black leading-tight">
                  {selectedPhoto.title}
                </h4>
                <p className="mt-2 text-sm font-bold text-black/80">
                  {selectedPhoto.caption}
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
              <Gift className="h-4 w-4 text-[#FF0099]" /> MADE JUST FOR YOU
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border-3 border-black bg-[#310062] px-4 py-1 font-display text-xs sm:text-sm text-white tracking-wider shadow-[4px_4px_0_0_#000]">
              <Heart className="h-4 w-4 text-[#CCFF00] fill-[#CCFF00]" /> MY FAVOURITE PERSON
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
              MY FULTUSI 🌸
            </span>
          </div>

          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg font-extrabold text-black/85 leading-relaxed">
            “To the most beautiful and kindest girl in the world — I built this special place just for you. I pray you will always stay happy, smiling, and protected forever, Insha'Allah 🤲💖”
          </p>

          <div className="mt-5">
            <PowButton
              onClick={handleHeroBlast}
              bg="#FFFFFF"
              color="#000000"
              className="text-sm sm:text-base py-2.5 px-6"
            >
              POP CELEBRATION FOR YOU 💥✨
            </PowButton>
          </div>
        </motion.div>

        {/* Big photo showcase */}
        <div className="relative z-10 mt-10 w-full">
          {/* Desktop: original 4 scattered stickers */}
          <div className="relative hidden sm:block mx-auto h-[30rem] max-w-2xl">
            <div onClick={() => setSelectedPhoto(PHOTO_DETAILS[0])} className="cursor-pointer">
              <Sticker
                src={PHOTO_DETAILS[0].src}
                rotate={-8}
                delay={0.15}
                replayKey={replayKey}
                className="left-0 top-0 w-44 h-60 hover:scale-105 transition-transform"
              />
            </div>
            <div onClick={() => setSelectedPhoto(PHOTO_DETAILS[1])} className="cursor-pointer">
              <Sticker
                src={PHOTO_DETAILS[1].src}
                rotate={9}
                delay={0.3}
                replayKey={replayKey}
                className="right-0 top-4 w-44 h-56 hover:scale-105 transition-transform"
              />
            </div>
            <div onClick={() => setSelectedPhoto(PHOTO_DETAILS[2])} className="cursor-pointer">
              <Sticker
                src={PHOTO_DETAILS[2].src}
                rotate={6}
                delay={0.45}
                replayKey={replayKey}
                className="left-8 bottom-0 w-40 h-52 hover:scale-105 transition-transform"
              />
            </div>
            <div onClick={() => setSelectedPhoto(PHOTO_DETAILS[3])} className="cursor-pointer">
              <Sticker
                src={PHOTO_DETAILS[3].src}
                rotate={-11}
                delay={0.6}
                replayKey={replayKey}
                className="right-8 bottom-6 w-48 h-40 hover:scale-105 transition-transform"
              />
            </div>
          </div>

          {/* Mobile: original 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 sm:hidden w-full">
            {PHOTO_DETAILS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: i % 2 ? 5 : -5, opacity: 0 }}
                animate={{ scale: 1, rotate: i % 2 ? 5 : -5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 * i }}
                onClick={() => setSelectedPhoto(p)}
                className="relative aspect-[3/4] rounded-[20px] border-4 border-black bg-white p-1.5 shadow-[6px_6px_0_0_#000] cursor-pointer active:scale-95 transition-transform"
              >
                <img src={p.src} alt={p.title} className="h-full w-full rounded-[12px] object-cover" />
                <div className="absolute bottom-2 right-2 bg-black/60 text-white rounded-full p-1">
                  <Eye className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Marquee text="I PRAY YOU WILL BE HAPPY FOREVER 🤲 MADE WITH ALL MY HEART" bg="#310062" color="#FFFFFF" reverse />
    </section>
  );
}
