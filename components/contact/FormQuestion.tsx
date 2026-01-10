'use client'

import { useState, useEffect } from 'react'
import type { FormQuestion as FormQuestionType } from '@/types'

interface FormQuestionProps {
  question: FormQuestionType
  value: any
  onChange: (value: any) => void
  onBlur?: () => void
  error?: string
  onEnter?: (value?: any) => void
}

export default function FormQuestion({
  question,
  value,
  onChange,
  error,
  onEnter,
}: FormQuestionProps) {
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    if (question.type === 'textarea' && typeof value === 'string') {
      setCharCount(value.length)
    }
  }, [value, question.type])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && onEnter) {
      e.preventDefault()
      // Pass the current input value to ensure we validate against the latest value
      const target = e.currentTarget as HTMLInputElement | HTMLTextAreaElement
      onEnter(target.value)
    }
  }

  const handleInputChange = (newValue: string) => {
    onChange(newValue)
  }

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue)
    // Auto-advance for multiple choice if enabled
    if (question.autoAdvance && onEnter) {
      // Use a small delay to ensure state update completes before validation
      setTimeout(() => onEnter(optionValue), 100)
    }
  }

  return (
    <div className="space-y-4">
      {/* Question Text */}
      <h3 className="text-heading-sm text-white">{question.question}</h3>

      {/* Input Field */}
      {question.type === 'text' && (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={question.placeholder}
          className="w-full px-4 py-3 text-base sm:text-lg bg-white text-primary-900 rounded-lg border-2 border-transparent focus:border-accent-400 focus:outline-none transition-colors"
          autoFocus
        />
      )}

      {question.type === 'email' && (
        <input
          type="email"
          value={value || ''}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={question.placeholder}
          className="w-full px-4 py-3 text-base sm:text-lg bg-white text-primary-900 rounded-lg border-2 border-transparent focus:border-accent-400 focus:outline-none transition-colors"
          autoFocus
        />
      )}

      {question.type === 'textarea' && (
        <div className="space-y-2">
          <textarea
            value={value || ''}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={question.placeholder}
            rows={4}
            className="w-full px-4 py-3 text-base sm:text-lg bg-white text-primary-900 rounded-lg border-2 border-transparent focus:border-accent-400 focus:outline-none transition-colors resize-none"
            autoFocus
          />
          {question.validation.minLength && charCount >= question.validation.minLength && (
            <p className="text-sm text-gray-300">
              {charCount} / {question.validation.maxLength || '∞'} characters
            </p>
          )}
        </div>
      )}

      {question.type === 'multiple-choice' && (
        <div className="space-y-2">
          {question.options?.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`w-full px-4 py-3 text-left text-base sm:text-lg rounded-lg border-2 transition-all ${
                value === option.value
                  ? 'bg-accent-400 border-accent-400 text-white'
                  : 'bg-white border-white text-primary-900 hover:border-accent-400 hover:bg-accent-50'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-sm text-red-300 bg-red-900/20 px-3 py-2 rounded">
          {error}
        </p>
      )}

      {/* Hint Text */}
      {question.validation.minLength && question.type === 'textarea' && charCount < question.validation.minLength && (
        <p className="text-sm text-gray-400">
          At least {question.validation.minLength} characters needed
        </p>
      )}
    </div>
  )
}
