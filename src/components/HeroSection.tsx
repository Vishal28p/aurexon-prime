import { motion } from 'framer-motion'
import { FiArrowRight, FiShield } from 'react-icons/fi'
import { fadeUp, stagger } from '../lib/motion'

type HeroSectionProps = {
  logo: string
}

export function HeroSection({ logo }: HeroSectionProps) {
  void logo

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-32">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581093458791-9d8f8f0d5b19?auto=format&fit=crop&w=1800&q=80')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(11,46,89,0.94)_0%,rgba(11,46,89,0.82)_44%,rgba(11,46,89,0.52)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,159,110,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%)]" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-4 pb-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl text-white">
          <motion.h1 variants={fadeUp} className="max-w-3xl font-display text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Your Trusted Partner in Premium Hydrocolloid & Food Ingredient Solutions.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Aurexon Prime supports manufacturers with dependable hydrocolloids and food ingredients, blending quality sourcing, consistent standards and responsive service for long-term B2B growth.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-7 py-4 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(14,159,110,0.35)] transition hover:-translate-y-0.5 hover:bg-[#0ba56f]">
              Explore Products
              <FiArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15">
              Contact Us
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 grid gap-4 sm:grid-cols-3">
            {['Premium sourcing', 'Reliable supply', 'Global B2B focus'].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/10 px-5 py-4 text-sm text-white/80 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-emerald/20 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_28px_100px_rgba(2,8,23,0.28)] backdrop-blur-2xl">
            <div className="flex items-center gap-3 text-white/80">
              <FiShield className="h-5 w-5 text-emerald" />
              <span className="text-sm font-semibold uppercase tracking-[0.28em]">Quality-first supply</span>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-950/30">
              <img
                src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1400&q=80"
                alt="Ingredient manufacturing and laboratory workspace"
                className="h-[320px] w-full object-cover"
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ['Quality-led', 'Every batch handled with consistency in mind.'],
                ['Customer-focused', 'Long-term relationships drive our operating model.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-4 text-white/85">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}