import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/siteContent'

type NavbarProps = {
  logo: string
}

export function Navbar({ logo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={false}
      animate={{ y: 0 }}
      className={`relative z-50 border-b transition-all duration-300 ${
        isScrolled ? 'border-slate-200/80 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center outline-none focus:ring-2 focus:ring-emerald/60">
          <img src={logo} alt="Aurexon Prime" className="h-auto w-[220px] max-w-full object-contain sm:w-[240px]" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-emerald">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:border-emerald/30 hover:text-emerald lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-200/70 bg-white/95 transition-all duration-300 lg:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-emerald"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}