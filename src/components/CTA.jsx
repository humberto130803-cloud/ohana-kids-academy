import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function CTA() {
  return (
    <section className="py-24 bg-[#1A1A2E] relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      {/* Background subtle pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, #C9A84C 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-accent text-[#C9A84C] text-4xl mb-4"
        >
          El futuro de su hijo comienza aquí
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl text-[#F5F0E8] mb-6 leading-tight"
        >
          ¿Listo para dar el
          <br />
          <span className="text-[#C9A84C] italic">primer paso?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#B0A8A0] text-base mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Agende una visita hoy y conozca de primera mano el ambiente cálido, profesional y
          bilingüe que Ohana Kids Academy tiene para su familia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0D0D1A] font-bold px-10 py-4 rounded-full transition-all duration-300 text-base tracking-wide shadow-xl shadow-[#C9A84C]/25"
          >
            <FaWhatsapp className="text-xl" />
            Agenda una visita
          </a>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-[#F5F0E8] hover:text-[#C9A84C] border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 px-8 py-4 rounded-full transition-all duration-300 text-base"
          >
            Llamar ahora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
