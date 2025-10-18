"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PortfolioItem } from "@/data/content";

export default function ExperienceCarousel({ items }: { items: PortfolioItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(600);

  // Auto scroll to center on mount
  useEffect(() => {
    if (ref.current) {
      const containerWidth = ref.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      ref.current.scrollTo({
        left: (containerWidth - viewportWidth) / 2 - 160,
        behavior: "smooth",
      });
    }
  }, []);

  // Dynamically calculate height from card size
  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll(".timeline-card");
    let maxH = 0;
    cards.forEach((el) => (maxH = Math.max(maxH, (el as HTMLElement).offsetHeight)));
    setTimelineHeight(maxH * 2);
  }, [items]);

  // Smooth scroll handlers
  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Timeline Section */}
      <section
        ref={ref}
        className="
          relative flex flex-col justify-center
          overflow-x-auto overflow-y-hidden
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          bg-transparent py-30 w-full
        "
      >
        <div
          className="
            relative flex items-center justify-start
            gap-5 pl-[calc(50vw-160px)]
            min-w-max
          "
          style={{ height: `${timelineHeight}px` }}
        >
          {/* Full colored line */}
          <div
            className="
              absolute top-1/2 left-0 w-full h-[4px]
              bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500
              rounded-full -translate-y-1/2
            "
          />

          {/* Timeline cards */}
          {items.map((exp, i) => {
            const isTop = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative w-72 flex flex-col items-center ${
                  isTop ? "-translate-y-[190px]" : "translate-y-[190px]"
                }`}
              >
                {/* Marker circle */}
                <div
                  className="
                    absolute top-1/2 -translate-y-1/2
                    w-5 h-5 rounded-full bg-purple-500
                    shadow-[0_0_25px_rgba(168,85,247,0.6)]
                    z-10
                  "
                />

                {/* Connector */}
                <div
                  className={`absolute left-1/2 w-[2px] bg-purple-500/50 ${
                    isTop ? "top-1/2 h-[45px]" : "bottom-1/2 h-[45px]"
                  }`}
                />

                {/* Card */}
                <Link href={`/experience/${exp.slug}`} className="block group z-10 timeline-card">
                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 0 40px rgba(168,85,247,0.35)",
                      y: -4,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="
                      rounded-2xl border border-purple-500/30
                      bg-[#1a1a1a]/80 backdrop-blur-md
                      shadow-[0_0_25px_rgba(168,85,247,0.15)]
                      hover:border-purple-400/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
                      transition-all duration-500 ease-in-out overflow-hidden
                    "
                  >
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      width={288}
                      height={160}
                      className="w-full h-36 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      {exp.date && (
                        <p className="text-sm text-purple-400 mt-1">{exp.date}</p>
                      )}
                      <p className="text-neutral-300 text-sm mt-2 line-clamp-3">
                        {exp.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Scroll buttons */}
      <div className="absolute -bottom-10 flex w-full justify-between px-10">
        {/* Left button */}
        <button
          onClick={scrollLeft}
          className="
            w-10 h-10 flex items-center justify-center
            rounded-full bg-purple-600/80 hover:bg-purple-500
            text-white shadow-lg shadow-purple-500/30
            transition-all duration-300 hover:scale-110
          "
        >
          <ArrowLeft size={20} />
        </button>

        {/* Right button */}
        <button
          onClick={scrollRight}
          className="
            w-10 h-10 flex items-center justify-center
            rounded-full bg-purple-600/80 hover:bg-purple-500
            text-white shadow-lg shadow-purple-500/30
            transition-all duration-300 hover:scale-110
          "
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
