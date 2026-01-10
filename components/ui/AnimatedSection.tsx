'use client'

import React, { useEffect, useRef, useState } from 'react'

type AnimationType =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'scaleIn'

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  threshold?: number
  triggerOnce?: boolean
  className?: string
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.2,
  triggerOnce = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            setIsVisible(true)
            hasTriggered.current = true
            if (triggerOnce && sectionRef.current) {
              observer.unobserve(sectionRef.current)
            }
          } else if (!triggerOnce && !entry.isIntersecting) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px',
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, triggerOnce])

  // Animation class mapping
  const animationClasses: Record<AnimationType, string> = {
    fadeIn: 'animate-fade-in',
    fadeInUp: 'animate-fade-in-up',
    fadeInDown: 'animate-fade-in-down',
    fadeInLeft: 'animate-slide-in-left',
    fadeInRight: 'animate-slide-in-right',
    scaleIn: 'animate-scale-in',
  }

  const animationClass = animationClasses[animation]

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? animationClass : ''}`}
      style={{
        opacity: isVisible ? undefined : 0,
        animationDelay: isVisible && delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
