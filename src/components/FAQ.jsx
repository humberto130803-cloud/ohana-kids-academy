import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'
import siteConfig from '../siteConfig'

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        open ? 'border-[#C9A84C]/40' : 'border-[#C9A84C]/10 hover:border-[#C9A84C]/25'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#1A1A2E]/60 hover:bg-[#1A1A2E]/80 transition-colors duration-200"
      >
        <span className="font-heading text-[#F5F0E8] text-base md:text-lg pr-4">{q}</span>
        <span className="text-[#C9A84C] flex-shrink-0 text-sm">
          {open ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 bg-[#0D0D1A]/50 border-t border-[#C9A84C]/10">
              <p className="text-[#B0A8A0] text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#0D0D1A]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[#C9A84C] text-3xl mb-3"
          >
            Resolvemos sus dudas
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl text-[#F5F0E8] mb-4"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-0.5 bg-[#C9A84C] mx-auto"
          />
        </div>

        <div className="space-y-3">
          {siteConfig.faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[#B0A8A0] text-sm mb-4">¿Tiene otra pregunta?</p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#E8C96A] border border-[#C9A84C]/30 hover:border-[#C9A84C] px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium"
          >
            Escríbanos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
