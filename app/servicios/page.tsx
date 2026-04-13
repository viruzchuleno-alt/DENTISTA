"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ServiciosPage() {
  const services = [
    {
      id: "blanqueamiento",
      title: "Blanqueamiento Dental",
      description: "Recupera el brillo natural de tu sonrisa con nuestra tecnología LED de última generación. Resultados visibles desde la primera sesión, sin sensibilidad.",
      duration: "1 sesión (60 min)",
      price: "Desde $89.990",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
    },
    {
      id: "ortodoncia",
      title: "Ortodoncia Invisible",
      description: "Alineadores transparentes personalizados que corrigen tu mordida sin brackets metálicos. Cómodos, removibles y prácticamente invisibles.",
      duration: "12-18 meses",
      price: "Desde $1.990.000",
      image: "/images/ortodoncia-invisible.webp",
    },
    {
      id: "implantes",
      title: "Implantes Dentales",
      description: "Solución permanente para dientes perdidos. Utilizamos titanio biocompatible de grado médico con tecnología de oseointegración avanzada.",
      duration: "2-3 sesiones (3-6 meses)",
      price: "Desde $450.000/implante",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    },
    {
      id: "limpieza",
      title: "Limpieza Profesional",
      description: "Profilaxis dental completa con ultrasonido y pulido. Eliminamos sarro, manchas y placa bacteriana para una boca completamente sana.",
      duration: "1 sesión (45 min)",
      price: "Desde $35.990",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
    },
    {
      id: "carillas",
      title: "Carillas de Porcelana",
      description: "Transforma completamente tu sonrisa. Diseñamos carillas ultrafinas de porcelana que cambian forma, color y alineación en solo dos sesiones.",
      duration: "2 sesiones",
      price: "Desde $250.000/diente",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80",
    },
    {
      id: "urgencias",
      title: "Urgencias Dentales 24h",
      description: "Atención inmediata ante dolor agudo, trauma dental, infecciones o pérdida de piezas. Disponible todos los días del año.",
      duration: "Según necesidad",
      price: "Desde $45.990",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="h-64 bg-brand-dark flex items-center justify-center border-b border-brand-slate/20">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-cyan font-display text-sm tracking-widest uppercase mb-4"
          >
            SERVICIOS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl text-white"
          >
            Nuestros tratamientos
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-brand-purple/30 border border-brand-slate/20 rounded-2xl overflow-hidden hover:border-brand-cyan/40 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-slate leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-slate/20">
                    <div>
                      <div className="text-brand-slate text-xs mb-1">Duración</div>
                      <div className="text-white text-sm font-semibold">{service.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-brand-slate text-xs mb-1">Precio</div>
                      <div className="text-brand-light text-lg font-display font-bold">
                        {service.price}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-brand-slate mb-6">
              ¿Tienes dudas sobre qué tratamiento necesitas?
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-brand-light text-brand-dark font-display font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200"
            >
              Escríbenos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
