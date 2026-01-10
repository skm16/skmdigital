import { Check } from 'lucide-react'
import Badge from './ui/Badge'
import AnimatedSection from './ui/AnimatedSection'

const benefits = [
  "Enterprise builds since 2019. National orgs. Real traffic.",
  "WordPress and Next.js (we’re not married to one tool).",
  "Production AI integrations (not a weekend demo).",
  "1M+ monthly visitors supported without chaos.",
  "White-label by default. We stay invisible."
]

export default function SolutionSection() {
  return (
    <section className="space-section-md bg-white">
      <div className="container-default">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Headline & Body (60% width = 3 cols) */}
          <div className="lg:col-span-3">
            <AnimatedSection animation="fadeInLeft">
              <Badge variant="primary" className="mb-4">
                The Solution
              </Badge>
              <h2 className="text-heading-xl text-primary-900 mb-6">
                Your White-Label Technical Partner
              </h2>
              <p className="text-body-lg text-gray-700 leading-relaxed">
                We’re the team behind your team. We choose the right stack, build the hard parts, and make you look good doing it.
              </p>
            </AnimatedSection>
          </div>

          {/* Right Column - Benefits List (40% width = 2 cols) */}
          <div className="lg:col-span-2">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeInRight"
                  delay={100 * index}
                >
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg border-l-3 border-accent-400 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500 hover:shadow-md group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-400 flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-body-md text-gray-800">{benefit}</span>
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
