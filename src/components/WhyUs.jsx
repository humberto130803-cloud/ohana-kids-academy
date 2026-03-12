import { motion } from 'framer-motion'
import siteConfig from '../siteConfig'

export default function WhyUs() {
  return (
    <section className="bg-[#1A1A2E] py-20 border-y border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[#C9A84C] text-3xl mb-3"
          >
            La diferencia Ohana
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl text-[#F5F0E8]"
          >
            ¿Por qué elegirnos?
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.whyUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-5">
                <div className="w-24 h-24 rounded-full bg-[#C9A84C]/5 border-2 border-[#C9A84C]/20 group-hover:border-[#C9A84C]/60 flex items-center justify-center mx-auto transition-all duration-400">
                  <span className="font-heading text-xl font-bold text-[#C9A84C]">{item.stat}</span>
                </div>
                {/* Ring */}
                <div className="absolute inset-0 rounded-full border border-[#C9A84C]/10 scale-125 group-hover:scale-110 transition-transform duration-400" />
              </div>
              <p className="text-[#B0A8A0] text-sm leading-relaxed max-w-[180px] mx-auto">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
