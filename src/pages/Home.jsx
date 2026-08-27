import React, { useState } from "react";
import Hero from "@/components/pow/Hero";
import StoryCard from "@/components/pow/StoryCard";
import PowButton from "@/components/pow/PowButton";
import { PartyPopper, Heart, Rocket } from "lucide-react";

const MASCOT_1 = "https://media.base44.com/images/public/6a90a31b482442ee977170bd/9fe4581cc_generated_c98b2cc3.png";
const MASCOT_2 = "https://media.base44.com/images/public/6a90a31b482442ee977170bd/57f37a585_generated_afdd823c.png";
const MASCOT_3 = "https://media.base44.com/images/public/6a90a31b482442ee977170bd/d9e5ed65e_generated_097f7226.png";

export default function Home() {
  const [replayKey, setReplayKey] = useState(0);
  const [bursts, setBursts] = useState({});
  const [opened, setOpened] = useState({});

  const burst = (key) => {
    setBursts((b) => ({ ...b, [key]: (b[key] || 0) + 1 }));
    setOpened((o) => ({ ...o, [key]: true }));
  };

  return (
    <div className="min-h-screen bg-white font-body">
      <Hero replayKey={replayKey} />

      <main id="cards" className="mx-auto max-w-3xl space-y-10 px-5 py-16">
        <StoryCard
          bg="#FFFFFF"
          eyebrow="CARD 01"
          headline={<span>HAPPY BIRTHDAY,<br />FULTUSI!</span>}
          subtext={opened.one ? "🎉 Consider this cake officially thrown in your honour. Make a wish — I'll help it come true." : "One tiny blob, one giant cupcake, and a whole lot of noise just for you."}
          mascot={MASCOT_1}
          buttonLabel={opened.one ? "POP AGAIN" : "VIEW"}
          buttonBg="#CCFF00"
          onAction={() => burst("one")}
          burstKey={bursts.one}
          offset="sm:-rotate-1"
        />

        <StoryCard
          bg="#310062"
          textColor="#FFFFFF"
          eyebrow="CARD 02"
          headline={<span>YOU MAKE<br />EVERYTHING<br />BETTER</span>}
          subtext={opened.two ? "Your laugh fixes bad days. Your ordinary texts are my favourite part of mine. Today the whole world gets to be lucky you exist." : "There's a message in here. Open it slowly."}
          mascot={MASCOT_2}
          buttonLabel={opened.two ? "READ AGAIN" : "OPEN"}
          buttonBg="#FF0099"
          buttonColor="#FFFFFF"
          onAction={() => burst("two")}
          burstKey={bursts.two}
          offset="sm:rotate-1"
        />

        <StoryCard
          bg="#FF0099"
          eyebrow="CARD 03"
          headline={<span>TEAM UP<br />WITH ME?</span>}
          subtext={opened.three ? "Deal accepted. Cake, long walks and terrible jokes — I'm bringing all three." : "Birthdays are better in pairs. Say the word and I'm in."}
          mascot={MASCOT_3}
          buttonLabel={opened.three ? "LET'S GO!" : "OPEN"}
          buttonBg="#CCFF00"
          onAction={() => burst("three")}
          burstKey={bursts.three}
          offset="sm:-rotate-1"
          pulse
          wideButton
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: PartyPopper, label: "ONE BIG DAY", bg: "#CCFF00" },
            { icon: Heart, label: "ZERO CHILL", bg: "#FFFFFF" },
            { icon: Rocket, label: "ALL THE WISHES", bg: "#CCFF00" },
          ].map(({ icon: Icon, label, bg }) => (
            <div key={label} style={{ background: bg }}
              className="flex items-center gap-3 rounded-[24px] border-4 border-black px-4 py-4 shadow-[6px_6px_0_0_#000]">
              <Icon className="h-6 w-6 shrink-0" />
              <span className="font-display text-lg leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-black px-5 py-16 text-center">
        <h2 className="font-display text-white leading-[0.85]" style={{ fontSize: "clamp(2.5rem, 10vw, 6rem)" }}>
          CELEBRATE<br />
          <span style={{ color: "#CCFF00" }}>FULTUSI</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[1.125rem] font-bold leading-[1.6] text-white/80">
          Built with far too much effort and a completely obvious crush.
        </p>
        <div className="mt-7">
          <PowButton onClick={() => { setReplayKey((k) => k + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            REPLAY THE MAGIC
          </PowButton>
        </div>
      </footer>
    </div>
  );
}