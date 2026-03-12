import { motion } from 'framer-motion'
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden isolate"
      style={{ minHeight: '100dvh', WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${siteConfig.images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0D0D1A]/80 via-[#0D0D1A]/60 to-[#0D0D1A]/90" />

      {/* Gold vignette bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 -z-10 bg-gradient-to-t from-[#0D0D1A] to-transparent" />

      {/* Decorative gold lines */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent hidden xl:block" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent hidden xl:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-16 h-px bg-[#C9A84C] mx-auto mb-8"
        />

        {/* Script accent */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-accent text-[#C9A84C] text-3xl md:text-4xl mb-4"
        >
          Bienvenidos a
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] leading-tight mb-2"
        >
          Ohana Kids
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-[#C9A84C] italic leading-tight mb-8"
        >
          Academy
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[#B0A8A0] text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light tracking-wide"
        >
          Educación preescolar bilingüe en el corazón de Panamá.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-[#F5F0E8]/70 text-base max-w-xl mx-auto mb-12"
        >
          En Ohana, creemos que cada niño es parte de nuestra familia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0D0D1A] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base tracking-wide shadow-lg shadow-[#C9A84C]/20"
          >
            <FaWhatsapp className="text-xl" />
            Agenda una visita
          </a>
          <a
            href="#nosotros"
            className="flex items-center gap-2 border border-[#C9A84C]/40 hover:border-[#C9A84C] text-[#F5F0E8] hover:text-[#C9A84C] px-8 py-4 rounded-full transition-all duration-300 text-base"
          >
            Conocer más
          </a>
        </motion.div>

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 inline-flex items-center gap-2 bg-[#1A1A2E]/80 backdrop-blur-sm border border-[#C9A84C]/20 rounded-full px-5 py-2.5"
        >
          <span className="text-[#C9A84C] text-sm font-semibold">★ 4.4</span>
          <span className="text-[#B0A8A0] text-sm">en Google Reviews</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A84C]/60"
      >
        <FaChevronDown className="text-xl" />
      </motion.div>
    </section>
  )
}
