"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Code2,
  Cpu,
  Terminal,
  Database,
  Cloud,
  GitBranch,
  Laptop,
  Globe,
  Network,
  BrainCircuit,
  Settings,
  CircuitBoard,
} from "lucide-react";

const iconSet = [
  Code2,
  Cpu,
  Terminal,
  Database,
  Cloud,
  GitBranch,
  Laptop,
  Globe,
  Network,
  BrainCircuit,
  Settings,
  CircuitBoard,
];

interface FloatingIcon {
  id: number;
  x: number;
  y: number;
  Icon: React.ElementType;
  delay: number;
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const generateIcon = (): FloatingIcon => ({
      id: Date.now() + Math.random(),
      x: Math.random() * 100, // random horizontal position
      y: Math.random() * 100, // random vertical position
      Icon: iconSet[Math.floor(Math.random() * iconSet.length)],
      delay: Math.random() * 4, // random delay before appearing
    });

    // Initial 1–4 icons
    const initial = Array.from({ length: Math.floor(Math.random() * 3) + 2 }).map(() => generateIcon());
    setIcons(initial);

    // Interval: occasionally add or replace icons
    const interval = setInterval(() => {
      setIcons((prev) => {
        // remove the oldest one if over 4
        const updated = [...prev];
        if (updated.length >= 4) updated.shift();
        updated.push(generateIcon());
        return updated;
      });
    }, 2500 + Math.random() * 3500); // new one every ~2.5–4.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ id, x, y, Icon, delay }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{
            opacity: [0, 0.6, 0.8, 0.4, 0],
            scale: [0.8, 1.1, 1],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${x}%`,
            top: `${y}%`,
          }}
        >
          <Icon
            size={22 + Math.random() * 10}
            className="text-cyan-400/45 drop-shadow-[0_0_8px_rgba(6,182,212,0.35)]"
          />
        </motion.div>
      ))}
    </div>
  );
}
