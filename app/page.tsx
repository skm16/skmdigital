// Force static generation - page is pre-rendered at build time
export const dynamic = 'force-static'
export const revalidate = false

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import ServicesGrid from '@/components/ServicesGrid'
import ProofSection from '@/components/ProofSection'
import ProcessSection from '@/components/ProcessSection'
import ContactSection from '@/components/contact/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ServicesGrid />
        <ProofSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
