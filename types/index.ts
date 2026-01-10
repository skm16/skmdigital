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
