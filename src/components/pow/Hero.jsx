import React from "react";
import { motion } from "framer-motion";
import Sticker from "./Sticker";
import Marquee from "./Marquee";
import { Sparkles } from "lucide-react";

const PHOTOS = [
  "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/39c8ab633_Picsart_26-08-28_02-18-53-102.jpg",
  "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/e4e30c706_Picsart_26-08-28_02-18-20-048.jpg",
  "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/6c68a2051_Picsart_26-08-28_02-17-59-854.jpg",
  "https://media.base44.com/images/public/user_6a90a17013211cf162e6d436/1f18c0b44_IMG_20260828_020612.jpg",
];

export default function Hero({ replayKey }) {
  return (
    <section className="relative overflow-hidden" style={{ background: "#CCFF00" }}>
      <Marquee />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-5 py-12">
        <motion.div
          key={replayKey}
          initial={{ scale: 0.7, opacity: 0, rotate: -4 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 10 }}
          className="relative z-10 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-4 border-black bg-white px-4 py-1 font-display text-sm tracking-widest shadow-[5px_5px_0_0_#000]">
            <Sparkles className="h-4 w-4" /> IT'S THE BIG DAY
          </span>
          <h1 className="mt-5 font-display leading-[0.82] text-black" style={{ fontSize: "clamp(3rem, 13vw, 8rem)" }}>
            <span className="inline-block -rotate-3">HAPPY</span>{" "}
            <span className="inline-block rotate-2">BIRTH</span>
            <span className="inline-block -rotate-1">DAY</span>
          </h1>
          <p className="mt-3 inline-block rounded-full border-4 border-black bg-[#FF0099] px-6 py-2 font-display text-3xl sm:text-5xl text-white shadow-[8px_8px_0_0_#000] rotate-[-2deg]">
            FULTUSI
          </p>
        </motion.div>

        {/* Big photo showcase */}
        <div className="relative z-10 mt-10 w-full">
          {/* Desktop: large scattered stickers */}
          <div className="relative hidden sm:block mx-auto h-[30rem] max-w-2xl">
            <Sticker src={PHOTOS[0]} rotate={-8} delay={0.15} replayKey={replayKey}
              className="left-0 top-0 w-44 h-60" />
            <Sticker src={PHOTOS[1]} rotate={9} delay={0.3} replayKey={replayKey}
              className="right-0 top-4 w-44 h-56" />
            <Sticker src={PHOTOS[2]} rotate={6} delay={0.45} replayKey={replayKey}
              className="left-8 bottom-0 w-40 h-52" />
            <Sticker src={PHOTOS[3]} rotate={-11} delay={0.6} replayKey={replayKey}
              className="right-8 bottom-6 w-48 h-40" />
          </div>

          {/* Mobile: large 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 sm:hidden w-full">
            {PHOTOS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: i % 2 ? 5 : -5, opacity: 0 }}
                animate={{ scale: 1, rotate: i % 2 ? 5 : -5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 * i }}
                className="relative aspect-[3/4] rounded-[20px] border-4 border-black bg-white p-1.5 shadow-[6px_6px_0_0_#000]"
              >
                <img src={p} alt="Fultusi" className="h-full w-full rounded-[12px] object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Marquee text="MADE FOR YOU" bg="#310062" color="#FFFFFF" reverse />
    </section>
  );
}