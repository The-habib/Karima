import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Heart, Sparkles } from "lucide-react";
import PowButton from "./PowButton";
import { playPopSound, playSparkleChime } from "@/lib/soundEffects";

const PHRASES = [
  {
    said: "30 min por sms koro free thakbo",
    timestamp: "8:35 PM",
    translation: "Go watch an entire movie, eat dinner, finish chores, and return at 10:46 PM (1 hr 38 mins later).",
    tag: "TIMING SPECIAL",
    color: "#CCFF00",
  },
  {
    said: "Suya achi 🥱",
    timestamp: "6:31 PM",
    translation: "I am horizontally glued to the bed, maximum cozy mode, do not disturb.",
    tag: "DAILY MOOD",
    color: "#FF0099",
    textColor: "#FFFFFF",
  },
  {
    said: "Knw go",
    timestamp: "8:23 PM",
    translation: "I am dying to know why you asked, but maintaining my detective mysterious aura.",
    tag: "CURIOSITY",
    color: "#310062",
    textColor: "#FFFFFF",
  },
  {
    said: "Natok kom koro. Meya der moto! R bolo taratari",
    timestamp: "8:40 PM",
    translation: "Stop the suspense Habib! Tell me everything and leak the screenshot right now!",
    tag: "TEASING MODE",
    color: "#CCFF00",
  },
  {
    said: "R ha yesterday my birthday 🎂",
    timestamp: "8:44 PM",
    translation: "Casually dropping the most important national holiday announcement like it's no big deal.",
    tag: "LEGENDARY",
    color: "#FF0099",
    textColor: "#FFFFFF",
  },
  {
    said: "Ato natok pochondo na amrr",
    timestamp: "6:47 PM",
    translation: "I secretly love the playful banter, but I'll pretend I'm super serious.",
    tag: "CLASSIC",
    color: "#FFFFFF",
  },
];

export default function Decoder() {
  const [selected, setSelected] = useState(0);
  const [patienceCount, setPatienceCount] = useState(1000);

  const handleCardClick = (idx) => {
    playPopSound();
    setSelected(idx);
  };

  const handleBoost = () => {
    playSparkleChime();
    setPatienceCount((c) => c + 50);
  };

  return (
    <section className="mx-auto max-w-4xl px-5 py-14">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 rounded-full border-3 border-black bg-[#FF0099] px-4 py-1 font-display text-xs sm:text-sm tracking-widest text-white shadow-[4px_4px_0_0_#000]">
          <Zap className="h-4 w-4" /> THE FUN DICTIONARY
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-6xl text-black leading-tight">
          THE <span className="text-[#310062]">KARIMA-TO-REALITY</span> DECODER
        </h2>
        <p className="mt-2 text-base sm:text-lg font-bold text-black/70 max-w-xl mx-auto">
          What she says in chat vs. what is actually happening. Click each card to reveal!
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PHRASES.map((item, idx) => {
          const isSelected = selected === idx;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick(idx)}
              className={`cursor-pointer rounded-[28px] border-4 border-black p-5 shadow-[6px_6px_0_0_#000] transition-all relative ${
                isSelected ? "ring-4 ring-black -translate-y-1" : ""
              }`}
              style={{
                background: item.color,
                color: item.textColor || "#000000",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-display px-3 py-1 rounded-full border-2 border-black bg-white text-black shadow-[2px_2px_0_0_#000]">
                  {item.tag}
                </span>
                <span className="text-xs font-mono font-extrabold opacity-80">
                  {item.timestamp}
                </span>
              </div>

              <h4 className="font-display text-xl sm:text-2xl leading-tight min-h-[55px]">
                “{item.said}”
              </h4>

              <div className="mt-4 pt-3 border-t-2 border-current/20">
                <p className="text-xs font-display tracking-wider opacity-70 mb-1">
                  REAL MEANING:
                </p>
                <p className="text-sm font-bold leading-snug">
                  {item.translation}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fun Stats & Patience Meter */}
      <div className="mt-10 rounded-[32px] border-4 border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0_0_#000]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xs font-display tracking-widest text-[#FF0099]">
              LIVE METRICS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl mt-1 text-black">
              HABIB'S PATIENCE & LOVE ENDURANCE
            </h3>
            <p className="text-sm font-bold text-black/70 mt-1 max-w-md">
              “Akta manus er sathe kotha bollar jonno life a ato wait korini kokhono... You are the best 👍”
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 shrink-0">
            <div className="rounded-2xl border-4 border-black bg-[#CCFF00] px-6 py-3 text-center shadow-[4px_4px_0_0_#000]">
              <span className="text-xs font-display block">PATIENCE LEVEL</span>
              <span className="font-display text-3xl sm:text-4xl text-black">
                {patienceCount}%
              </span>
            </div>
            <PowButton
              onClick={handleBoost}
              bg="#FF0099"
              color="#FFFFFF"
              className="text-sm py-2 px-5"
            >
              + BOOST PATIENCE ✨
            </PowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
