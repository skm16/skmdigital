import type { ServiceCard } from '@/types'
import { Clock, ArrowRight } from 'lucide-react'
import Card from './ui/Card'
import Badge from './ui/Badge'
import AnimatedSection from './ui/AnimatedSection'

interface Service extends ServiceCard {
  badge?: string
  featured?: boolean
}

const services: Service[] = [
  {
    title: "Multi-System Integration",
    description: "Make WordPress, Salesforce/HubSpot, and payments agree on reality. Bi-directional sync, audit trails, fewer \"why is this wrong?\" emails.",
    pricing: "$20-40k",
    timeline: "8-12 weeks",
    badge: "Integration"
  },
  {
    title: "AI-Powered Solutions",
    description: "AI workflows that actually ship: classification, generation, automation - built with guardrails, cost controls, and measurable outcomes.",
    pricing: "$15-35k",
    timeline: "6-10 weeks",
    badge: "AI"
  },
  {
    title: "Modern Web Applications",
    description: "When WordPress isn't the answer, we build the answer. Next.js + PostgreSQL apps for reporting, ops, and internal tools.",
    pricing: "$25-50k",
    timeline: "10-16 weeks",
    badge: "Full-Stack",
    featured: true
  },
  {
    title: "Enterprise WordPress",
    description: "High-traffic optimization, complex data workflows, custom plugins, multisite architectures. WordPress at scale - handling 1M+ monthly visitors with advanced caching, CDN optimization, and custom backend systems.",
    pricing: "$15-30k",
    timeline: "6-10 weeks",
    badge: "WordPress"
  },
  {
    title: "Headless Architectures",
    description: "Keep WordPress for editing. Use Next.js for speed. Everyone wins (especially Core Web Vitals).",
    pricing: "$20-35k",
    timeline: "8-12 weeks",
    badge: "Headless"
  },
  {
    title: "API Development & Integration",
    description: "Clean APIs, reliable webhooks, sane auth. The plumbing that makes everything else work.",
    pricing: "$15-30k",
    timeline: "6-10 weeks",
    badge: "API"
  }
]

export default function ServicesGrid() {
  return (
    <section id="services" className="space-section-lg bg-gray-50">
      <div className="container-default">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Capabilities
          </Badge>
          <h2 className="text-heading-xl text-primary-900 mb-4">
            What we get called in for.
          </h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            The stuff that makes projects drift, budgets balloon, and Slack channels get... quiet.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={50 * index}
            >
              <Card
                variant="elevated"
                hover="lift"
                padding="default"
                className={`h-full group relative ${
                  service.featured
                    ? 'border-3 border-transparent bg-gradient-to-br from-accent-400/10 to-primary-600/10 ring-3 ring-accent-400'
                    : ''
                }`}
              >
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant={service.featured ? 'primary' : 'default'}
                      size="sm"
                    >
                      {service.badge}
                    </Badge>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-heading-md text-primary-800 mb-3 pr-24 pt-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary-700 group-hover:to-accent-500 group-hover:bg-clip-text group-hover:text-transparent">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-gray-700 mb-4 line-clamp-4">
                  {service.description}
                </p>

                {/* Metadata Row */}
                <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200">
                  {/* Pricing */}
                  <div>
                    <span className="text-label-lg font-semibold text-accent-600">
                      {service.pricing}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-4 w-px bg-gray-300" />

                  {/* Timeline */}
                  <div className="flex items-center text-label-md text-gray-600">
                    <Clock size={14} className="mr-1" />
                    {service.timeline}
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#contact"
                    className="text-label-lg text-accent-500 font-medium inline-flex items-center hover:text-accent-600"
                  >
                    Talk it through
                    <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
