"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-brand-purple/40 border border-brand-slate/20 rounded-2xl p-6 hover:bg-brand-purple hover:border-brand-cyan/40 transition-all duration-300 group"
    >
      <div className="text-brand-cyan w-8 h-8 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-white text-lg mb-2">
        {title}
      </h3>
      <p className="font-body text-brand-slate text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
