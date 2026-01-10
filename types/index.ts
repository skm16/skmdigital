// Component Props Types
export interface ServiceCard {
  title: string
  description: string
  pricing: string
  timeline: string
}

export interface PainPoint {
  title: string
  description: string
  icon?: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

// GraphQL Types (for v2)
export interface WordPressPage {
  id: string
  title: string
  content: string
  slug: string
}

export interface GraphQLResponse<T> {
  data: T
  errors?: Array<{
    message: string
  }>
}

// Contact Form Types
export type ProjectType =
  | 'multi-system-integration'
  | 'ai-powered'
  | 'custom-web-app'
  | 'enterprise-wordpress'
  | 'headless-architecture'
  | 'api-development'
  | 'not-sure'

export type Timeline =
  | 'asap'
  | 'normal'
  | 'flexible'
  | 'exploring'

export type BudgetRange =
  | 'under-15k'
  | '15k-30k'
  | '30k-50k'
  | '50k-plus'
  | 'need-help'

export interface ContactFormData {
  name: string
  email: string
  projectType: ProjectType
  challenge: string
  timeline: Timeline
  budget: BudgetRange
  additionalInfo?: string
  submittedAt: string
}

export interface FormQuestion {
  id: string
  type: 'text' | 'email' | 'textarea' | 'multiple-choice'
  question: string
  placeholder?: string
  options?: { value: string; label: string }[]
  validation: {
    required: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
  }
  autoAdvance?: boolean
}

export interface FormState {
  currentStep: number
  answers: Partial<ContactFormData>
  isSubmitting: boolean
  submitSuccess: boolean
  errors: Record<string, string>
  touched: Record<string, boolean>
  direction: 'forward' | 'backward'
}

export type FormAction =
  | { type: 'UPDATE_ANSWER'; field: keyof ContactFormData; value: any }
  | { type: 'NEXT_STEP'; field: keyof ContactFormData; value: any }
  | { type: 'PREV_STEP' }
  | { type: 'GO_TO_STEP'; step: number }
  | { type: 'SET_ERROR'; field: string; error: string }
  | { type: 'CLEAR_ERROR'; field: string }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR'; error: string }
  | { type: 'RESET' }
