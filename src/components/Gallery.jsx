import { motion } from 'framer-motion'
import siteConfig from '../siteConfig'

const galleryImages = [
  { src: siteConfig.images.gallery1, alt: 'Niños aprendiendo en clase' },
  { src: siteConfig.images.gallery2, alt: 'Actividades educativas' },
  { src: siteConfig.images.gallery3, alt: 'Juego y aprendizaje' },
  { src: siteConfig.images.gallery4, alt: 'Desarrollo temprano' },
  { src: siteConfig.images.gallery5, alt: 'Niños en actividades' },
  { src: siteConfig.images.gallery6, alt: 'Ambiente educativo' },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[#C9A84C] text-3xl mb-3"
          >
            Momentos inolvidables
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl text-[#F5F0E8] mb-4"
          >
            Nuestra Galería
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-0.5 bg-[#C9A84C] mx-auto"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-xl group ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? undefined : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: i === 0 ? '16/9' : undefined }}
              />
              {/* Gold overlay on hover */}
              <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/10 transition-all duration-400" />
              {/* Border */}
              <div className="absolute inset-0 border border-[#C9A84C]/0 group-hover:border-[#C9A84C]/30 rounded-xl transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
