import React from 'react'
import { LucideIcon } from 'lucide-react'

type BadgeVariant = 'default' | 'primary' | 'outline'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  icon?: LucideIcon
  dot?: boolean
  className?: string
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon: Icon,
  dot = false,
  className = '',
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium'

  // Variant styles
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800 border border-gray-200',
    primary: 'bg-accent-400 text-white',
    outline: 'bg-transparent border-2 border-current',
  }

  // Size styles
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  // Icon size based on badge size
  const iconSize = size === 'sm' ? 12 : 14

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim()

  return (
    <span className={combinedClassName}>
      {dot && (
        <span className="mr-1.5 h-2 w-2 rounded-full bg-current opacity-75"></span>
      )}
      {Icon && <Icon size={iconSize} className="mr-1" />}
      {children}
    </span>
  )
}

export default Badge
