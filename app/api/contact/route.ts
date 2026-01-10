import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { contactFormSchema, type ContactFormSchema } from './validation'
import type { ContactFormData } from '@/types'

const resend = new Resend(process.env.RESEND_API_KEY)

// Helper functions for formatting
function formatProjectType(type: ContactFormData['projectType']): string {
  const map: Record<typeof type, string> = {
    'multi-system-integration': 'Multi-System Integration',
    'ai-powered': 'AI-Powered Features',
    'custom-web-app': 'Custom Web Application',
    'enterprise-wordpress': 'Enterprise WordPress',
    'headless-architecture': 'Headless Architecture',
    'api-development': 'API Development & Integration',
    'not-sure': 'Not Sure / Need Consultation',
  }
  return map[type]
}

function formatTimeline(timeline: ContactFormData['timeline']): string {
  const map: Record<typeof timeline, string> = {
    asap: 'ASAP (4-6 weeks)',
    normal: 'Normal (2-3 months)',
    flexible: 'Flexible (3+ months)',
    exploring: 'Just exploring options',
  }
  return map[timeline]
}

function formatBudget(budget: ContactFormData['budget']): string {
  const map: Record<typeof budget, string> = {
    'under-15k': 'Under $15k',
    '15k-30k': '$15k - $30k',
    '30k-50k': '$30k - $50k',
    '50k-plus': '$50k+',
    'need-help': 'Need help determining budget',
  }
  return map[budget]
}

function formatEmailBody(data: ContactFormSchema): string {
  return `
New inquiry from SKM.digital contact form
Submitted: ${new Date(data.submittedAt).toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFO
Name: ${data.name}
Email: ${data.email}

PROJECT DETAILS
Type: ${formatProjectType(data.projectType)}
Timeline: ${formatTimeline(data.timeline)}
Budget: ${formatBudget(data.budget)}

CHALLENGE
${data.challenge}

ADDITIONAL INFO
${data.additionalInfo || 'N/A'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACTION REQUIRED: Reply within 24 hours (promised on site)
  `.trim()
}

export async function POST(request: Request) {
  try {
    console.log('Contact form API called') // Debug logging
    
    const body = await request.json()
    console.log('Request body:', body) // Debug logging

    // Validate with Zod
    const validatedData = contactFormSchema.parse(body)
    console.log('Validated data:', validatedData) // Debug logging

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured')
      return NextResponse.json(
        { success: false, error: 'Email service not configured. Please email sean@skm.digital directly.' },
        { status: 500 }
      )
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'SKM.digital Contact Form <leads@skm.digital>',
      to: ['sean@skm.digital'],
      subject: `New Project Inquiry - ${formatProjectType(validatedData.projectType)} - ${validatedData.name}`,
      text: formatEmailBody(validatedData),
    })

    console.log('Resend response:', { data, error }) // Debug logging

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to send email. Please try again or email sean@skm.digital directly.' },
        { status: 400 }
      )
    }

    console.log('Email sent successfully') // Debug logging
    return NextResponse.json({
      success: true,
      message: "Thanks! We'll review this and reply within 24 hours.",
    })
  } catch (error) {
    console.error('Contact form error:', error)

    // Handle Zod validation errors
    if (error instanceof ZodError) {
      console.error('Zod validation error:', error.issues) // Debug logging
      // Get the first validation error message
      const firstError = error.issues[0]
      const errorMessage = firstError ? firstError.message : 'Please check your form inputs and try again.'
      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 400 }
      )
    }

    // Generic error
    return NextResponse.json(
      {
        success: false,
        error: 'Something went wrong. Please email sean@skm.digital directly.',
      },
      { status: 500 }
    )
  }
}
