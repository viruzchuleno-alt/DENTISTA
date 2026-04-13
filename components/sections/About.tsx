"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const items = [
    {
      icon: "🇨🇱",
      text: "Una sonrisa más sana para Chile. La salud bucal como pilar del bienestar nacional.",
    },
    {
      icon: "✚",
      text: "Hacer la odontología accesible. Sin esperas, sin letra chica, sin miedos.",
    },
    {
      icon: "⚙",
      text: "Tecnología al servicio de las personas. No al revés.",
    },
  ];

  const stats = [
    { value: "15+", label: "Años de experiencia" },
    { value: "3.000+", label: "Pacientes atendidos" },
    { value: "8", label: "Especialidades" },
    { value: "4.9★", label: "Valoración promedio" },
  ];

  return (
    <section id="about" className="bg-brand-purple/30 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-cyan font-display text-sm tracking-widest uppercase mb-4">
              SOBRE LA DOCTORA
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">
              Nuestra misión
            </h2>

            <div className="space-y-6 mb-12">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 text-2xl">{item.icon}</div>
                  <p className="text-brand-slate leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="font-display font-bold text-brand-light text-3xl mb-1">
                    {stat.value}
                  </div>
                  <div className="text-brand-slate text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-first lg:order-last"
          >
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/doctormike.webp"
                alt="Doctor"
                fill
                className="object-cover"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
