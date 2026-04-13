"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Blanqueamiento Dental",
      description: "Recupera el brillo natural con tecnología LED de última generación",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Ortodoncia Invisible",
      description: "Alineadores transparentes sin brackets, cómodos y discretos",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Implantes Dentales",
      description: "Solución permanente con materiales de titanio biocompatible",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Limpieza Profesional",
      description: "Remoción de sarro y pulido para una boca completamente sana",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Carillas de Porcelana",
      description: "Transforma la forma y color de tus dientes con resultados reales",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Urgencias 24h",
      description: "Atención inmediata ante dolor, trauma o infección dental",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const logos = [
    { src: "/images/logos/LOGOCONASA.webp", alt: "CONASA" },
    { src: "/images/logos/Logo_de_Fonasa.webp", alt: "FONASA" },
    { src: "/images/logos/logo-clinica-las-condes.webp", alt: "Clínica Las Condes" },
    { src: "/images/logos/LOGO-RedSalud.webp", alt: "Red Salud" },
    { src: "/images/logos/LOGO CRUZBLANCA.webp", alt: "ISAPRE Cruz Blanca" },
    { src: "/images/logos/LOGO COLGATE.webp", alt: "COLGATE" },
  ];

  return (
    <section className="bg-brand-dark py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-cyan font-display text-sm tracking-widest uppercase mb-4">
            NUESTROS TRATAMIENTOS
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Todo lo que necesita tu sonrisa
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* Trust Band - Infinite Carousel */}
        <div className="bg-brand-purple/20 border-y border-brand-slate/20 py-8 overflow-hidden">
          <p className="font-body text-brand-slate text-sm tracking-wide text-center mb-8">
            Con respaldo de las mejores instituciones de salud
          </p>
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-12 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    quality={75}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-12 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    quality={75}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
