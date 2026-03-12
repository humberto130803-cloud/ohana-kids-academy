import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative py-28 overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${siteConfig.images.about})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0D0D1A]/95 via-[#0D0D1A]/80 to-[#0D0D1A]/50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-accent text-[#C9A84C] text-3xl mb-4"
            >
              Nuestra historia
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl text-[#F5F0E8] leading-tight mb-6"
            >
              Más que una academia,
              <br />
              <span className="text-[#C9A84C] italic">una familia.</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-0.5 bg-[#C9A84C] mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-[#B0A8A0] text-base leading-relaxed"
            >
              <p>
                En la cultura hawaiana, <strong className="text-[#C9A84C]">"Ohana"</strong> significa
                familia — y ese es exactamente el corazón de todo lo que hacemos. Desde el primer día,
                cada niño que cruza nuestras puertas se convierte en parte de nuestra familia.
              </p>
              <p>
                Bajo el liderazgo de la <strong className="text-[#F5F0E8]">Sra. Lee</strong>, hemos
                construido un espacio donde el aprendizaje bilingüe, la calidez humana y el desarrollo
                integral se entrelazan para formar niños seguros, curiosos y listos para el mundo.
              </p>
              <p>
                Nuestras maestras son profesionales comprometidas con cada etapa del crecimiento de
                su hijo, ofreciendo atención personalizada en un entorno seguro y estimulante.
              </p>
            </motion.div>
          </div>

          {/* Right: Quote card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative border frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C9A84C]/20 rounded-2xl" />
            <div className="bg-[#1A1A2E]/90 backdrop-blur-sm border border-[#C9A84C]/20 rounded-2xl p-10 relative">
              <FaQuoteLeft className="text-[#C9A84C]/30 text-5xl mb-6" />
              <p className="font-heading text-xl md:text-2xl text-[#F5F0E8] italic leading-relaxed mb-8">
                "En Ohana, creemos que cada niño es único y merece un ambiente donde pueda florecer
                a su propio ritmo, rodeado de amor, estímulo y excelencia académica."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center">
                  <span className="text-[#C9A84C] font-heading font-bold">SL</span>
                </div>
                <div>
                  <p className="text-[#F5F0E8] font-semibold">Sra. Lee</p>
                  <p className="text-[#C9A84C] text-sm">Directora, Ohana Kids Academy</p>
                </div>
              </div>

              {/* Gold accent corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#C9A84C]/10 border-b border-l border-[#C9A84C]/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
