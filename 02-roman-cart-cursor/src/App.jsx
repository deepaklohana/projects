import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import LogoStrip from './components/LogoStrip'
import FreeCartSection from './components/FreeCartSection'
import WorksSection from './components/WorksSection'
import BestCartSection from './components/BestCartSection'
import UseCasesSection from './components/UseCasesSection'
import PricingSection from './components/PricingSection'
import BlogSection from './components/BlogSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <LogoStrip />
        <FreeCartSection />
        <WorksSection />
        <BestCartSection />
        <UseCasesSection />
        <PricingSection />
        <BlogSection />
      </main>
      <CTASection />
      <Footer />
    </div>
  )
}

export default App