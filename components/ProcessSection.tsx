import type { ProcessStep } from '@/types'
import { FileText, Code, Eye, Rocket, LucideIcon } from 'lucide-react'
import Card from './ui/Card'
import Badge from './ui/Badge'
import AnimatedSection from './ui/AnimatedSection'

interface Step extends ProcessStep {
  icon: LucideIcon
}

const steps: Step[] = [
  {
    number: 1,
    title: "You Send Requirements",
    description: "Send scope + timeline. We reply with a fixed price in 48 hours. Yes, really.",
    icon: FileText
  },
  {
    number: 2,
    title: "We Build",
    description: "We build in your orbit. Weekly written updates. No status-chasing.",
    icon: Code
  },
  {
    number: 3,
    title: "You Review",
    description: "Staging link, clear feedback loop, reasonable revisions included.",
    icon: Eye
  },
  {
    number: 4,
    title: "We Deploy",
    description: "Launch under your banner. Two weeks of post-launch support baked in.",
    icon: Rocket
  }
]

export default function ProcessSection() {
  return (
    <section className="space-section-md bg-white">
      <div className="container-default">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            The Process
          </Badge>
          <h2 className="text-heading-xl text-primary-900 mb-4">
            How We Work (Invisibly)
          </h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            Simple process. Un-simple work.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-accent-200" style={{ zIndex: 0 }} />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative" style={{ zIndex: 1 }}>
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  delay={150 * index}
                >
                  <Card
                    variant="elevated"
                    hover="lift"
                    padding="default"
                    className="text-center h-full group"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <Icon size={24} className="text-accent-500" />
                    </div>

                    {/* Step Circle */}
                    <div className="flex justify-center mb-4">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-white text-heading-md shadow-lg transition-transform group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, #3182ce 0%, #2563ab 100%)'
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-heading-sm text-primary-800 mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-body-sm text-gray-700">
                      {step.description}
                    </p>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
