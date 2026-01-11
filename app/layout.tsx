import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
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
  title: 'White Label WordPress, AI & Next.js Development | SKM.digital',
  description: 'White-label technical partner for agencies. Multi-system integration, AI-powered automation, modern web applications, enterprise WordPress. 7+ years building solutions for national organizations.',
  keywords: [
    'white label wordpress development',
    'custom wordpress integration',
    'salesforce wordpress integration',
    'wordpress agency partner',
    'headless wordpress development',
    'next.js development services',
    'ai integration developer',
    'wordpress multisite development',
    'custom wordpress plugins',
    'wordpress performance optimization',
    'react wordpress headless',
    'wordpress api development',
  ],
  authors: [{ name: 'SKM.digital', url: 'https://skm.digital' }],
  creator: 'SKM.digital',
  publisher: 'SKM.digital',
  metadataBase: new URL('https://skm.digital'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/skm-favicon.jpg',
    shortcut: '/skm-favicon.jpg',
    apple: '/skm-favicon.jpg',
  },
  openGraph: {
    title: 'White Label WordPress, AI & Next.js Development for Agencies',
    description: 'Multi-system integration. AI-powered automation. Modern web applications. Enterprise WordPress.',
    url: 'https://skm.digital',
    siteName: 'SKM.digital',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SKM.digital - Custom Technical Solutions for Agencies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Label WordPress, AI & Next.js Development | SKM.digital',
    description: 'White-label technical partner for agencies. Multi-system integration, AI-powered automation, modern web applications, enterprise WordPress.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SKM.digital',
  url: 'https://skm.digital',
  logo: 'https://skm.digital/skm-favicon.jpg',
  description: 'White-label technical partner for agencies. Multi-system integration, AI-powered automation, modern web applications, enterprise WordPress.',
  email: 'sean@skm.digital',
  foundingDate: '2019',
  areaServed: 'Worldwide',
  serviceType: [
    'White Label WordPress Development',
    'Custom WordPress Integration',
    'Salesforce WordPress Integration',
    'Headless WordPress Development',
    'Next.js Development Services',
    'AI Integration Development',
    'API Development',
  ],
  sameAs: [],
}

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom Technical Solutions',
  provider: {
    '@type': 'Organization',
    name: 'SKM.digital',
  },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Technical Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multi-System Integration',
          description: 'Connect WordPress, Salesforce, HubSpot, Stripe, custom APIs. Bi-directional data sync, automated workflows, real-time updates.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI-Powered Solutions',
          description: 'OpenAI/Anthropic API integration, intelligent content generation, automated classification, custom AI workflows.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Modern Web Applications',
          description: 'Next.js, React, PostgreSQL, headless architectures. Full-stack custom applications.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enterprise WordPress',
          description: 'High-traffic optimization, complex data workflows, custom plugins, multisite architectures.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Headless Architectures',
          description: 'WordPress backend, Next.js/React frontend. API-first development, JAMstack, decoupled CMS.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'API Development & Integration',
          description: 'Custom REST APIs, third-party integrations, webhook systems, real-time data sync.',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZZXCKWE96S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZZXCKWE96S');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
