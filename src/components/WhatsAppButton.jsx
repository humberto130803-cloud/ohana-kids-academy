import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20bb5a] text-white font-semibold py-3 px-5 rounded-full shadow-2xl shadow-[#25D366]/30 transition-colors duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="text-sm hidden sm:inline">¡Contáctanos!</span>
    </motion.a>
  )
}
