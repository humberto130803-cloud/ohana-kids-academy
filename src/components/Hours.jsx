import { motion } from 'framer-motion'
import { FaClock, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function Hours() {
  return (
    <section id="horarios" className="py-24 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[#C9A84C] text-3xl mb-3"
          >
            Estamos aquí para ti
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl text-[#F5F0E8] mb-4"
          >
            Horarios & Contacto
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-0.5 bg-[#C9A84C] mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Hours + Contact info */}
          <div className="space-y-8">
            {/* Hours table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0D0D1A]/60 border border-[#C9A84C]/15 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <FaClock className="text-[#C9A84C] text-xl" />
                <h3 className="font-heading text-2xl text-[#F5F0E8]">Horario de atención</h3>
              </div>
              <div className="space-y-3">
                {siteConfig.hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2.5 border-b border-[#C9A84C]/10 last:border-0"
                  >
                    <span className="text-[#B0A8A0] text-sm font-medium">{h.day}</span>
                    <span className="text-[#F5F0E8] text-sm">
                      {h.open} — {h.close}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[#B0A8A0] text-sm font-medium">Sábado – Domingo</span>
                  <span className="text-[#A0784A] text-sm">Cerrado</span>
                </div>
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#0D0D1A]/60 border border-[#C9A84C]/15 rounded-2xl p-8 space-y-5"
            >
              <h3 className="font-heading text-2xl text-[#F5F0E8] mb-2">Contáctanos</h3>

              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                  <FaPhone className="text-sm" />
                </div>
                <div>
                  <p className="text-[#B0A8A0] text-xs">Teléfono</p>
                  <p className="text-[#F5F0E8] font-semibold group-hover:text-[#C9A84C] transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                  <FaWhatsapp className="text-sm" />
                </div>
                <div>
                  <p className="text-[#B0A8A0] text-xs">WhatsApp</p>
                  <p className="text-[#F5F0E8] font-semibold group-hover:text-[#C9A84C] transition-colors">
                    +507 396-4288
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-[#B0A8A0] text-xs">Ubicación</p>
                  <p className="text-[#F5F0E8] font-semibold">{siteConfig.address}</p>
                  <p className="text-[#B0A8A0] text-xs">Panamá, Provincia de Panamá</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: CTA card + map */}
          <div className="space-y-8">
            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#C9A84C]/15 to-[#A0784A]/10 border border-[#C9A84C]/25 rounded-2xl p-8 text-center"
            >
              {/* Corner decoration */}
              <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden rounded-tl-2xl">
                <div className="absolute top-0 left-0 w-6 h-6 border-r border-b border-[#C9A84C]/30 bg-[#C9A84C]/5" />
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden rounded-br-2xl">
                <div className="absolute bottom-0 right-0 w-6 h-6 border-l border-t border-[#C9A84C]/30 bg-[#C9A84C]/5" />
              </div>

              <p className="font-accent text-[#C9A84C] text-2xl mb-3">¿Listo para visitar?</p>
              <h3 className="font-heading text-3xl text-[#F5F0E8] mb-4">
                Agenda tu visita hoy
              </h3>
              <p className="text-[#B0A8A0] text-sm mb-8 max-w-sm mx-auto">
                Conozca nuestras instalaciones, nuestro equipo y descubra por qué las familias
                panameñas confían en Ohana Kids Academy.
              </p>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0D0D1A] font-bold px-8 py-4 rounded-full transition-all duration-300 tracking-wide shadow-lg shadow-[#C9A84C]/20"
              >
                <FaWhatsapp className="text-xl" />
                Contactar por WhatsApp
              </a>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-[#C9A84C]/15 h-60"
            >
              <iframe
                title="Ohana Kids Academy ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62947.66!2d-79.555!3d8.9960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8386f6e90ed%3A0x2da8c03d1c2f05f6!2sOhana%20Kids%20Academy!5e0!3m2!1ses!2spa!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
