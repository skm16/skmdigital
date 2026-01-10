'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-react'
import Badge from './ui/Badge'
import AnimatedSection from './ui/AnimatedSection'

const techStack = [
  { name: 'Next.js', logo: 'nextjs' },
  { name: 'WordPress', logo: 'wordpress' },
  { name: 'Vercel', logo: 'vercel' },
  { name: 'Prisma', logo: 'prisma' },
  { name: 'PostgreSQL', logo: 'postgresql' },
  { name: 'OpenAI', logo: 'openai' }
]

type CaseStudy = {
  id: string
  title: string
  badge: string
  challenge: string
  solution: string
  result: string
  metrics: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 'integration',
    title: 'Multi-System Integration',
    badge: 'Integration',
    challenge: 'National nonprofit with hundreds of members was drowning in manual processes. WordPress profiles had to be manually duplicated in Salesforce. PayPal payments were completely disconnected. Accounting staff spent 15+ hours per week manually checking payments, updating Salesforce, then updating accounting software. High error rate. Delayed processing (sometimes weeks). No real-time visibility into member status.',
    solution: 'Built 3-way integration platform connecting WordPress membership portal, Salesforce CRM, and Stripe payments. Custom bi-directional sync plugin (reusable across their entire WordPress ecosystem). Member profile updates in WordPress instantly sync to Salesforce. Payment data flows across all three systems automatically.',
    result: 'Zero data sync errors. Real-time payment tracking for accounting. Membership renewals processed in minutes instead of weeks. Platform running flawlessly. The reusable connector has been deployed across multiple WordPress sites in their organization.',
    metrics: ['15+ hours saved/week', '5+ years uptime', 'Zero sync errors']
  },
  {
    id: 'ai',
    title: 'AI-Powered Automation',
    badge: 'AI',
    challenge: 'National organization with 1,000+ posts, 100+ categories, and 1,000+ tags had lost control of their content. No ownership tracking - departments couldn\'t identify which pages they were responsible for. Taxonomy explosion with hundreds of inconsistent, duplicate tags. IT estimated 400+ hours to manually review and categorize all content.',
    solution: 'Developed custom WordPress plugin leveraging Claude AI to intelligently audit and classify thousands of content items at scale. AI-powered department classification with confidence scores. Hybrid approach: URL pattern matching for predictable content (zero AI cost), AI analysis for ambiguous content. Cost: under $1 in AI costs for 1,000+ posts.',
    result: '1,000+ posts classified and assigned to departments. Taxonomy cleanup consolidated duplicate categories/tags. SEO improvements with meta descriptions for 100+ pages. Platform running reliably.',
    metrics: ['400+ hours saved', '95%+ accuracy', '5+ years uptime']
  },
  {
    id: 'webapp',
    title: 'Modern Web Application',
    badge: 'Full-Stack',
    challenge: 'National nonprofit needed automated Jira reporting to track hundreds of issues across multiple projects. Manual report generation took 10+ hours per month. Executive team needed real-time insights into project health, velocity, and blockers. Existing Jira dashboards were insufficient for leadership-level strategic planning.',
    solution: 'Built custom Next.js application with PostgreSQL database and OpenAI integration. Automated data sync from Jira via API. AI-powered insights analyze trends, identify blockers, and generate executive summaries. Interactive dashboards with drill-down capabilities. Scheduled report generation with email delivery.',
    result: 'Real-time visibility into project status for leadership. AI-enhanced insights reveal patterns humans missed. Automated weekly executive summaries. Platform enables data-driven decision making. System running reliably with zero downtime.',
    metrics: ['10+ hours saved/month', '2+ years uptime', 'Zero downtime']
  }
]

export default function ProofSection() {
  const [activeTab, setActiveTab] = useState<string>('integration')
  const activeCaseStudy = caseStudies.find(cs => cs.id === activeTab) || caseStudies[0]

  const logoFiles: Record<string, string> = {
    nextjs: '/nextjs-icon-svgrepo-com.svg',
    wordpress: '/wordpress-svgrepo-com.svg',
    vercel: '/vercel-logo-svgrepo-com.svg',
    prisma: '/prisma-svgrepo-com.svg',
    postgresql: '/postgresql-svgrepo-com.svg',
    openai: '/Anthropic_Symbol_0.svg'
  }

  const renderLogo = (logo: string) => {
    const logoPath = logoFiles[logo]

    if (logoPath) {
      return (
        <Image
          src={logoPath}
          alt={`${logo} logo`}
          width={80}
          height={80}
          className="w-20 h-20 object-contain"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      )
    }

    return (
      <div className="w-20 h-20 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20"></div>
      </div>
    )
  }

  return (
    <section className="space-section-lg relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f1b2e 0%, #1a365d 100%)'
    }}>
      <div className="container-default relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-heading-xl text-white mb-4">
            Enterprise-grade. Agency-friendly.
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
            Built for real users, real data, and real consequences.
          </p>
        </AnimatedSection>

        {/* Tech Stack Logo Parade */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-16">
          {techStack.map((tech, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={100 * index}>
              <div className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 p-6 rounded-lg opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="text-white text-center">
                  {renderLogo(tech.logo)}
                </div>
                <div className="text-label-sm text-gray-400 text-center">{tech.name}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Case Studies */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-heading-lg text-white text-center mb-8">Real Projects, Real Results</h3>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            {caseStudies.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === cs.id
                    ? 'bg-white text-primary-900 shadow-md'
                    : 'bg-transparent border-2 border-white/30 text-white hover:border-white hover:bg-white/10'
                }`}
              >
                {cs.title}
              </button>
            ))}
          </div>

          {/* Case Study Card */}
          <AnimatedSection key={activeTab} animation="fadeIn">
            <div className="bg-white rounded-xl p-10 shadow-2xl">
              {/* Badge */}
              <Badge variant="primary" className="mb-4">
                {activeCaseStudy.badge}
              </Badge>

              <div className="space-y-6">
                {/* Challenge */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle size={20} className="text-accent-600" />
                    <h4 className="text-label-sm text-accent-600 font-semibold uppercase">Challenge</h4>
                  </div>
                  <p className="text-body-md text-gray-700 leading-relaxed">
                    {activeCaseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={20} className="text-accent-600" />
                    <h4 className="text-label-sm text-accent-600 font-semibold uppercase">Solution</h4>
                  </div>
                  <p className="text-body-md text-gray-700 leading-relaxed">
                    {activeCaseStudy.solution}
                  </p>
                </div>

                {/* Result */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp size={20} className="text-accent-600" />
                    <h4 className="text-label-sm text-accent-600 font-semibold uppercase">Result</h4>
                  </div>
                  <p className="text-body-md text-gray-700 leading-relaxed mb-4">
                    {activeCaseStudy.result}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {activeCaseStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 flex-1 min-w-[150px] text-center">
                        <div className="text-heading-md text-accent-600 font-bold">
                          {metric.split(' ')[0]}
                        </div>
                        <div className="text-label-md text-gray-600">
                          {metric.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
