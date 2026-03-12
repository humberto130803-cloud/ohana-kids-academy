import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import siteConfig from '../siteConfig'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0D0D1A]/95 backdrop-blur-md border-b border-[#C9A84C]/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/40 flex items-center justify-center group-hover:border-[#C9A84C] transition-all duration-300">
            <span className="text-[#C9A84C] font-heading font-bold text-sm">OK</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-[#F5F0E8] text-base font-semibold tracking-wide">
              Ohana Kids
            </span>
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase">Academy</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#B0A8A0] hover:text-[#C9A84C] transition-colors duration-300 text-sm tracking-wide font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0D0D1A] font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 tracking-wide"
        >
          Agenda una visita
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#C9A84C] text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0D0D1A]/98 border-t border-[#C9A84C]/20 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors text-base block py-1"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center bg-[#C9A84C] text-[#0D0D1A] font-semibold py-3 rounded-full text-sm mt-2"
                >
                  Agenda una visita
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
