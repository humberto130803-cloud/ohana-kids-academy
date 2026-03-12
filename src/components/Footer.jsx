import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0D0D1A] border-t border-[#C9A84C]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/40 flex items-center justify-center">
                <span className="text-[#C9A84C] font-heading font-bold text-sm">OK</span>
              </div>
              <div>
                <p className="font-heading text-[#F5F0E8] font-semibold">Ohana Kids Academy</p>
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase">
                  Educación Preescolar
                </p>
              </div>
            </div>
            <p className="text-[#B0A8A0] text-sm leading-relaxed max-w-sm mb-6">
              En Ohana, creemos que cada niño es parte de nuestra familia. Educación preescolar
              bilingüe con amor, profesionalismo y dedicación en Ciudad de Panamá.
            </p>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 hover:bg-[#C9A84C]/20 text-[#C9A84C] text-sm px-5 py-2.5 rounded-full transition-all duration-300"
            >
              <FaWhatsapp />
              ¡Contáctanos!
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-[#F5F0E8] text-lg mb-5 flex items-center gap-2">
              <FaClock className="text-[#C9A84C] text-sm" />
              Horarios
            </h4>
            <ul className="space-y-2">
              {siteConfig.hours.map((h, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span className="text-[#B0A8A0]">{h.day}</span>
                  <span className="text-[#F5F0E8]/70">{h.open.split(' ')[0]}</span>
                </li>
              ))}
              <li className="flex justify-between text-sm pt-1 border-t border-[#C9A84C]/10 mt-2">
                <span className="text-[#B0A8A0]">Sáb – Dom</span>
                <span className="text-[#A0784A]">Cerrado</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-[#F5F0E8] text-lg mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-3 group"
                >
                  <FaPhone className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0" />
                  <span className="text-[#B0A8A0] text-sm group-hover:text-[#C9A84C] transition-colors">
                    {siteConfig.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <FaWhatsapp className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0" />
                  <span className="text-[#B0A8A0] text-sm group-hover:text-[#C9A84C] transition-colors">
                    +507 396-4288
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#C9A84C] text-sm mt-0.5 flex-shrink-0" />
                <span className="text-[#B0A8A0] text-sm">{siteConfig.addressFull}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#C9A84C]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B0A8A0]/60">
          <p>© {year} Ohana Kids Academy. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{' '}
            <a
              href="https://axiomsais.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors"
            >
              Axiom Software & AI Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
