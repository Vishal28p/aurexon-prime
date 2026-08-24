import { motion } from 'framer-motion'
import { aboutParagraphs } from '../data/siteContent'
import { fadeUp, stagger } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

const aboutImage =
  'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80'

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center"
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <img
              src={aboutImage}
              alt="Chemicals and laboratory research equipment"
              className="h-[420px] w-full rounded-[2rem] object-cover shadow-[0_20px_70px_rgba(15,23,42,0.12)]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About Us"
              title="Hydrocolloids, Stabilizers & Functional Ingredient Solutions"
              description=""
            />
            <div className="mt-8 space-y-5 text-slate-600">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}