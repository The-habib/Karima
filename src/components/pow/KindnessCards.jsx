import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star, Sun, Smile, Crown, Flower2, Shield } from "lucide-react";
import { playSparkleChime } from "@/lib/soundEffects";

const TRIBUTES = [
  {
    icon: Crown,
    title: "TO ME, YOU ARE THE MOST BEAUTIFUL",
    subtitle: "In The Entire World 🌸",
    description: "It is not just how gorgeous you are; it is the effortless radiance, warmth, and innocence in your eyes and smile that makes my whole world feel brighter and more peaceful.",
    badge: "1 IN 8 BILLION",
    bg: "#FFFFFF",
    accent: "#FF0099",
  },
  {
    icon: Flower2,
    title: "YOUR KIND HEART IS A BLESSING",
    subtitle: "Pure & Gentle Soul 💖",
    description: "In a world that can often be loud and hurried, your gentle nature, compassion, and kindness stand out like a rare treasure. You bring comfort to my heart just by being you.",
    badge: "PURE BLESSING",
    bg: "#310062",
    textColor: "#FFFFFF",
    accent: "#CCFF00",
  },
  {
    icon: Smile,
    title: "YOU BRING PURE JOY TO MY LIFE",
    subtitle: "Endless Smiles & Peace ✨",
    description: "Just hearing from you or knowing you are happy brings genuine lightness to my days. Your laughter, sweetness, and presence make every ordinary day feel extraordinary.",
    badge: "PRECIOUS TO ME",
    bg: "#CCFF00",
    accent: "#FF0099",
  },
  {
    icon: Sun,
    title: "MY PRAYER FOR YOUR HAPPINESS",
    subtitle: "Insha'Allah 🤲",
    description: "I pray with all my heart that Allah blesses you with radiant health, immense peace, boundless success, and happiness that stays with you forever and ever.",
    badge: "ETERNAL DU'A",
    bg: "#FF0099",
    textColor: "#FFFFFF",
    accent: "#CCFF00",
  },
];

export default function KindnessCards() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (idx) => {
    playSparkleChime();
    setActiveCard(activeCard === idx ? null : idx);
  };

  return (
    <section className="mx-auto max-w-4xl px-5 py-14">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 rounded-full border-3 border-black bg-[#CCFF00] px-4 py-1 font-display text-xs sm:text-sm tracking-widest text-black shadow-[4px_4px_0_0_#000]">
          <Heart className="h-4 w-4 text-[#FF0099] fill-[#FF0099]" /> FROM MY HEART TO YOURS
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-6xl text-black leading-tight">
          WHAT MAKES YOU <span className="text-[#FF0099]">SO SPECIAL TO ME</span>
        </h2>
        <p className="mt-2 text-base sm:text-lg font-bold text-black/70 max-w-xl mx-auto">
          Every reason why you are truly one of a kind, unforgettable, and cherished in my eyes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {TRIBUTES.map((card, idx) => {
          const Icon = card.icon;
          const isExpanded = activeCard === idx;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => handleCardClick(idx)}
              className={`cursor-pointer rounded-[32px] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0_0_#000] relative overflow-hidden transition-all ${
                isExpanded ? "ring-4 ring-black" : ""
              }`}
              style={{
                background: card.bg,
                color: card.textColor || "#000000",
              }}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  style={{ background: card.accent, color: "#000000" }}
                  className="rounded-full border-2 border-black px-3 py-1 font-display text-xs tracking-wider shadow-[2px_2px_0_0_#000]"
                >
                  {card.badge}
                </span>
                <div className="w-10 h-10 rounded-full border-3 border-black bg-white flex items-center justify-center text-black shadow-[2px_2px_0_0_#000]">
                  <Icon className="h-5 w-5 text-[#FF0099]" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display text-2xl sm:text-3xl leading-tight">
                {card.title}
              </h3>
              <p className="font-display text-sm sm:text-base mt-1 opacity-80" style={{ color: card.accent }}>
                {card.subtitle}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base font-bold leading-relaxed opacity-90">
                {card.description}
              </p>

              {/* Interactive micro badge */}
              <div className="mt-5 pt-3 border-t-2 border-current/20 flex items-center justify-between text-xs font-mono font-extrabold">
                <span>✦ Tap to read with love</span>
                <span className="font-display text-sm">{isExpanded ? "💖 CHERISHED" : "✨ EXPLORE"}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
