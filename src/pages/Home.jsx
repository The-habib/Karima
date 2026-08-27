import React, { useState } from "react";
import confetti from "canvas-confetti";
import Hero from "@/components/pow/Hero";
import StoryCard from "@/components/pow/StoryCard";
import KindnessCards from "@/components/pow/KindnessCards";
import WishLantern from "@/components/pow/WishLantern";
import SecretLetter from "@/components/pow/SecretLetter";
import PowButton from "@/components/pow/PowButton";
import { PartyPopper, Heart, Rocket, Crown, Sparkles, Sun, Gift } from "lucide-react";
import { playSparkleChime } from "@/lib/soundEffects";

const MASCOT_1 = "https://media.base44.com/images/public/6a90a31b482442ee977170bd/9fe4581cc_generated_c98b2cc3.png";
const MASCOT_2 = "https://media.base44.com/images/public/6a90a31b482442ee977170bd/57f37a585_generated_afdd823c.png";
const MASCOT_3 = "https://media.base44.com/images/public/6a90a31b482442ee977170bd/d9e5ed65e_generated_097f7226.png";

export default function Home() {
  const [replayKey, setReplayKey] = useState(0);
  const [bursts, setBursts] = useState({});
  const [opened, setOpened] = useState({});

  const burst = (key) => {
    playSparkleChime();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF0099", "#CCFF00", "#FFD700", "#FFFFFF"],
    });
    setBursts((b) => ({ ...b, [key]: (b[key] || 0) + 1 }));
    setOpened((o) => ({ ...o, [key]: true }));
  };

  const handleReplay = () => {
    playSparkleChime();
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.5 },
      colors: ["#FF0099", "#CCFF00", "#310062", "#FFD700", "#FFFFFF"],
    });
    setReplayKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-white font-body overflow-x-hidden selection:bg-[#FF0099] selection:text-white">
      {/* 1. Hero Showcase */}
      <Hero replayKey={replayKey} />

      {/* 2. Interactive Story Cards (Speaking directly from Habib to Karima) */}
      <main id="cards" className="relative z-10 mx-auto max-w-3xl space-y-10 px-5 py-16">
        <StoryCard
          bg="#FFFFFF"
          eyebrow="FOR YOU • CARD 01"
          headline={<span>HAPPY BIRTHDAY,<br />MY DEAR FULTUSI! 🎂</span>}
          subtext={
            opened.one
              ? "🎉 Make your wish today — and I pray every single one of your dreams comes true. You deserve the happiest birthday ever!"
              : "I built this entire website just to make you smile on your birthday. Pop to open your first card!"
          }
          mascot={MASCOT_1}
          buttonLabel={opened.one ? "POP AGAIN 💥" : "OPEN CARD 01 🎉"}
          buttonBg="#CCFF00"
          onAction={() => burst("one")}
          burstKey={bursts.one}
          offset="sm:-rotate-1"
        />

        <StoryCard
          bg="#310062"
          textColor="#FFFFFF"
          eyebrow="FROM MY HEART • CARD 02"
          headline={<span>YOU MAKE MY WORLD<br />SO MUCH BETTER ✨</span>}
          subtext={
            opened.two
              ? "Your laugh fixes bad days. Talking to you is the best part of my day, and having you in my life is a blessing I cherish every single moment."
              : "There is something I always wanted to tell you. Open it slowly."
          }
          mascot={MASCOT_2}
          buttonLabel={opened.two ? "READ AGAIN 💖" : "OPEN CARD 02 🌸"}
          buttonBg="#FF0099"
          buttonColor="#FFFFFF"
          onAction={() => burst("two")}
          burstKey={bursts.two}
          offset="sm:rotate-1"
        />

        <StoryCard
          bg="#FF0099"
          eyebrow="MY WISH FOR US • CARD 03"
          headline={<span>STAY IN MY LIFE<br />FOREVER? 💫</span>}
          subtext={
            opened.three
              ? "Deal accepted! Endless laughter, good conversations, and staying by your side through everything. I'm always here for you."
              : "A special question from me to you. Tap to unlock."
          }
          mascot={MASCOT_3}
          buttonLabel={opened.three ? "ALWAYS TOGETHER! 🚀" : "OPEN CARD 03 🔑"}
          buttonBg="#CCFF00"
          onAction={() => burst("three")}
          burstKey={bursts.three}
          offset="sm:-rotate-1"
          pulse
          wideButton
        />

        {/* Highlight Badges */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Crown, label: "MOST BEAUTIFUL TO ME", bg: "#CCFF00" },
            { icon: Heart, label: "KINDEST HEART I KNOW", bg: "#FFFFFF" },
            { icon: Sparkles, label: "PRAYING FOR YOUR SMILE", bg: "#CCFF00" },
          ].map(({ icon: Icon, label, bg }) => (
            <div
              key={label}
              style={{ background: bg }}
              className="flex items-center gap-3 rounded-[24px] border-4 border-black px-4 py-4 shadow-[6px_6px_0_0_#000] hover:scale-105 transition-transform"
            >
              <Icon className="h-6 w-6 shrink-0 text-[#FF0099]" />
              <span className="font-display text-xs sm:text-sm leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </main>

      {/* 3. Tribute to Her Kindness and Beauty */}
      <KindnessCards />

      {/* 4. Interactive Wish Lantern & Eternal Du'a */}
      <WishLantern />

      {/* 5. Sealed Personal Letter from Habib */}
      <SecretLetter />

      {/* 6. Epic Footer */}
      <footer className="relative z-10 bg-black px-5 py-18 text-center border-t-4 border-black">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-display text-white leading-[0.85] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 10vw, 6rem)" }}
          >
            FOR YOU,<br />
            <span style={{ color: "#CCFF00" }}>KARIMA (FULTUSI)</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg font-bold leading-relaxed text-white/85">
            “You are the most beautiful girl, the kindest heart. I pray you stay happy forever and ever, Insha'Allah 🤲💖”
          </p>
          <div className="mt-8">
            <PowButton onClick={handleReplay} bg="#FF0099" color="#FFFFFF" className="text-lg py-3.5 px-8">
              REPLAY YOUR SPECIAL SITE ✨🎉
            </PowButton>
          </div>
          <p className="mt-8 text-xs font-mono font-bold text-white/50">
            Made with all my heart and prayers, just for you — Habib
          </p>
        </div>
      </footer>
    </div>
  );
}
