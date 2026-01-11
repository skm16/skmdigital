'use client'

import { useState, useEffect } from 'react'
import Button from './ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-smooth ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <nav className="container-default py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Gradient Effect */}
          <div
            className={`text-heading-md font-bold transition-all duration-300 ${
              scrolled ? 'scale-95' : 'scale-100'
            }`}
          >
            <span
              className={scrolled ? 'text-primary-800' : ''}
              style={
                !scrolled
                  ? {
                      background: 'linear-gradient(135deg, #ffffff 0%, #63b3ed 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }
                  : undefined
              }
            >
              SKM.digital
            </span>
          </div>

          {/* CTA Button with Variant Switching */}
          <a href="#contact">
            <Button variant={scrolled ? 'primary' : 'light'} size="md">
              Get a Fixed-Price Quote
            </Button>
          </a>
        </div>
      </nav>
    </header>
  )
}
