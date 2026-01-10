import { Calendar, Send, Clock, Lock, DollarSign } from 'lucide-react'
import Button from './ui/Button'
import Badge from './ui/Badge'
import AnimatedSection from './ui/AnimatedSection'

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="space-section-lg relative overflow-hidden text-white"
    >
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #2563ab 0%, #3182ce 50%, #234a7e 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 15s ease infinite'
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="container-default text-center relative z-10">
        <AnimatedSection animation="fadeInDown" delay={200}>
          <h2
            className="text-display-sm mb-6"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #90cdf4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Got a project with sharp edges?
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="space-y-4 mb-8">
            <p className="text-body-lg text-gray-100">
              If a project is drifting toward "we'll figure it out," let's talk.<br/>We'll sanity-check scope, recommend the right stack, and tell you what it costs to ship.
            </p>
            <p className="text-body-lg text-gray-100">
              20 minutes. No sales routine. Just technical clarity - and a straight answer.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="mailto:sean@skm.digital">
              <Button variant="light" size="lg" icon={Calendar} iconPosition="left">
                Book 20 Minutes
              </Button>
            </a>
            <a href="mailto:sean@skm.digital">
              <Button variant="ghost" size="lg" icon={Send} iconPosition="left">
                Email the Details
              </Button>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={800}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Badge variant="outline" className="text-white border-white" icon={Clock}>
              Reply &lt; 24h
            </Badge>
            <Badge variant="outline" className="text-white border-white" icon={Lock}>
              Confidential
            </Badge>
            <Badge variant="outline" className="text-white border-white" icon={DollarSign}>
              Fixed quote in 48h
            </Badge>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
