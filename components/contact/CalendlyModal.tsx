'use client'

import React, { useState } from 'react'
import { PopupModal } from 'react-calendly'
import Button from '../ui/Button'
import { Calendar } from 'lucide-react'

interface CalendlyModalProps {
  triggerText?: string
  triggerVariant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'light'
  triggerSize?: 'sm' | 'md' | 'lg'
  prefillName?: string
  prefillEmail?: string
  sublabel?: string
}

export default function CalendlyModal({
  triggerText = 'Book 20 Minutes',
  triggerVariant = 'light',
  triggerSize = 'lg',
  prefillName,
  prefillEmail,
  sublabel,
}: CalendlyModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Replace with your actual Calendly URL
  const calendlyUrl = 'https://calendly.com/sean-skm/20min'

  return (
    <div className="text-center">
      <Button
        variant={triggerVariant}
        size={triggerSize}
        icon={Calendar}
        iconPosition="left"
        onClick={() => setIsOpen(true)}
      >
        {triggerText}
      </Button>

      {sublabel && (
        <p className="text-sm text-gray-300 mt-2">{sublabel}</p>
      )}

      {typeof document !== 'undefined' && (
        <PopupModal
          url={calendlyUrl}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById('__next') || document.body}
          prefill={{
            email: prefillEmail,
            name: prefillName,
          }}
        />
      )}
    </div>
  )
}
