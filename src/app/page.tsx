"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import FilterTabs from "@/components/FilterTabs";
import ExperienceCarousel from "@/components/ExperienceCarousel";
import ProjectGrid from "@/components/ProjectGrid";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import {
  education,
  experience,
  projects,
  certifications,
  awards,
} from "@/data/content";
import { useState } from "react";

export default function PortfolioPage() {
  // Skill categories
  const skillCategories: Record<string, string[]> = {
    Languages: ["Python", "Java", "C", "Haskell"],
    Frameworks: ["React", "Next.js", "Angular"],
    "AI / ML": ["TensorFlow", "PyTorch", "BERT", "Transformers", "CNN", "RNN", "LSTM"],
    Tools: ["Docker", "Kubernetes", "Git", "Firebase", "PostgreSQL", "MongoDB", "LaTeX"],
  };
  const [selected, setSelected] = useState("Languages");

  return (
    <main className="text-white">
      {/* Top-right contact button */}
      <div className="absolute top-6 right-6 z-50">
        <Link
          href="/contact"
          className="border border-neutral-700 px-4 py-2 rounded-lg text-sm text-neutral-300 hover:border-cyan-400 hover:text-cyan-300 transition"
        >
          Contact
        </Link>
      </div>

      {/* ===== HERO ===== */}
      <HeroSection />

      {/* ===== PROFILE ===== */}
      <section className="bg-[#1a1a1a] px-6 py-20 text-center">
        <SectionTitle>About <span className="text-cyan-400">Me</span></SectionTitle>
        <p className="max-w-3xl mx-auto text-neutral-400 leading-relaxed">
          I am a Computer Science student at the University of Birmingham with a passion for
          AI-driven technologies, dependable systems, and innovative engineering. I combine research,
          creativity, and precision to develop scalable solutions with global impact.
        </p>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="bg-[#222222] px-6 py-20 text-center">
        <SectionTitle>Technical <span className="text-cyan-400">Expertise</span></SectionTitle>
        <FilterTabs
          categories={Object.keys(skillCategories)}
          onSelect={setSelected}
        />
        <div className="flex flex-wrap justify-center gap-3 text-sm text-cyan-200 max-w-4xl mx-auto">
          {skillCategories[selected].map((s, i) => (
            <span
              key={i}
              className="border border-neutral-700 px-3 py-1 rounded-full bg-neutral-800/70 text-neutral-300"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="bg-[#242424] px-6 py-20">
        <SectionTitle>Recent <span className="text-cyan-400">Projects</span></SectionTitle>
        <ProjectGrid items={projects} />
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="bg-[#1f1f1f] px-6 py-20 relative">
        <SectionTitle>Professional <span className="text-purple-500">Experience</span></SectionTitle>
        <ExperienceCarousel items={experience} />
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="bg-gradient-to-b from-[#1c1c1c] to-[#262626] px-6 py-20">
        <SectionTitle>
          <span className="text-white">Education</span>
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {education.map((edu, i) => (
            <Link
              key={i}
              href={`/education/${edu.slug}`}
              className="
                group relative block rounded-2xl overflow-hidden 
                bg-gradient-to-br from-[#1a1a1a] to-[#222222]
                border border-neutral-800
                shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]
                transform transition-all duration-300 ease-out
                hover:-translate-y-2 hover:scale-[1.02]
                hover:shadow-[0_12px_30px_rgba(6,182,212,0.25),inset_0_1px_0_rgba(255,255,255,0.08)]
                hover:border-cyan-500/50
              "
            >
              {/* Top Light Edge (gives 3D illusion) */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Image */}
              <Image
                src={edu.img}
                alt={edu.title}
                width={400}
                height={240}
                className="object-cover w-full h-44 rounded-t-2xl opacity-90 group-hover:opacity-100 transition duration-300"
              />

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                  {edu.title}
                </h3>
                {edu.date && (
                  <p className="text-sm text-neutral-500 mt-1">{edu.date}</p>
                )}
                <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== COURSES & CERTIFICATIONS ===== */}
      <section className="bg-[#2b2b2b] px-6 py-20">
        <SectionTitle>Courses & <span className="text-cyan-400">Certifications</span></SectionTitle>
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto border-collapse text-left text-neutral-300 text-sm">
            <thead>
              <tr className="border-b border-neutral-700 text-neutral-400">
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((c, i) => (
                <tr key={i} className="border-b border-neutral-800 hover:bg-neutral-800/40">
                  <td className="py-3 px-4">{c.title}</td>
                  <td className="py-3 px-4">{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== AWARDS ===== */}
      <section className="bg-[#1a1a1a] px-6 py-20">
        <SectionTitle>Honours & <span className="text-cyan-400">Achievements</span></SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((a, i) => (
            <Card key={i}>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{a.title}</h3>
                <p className="text-sm text-neutral-500">{a.date}</p>
                <p className="mt-2 text-neutral-400">{a.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ...other sections */}
      <ContactSection />
    </main>
  );
}
