"use client";

import { useState } from "react";

export default function FilterTabs({
  categories,
  onSelect,
}: {
  categories: string[];
  onSelect: (c: string) => void;
}) {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => {
            setActive(c);
            onSelect(c);
          }}
          className={`px-4 py-1.5 rounded-full border text-sm transition-all duration-200 cursor-pointer ${
            active === c
              ? "border-cyan-400/70 text-cyan-300 bg-neutral-700 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
              : "border-neutral-600 text-neutral-200 bg-neutral-800 hover:border-neutral-400 hover:text-neutral-100 hover:bg-neutral-700/80"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
