import { motion } from 'framer-motion'
import { FaStar, FaQuoteRight } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function Reviews() {
  return (
    <section
      id="testimonios"
      className="relative py-28 overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${siteConfig.images.reviews})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0D0D1A]/90 via-[#1A1A2E]/85 to-[#0D0D1A]/90" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[#C9A84C] text-3xl mb-3"
          >
            Familias que confían en nosotros
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl text-[#F5F0E8] mb-4"
          >
            Testimonios
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-0.5 bg-[#C9A84C] mx-auto"
          />
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {siteConfig.reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative bg-[#0D0D1A]/80 backdrop-blur-sm border border-[#C9A84C]/15 rounded-2xl p-8 hover:border-[#C9A84C]/35 transition-all duration-300"
            >
              {/* Quote icon */}
              <FaQuoteRight className="absolute top-6 right-6 text-[#C9A84C]/15 text-4xl" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <FaStar key={j} className="text-[#C9A84C] text-sm" />
                ))}
              </div>

              {/* Text */}
              <p className="font-heading text-lg text-[#F5F0E8] italic leading-relaxed mb-6">
                {r.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center">
                  <span className="text-[#C9A84C] font-semibold text-sm">
                    {r.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[#F5F0E8] font-semibold text-sm">{r.name}</p>
                  <p className="text-[#B0A8A0] text-xs">Padre/Madre de familia</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#1A1A2E]/80 backdrop-blur-sm border border-[#C9A84C]/20 rounded-full px-8 py-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((j) => (
                <FaStar key={j} className="text-[#C9A84C]" />
              ))}
              <FaStar className="text-[#C9A84C]/40" />
            </div>
            <span className="text-[#C9A84C] font-heading font-bold text-xl">4.4</span>
            <span className="text-[#B0A8A0] text-sm">Calificación en Google</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
