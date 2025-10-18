"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import { PortfolioItem } from "@/data/content";

export default function ProjectGrid({
  items,
  paddingY = "py-10",
}: {
  items: PortfolioItem[];
  paddingY?: string;
}) {
  return (
    <section className={`w-full flex justify-center ${paddingY}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          w-full max-w-6xl
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6 justify-items-center
          px-4
        "
      >
        {items.map((proj, i) => (
          <Link key={i} href={`/projects/${proj.slug}`} className="block">
            <Card
              className="
                hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]
                transition cursor-pointer
                w-full max-w-sm
              "
            >
              <Image
                src={proj.img}
                alt={proj.title}
                width={400}
                height={240}
                className="rounded-t-2xl object-cover w-full h-40"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">
                  {proj.title}
                </h3>
                <p className="text-sm text-neutral-400">{proj.desc}</p>
              </div>
            </Card>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
