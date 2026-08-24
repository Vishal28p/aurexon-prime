import { motion } from 'framer-motion'
import { industries } from '../data/siteContent'
import { fadeUp, stagger } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Industries We Serve"
          description="Empowering Manufacturers Across Diverse Industries"
          centered
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {industries.map((industry) => {
            const Icon = industry.icon

            return (
              <motion.article
                key={industry.name}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] ring-1 ring-slate-200/70 backdrop-blur-xl transition"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald/10 text-emerald transition group-hover:bg-emerald group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{industry.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}