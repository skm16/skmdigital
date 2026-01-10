'use client'

import React, { useState } from 'react'
import { Clock, Lock, DollarSign, Send } from 'lucide-react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import AnimatedSection from '../ui/AnimatedSection'
import ConversationalForm from './ConversationalForm'

type ViewState = 'initial' | 'form'

export default function ContactSection() {
  const [viewState, setViewState] = useState<ViewState>('initial')

  const handleOpenForm = () => {
    setViewState('form')
  }

  const handleFormSuccess = () => {
    // Form success is handled within ConversationalForm component
    // This could be used for additional tracking if needed
  }

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
      <div className="container-default relative z-10">
        {/* Initial State - Dual CTAs */}
        {viewState === 'initial' && (
          <>
            <AnimatedSection animation="fadeInDown" delay={200}>
              <div className="text-center mb-8">
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
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className="text-center space-y-4 mb-8 max-w-3xl mx-auto">
                <p className="text-body-lg text-gray-100">
                  If a project is drifting toward "we'll figure it out," let's talk.
                  <br className="hidden sm:block" />
                  We'll sanity-check scope, recommend the right stack, and tell you what it costs to ship.
                </p>
                <p className="text-body-lg text-gray-100">
                  20 minutes. No sales routine. Just technical clarity - and a straight answer.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={600}>
              <div className="flex justify-center mb-8">
                <div className="text-center">
                  <Button
                    variant="light"
                    size="lg"
                    icon={Send}
                    iconPosition="left"
                    onClick={handleOpenForm}
                  >
                    Send Project Details
                  </Button>
                  <p className="text-sm text-gray-300 mt-2">Quick questions, fixed-price quote</p>
                </div>
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
          </>
        )}

        {/* Form State */}
        {viewState === 'form' && (
          <AnimatedSection animation="fadeInUp">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2
                  className="text-heading-lg mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #90cdf4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  A few quick questions
                </h2>
                <p className="text-body-md text-gray-100">
                  Takes about 2 minutes. No sales routine - just technical clarity.
                </p>
              </div>

              <ConversationalForm
                onSuccess={handleFormSuccess}
              />

              <div className="text-center mt-6">
                <button
                  onClick={() => setViewState('initial')}
                  className="text-sm text-gray-300 hover:text-white transition-colors underline"
                >
                  ← Back to options
                </button>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
