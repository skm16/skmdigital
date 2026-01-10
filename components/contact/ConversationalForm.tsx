'use client'

import { useReducer, useRef, useEffect } from 'react'
import type { FormState, FormAction, FormQuestion as FormQuestionType, ContactFormData } from '@/types'
import FormQuestion from './FormQuestion'
import FormSummary from './FormSummary'
import Button from '../ui/Button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Form questions configuration
const questions: FormQuestionType[] = [
  {
    id: 'name',
    type: 'text',
    question: "Let's start simple - what's your first name?",
    placeholder: 'e.g., John',
    validation: { required: true, minLength: 2, maxLength: 50 },
    autoAdvance: false,
  },
  {
    id: 'email',
    type: 'email',
    question: 'Thanks, {name}. What\'s your work email?',
    placeholder: 'john@agency.com',
    validation: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    autoAdvance: false,
  },
  {
    id: 'projectType',
    type: 'multiple-choice',
    question: 'What kind of project are you thinking about?',
    options: [
      { value: 'multi-system-integration', label: 'Multi-System Integration (Salesforce, APIs, workflows)' },
      { value: 'ai-powered', label: 'AI-Powered Features (ChatGPT integration, automation)' },
      { value: 'custom-web-app', label: 'Custom Web Application (Next.js, React, full-stack)' },
      { value: 'enterprise-wordpress', label: 'Enterprise WordPress (high-traffic, advanced features)' },
      { value: 'headless-architecture', label: 'Headless Architecture (WordPress backend, modern frontend)' },
      { value: 'api-development', label: 'API Development & Integration' },
      { value: 'not-sure', label: 'Not Sure Yet / Need Consultation' },
    ],
    validation: { required: true },
    autoAdvance: true,
  },
  {
    id: 'challenge',
    type: 'textarea',
    question: 'Got it. In one sentence, what\'s the main challenge you\'re trying to solve?',
    placeholder: 'e.g., Our client needs real-time inventory sync between WordPress and Salesforce',
    validation: { required: true, minLength: 20, maxLength: 300 },
    autoAdvance: false,
  },
  {
    id: 'timeline',
    type: 'multiple-choice',
    question: 'When do you need this shipped?',
    options: [
      { value: 'asap', label: 'ASAP (within 4-6 weeks)' },
      { value: 'normal', label: 'Normal timeline (2-3 months)' },
      { value: 'flexible', label: 'Flexible (3+ months)' },
      { value: 'exploring', label: 'Just exploring options' },
    ],
    validation: { required: true },
    autoAdvance: true,
  },
  {
    id: 'budget',
    type: 'multiple-choice',
    question: 'What\'s your ballpark budget range?',
    options: [
      { value: 'under-15k', label: 'Under $15k' },
      { value: '15k-30k', label: '$15k - $30k' },
      { value: '30k-50k', label: '$30k - $50k' },
      { value: '50k-plus', label: '$50k+' },
      { value: 'need-help', label: 'Need help determining budget' },
    ],
    validation: { required: true },
    autoAdvance: true,
  },
  {
    id: 'additionalInfo',
    type: 'textarea',
    question: 'Last one - anything else we should know?',
    placeholder: 'Project context, constraints, team structure, or anything that would help us understand the challenge better...',
    validation: { required: false, maxLength: 500 },
    autoAdvance: false,
  },
]

// Initial state
const initialState: FormState = {
  currentStep: 0,
  answers: {},
  isSubmitting: false,
  submitSuccess: false,
  errors: {},
  touched: {}, // Track which fields have been interacted with
  direction: 'forward',
}

