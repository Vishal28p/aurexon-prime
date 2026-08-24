import { motion } from 'framer-motion'
import { FiArrowRight, FiMail, FiPhone, FiTag } from 'react-icons/fi'
import { navLinks } from '../data/siteContent'

type FooterProps = {
  logo: string
}

export function Footer({ logo }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#home" className="inline-flex items-center">
              <img src={logo} alt="Aurexon Prime" className="h-auto w-[210px] max-w-full rounded-full object-contain" />
            </a>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
              Aurexon Prime is a premium B2B ingredient partner focused on hydrocolloids and food solutions that deliver dependable performance, elegant texture and long-term value.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Quick Navigation</p>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="group inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-emerald">
                  <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Contact</p>
            <div className="mt-5 space-y-4 text-sm text-white/75">
              <a href="tel:+917567213011" className="flex items-center gap-3 transition hover:text-emerald">
                <FiPhone className="h-4 w-4" />
                +91 75672 13011
              </a>
              <a href="mailto:info.aurexonprime@gmail.com" className="flex items-center gap-3 transition hover:text-emerald">
                <FiMail className="h-4 w-4" />
                info.aurexonprime@gmail.com
              </a>
              <div className="flex items-center gap-3 text-white/75">
                <FiTag className="h-4 w-4" />
                GST: 24ACPFA0361F1ZP
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">© 2026 Aurexon Prime. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-white/60">Back to top</p>
            <motion.a
              href="#home"
              whileHover={{ y: -3 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-emerald"
              aria-label="Back to top"
            >
              <FiArrowRight className="h-5 w-5 -rotate-90" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}