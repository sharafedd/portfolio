import { motion } from "framer-motion";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-semibold text-neutral-200 mb-8 text-center"
    >
      {children}
    </motion.h2>
  );
}
