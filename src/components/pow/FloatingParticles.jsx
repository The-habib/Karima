import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ICONS = ["✨", "💖", "🌸", "⭐", "💫", "🎂"];

export default function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      icon: ICONS[i % ICONS.length],
      x: Math.random() * 95,
      y: Math.random() * 95,
      size: Math.random() * 12 + 14,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 5,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40 select-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: "110vh",
            opacity: 0,
            scale: 0.6,
            rotate: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.6, 1.1, 1, 0.8],
            rotate: [0, 45, -45, 90],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute font-mono"
          style={{ fontSize: `${p.size}px` }}
        >
          {p.icon}
        </motion.div>
      ))}
    </div>
  );
}
