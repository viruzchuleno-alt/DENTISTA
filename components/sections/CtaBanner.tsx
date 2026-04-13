"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-brand-purple border-y border-brand-slate/20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
          ¿Lista para transformar tu sonrisa?
        </h2>
        <p className="text-brand-slate text-lg mb-8">
          Primera consulta sin costo. Sin compromiso.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 bg-brand-light text-brand-dark font-display font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200"
        >
          Reservar mi cita
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
