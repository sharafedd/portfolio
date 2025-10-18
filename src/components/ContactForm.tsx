"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.form
      action="https://formspree.io/f/xanpvkre"
      method="POST"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto bg-neutral-900 p-8 rounded-2xl shadow-[0_0_10px_rgba(6,182,212,0.15)] border border-neutral-800 space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center text-neutral-100 mb-4">
        Let’s Connect
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
        required
      />

      <input
        type="email"
        name="_replyto"
        placeholder="Your email"
        className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
        required
      />

      <textarea
        name="message"
        rows={4}
        placeholder="Your message"
        className="w-full bg-neutral-800 rounded-lg px-4 py-2 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
        required
      />

      <button
        type="submit"
        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-2 rounded-lg font-medium transition"
      >
        Send Message
      </button>
    </motion.form>
  );
}
