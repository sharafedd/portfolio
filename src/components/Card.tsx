"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -6,
        boxShadow: "0 0 35px rgba(6,182,212,0.35)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`
        relative overflow-hidden
        rounded-2xl border border-cyan-500/20
        bg-gradient-to-br from-[#0f0f0f]/70 to-[#1a1a1a]/60
        backdrop-blur-md
        shadow-[0_0_25px_rgba(0,0,0,0.6)]
        hover:border-cyan-400/50
        hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]
        transition-all duration-500 ease-out
        h-[320px] flex flex-col justify-between
        ${className}
      `}
    >
      {/* Subtle animated cyan energy pulse */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none" />

      {/* Soft inner glow border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

      {/* Card content */}
      <div className="relative z-10 p-5 h-full flex flex-col justify-between">
        <div className="overflow-hidden text-ellipsis line-clamp-5">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
