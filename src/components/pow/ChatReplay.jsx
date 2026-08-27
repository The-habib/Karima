import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Clock, CheckCheck, Sparkles, Flame, Heart, Play, Pause } from "lucide-react";
import { playPopSound } from "@/lib/soundEffects";

const CHAT_LOGS = [
  {
    date: "August 25",
    title: "Chapter 1: The 30-Minute Legend & The Longest Wait in History ⏳",
    description: "When Habib learned that 30 minutes in Karima time equals 1 hour 45 minutes.",
    messages: [
      { sender: "habib", text: "Um hmmm", time: "8:01 PM" },
      { sender: "habib", text: "Assalamualaikum", time: "8:01 PM" },
      { sender: "karima", text: "Wlikumsalam", time: "8:01 PM" },
      { sender: "habib", text: "Kokhon kokhon free thako tumi ?", time: "8:02 PM" },
      { sender: "karima", text: "Knw go", time: "8:23 PM", note: "21 minutes later... ⏱️" },
      { sender: "habib", text: "Karon thakar dorkar ache ki ?", time: "8:24 PM" },
      { sender: "karima", text: "Bolo ta. Bolte ki problem", time: "8:26 PM" },
      { sender: "habib", text: "Onek dorkar ache. Na janle kotha bolbo ki kore", time: "8:26 PM" },
      { sender: "habib", text: "Tomar beper sapar ami akdom bujte pari na 😅\nNejai sms korte bole nejai reply dao na 😢\nAjob Manus!", time: "8:30 PM" },
      { sender: "karima", text: "Bolo blo... Akon akta kaj korchi. 30 min por sms koro free thakbo", time: "8:35 PM", highlight: true },
      { sender: "habib", text: "Ok thanks ✨", time: "8:35 PM" },
      { sender: "habib", text: "Hello 🥺", time: "9:08 PM", note: "Exactly 33 mins later..." },
      { sender: "karima", text: "Bolo abr 💁‍♀️", time: "10:46 PM", note: "1 hour 38 minutes later! 💀" },
      { sender: "habib", text: "Akta manus er sathe kotha just aktu kotha bollar jonno life a ato wait korini kokhono...\nYou are the best 👍", time: "11:26 PM", quote: true },
      { sender: "karima", text: "Na na blo...", time: "11:33 PM" },
    ],
  },
  {
    date: "August 27",
    title: "Chapter 2: Filmy Propose, Jealousy & The Deleted Posts 🕵️‍♂️",
    description: "Investigating midnight status uploads and romantic mysteries.",
    messages: [
      { sender: "habib", text: "Ki kora hocche madam?", time: "6:30 PM" },
      { sender: "karima", text: "Suya achi 🥱", time: "6:31 PM" },
      { sender: "habib", text: "Achchha akta kotha jigges korbo?\nTomake kaw propose koreche kokhono filmy style a? 🎬", time: "6:34 PM" },
      { sender: "karima", text: "Kemon seta abr..?", time: "6:35 PM" },
      { sender: "habib", text: "Tahole tumi ato valobasho kake? 👀\nTomar post gulo dakhla to vison jealousy feel hoy!", time: "6:38 PM", quote: true },
      { sender: "karima", text: "Knw tmi ki jano na ki? Amr to kno post ny 1 ta chera", time: "6:38 PM" },
      { sender: "habib", text: "Hmm nai but tumi delete ki kom korecho! Onek post e tumi kore delete kore dao... Ager gulo to khub romantic sad type er hoto", time: "6:39 PM" },
      { sender: "karima", text: "Sob e to jano dekchi... Oo acha 😏", time: "6:40 PM" },
    ],
  },
  {
    date: "August 27",
    title: "Chapter 3: Suraiya, The Real Name Leak & 'Natok Kom Koro' 🎭",
    description: "The top-secret identity disclosure and fake-drama accusations.",
    messages: [
      { sender: "habib", text: "Tomar asol naam ta o lok amake boleche... 🤫", time: "6:41 PM" },
      { sender: "karima", text: "K bolacha go?! Bolo na k bolecha! 🔍", time: "6:42 PM", highlight: true },
      { sender: "habib", text: "Tumi na chaile ami oi naam a dakbo na but oi naam ta khub e valo ✨", time: "6:42 PM" },
      { sender: "karima", text: "Ato natok pochondo na amrr! 😤", time: "6:47 PM" },
      { sender: "habib", text: "Oi maya ta bolechilo tomar naam... Or naam Suraiya", time: "8:31 PM" },
      { sender: "karima", text: "Mittha kotha! Sotti ta bolo... Ki bolachilo bolo, SS daw daki!", time: "8:39 PM" },
      { sender: "karima", text: "Natok kom koro, meya der moto! R bolo taratari! 😂", time: "8:40 PM", quote: true },
    ],
  },
  {
    date: "August 27",
    title: "Chapter 4: The Casual Birthday Bombshell 🎂🎉",
    description: "Casually dropping the most important news of the year at 8:44 PM.",
    messages: [
      { sender: "karima", text: "R ha yesterday my birthday 🎂", time: "8:44 PM", highlight: true },
      { sender: "habib", text: "Ohh kalke birthday! Kichu plan ache naki? 👀🎉", time: "9:09 PM" },
      { sender: "karima", text: "Na", time: "9:23 PM" },
      { sender: "habib", text: "Sono na... Bolchi Ami to tomake sob bolchi ❤️", time: "9:24 PM" },
      { sender: "karima", text: "Ki bolacho?", time: "9:25 PM" },
    ],
  },
];

