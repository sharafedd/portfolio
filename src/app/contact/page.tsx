"use client";

import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingIcons from "@/components/FloatingIcons";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen text-white flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
      {/* ✅ Background gradient first (lowest layer) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] -z-20" />

      {/* ✅ Floating icons ABOVE background but BELOW content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcons />
      </div>

      {/* Back to portfolio button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 right-6 z-10"
      >
        <Link
          href="/"
          className="border border-neutral-700 px-4 py-2 rounded-lg text-sm text-neutral-300 hover:border-cyan-400 hover:text-cyan-300 transition"
        >
          ← Back to Portfolio
        </Link>
      </motion.div>

      {/* Page intro text */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-10 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-cyan-400">Connect</span>, Contribute, Collaborate
        </h1>
        <p className="text-neutral-300 leading-relaxed text-lg">
          Every great idea begins with a conversation.  
          This is the <span className="text-cyan-400">first step</span>.
        </p>
      </motion.div>

      {/* Contact form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-2xl z-10"
      >
        <ContactForm />
      </motion.div>
    </main>
  );
}
