'use client'

import { useState, useEffect } from 'react'
import Button from './ui/Button'
import { ChevronDown } from 'lucide-react'

const rotatingPhrases = [
  "Integrations that don’t break on Friday.",
  "AI that ships (and keeps shipping).",
  "Next.js apps your client thinks you built.",
  "WordPress, minus the duct tape.",
  "Projects that hit the date you promised."
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = rotatingPhrases[phraseIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseDuration = 2000

    if (!isDeleting && displayText === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentPhrase.substring(0, displayText.length - 1)
          : currentPhrase.substring(0, displayText.length + 1)
      )
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex])

  // Track scroll for scroll indicator fade
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 animate-fade-in"
        style={{
          background: 'linear-gradient(135deg, #0f1b2e 0%, #234a7e 50%, #2c5282 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 15s ease infinite, fadeIn 0.3s ease-in'
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Glowing Orb Decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-20 blur-3xl rounded-full animate-fade-in delay-500"
        style={{
          background: 'radial-gradient(circle, #3182ce 0%, transparent 70%)',
        }}
      />

      {/* Floating Code Snippets (Decorative) */}
      <div className="absolute top-20 left-10 opacity-10 blur-sm text-code-md text-white animate-fade-in delay-500 hidden lg:block">
        <pre className="text-accent-200">
{`const integrate = async () => {
  return await api.sync()
}`}
        </pre>
      </div>

      <div className="absolute bottom-32 right-20 opacity-10 blur-sm text-code-md text-white animate-fade-in delay-700 hidden lg:block">
        <pre className="text-accent-200">
{`// AI-powered automation
model.classify(data)`}
        </pre>
      </div>

      {/* Main Content */}
      <div className="container-default text-center z-10 relative px-6">
        {/* Main Headline with Gradient Text */}
        <h1 className="text-display-md lg:text-display-lg mb-6 animate-fade-in-down">
          <div
            className="mb-2 bg-gradient-to-r from-white to-accent-100 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Technical work agencies don’t want to staff for.
          </div>
          {/* Typewriter Line with Glow Effect */}
          <div className="text-display-sm text-accent-200 h-[1.3em] flex items-center justify-center">
            <span
              className="whitespace-nowrap"
              style={{
                textShadow: '0 0 20px rgba(99, 179, 237, 0.5)'
              }}
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </h1>

        {/* Subheadline */}
        <p className="text-body-lg text-gray-200 mb-10 max-w-5xl mx-auto animate-fade-in-up delay-200">
          Salesforce. Stripe. Headless builds. AI workflows. We handle the hard parts - quietly, reliably, under your banner.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <a href="#contact">
            <Button variant="light" size="lg">
              Start a Project
            </Button>
          </a>
          <a href="#services">
            <Button variant="ghost" size="lg">
              See Capabilities
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500"
        style={{ opacity: scrollY > 100 ? 0 : 1 }}
      >
        <div className="flex flex-col items-center text-accent-200 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  )
}
