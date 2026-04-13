"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#554971" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1600&q=80"
          alt="Clínica dental"
          fill
          className="object-cover opacity-20"
          priority
          quality={60}
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.3, ease: "easeOut" }}
          className="inline-block"
        >
          <div className="bg-brand-purple text-brand-light text-xs font-display tracking-widest uppercase px-4 py-1 rounded-full mb-8">
            🇨🇱 Diseñado y pensado para ti
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
          className="font-display font-bold text-6xl md:text-8xl text-white leading-none mb-6"
        >
          Automatiza tu sonrisa
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="font-body text-brand-slate text-lg md:text-xl max-w-xl mx-auto mb-10"
        >
          Tratamientos dentales de precisión, impulsados por tecnología y cuidado humano. 
          Listos para transformarte.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contacto"
            className="bg-brand-light text-brand-dark font-display font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            Reservar cita
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/servicios"
            className="border border-brand-slate text-white px-6 py-3 rounded-full hover:border-brand-cyan hover:text-brand-cyan transition-all duration-200"
          >
            Ver tratamientos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
