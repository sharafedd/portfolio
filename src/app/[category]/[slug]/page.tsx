"use client";

import React from "react";
import { allItems } from "@/data/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ✅ Markdown + plugins
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export default function DetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  // ✅ Unwrap Next.js 15 async params
  const { category, slug } = React.use(params);

  // ✅ Narrow type so TS knows it’s a PortfolioItem array
  const categoryData =
    allItems[category as "education" | "experience" | "projects"] as {
      slug: string;
      title: string;
      img: string;
      desc: string;
      date?: string;
    }[];

  const item = categoryData.find((x) => x.slug === slug);
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

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-2"
        >
          {item.title}
        </motion.h1>

        {/* Date */}
        {item.date && (
          <p className="text-sm text-neutral-500 mb-6">{item.date}</p>
        )}

        {/* Markdown Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="leading-relaxed text-neutral-300"
        >
          <div
            className="
              prose
              prose-invert
              max-w-none
              prose-ul:list-disc
              prose-ol:list-decimal
              prose-li:marker:text-cyan-400
              prose-ul:pl-6
              prose-ol:pl-6
            "
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkBreaks]}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
            >
              {item.desc}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
