import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowRight, FiX } from 'react-icons/fi'
import { products } from '../data/siteContent'
import { fadeUp, stagger } from '../lib/motion'
import { SectionHeading } from './SectionHeading'

export function ProductsSection() {
  const [activeProductName, setActiveProductName] = useState<string | null>(null)

  const activeProduct = products.find((product) => product.name === activeProductName) ?? null

  useEffect(() => {
    if (!activeProductName) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProductName(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeProductName])

  return (
    <>
      <section id="products" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Portfolio"
          title="Premium ingredients for international B2B applications"
          description="Aurexon Prime presents a focused portfolio of functional ingredients designed for reliability, premium performance and clear business value."
          centered
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {products.map((product) => (
            <motion.article
              key={product.name}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 backdrop-blur-xl transition will-change-transform"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,46,89,0.42))]" aria-hidden="true" />
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <h3 className="text-2xl font-semibold text-navy">{product.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm text-slate-500">
                    {product.availableGrades ? `${product.availableGrades.length} available grade options` : 'Functional ingredient'}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveProductName(product.name)}
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald"
                  >
                    View Details
                    <FiArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      </section>

      <AnimatePresence>
        {activeProduct ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/55 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProductName(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-modal-title"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_30px_120px_rgba(15,23,42,0.32)]"
            >
              <div className="grid max-h-[90vh] overflow-y-auto lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative flex min-h-[280px] items-center justify-center bg-slate-100 p-3 sm:p-5 lg:min-h-full">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="max-h-[70vh] w-full object-contain"
                  />
                </div>

                <div className="relative p-6 sm:p-8 lg:p-10">
                  <button
                    type="button"
                    onClick={() => setActiveProductName(null)}
                    className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-emerald hover:text-emerald"
                    aria-label="Close details"
                  >
                    <FiX className="h-5 w-5" />
                  </button>

                  <div className="pr-14">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald">Product Details</p>
                    <h3 id="product-modal-title" className="mt-3 font-display text-4xl text-navy sm:text-5xl">
                      {activeProduct.name}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">{activeProduct.description}</p>
                  </div>

                  {activeProduct.availableGrades ? (
                    <section className="mt-8">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-400">Available Grades</h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {activeProduct.availableGrades.map((grade) => (
                          <span key={grade} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                            {grade}
                          </span>
                        ))}
                      </div>
                    </section>
                  ) : null}

                  <section className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-400">Key Functions</h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProduct.keyFunctions.map((item) => (
                        <span key={item} className="rounded-full border border-emerald/15 bg-emerald/8 px-4 py-2 text-sm font-medium text-slate-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-400">Applications</h4>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {activeProduct.applications.map((application) => (
                        <div key={application} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                          {application}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}