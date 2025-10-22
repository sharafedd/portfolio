"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#0d0d0d] to-[#161616] flex flex-col items-center justify-center text-center min-h-screen px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        {/* Profile Image */}
        <motion.div
          className="relative mb-8"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            src="/profile.jpg"
            alt="Sharaf Boukhezer"
            width={180}
            height={180}
            className="rounded-full border-2 border-cyan-400/40 shadow-[0_0_35px_rgba(6,182,212,0.25)] object-cover"
          />
        </motion.div>

        {/* Title and Description */}
        <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 animate-typing">
          Sharaf E. Boukhezer
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI, Software & Security Enthusiast — building intelligent systems and innovative solutions.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-8">
          <Link
            href="mailto:SharafEddine.Boukhezer@gmail.com"
            target="_blank"
            className="text-neutral-400 hover:text-cyan-400 transition"
          >
            <Mail size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sharaf-boukhezer"
            target="_blank"
            className="text-neutral-400 hover:text-cyan-400 transition"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="https://github.com/sharafedd"
            target="_blank"
            className="text-neutral-400 hover:text-cyan-400 transition"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://x.com/SharafBoukhezer/"
            target="_blank"
            className="text-neutral-400 hover:text-cyan-400 transition"
          >
            <Twitter size={24} />
          </Link>
        </div>

        {/* View CV Button */}
        <motion.a
          href="/Sharaf_E_Boukhezer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-cyan-500 text-black font-medium px-5 py-2.5 rounded-full hover:bg-cyan-400 transition text-sm shadow-[0_0_15px_rgba(6,182,212,0.25)]"
        >
          <Download size={18} /> View CV
        </motion.a>
      </motion.div>
    </section>
  );
}
