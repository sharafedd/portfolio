"use client";

import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Courses" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        hidden lg:flex
        w-fit mx-auto
        bg-[#1b1b1b]/60 backdrop-blur-xl
        border border-cyan-400/20
        rounded-full px-10 py-3
        items-center gap-8
        text-sm text-cyan-300
        shadow-none
      "
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="
            relative transition-colors duration-300
            hover:text-cyan-400
            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
            after:bg-cyan-400 after:transition-all after:duration-300
            hover:after:w-full
          "
        >
          {s.label}
        </a>
      ))}
    </motion.nav>
  );
}
