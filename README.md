# SKM.digital

> Custom technical solutions for agencies - Multi-system integration, AI-powered automation, modern web applications, and enterprise WordPress.

**Live Site:** [skm.digital](https://skm.digital) *(when deployed)*
**Status:** Development (pre-launch)
**Target Launch:** January 12, 2026

---

## Project Overview

High-level marketing website for SKM.digital positioning as a multi-platform technical solutions provider for digital agencies.

**Positioning Evolution:**
- FROM: "White-label WordPress development"
- TO: "Custom technical solutions" (WordPress, Next.js, AI, integrations)

**Target Audience:** Digital agencies (10-50 employees) needing technical capabilities they don't have in-house

---

## Tech Stack

- **Framework:** Next.js 16.1.1 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 (with PostCSS plugin)
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel (planned)

---

## Quick Start

### Development Server

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start  # Test production build
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
c:\Projects\skm-digital\
├── app/
│   ├── layout.tsx          # Root layout with Inter font, metadata
│   ├── page.tsx            # Homepage - imports all sections
│   └── globals.css         # Tailwind v4 + design tokens + animations
├── components/
│   ├── Header.tsx          # Sticky header with gradient logo
│   ├── Hero.tsx            # Typewriter effect, animated gradient bg
│   ├── ProblemSection.tsx  # 3-column pain points
│   ├── SolutionSection.tsx # Centered value proposition
│   ├── ServicesGrid.tsx    # 6 service cards (3x2 grid)
│   ├── ProofSection.tsx    # Tech logos + tabbed case studies
│   ├── ProcessSection.tsx  # 4-step process timeline
│   ├── FinalCTA.tsx        # Conversion section
│   ├── Footer.tsx          # Simple footer
│   └── ui/                 # Reusable UI components
│       ├── AnimatedSection.tsx  # Scroll animations
│       ├── Button.tsx           # 5 button variants
│       ├── Card.tsx             # 3 card variants
│       └── Badge.tsx            # Badge component
├── types/
│   └── index.ts            # TypeScript interfaces
├── docs/
│   └── SKM-DIGITAL-POSITIONING.md  # Strategic positioning
├── CLAUDE.md               # Comprehensive dev guide
└── README.md               # This file
```

---

## Key Features

### Advanced Implementations

1. **Typewriter Effect (Hero)**
   - Character-by-character animation
   - 5 rotating phrases with smooth deletion
   - Custom timing: 100ms typing, 50ms deleting, 2s pause

2. **Scroll-Aware Header**
   - Background changes from transparent to white/80 with backdrop blur
   - Gradient logo (white→blue) switches to solid blue on scroll
   - Button variant switches (light → primary) on scroll
   - Smooth transitions on all state changes

3. **Animated Hero Background**
   - Infinite gradient shift animation (15s duration)
   - Static grid pattern overlay (opacity-10)
   - Glowing orb decoration
   - Floating code snippets (desktop only)

4. **Scroll Animations System**
   - Custom AnimatedSection component with IntersectionObserver
   - 6 animation types: fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn
   - Staggered delays for sequential reveals
   - Glitch-free with hasTriggered ref pattern

5. **Tech Stack Logo Display (ProofSection)**
   - 6 inline SVG logos: Next.js, WordPress, Vercel, Prisma, PostgreSQL, OpenAI
   - Hover effects with opacity transition
   - Responsive 3-col mobile / 6-col desktop grid

6. **Tabbed Case Studies (ProofSection)**
   - 3 case studies with state management
   - Challenge/Solution/Result structure
   - Active tab styling with smooth transitions

### Reusable UI Components

- **Button** - 5 variants (primary, secondary, ghost, dark, light), 3 sizes, icon support
- **Card** - 3 variants (default, outline, glass), 3 hover effects, 3 padding options
- **Badge** - 3 variants, optional icon/dot, 2 sizes
- **AnimatedSection** - Scroll-triggered animations with IntersectionObserver

---

## Design System

### Tailwind CSS v4 Configuration
Defined in `app/globals.css` using `@theme` block:

**Colors:**
```css
Primary: #0a1128 (950) → #1a365d (800) → #e0f2fe (50)  /* Deep blues */
Accent:  #1e3a8a (900) → #3182ce (400) → #e0f2fe (50)  /* Bright blues */
Gray:    #0a0a0a (950) → #718096 (500) → #fafbfc (25)  /* Sophisticated grays */
```

**Typography Scales:**
- **Display:** 4.5rem → 3rem (hero headlines)
- **Heading:** 2.5rem → 1.125rem (section titles)
- **Body:** 1.25rem → 0.875rem (content)
- **Label:** 0.875rem → 0.75rem (metadata)
- **Code:** Monospace with JetBrains Mono

**Animation System:**
- Durations: instant (100ms), fast (200ms), normal (300ms), slow (500ms)
- Easing: smooth (cubic-bezier), bounce, in, out, in-out
- Keyframes: fadeIn, fadeInUp/Down/Left/Right, scaleIn, gradientShift

**Utilities:**
- Container: `container-default` (max-w-6xl with responsive padding)
- Spacing: `space-section-lg`, `space-section-md`
- Custom: `line-clamp-4`, `border-l-3`, `ring-3`

---

## Content Strategy

### Positioning
**Core Message:** "Custom Technical Solutions for Modern Web Challenges"

**NOT:** WordPress-only developer
**IS:** Multi-platform technical partner (WordPress + Next.js + AI + Integrations)

### Services (6 offerings)
1. Multi-System Integration ($20-40k)
2. AI-Powered Solutions ($15-35k)
3. Modern Web Applications ($25-50k) ← Demonstrates non-WordPress capability
4. Enterprise WordPress ($15-30k)
5. Headless Architectures ($20-35k)
6. API Development & Integration ($15-30k)

### Case Studies (3 featured)
1. **Multi-System Integration** - WordPress + Salesforce + Stripe (NORD membership)
2. **AI-Powered Automation** - Claude AI content audit (1,000+ posts classified)
3. **Modern Web Application** - Next.js + PostgreSQL Jira reporting platform

---

## Development Notes

### Copy Guidelines
- ❌ **NEVER use em dashes (—)** in copy - use regular hyphens or rephrase
- ✅ Professional but conversational B2B tone
- ✅ Specific numbers over vague claims ("15+ hours saved" not "significant time")
- ✅ Multi-platform flexibility emphasized throughout

### Component Patterns
- All client-side components use `'use client'` directive
- TypeScript interfaces for data structures
- Responsive design: mobile-first approach
- Lucide React for icons (Construction, Bot, Zap, etc.)

### Performance Targets
- Lighthouse: 95+ (mobile and desktop)
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- No console errors

### Common Issues & Solutions

**Tailwind v4 Colors Not Working:**
- Use `@theme` (not `@theme inline`)
- Define full color scales (50-950)
- Check font-family variables

**Animation Glitching:**
- Use `hasTriggered` ref to prevent double-triggering
- Set animation fill mode to 'both' not 'forwards'
- Use inline opacity instead of class-based opacity-0

**Grid Pattern Disappearing:**
- Don't animate static decorative elements
- Remove fadeIn animations from grid overlays

---

## Deployment

**Platform:** Vercel
**Domain:** skm.digital
**Method:** Git push to main branch triggers auto-deploy

```bash
git push origin main
# Vercel auto-deploys
```

---

## Documentation

- **CLAUDE.md** - Comprehensive development guide, component specs, design system
- **docs/SKM-DIGITAL-POSITIONING.md** - Strategic positioning document that informed rebrand
- **README.md** - This file - quick reference for developers

---

## Contact & Support

**Developer:** Sean McKenna
**Email:** sean@skm.digital
**Project Started:** 2026-01-10
**Target Launch:** 2026-01-12

---

## License

Proprietary - SKM Enterprises, LLC © 2026
