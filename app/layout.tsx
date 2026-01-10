import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SKM.digital - White Label Development for Technical Complexity',
  description: 'Headless architectures. AI integration. Enterprise performance. We handle the technical challenges that make agencies nervous.',
  icons: {
    icon: '/skm-favicon.jpg',
    shortcut: '/skm-favicon.jpg',
    apple: '/skm-favicon.jpg',
  },
  openGraph: {
    title: 'SKM.digital - White Label Development for Technical Complexity',
    description: 'Headless architectures. AI integration. Enterprise performance.',
    url: 'https://skm.digital',
    siteName: 'SKM.digital',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
