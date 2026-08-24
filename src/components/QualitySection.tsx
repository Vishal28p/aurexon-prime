import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { qualityParagraph, qualityPoints } from '../data/siteContent'
import { fadeUp, stagger } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function QualitySection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="Quality Commitment"
              title="A disciplined standard for premium ingredients"
              description={qualityParagraph}
            />
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2">
            {qualityPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
                <FiCheckCircle className="h-5 w-5 shrink-0 text-emerald" />
                <span className="text-sm font-medium text-slate-700">{point}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-navy/5 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="grid gap-4 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(11,46,89,0.96),rgba(14,159,110,0.9))] p-8 text-white">
              <div className="flex items-center gap-3 text-white/90">
                <FiCheckCircle className="h-5 w-5 text-emerald-200" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em]">Quality focus</p>
              </div>
              <h3 className="font-display text-3xl leading-tight">Premium ingredients, disciplined execution</h3>
              <p className="max-w-xl text-sm leading-7 text-white/80">
                A transparent quality mindset helps Aurexon Prime deliver ingredient solutions that look premium, perform consistently and inspire confidence in every shipment.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem]">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
                alt="Organized warehouse storage racks"
                className="h-[280px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}