import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiTag } from 'react-icons/fi'
import { contactDetails } from '../data/siteContent'
import { fadeUp } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Connect with Aurexon Prime"
          description="Reach out directly for product information, supply discussions and company introductions."
          centered
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid gap-5"
          >
            {contactDetails.map((detail, index) => {
              const Icon = index === 0 ? FiPhone : index === 1 ? FiMail : FiTag

              return (
                <motion.div
                  key={detail.label}
                  variants={fadeUp}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-400">{detail.label}</p>
                      <p className="mt-2 text-lg font-semibold text-navy">{detail.value}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)]"
          >
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
              <div className="flex items-center gap-3 text-navy">
                <FiMapPin className="h-5 w-5 text-emerald" />
                <h3 className="text-lg font-semibold">Google Maps placeholder</h3>
              </div>
            </div>
            <div className="grid min-h-[360px] place-items-center bg-[linear-gradient(135deg,rgba(11,46,89,0.05),rgba(14,159,110,0.1))] p-6 text-center">
              <div className="max-w-md rounded-[1.75rem] border border-dashed border-slate-300 bg-white/85 p-8 backdrop-blur-sm">
                <FiMapPin className="mx-auto h-10 w-10 text-emerald" />
                <p className="mt-4 text-lg font-semibold text-navy">Map area reserved for future location details</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  This space is intentionally left open for a future embedded map or office location update.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}