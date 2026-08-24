import { motion } from 'framer-motion'
import { FiEye, FiTarget } from 'react-icons/fi'
import { fadeUp, stagger } from '../lib/motion'

const cards = [
  {
    title: 'Our Mission',
    icon: FiTarget,
    description:
      'At Aurexon Prime, our mission is to simplify global ingredient sourcing by delivering reliable hydrocolloids, stabilizers and functional ingredient solutions through qualified manufacturing partners, professional export services and responsive customer support. We are committed to building long-term partnerships based on quality, transparency and trust while helping manufacturers achieve consistent product performance.',
  },
  {
    title: 'Our Vision',
    icon: FiEye,
    description:
      'Our vision is to become a globally trusted export sourcing partner for hydrocolloids and functional ingredients, recognized for excellence in quality, reliability and customer commitment. We aspire to create lasting value by connecting international markets with dependable ingredient solutions that support innovation and sustainable growth.',
  },
]

function FloatingIcon({
  icon: Icon,
  title,
}: {
  icon: typeof FiTarget
  title: string
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,rgba(14,159,110,0.12),rgba(11,46,89,0.12))] text-navy shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
      aria-hidden="true"
    >
      <Icon className="h-8 w-8" />
      <span className="sr-only">{title}</span>
    </motion.div>
  )
}

export function MissionVisionSection() {
  return (
    <section id="mission-vision" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white px-5 py-10 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-10"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
            <div className="absolute left-0 top-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/2 rounded-full bg-navy/10 blur-3xl" />
          </div>

          <motion.div variants={fadeUp} className="relative mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald">
              Mission &amp; Vision
            </div>
            <h2 className="mt-5 font-display text-4xl leading-tight text-navy sm:text-5xl">
              The values that shape our sourcing partnerships
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              A focused statement of purpose and direction, built to reflect the standard of service Aurexon Prime brings to global ingredient sourcing.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="relative mt-12 grid gap-6 lg:grid-cols-2"
          >
            {cards.map((card) => {
              const Icon = card.icon

              return (
                <motion.article
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-shadow duration-300 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <FloatingIcon icon={Icon} title={card.title} />
                    <div className="mt-2 h-px flex-1 bg-gradient-to-r from-emerald/40 via-slate-200 to-transparent" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-navy sm:text-[1.75rem]">
                    {card.title}
                  </h3>

                  <div className="mt-4 h-px w-20 bg-gradient-to-r from-emerald to-navy/70" />

                  <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                    {card.description}
                  </p>
                </motion.article>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}