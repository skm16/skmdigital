'use client'

import React from 'react'
import type { ContactFormData, FormQuestion } from '@/types'
import Button from '../ui/Button'
import { Edit2, Send, CheckCircle } from 'lucide-react'

interface FormSummaryProps {
  answers: Partial<ContactFormData>
  questions: FormQuestion[]
  onEdit: (questionId: string) => void
  onSubmit: () => void
  isSubmitting: boolean
  submitSuccess: boolean
  error?: string
}

// Helper functions to format answers for display
function formatProjectType(type: string): string {
  const map: Record<string, string> = {
    'multi-system-integration': 'Multi-System Integration',
    'ai-powered': 'AI-Powered Features',
    'custom-web-app': 'Custom Web Application',
    'enterprise-wordpress': 'Enterprise WordPress',
    'headless-architecture': 'Headless Architecture',
    'api-development': 'API Development',
    'not-sure': 'Not Sure / Need Consultation',
  }
  return map[type] || type
}

function formatTimeline(timeline: string): string {
  const map: Record<string, string> = {
    asap: 'ASAP (4-6 weeks)',
    normal: 'Normal (2-3 months)',
    flexible: 'Flexible (3+ months)',
    exploring: 'Just exploring',
  }
  return map[timeline] || timeline
}

function formatBudget(budget: string): string {
  const map: Record<string, string> = {
    'under-15k': 'Under $15k',
    '15k-30k': '$15k - $30k',
    '30k-50k': '$30k - $50k',
    '50k-plus': '$50k+',
    'need-help': 'Need help determining',
  }
  return map[budget] || budget
}

function formatAnswer(questionId: string, value: any): string {
  if (!value) return 'N/A'

  switch (questionId) {
    case 'projectType':
      return formatProjectType(value)
    case 'timeline':
      return formatTimeline(value)
    case 'budget':
      return formatBudget(value)
    default:
      // Ensure we always return a string, not an object
      return typeof value === 'string' ? value : String(value)
  }
}

export default function FormSummary({
  answers,
  questions,
  onEdit,
  onSubmit,
  isSubmitting,
  submitSuccess,
  error,
}: FormSummaryProps) {
  // Success state
  if (submitSuccess) {
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle size={64} className="text-green-400" />
        </div>

        <h3 className="text-heading-sm text-white">
          Thanks {answers.name} - we've got your details.
        </h3>

        <div className="space-y-4 text-body-md text-gray-100">
          <p>
            We'll review this and send you a fixed-price quote within 48 hours (usually faster).
          </p>
          <p className="text-sm text-gray-300">
            You'll hear from us at: <span className="text-white font-medium">{answers.email}</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-heading-sm text-white mb-2">
          Ready to send?
        </h3>
        <p className="text-body-md text-gray-100">
          Review your answers below. We'll reply within 24 hours.
        </p>
      </div>

      {/* Answer Summary Cards */}
      <div className="space-y-3">
        {questions
          .filter((q) => q.validation.required || answers[q.id as keyof ContactFormData])
          .map((question) => {
            const value = answers[question.id as keyof ContactFormData]
            if (!value && !question.validation.required) return null

            return (
              <div
                key={question.id}
                className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-sm text-gray-300 mb-1">{question.question.replace('{name}', answers.name as string || 'there')}</p>
                    <p className="text-body-md text-white">
                      {formatAnswer(question.id, value)}
                    </p>
                  </div>
                  <button
                    onClick={() => onEdit(question.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity ml-4 p-2 hover:bg-white/10 rounded"
                    aria-label="Edit answer"
                  >
                    <Edit2 size={16} className="text-gray-300" />
                  </button>
                </div>
              </div>
            )
          })}
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
          <p className="text-sm text-red-300">{error}</p>
          <p className="text-xs text-red-400 mt-2">
            If this persists, email sean@skm.digital directly
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <Button
          variant="light"
          size="lg"
          icon={Send}
          iconPosition="left"
          onClick={onSubmit}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Project Details'}
        </Button>
      </div>

      <p className="text-xs text-gray-400 text-center">
        By submitting, you agree to receive a response from SKM.digital
      </p>
    </div>
  )
}
