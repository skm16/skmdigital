import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.enum([
    'multi-system-integration',
    'ai-powered',
    'custom-web-app',
    'enterprise-wordpress',
    'headless-architecture',
    'api-development',
    'not-sure',
  ]),
  challenge: z
    .string()
    .min(20, 'Please provide at least 20 characters - helps us understand your needs')
    .max(300, 'Please keep this under 300 characters'),
  timeline: z.enum(['asap', 'normal', 'flexible', 'exploring']),
  budget: z.enum(['under-15k', '15k-30k', '30k-50k', '50k-plus', 'need-help']),
  additionalInfo: z.string().max(500, 'Please keep this under 500 characters').optional(),
  submittedAt: z.string(),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>
