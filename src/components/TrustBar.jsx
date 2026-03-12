import { motion } from 'framer-motion'
import { FaGlobe, FaUserGraduate, FaClock, FaStar } from 'react-icons/fa'

const items = [
  { icon: <FaGlobe />, label: 'Educación Bilingüe', sub: 'Español & Inglés' },
  { icon: <FaUserGraduate />, label: 'Maestras Profesionales', sub: 'Equipo certificado' },
  { icon: <FaClock />, label: 'Horario Extendido', sub: '7:30 AM – 5:30 PM' },
  { icon: <FaStar />, label: '4.4 Estrellas', sub: 'Google Reviews' },
]

export default function TrustBar() {
  return (
    <section className="bg-[#1A1A2E] border-y border-[#C9A84C]/15 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-[#F5F0E8] text-sm font-semibold leading-tight">{item.label}</p>
                <p className="text-[#B0A8A0] text-xs">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