// Reducer function
function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'UPDATE_ANSWER':
      return {
        ...state,
        answers: { ...state.answers, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: '' },
      }
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: state.currentStep + 1,
        answers: { ...state.answers, [action.field]: action.value },
        direction: 'forward',
        errors: { ...state.errors, [action.field]: '' },
      }
    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(0, state.currentStep - 1),
        direction: 'backward',
      }
    case 'GO_TO_STEP':
      return {
        ...state,
        currentStep: action.step,
        direction: action.step < state.currentStep ? 'backward' : 'forward',
      }
    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      }
    case 'CLEAR_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: '' },
      }
    case 'SUBMIT_START':
      return {
        ...state,
        isSubmitting: true,
      }
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        isSubmitting: false,
        submitSuccess: true,
      }
    case 'SUBMIT_ERROR':
      return {
        ...state,
        isSubmitting: false,
        errors: { ...state.errors, submit: action.error },
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

interface ConversationalFormProps {
  onSuccess?: () => void
}

export default function ConversationalForm({ onSuccess }: ConversationalFormProps) {
  const [state, dispatch] = useReducer(formReducer, initialState)
  // Ref to track the latest input value immediately (bypasses async state updates)
  const latestValueRef = useRef<any>(null)

  const currentQuestion = questions[state.currentStep]
  const isLastQuestion = state.currentStep === questions.length - 1
  const isSummaryStep = state.currentStep === questions.length

  // Initialize ref when step changes (only depends on step number, not the whole question object)
  useEffect(() => {
    if (currentQuestion) {
      const questionId = currentQuestion.id as keyof ContactFormData
      latestValueRef.current = state.answers[questionId] || null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentStep])

  // Form-level validation - only validate when user attempts to proceed or submit
  const validateForm = (): boolean => {
    let hasErrors = false
    let firstErrorStep: number | null = null

    // Validate all fields with their specific validation rules
    questions.forEach((question, index) => {
      const value = state.answers[question.id as keyof ContactFormData]
      const trimmedValue = typeof value === 'string' ? value.trim() : value
      const validation = question.validation

      // Check required
      if (validation.required && (!value || trimmedValue === '')) {
        dispatch({ type: 'SET_ERROR', field: question.id, error: 'This field is required' })
        hasErrors = true
        if (firstErrorStep === null) firstErrorStep = index
        return
      }

      // Skip other validations if field is empty and not required
      if (!value || trimmedValue === '') {
        dispatch({ type: 'CLEAR_ERROR', field: question.id })
        return
      }

      // Check minLength
      if (validation.minLength && typeof trimmedValue === 'string' && trimmedValue.length < validation.minLength) {
        dispatch({
          type: 'SET_ERROR',
          field: question.id,
          error: `Please provide at least ${validation.minLength} characters`
        })
        hasErrors = true
        if (firstErrorStep === null) firstErrorStep = index
        return
      }

      // Check maxLength
      if (validation.maxLength && typeof trimmedValue === 'string' && trimmedValue.length > validation.maxLength) {
        dispatch({
          type: 'SET_ERROR',
          field: question.id,
          error: `Please keep this under ${validation.maxLength} characters`
        })
        hasErrors = true
        if (firstErrorStep === null) firstErrorStep = index
        return
      }

      // Check pattern (email validation)
      if (validation.pattern && typeof trimmedValue === 'string' && !validation.pattern.test(trimmedValue)) {
        dispatch({
          type: 'SET_ERROR',
          field: question.id,
          error: 'Please enter a valid email address'
        })
        hasErrors = true
        if (firstErrorStep === null) firstErrorStep = index
        return
      }

      // Clear error if field is valid
      dispatch({ type: 'CLEAR_ERROR', field: question.id })
    })

    // If there are errors, navigate to the first error field
    if (hasErrors && firstErrorStep !== null) {
      dispatch({ type: 'GO_TO_STEP', step: firstErrorStep })
    }

    return !hasErrors
  }

  // Handle next step - accepts optional value for auto-advance cases
  const handleNext = (providedValue?: any) => {
    let value: any

    if (providedValue !== undefined) {
      // Value explicitly provided (e.g., from auto-advance or Enter key)
      value = providedValue
    } else {
      // Use latestValueRef first (most up-to-date), fallback to state
      // This fixes the async state update issue
      value = latestValueRef.current !== null
        ? latestValueRef.current
        : state.answers[currentQuestion.id as keyof ContactFormData]
    }

    // Defensive check: if value is an event object, extract the actual value
    value = value?.target?.value !== undefined ? value.target.value : value

    // Store the value but don't validate yet - validation happens on form submission
    dispatch({ type: 'UPDATE_ANSWER', field: currentQuestion.id as keyof ContactFormData, value })

    // Proceed to next step without validation
    dispatch({ type: 'NEXT_STEP', field: currentQuestion.id as keyof ContactFormData, value })
    // Ref will be cleared by useEffect when step changes
  }

  // Handle previous step
  const handlePrev = () => {
    dispatch({ type: 'PREV_STEP' })
  }

  // Handle value change
  const handleChange = (value: any) => {
    // Defensive check: if value is an event object, extract the actual value
    const actualValue = value?.target?.value !== undefined ? value.target.value : value

    // Store in ref immediately (synchronous) for handleNext to use
    latestValueRef.current = actualValue

    dispatch({
      type: 'UPDATE_ANSWER',
      field: currentQuestion.id as keyof ContactFormData,
      value: actualValue
    })

    // Clear any existing error when user starts typing
    if (state.errors[currentQuestion.id]) {
      dispatch({ type: 'CLEAR_ERROR', field: currentQuestion.id })
    }
  }

  // Handle field blur - no validation here, only form-level validation
  const handleBlur = () => {
    // Just clear any existing error when user leaves the field
    if (state.errors[currentQuestion.id]) {
      dispatch({ type: 'CLEAR_ERROR', field: currentQuestion.id })
    }
  }

  // Handle edit (go back to specific question)
  const handleEdit = (questionId: string) => {
    const stepIndex = questions.findIndex((q) => q.id === questionId)
    if (stepIndex !== -1) {
      dispatch({ type: 'GO_TO_STEP', step: stepIndex })
    }
  }

  // Handle form submission
  const handleSubmit = async () => {
    // First, validate the form
    if (!validateForm()) {
      return // Don't submit if validation fails
    }

    dispatch({ type: 'SUBMIT_START' })

    try {
      const formData: ContactFormData = {
        name: state.answers.name as string,
        email: state.answers.email as string,
        projectType: state.answers.projectType as ContactFormData['projectType'],
        challenge: state.answers.challenge as string,
        timeline: state.answers.timeline as ContactFormData['timeline'],
        budget: state.answers.budget as ContactFormData['budget'],
        additionalInfo: state.answers.additionalInfo as string | undefined,
        submittedAt: new Date().toISOString(),
      }

      console.log('Submitting form data:', formData) // Debug logging

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status) // Debug logging

      const result = await response.json()

      console.log('Response result:', result) // Debug logging

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      dispatch({ type: 'SUBMIT_SUCCESS' })
      if (onSuccess) onSuccess()
    } catch (error) {
      console.error('Form submission error:', error) // Debug logging
      dispatch({
        type: 'SUBMIT_ERROR',
        error: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      })
    }
  }

  // Calculate progress
  const progress = ((state.currentStep + 1) / (questions.length + 1)) * 100

  // Personalize question text
  const getQuestionText = (questionText: string): string => {
    return questionText.replace('{name}', (state.answers.name as string) || 'there')
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-white/20 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-300 ease-smooth"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Summary Step */}
      {isSummaryStep ? (
        <FormSummary
          answers={state.answers}
          questions={questions}
          onEdit={handleEdit}
          onSubmit={handleSubmit}
          isSubmitting={state.isSubmitting}
          submitSuccess={state.submitSuccess}
          error={state.errors.submit}
        />
      ) : (
        <>
          {/* Current Question */}
          <div className="mb-8">
            <FormQuestion
              question={{ ...currentQuestion, question: getQuestionText(currentQuestion.question) }}
              value={state.answers[currentQuestion.id as keyof ContactFormData]}
              onChange={handleChange}
              onBlur={handleBlur}
              error={state.errors[currentQuestion.id]}
              onEnter={handleNext}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              size="md"
              icon={ArrowLeft}
              iconPosition="left"
              onClick={handlePrev}
              disabled={state.currentStep === 0}
              className={state.currentStep === 0 ? 'invisible' : ''}
            >
              Back
            </Button>

            <Button
              variant="light"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => handleNext()}
            >
              {isLastQuestion ? 'Review' : 'Continue'}
            </Button>
          </div>

          {/* Helper Text */}
          <p className="text-sm text-gray-300 text-center mt-6">
            Press Enter to continue {currentQuestion.type !== 'textarea' && '↵'}
          </p>
        </>
      )}
    </div>
  )
}
