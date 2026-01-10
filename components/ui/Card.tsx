import React from 'react'

type CardVariant = 'elevated' | 'outlined' | 'filled' | 'glass' | 'code'
type CardHover = 'lift' | 'glow' | 'none'
type CardPadding = 'compact' | 'default' | 'spacious'

interface CardProps {
  variant?: CardVariant
  hover?: CardHover
  padding?: CardPadding
  className?: string
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  hover = 'lift',
  padding = 'default',
  className = '',
  children,
}) => {
  // Base styles
  const baseStyles = 'rounded-lg transition-all duration-300 ease-smooth'

  // Variant styles
  const variantStyles = {
    elevated: 'bg-white border border-gray-200 shadow-sm',
    outlined: 'bg-transparent border border-gray-200',
    filled: 'bg-gray-50 border border-gray-100',
    glass: 'bg-white/5 border border-white/10 backdrop-blur-sm',
    code: 'bg-code-bg border border-code-border text-code-text',
  }

  // Hover styles
  const hoverStyles = {
    lift: 'hover:-translate-y-1 hover:shadow-xl',
    glow: 'hover:border-accent-400 hover:shadow-lg hover:shadow-accent-400/20',
    none: '',
  }

  // Padding styles
  const paddingStyles = {
    compact: 'p-4',
    default: 'p-6',
    spacious: 'p-8',
  }

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${hoverStyles[hover]}
    ${paddingStyles[padding]}
    ${className}
  `.trim()

  return <div className={combinedClassName}>{children}</div>
}

export default Card