export default function ChatReplay() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (idx) => {
    playPopSound();
    setActiveTab(idx);
  };

  return (
    <section className="mx-auto max-w-4xl px-5 py-14">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border-3 border-black bg-[#CCFF00] px-4 py-1 font-display text-xs sm:text-sm tracking-widest text-black shadow-[4px_4px_0_0_#000]">
          <MessageCircle className="h-4 w-4" /> THE TIME CAPSULE
        </span>
        <h2 className="mt-4 font-display text-3xl sm:text-6xl text-black leading-tight">
          ICONIC CHAT <span className="text-[#FF0099] underline decoration-black decoration-wavy">MEMORIES</span>
        </h2>
        <p className="mt-2 text-base sm:text-lg font-bold text-black/70 max-w-xl mx-auto">
          The teasing, the patience, and the laughs — real unfiltered WhatsApp exchanges immortalized.
        </p>
      </div>

      {/* Chapter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        {CHAT_LOGS.map((chapter, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange(idx)}
            className={`rounded-2xl border-3 border-black px-4 py-2.5 font-display text-xs sm:text-sm tracking-wide transition-all cursor-pointer ${
              activeTab === idx
                ? "bg-[#FF0099] text-white shadow-[6px_6px_0_0_#000] -translate-y-1"
                : "bg-white text-black hover:bg-[#CCFF00] shadow-[3px_3px_0_0_#000]"
            }`}
          >
            CHAPTER 0{idx + 1}
          </motion.button>
        ))}
      </div>

      {/* Chat Container */}
      <div className="relative rounded-[32px] border-4 border-black bg-[#F5F2EB] p-4 sm:p-7 shadow-[10px_10px_0_0_#000] overflow-hidden">
        {/* Chat Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-4 border-black pb-4 mb-6 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse border-2 border-black"></span>
              <h3 className="font-display text-xl sm:text-2xl text-black">
                {CHAT_LOGS[activeTab].title}
              </h3>
            </div>
            <p className="text-sm font-bold text-black/70 mt-1">
              {CHAT_LOGS[activeTab].description}
            </p>
          </div>
          <span className="rounded-full border-2 border-black bg-[#310062] px-3 py-1 text-xs font-display text-white shrink-0">
            {CHAT_LOGS[activeTab].date}
          </span>
        </div>

        {/* Message Feed */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 py-2">
          {CHAT_LOGS[activeTab].messages.map((msg, i) => {
            const isHabib = msg.sender === "habib";
            return (
              <motion.div
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className={`flex flex-col ${isHabib ? "items-start" : "items-end"}`}
              >
                {/* Note badge above message if present */}
                {msg.note && (
                  <span className="mb-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border-2 border-black bg-[#CCFF00] text-black shadow-[2px_2px_0_0_#000]">
                    {msg.note}
                  </span>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[70%] rounded-2xl p-3.5 shadow-[4px_4px_0_0_#000] relative ${
                    isHabib
                      ? "bg-white text-black rounded-bl-none border-3 border-black"
                      : msg.highlight
                      ? "bg-[#FF0099] text-white rounded-br-none border-3 border-black"
                      : "bg-[#310062] text-white rounded-br-none border-3 border-black"
                  } ${msg.quote ? "ring-4 ring-[#CCFF00]" : ""}`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span
                      className={`text-xs font-display ${
                        isHabib ? "text-[#310062]" : msg.highlight ? "text-[#CCFF00]" : "text-[#CCFF00]"
                      }`}
                    >
                      {isHabib ? "HABIB" : "KARIMA (FULTUSI)"}
                    </span>
                    <span className="text-[10px] opacity-70 font-mono font-bold flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5" /> {msg.time}
                    </span>
                  </div>

                  <p className="whitespace-pre-line text-sm sm:text-base font-bold leading-relaxed">
                    {msg.text}
                  </p>

                  <div className="mt-1 flex justify-end">
                    <CheckCheck className={`h-3.5 w-3.5 ${isHabib ? "text-blue-500" : "text-[#CCFF00]"}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t-4 border-black flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-black/80">
          <span className="flex items-center gap-1">
            <Flame className="h-4 w-4 text-[#FF0099]" /> 100% Real Moments
          </span>
          <span className="flex items-center gap-1">
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> Never-ending patience
          </span>
        </div>
      </div>
    </section>
  );
}
