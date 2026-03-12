import { motion } from 'framer-motion'
import {
  FaLanguage,
  FaChild,
  FaBrain,
  FaClock,
  FaShieldAlt,
  FaHeart,
} from 'react-icons/fa'
import siteConfig from '../siteConfig'

const iconMap = {
  FaLanguage: <FaLanguage />,
  FaChild: <FaChild />,
  FaBrain: <FaBrain />,
  FaClock: <FaClock />,
  FaShieldAlt: <FaShieldAlt />,
  FaHeart: <FaHeart />,
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-28 overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${siteConfig.images.services})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[#0D0D1A]/92" />

      {/* Decorative gold dots */}
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-[#C9A84C]/30 hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-3 h-3 rounded-full bg-[#C9A84C]/20 hidden lg:block" />

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
            Lo que ofrecemos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl text-[#F5F0E8] mb-4"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-0.5 bg-[#C9A84C] mx-auto"
          />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#1A1A2E]/80 backdrop-blur-sm border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 rounded-2xl p-8 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 group-hover:bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-2xl mb-6 transition-all duration-300">
                {iconMap[s.icon]}
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl text-[#F5F0E8] mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-[#B0A8A0] text-sm leading-relaxed">{s.desc}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/0 group-hover:via-[#C9A84C]/40 to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
