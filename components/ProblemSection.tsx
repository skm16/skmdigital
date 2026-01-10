import { Construction, Bot, Zap } from 'lucide-react'
import Card from './ui/Card'
import Badge from './ui/Badge'
import AnimatedSection from './ui/AnimatedSection'

interface PainPoint {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string; size?: number }>
}

const painPoints: PainPoint[] = [
  {
    title: 'Complex Integration',
    description: "WordPress needs to talk to Salesforce and payments. In real time. Your team's integration plan is... \"let's see what the plugin does.\"",
    icon: Construction
  },
  {
    title: 'AI Capabilities',
    description: "They want AI features. Not a blog post about AI. You're deciding whether to build it, fake it, or change the subject.",
    icon: Bot
  },
  {
    title: 'Modern Architecture',
    description: "Headless WordPress. Next.js. Enterprise traffic. Your developers are great - at themes, page builders, and politely sweating.",
    icon: Zap
  }
]

export default function ProblemSection() {
  return (
    <section className="space-section-lg bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-default relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <Badge variant="outline" className="text-white mb-4">
            The Challenge
          </Badge>
          <h2 className="text-heading-xl text-white mb-4">
            Your client wants "custom." Your team has "a plugin."
          </h2>
        </AnimatedSection>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={150 * index}
              >
                <Card
                  variant="glass"
                  hover="glow"
                  padding="spacious"
                  className="text-center h-full group"
                >
                  {/* Icon with Background Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-accent-500/10 p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-14 h-14 text-accent-300" />
                    </div>
                  </div>

                  <h3 className="text-heading-sm text-white mb-3">{point.title}</h3>
                  <p className="text-body-md text-gray-300">{point.description}</p>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Closing Statement */}
        <AnimatedSection animation="fadeIn" delay={600}>
          <p className="text-body-lg text-center font-medium text-accent-100 max-w-4xl mx-auto">
            This is the work we do all week. Fixed scope. Clear dates. No heroics required.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
