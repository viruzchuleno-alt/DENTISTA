"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "35 años",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      text: "Increíble atención. Me hicieron un blanqueamiento y quedé fascinada con el resultado. Todo el equipo es súper profesional y te explican cada paso.",
      rating: 5,
    },
    {
      name: "Carlos Muñoz",
      role: "42 años",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      text: "Después de años con miedo al dentista, esta clínica cambió mi experiencia completamente. Tecnología de punta y cero dolor. 100% recomendable.",
      rating: 5,
    },
    {
      name: "Valentina Rojas",
      role: "28 años",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      text: "La ortodoncia invisible que me pusieron es perfecta. Nadie nota que la tengo y los resultados se ven rapidísimo. La mejor inversión que hice.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-brand-purple/20 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-cyan font-display text-sm tracking-widest uppercase mb-4">
            TESTIMONIOS
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Lo que dicen nuestros pacientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-brand-dark border border-brand-slate/20 rounded-2xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-brand-cyan"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-brand-slate leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-display font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-brand-slate text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
