import React, { forwardRef } from 'react'
import { LucideIcon } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'light'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  isLoading?: boolean
  fullWidth?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      isLoading = false,
      fullWidth = false,
      className = '',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 ease-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    // Variant styles
    const variantStyles = {
      primary: 'bg-accent-400 text-white hover:bg-accent-500 hover:-translate-y-0.5 hover:shadow-lg focus:ring-accent-400',
      secondary:
        'bg-transparent text-accent-400 border-2 border-accent-400 hover:bg-accent-400 hover:text-white focus:ring-accent-400',
      ghost: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-900 focus:ring-white',
      dark: 'bg-primary-900 text-white hover:bg-primary-800 hover:-translate-y-0.5 hover:shadow-lg focus:ring-primary-700',
      light: 'bg-white text-primary-900 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg focus:ring-gray-300',
    }

    // Size styles
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm rounded-md',
      md: 'px-6 py-3 text-base rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-lg',
    }

    // Icon size based on button size
    const iconSizes = {
      sm: 16,
      md: 20,
      lg: 24,
    }

    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim()

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </>
        ) : (
          <>
            {Icon && iconPosition === 'left' && (
              <Icon size={iconSizes[size]} className="mr-2" />
            )}
            {children}
            {Icon && iconPosition === 'right' && (
              <Icon size={iconSizes[size]} className="ml-2" />
            )}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
