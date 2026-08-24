import { motion } from 'framer-motion'
import { solutionSystems } from '../data/siteContent'
import { fadeUp, stagger } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function SolutionSystemsSection() {
  return (
    <section id="solutions" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Application Solution Systems"
          title="Configured systems for practical formulation performance"
          description="Our ingredient systems combine complementary functionality to support reliable performance across food, beverage and pharmaceutical applications."
          centered
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {solutionSystems.map((solution) => (
            <motion.article
              key={solution.name}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] ring-1 ring-slate-200/70 backdrop-blur-xl transition"
            >
              <div className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-slate-100">
                <img
                  src={solution.image}
                  alt={solution.name}
                  className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-navy">{solution.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{solution.description}</p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald">Recommended Ingredients</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {solution.ingredients.map((ingredient) => (
                    <span key={ingredient} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}