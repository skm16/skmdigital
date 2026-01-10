import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="container-default">
        {/* Divider Line */}
        <div className="border-t border-gray-800 mb-8" />

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Column - Branding */}
          <div>
            <div
              className="text-heading-md font-bold mb-2"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #63b3ed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              SKM.digital
            </div>
            <div className="text-label-md text-gray-400">
              Serious builds. Quietly delivered.
            </div>
          </div>

          {/* Center Column - Placeholder for v2 */}
          <div className="hidden md:block" />

          {/* Right Column - Contact & Copyright */}
          <div className="text-center md:text-right">
            <a
              href="mailto:sean@skm.digital"
              className="inline-flex items-center text-body-md text-accent-300 hover:text-accent-100 transition-colors mb-4"
            >
              <Mail size={16} className="mr-2" />
              sean@skm.digital
            </a>
            <div className="text-label-sm text-gray-500">
              © 2026 SKM.digital. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
