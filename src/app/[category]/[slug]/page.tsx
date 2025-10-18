"use client";

import { allItems } from "@/data/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DetailPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;
  const categoryData = allItems[category as keyof typeof allItems];
  const item = categoryData?.find((x) => x.slug === slug);

  if (!item) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#111111] to-[#1b1b1b] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="text-sm text-neutral-400 hover:text-cyan-400 transition"
        >
          ← Back to Portfolio
        </Link>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <Image
            src={item.img}
            alt={item.title}
            width={1000}
            height={600}
            className="rounded-2xl border border-neutral-800 shadow-[0_0_20px_rgba(6,182,212,0.15)] mb-8 object-cover"
          />
        </motion.div>

        {/* Title + Info */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-2"
        >
          {item.title}
        </motion.h1>

        {item.date && (
          <p className="text-sm text-neutral-500 mb-6">{item.date}</p>
        )}

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="leading-relaxed text-neutral-300"
        >
          {item.desc}
        </motion.p>
      </div>
    </main>
  );
}
