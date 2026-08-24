import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import logo from './assets/products/Aurexon_Prime_Logo_Web.png'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { IndustriesSection } from './components/IndustriesSection'
import { Navbar } from './components/Navbar'
import { MissionVisionSection } from './components/MissionVisionSection'
import { ProductsSection } from './components/ProductsSection'
import { SolutionSystemsSection } from './components/SolutionSystemsSection'
import { QualitySection } from './components/QualitySection'
import { WhyUsSection } from './components/WhyUsSection'

function BackToTopButton() {
  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-navy text-white shadow-soft transition hover:-translate-y-1 hover:bg-emerald focus:outline-none focus:ring-2 focus:ring-emerald/70"
      aria-label="Back to top"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
    >
      <FiArrowRight className="h-5 w-5 -rotate-90" />
    </motion.button>
  )
}

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 800)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative isolate overflow-x-hidden bg-slate-50 text-slate-800">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />
        <div className="orb orb-four" />
      </div>

      <Navbar logo={logo} />

      <main>
        <HeroSection logo={logo} />
        <AboutSection />
        <MissionVisionSection />
        <ProductsSection />
        <SolutionSystemsSection />
        <IndustriesSection />
        <WhyUsSection />
        <QualitySection />
        <ContactSection />
      </main>

      <Footer logo={logo} />

      {showBackToTop ? (
        <div className="fixed bottom-6 right-6 z-50">
          <BackToTopButton />
        </div>
      ) : null}
    </div>
  )
}

export default App
