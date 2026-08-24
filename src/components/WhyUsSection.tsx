import { motion } from 'framer-motion'
import { features } from '../data/siteContent'
import { fadeUp, stagger } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Us"
          title="Why choose Aurexon Prime"
          description="We combine disciplined sourcing, premium standards and customer-first execution to support reliable B2B ingredient partnerships."
          centered
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}