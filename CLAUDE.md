# SKM.digital - Next.js Frontend

## Project Overview

**High-level headless website for SKM.digital** - a multi-platform technical solutions provider for digital agencies.

**Goal:** Ship by Sunday evening (January 12, 2026) for Monday launch
**Target Audience:** Digital agencies (10-50 employees) needing technical capabilities they don't have in-house
**Key Message:** "We build custom technical solutions for agencies - multi-system integrations, AI-powered automation, modern web applications, and enterprise WordPress. Not limited to one platform."

**Positioning Evolution:**
- FROM: "White-label WordPress development"
- TO: "Custom technical solutions" (WordPress, Next.js, AI, integrations)

---

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 (PostCSS plugin)
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel (planned)
- **CMS:** WordPress (headless) - v1 uses hardcoded content for speed

---

## Design System

### Colors

```typescript
primary: {
  DEFAULT: '#1a365d',  // Deep blue - trust, technical
  light: '#2d3748',
  dark: '#0f1b2e',
}
accent: {
  DEFAULT: '#3182ce',  // Bright blue - modern, energetic
  light: '#4299e1',
  dark: '#2c5282',
}
gray: {
  50: '#f7fafc',   // Backgrounds
  800: '#1a202c',  // Footer
}
```

### Typography

- **Font:** Inter (Google Fonts)
- **H1:** 3.5rem desktop, 2.5rem mobile
- **H2:** 2.5rem desktop, 2rem mobile
- **H3:** 1.875rem desktop, 1.5rem mobile
- **Body:** 1.125rem (18px)

### Spacing

- **Section padding:** py-20 (desktop), py-12 (mobile)
- **Container max-width:** max-w-6xl
- **Generous white space between sections**

### Button Styles

```css
.btn-primary: Blue background, white text, hover lift effect
.btn-secondary: Transparent with blue border, hover fills blue
```

---

## File Structure

```
C:\Projects\skm-digital\
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Homepage (imports all sections)
│   └── globals.css         # Tailwind v4 + custom styles
├── components/
│   ├── Header.tsx          # Sticky header with CTA
│   ├── Hero.tsx            # Full viewport hero with typewriter effect
│   ├── ProblemSection.tsx  # 3-column pain points
│   ├── SolutionSection.tsx # Centered value prop
│   ├── ServicesGrid.tsx    # 6 service cards (3x2)
│   ├── ProofSection.tsx    # Tech logos + case studies
│   ├── ProcessSection.tsx  # 4-step timeline
│   ├── FinalCTA.tsx        # Conversion section
│   ├── Footer.tsx          # Simple footer
│   └── ui/                 # Reusable UI components
│       ├── AnimatedSection.tsx  # Intersection Observer animations
│       ├── Button.tsx           # Button variants (primary, secondary, ghost, dark, light)
│       ├── Card.tsx             # Card variants (default, outline, glass)
│       └── Badge.tsx            # Badge component
├── public/
│   └── images/             # Logos, icons
├── types/
│   └── index.ts            # TypeScript types
└── docs/
    └── SKM-DIGITAL-POSITIONING.md  # Strategic positioning document
```

---

## Implemented Components

### 1. Header

**Status:** ✅ Implemented

**Features:**
- Sticky positioning with scroll detection
- Background changes from transparent → white/80 with backdrop blur on scroll
- Logo with gradient effect (white-to-blue gradient when at top, solid blue when scrolled)
- CTA button switches variants on scroll (light when at top, primary when scrolled)
- Responsive design
- Smooth transitions on all state changes

**Technical Implementation:**
- Client-side component (`'use client'`)
- `useState` for scroll position tracking
- `useEffect` with scroll event listener and cleanup
- Conditional styling based on scroll state
- CSS gradient with WebkitBackgroundClip for logo text gradient

**Content:**
- Logo: "SKM.digital" with gradient effect (gradient: #ffffff → #63b3ed)
- CTA: "Get a Fixed-Price Quote" (links to `#contact`)

---

### 2. Hero

**Status:** ✅ Implemented

**Features:**
- Full viewport height (min-h-screen)
- Animated gradient background with infinite gradient shift animation
- **Typewriter effect** with 5 rotating phrases
- Grid pattern overlay (static, opacity-10 for subtle depth)
- Glowing orb decoration (top-right corner)
- Floating code snippets (decorative, desktop only)
- Scroll indicator with bounce animation
- Dual CTAs with different styles

**Typewriter Phrases:**
1. "for Multi-System Integration"
2. "for AI-Powered Automation"
3. "for Modern Web Applications"
4. "for Enterprise WordPress"
5. "That Actually Ship on Time"

**Technical Implementation:**
- Client-side component (`'use client'`)
- Character-by-character animation
  - Typing speed: 100ms per character
  - Deleting speed: 50ms per character
  - Pause after completion: 2 seconds
- `useState` for: phraseIndex, displayText, isDeleting
- `useEffect` with complex timing logic and cleanup

**Content:**
- **H1:** "Custom Technical Solutions" + [typewriter phrase]
- **Subheadline:** "Multi-system integration. AI-powered automation. Modern web applications. Enterprise WordPress. We build whatever your client needs - not just what fits in a CMS."
- **CTA 1:** "Start a Project" (primary button)
- **CTA 2:** "View Capabilities" (secondary button)

---

### 3. ProblemSection

**Status:** ✅ Implemented

**Features:**
- 3-column grid (responsive: stacks to 1 column on mobile)
- Lucide React icons for each pain point
- Card-based layout

**Icons Used:**
- Construction (Complex Integration)
- Bot (AI Capabilities)
- Zap (Modern Architecture)

**Content:**
- **Headline:** "Your Client Expects Innovation. Your Team Delivers Templates."

**Three Pain Points:**

1. **Complex Integration**
   - "Your client needs their website to talk to Salesforce, process payments through Stripe, and sync data in real-time. Your team's integration experience stops at contact form plugins."

2. **AI Capabilities**
   - "They want ChatGPT-powered features, intelligent content generation, and automated workflows. You're not sure if that's even possible in WordPress - or if WordPress is even the right choice."

3. **Modern Architecture**
   - "They're expecting headless WordPress with Next.js frontend, handling enterprise-scale traffic. Your developers are comfortable with page builders and themes."

- **Closing Statement:** "We've built our entire business around fixing these exact problems. Fixed pricing. Clear timelines. Seamless integration with your team. No drama."

---

### 4. SolutionSection

**Status:** ✅ Implemented

**Features:**
- Max-width container (max-w-4xl)
- Centered content
- Bullet-point list with checkmarks

**Content:**
- **Headline:** "Your White-Label Technical Partner"

- **Body:** "We're not another dev shop with one solution for every problem. We're specialists who choose the right technology stack for each challenge - whether that's WordPress with complex integrations, a modern Next.js application, AI-powered automation, or a combination of all three."

**Benefits (5 bullet points):**
1. 7+ years building enterprise-scale solutions for national organizations
2. Multi-platform expertise - WordPress, Next.js, React, headless architectures
3. Production AI deployment - OpenAI/Anthropic integration in mission-critical systems
4. Proven at scale - 1M+ monthly visitor platforms, zero-downtime deployments
5. White label by default - your clients never know we exist

---

### 5. ServicesGrid

**Status:** ✅ Implemented

**Features:**
- 6 service cards in 3x2 grid
- Responsive: 2 cols tablet, 1 col mobile
- Hover effects (lift + shadow transition)

**Services:**

1. **Multi-System Integration**
   - Description: "Connect WordPress, Salesforce, HubSpot, Stripe, custom APIs. Bi-directional data sync, automated workflows, real-time updates. We've orchestrated 3-way integrations handling hundreds of users and thousands of transactions."
   - Pricing: $20-40k
   - Timeline: 8-12 weeks

2. **AI-Powered Solutions**
   - Description: "OpenAI/Anthropic API integration, intelligent content generation, automated classification, custom AI workflows. Production-grade AI systems, not demos. We've deployed AI processing 1,000+ items with 95%+ accuracy."
   - Pricing: $15-35k
   - Timeline: 6-10 weeks

3. **Modern Web Applications** ⭐ (Demonstrates non-WordPress capability)
   - Description: "Next.js, React, PostgreSQL, headless architectures. Full-stack custom applications when WordPress isn't the answer. We've built business intelligence platforms, reporting tools, and data management systems from scratch."
   - Pricing: $25-50k
   - Timeline: 10-16 weeks

4. **Enterprise WordPress**
   - Description: "High-traffic optimization, complex data workflows, custom plugins, multisite architectures. WordPress at scale - handling 1M+ monthly visitors with advanced caching, CDN optimization, and custom backend systems."
   - Pricing: $15-30k
   - Timeline: 6-10 weeks

5. **Headless Architectures**
   - Description: "WordPress backend, Next.js/React frontend. API-first development, JAMstack, decoupled CMS. Give your clients bleeding-edge performance without abandoning their WordPress content management."
   - Pricing: $20-35k
   - Timeline: 8-12 weeks

6. **API Development & Integration**
   - Description: "Custom REST APIs, third-party integrations, webhook systems, real-time data sync. We've built APIs serving thousands of requests and integrated with Salesforce, payment processors, and custom platforms."
   - Pricing: $15-30k
   - Timeline: 6-10 weeks

---

### 6. ProofSection

**Status:** ✅ Implemented

**Features:**
- Dark background (bg-primary)
- **Tech Stack Logo Grid** (replaced stats)
- **Tabbed Case Studies Interface**
- White card on dark background

**Tech Stack Logos (6 total):**
- Next.js (inline SVG with gradients)
- WordPress (inline SVG)
- Vercel (triangle/chevron SVG)
- Prisma (ORM logo SVG)
- PostgreSQL (elephant logo SVG)
- OpenAI (official logo SVG)

**Layout:** 3 cols mobile / 6 cols desktop, hover opacity transition

**Technical Implementation:**
- Client-side component (`'use client'`)
- `useState` for active tab tracking
- Inline SVG rendering for each logo
- Tabbed buttons with active state styling

**Case Studies (3 tabs):**

1. **Multi-System Integration**
   - Challenge: National nonprofit with manual data entry, disconnected systems, 15+ hours/week waste
   - Solution: 3-way integration (WordPress + Salesforce + Stripe), bi-directional sync
   - Result: Saved 15+ hours/week, zero sync errors, running 5+ years

2. **AI-Powered Automation**
   - Challenge: 1,000+ unorganized posts, no ownership tracking, 400+ hours of manual work needed
   - Solution: Custom WordPress plugin with Claude AI, automated classification, SEO improvements
   - Result: Saved 400+ hours, 95%+ accuracy, running 5+ years

3. **Modern Web Application**
   - Challenge: Manual Jira reporting (10+ hours/month), need for real-time insights
   - Solution: Next.js + PostgreSQL + OpenAI, automated reporting, AI-powered insights
   - Result: Saved 10+ hours/month, zero downtime for 2+ years

---

### 7. ProcessSection

**Status:** ✅ Implemented

**Features:**
- 4-step horizontal timeline
- Numbered circles
- Arrows between steps (hidden on mobile)
- Responsive: stacks vertically on mobile

**Content:**
- **Headline:** "How We Work (Invisibly)"

**Steps:**

1. **You Send Requirements**
   - "Share project specs and timeline. We'll send you a fixed-price quote within 48 hours - no surprises, no 'it depends.'"

2. **We Build**
   - "Development happens behind the scenes as your team. You'll get written updates every Friday - no need to chase us for status."

3. **You Review**
   - "Test in staging, request revisions. We don't charge extra for reasonable changes - this is about getting it right."

4. **We Deploy**
   - "Launch under your agency's banner. We'll stick around for 2 weeks post-launch to squash any bugs - it's included in the price."

---

### 8. FinalCTA

**Status:** ✅ Implemented

**Features:**
- Gradient background (accent colors)
- Centered content
- Two CTAs with different styles
- Meta information footer

**Content:**
- **Headline:** "Let's Talk About Your Next Complex Project"

- **Body:**
  - "You already know if you need us. Either you have a project right now that's beyond your team's capabilities, or you're about to turn down a great client because you can't deliver what they need."
  - "Let's have a 20-minute conversation about whether we're a fit. No sales pitch. No pressure. Just a technical discussion about what's possible and what it would cost."

- **CTAs:**
  - Button 1: "Schedule 20-Minute Call" (white bg, accent text)
  - Button 2: "Send Project Details" (transparent with white border)

- **Footer Meta:** "Response time: Under 24 hours | All conversations confidential | Fixed-price quotes within 48 hours"

---

### 9. Footer

**Status:** ✅ Implemented

**Features:**
- Dark background (bg-gray-800)
- Simple, clean layout
- Responsive flex

**Content:**
- **Logo/Brand:** "SKM.digital"
- **Tagline:** "Custom Technical Solutions Since 2019"
- **Contact:** Email link to `sean@skm.digital`
- **Copyright:** "© 2026 SKM.digital. All rights reserved."

---

## UI Component System

### AnimatedSection Component

**Purpose:** Provides intersection-observer-based scroll animations for any content

**Features:**
- Multiple animation types: fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn
- Configurable delay for staggered animations
- Configurable threshold for when animation triggers
- triggerOnce option to prevent re-triggering
- Prevents animation glitching with hasTriggered ref

**Technical Implementation:**
- Uses IntersectionObserver API for performance
- Ref tracking to prevent double-triggering
- Proper cleanup in useEffect
- Animation fill mode set to 'both' for smooth starts/ends

**Usage:**
```tsx
<AnimatedSection animation="fadeInUp" delay={150}>
  <YourContent />
</AnimatedSection>
```

### Button Component

**Variants:**
- `primary` - Blue background, white text, lift on hover
- `secondary` - Transparent with blue border, fills blue on hover
- `ghost` - Transparent with white border, fills white on hover
- `dark` - Dark blue background, white text
- `light` - White background, dark text

**Sizes:** sm, md, lg

**Features:**
- Icon support (left or right position)
- Loading state with spinner
- Full width option
- Focus ring for accessibility
- Disabled state

### Card Component

**Variants:**
- `default` - White background, border
- `outline` - Transparent with border
- `glass` - Semi-transparent with backdrop blur

**Hover Effects:**
- `lift` - Transforms up on hover
- `glow` - Adds glow effect
- `scale` - Scales up slightly

**Padding Options:** compact, comfortable, spacious

### Badge Component

**Variants:**
- `default` - Gray background
- `primary` - Blue background
- `outline` - Transparent with border

**Features:**
- Optional icon
- Optional dot indicator
- Two sizes: sm, md

---

## Tailwind CSS v4 Configuration

**Location:** `app/globals.css`

**Key Implementation Details:**
- Uses `@theme` block (not `@theme inline`) for proper Tailwind v4 syntax
- Full color scale defined (50-950) for primary, accent, and gray colors
- Custom utilities added: `line-clamp-4`, `border-l-3`, `border-3`, `ring-3`
- Custom CSS variables for durations and easing functions
- Animation keyframes: fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn, gradientShift
- Typography system with structured scales: display, heading, body, label, code
- Container utilities: `container-default`, `space-section-lg`, `space-section-md`

**Color System:**
```css
Primary: #0a1128 (950) → #1a365d (800) → #e0f2fe (50)
Accent: #1e3a8a (900) → #3182ce (400) → #e0f2fe (50)
Gray: #0a0a0a (950) → #718096 (500) → #fafbfc (25)
```

**Animation System:**
- Duration variables: instant (100ms), fast (200ms), normal (300ms), slow (500ms), slower (700ms)
- Easing functions: smooth, bounce, in, out, in-out
- Animation fill mode: 'both' to prevent flashing

---

## Content Guidelines

### Copy Rules
- ❌ **NEVER use em dashes (—)** - use regular hyphens or rephrase
- ✅ Professional but conversational B2B tone
- ✅ Specific numbers over vague claims ("15+ hours saved" not "significant time")
- ✅ Multi-platform flexibility emphasized throughout

### Messaging Principles
- **NOT:** WordPress-only developer
- **IS:** Multi-platform technical partner
- **Focus:** Choose right technology for each challenge (not force-fit one solution)

### Key Differentiators
1. Multi-platform expertise (WordPress + Next.js + custom apps)
2. Production AI integration (not demos - 5+ years in production)
3. Enterprise scale (1M+ visitors, zero-downtime)
4. White label by default

---

## Development Workflow

### Starting Development

```bash
cd C:\Projects\skm-digital
npm run dev
```

**Runs at:** `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run start  # Test production build locally
```

### Deploying to Vercel

```bash
git push origin main
# Vercel auto-deploys from GitHub
```

---

## Key Requirements

### Performance

- Lighthouse score: 95+ (mobile and desktop)
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- No console errors

### Responsive Design

- Mobile-first approach
- Test breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large)
- All sections stack appropriately on mobile

### Accessibility

- Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for images
- Keyboard navigation
- Color contrast (WCAG AA minimum)

### Code Quality

- TypeScript with proper types
- Component reusability
- Clean, commented code
- Follow Next.js 14 best practices

---

## Forms & CTAs

### V1 Implementation (Current):

All CTAs link to `mailto:sean@skm.digital`

### V2 (Post-Launch):

- Full contact form with validation
- Calendly embed
- Lead tracking

---

## Acceptance Criteria

**Current Status:**

- ✅ All 9 sections implemented
- ✅ All copy implemented (multi-platform version)
- ✅ CTAs link to mailto
- ✅ Responsive design works on all screen sizes
- ✅ Advanced features implemented (typewriter, tech logos, tabbed UI)
- ✅ Tailwind CSS v4 properly configured
- ✅ Header with gradient logo and scroll effects working correctly
- ✅ Hero grid pattern stable and visible
- ✅ Smooth scroll animations without glitching
- ✅ Reusable UI component system (Button, Card, Badge, AnimatedSection)
- ✅ Production build successful (no TypeScript/build errors)
- ⚠️  Performance not yet verified (Lighthouse)
- ⚠️  Not yet deployed to production

**The site is DONE when:**

- ✅ All 9 sections render correctly on mobile and desktop
- ✅ All copy from multi-platform positioning is implemented
- ✅ CTAs link to proper destinations (mailto)
- ✅ Animations work smoothly without glitching
- ✅ Header styling correct (logo gradient, button variants)
- ⚠️  Site loads fast (<2s on mobile) - needs verification
- ⚠️  No console errors - needs verification
- ✅ Responsive design works on all screen sizes
- ⚠️  Deployed to skm.digital (or ready for Vercel deployment)
- ✅ Source code demonstrates clean Next.js + Tailwind v4

---

## Common Pitfalls to Avoid

❌ Over-engineering (keep it simple for v1)
❌ Stock photos (use code visuals or abstract tech)
❌ Tiny text on mobile (ensure readability)
❌ Missing hover states on buttons
❌ Not testing on actual mobile device
❌ Console errors in production
❌ Slow load times (optimize images!)
❌ Using em dashes (—) in copy

---

## Issues Fixed During Development

### Tailwind CSS v4 Configuration Issues
**Problem:** Colors not rendering, custom utilities not working
**Solution:**
- Changed `@theme inline` to `@theme` (proper v4 syntax)
- Added full color scales (50-950) for all custom colors
- Added missing utilities: `line-clamp-4`, `border-l-3`, `border-3`, `ring-3`
- Fixed font-family references to use proper variable names

### Animation Glitching
**Problem:** Scroll animations jumping, repeating, or flashing on page load
**Solution:**
- Added `hasTriggered` ref in AnimatedSection to prevent double-triggering
- Changed animation fill mode from `forwards` to `both`
- Removed class-based `opacity-0` in favor of inline style opacity control
- Only apply animation delay when element is actually visible
- Improved IntersectionObserver cleanup to prevent memory leaks

### Hero Grid Pattern Disappearing
**Problem:** Grid pattern appeared on load then suddenly disappeared
**Solution:**
- Removed inline `fadeIn` animation from grid div
- Grid should be static with consistent opacity, not animated
- Increased opacity from 5% to 10% for better visibility
- Increased grid line opacity from 0.1 to 0.2

### Header Logo Not Visible
**Problem:** Logo gradient not showing on dark hero background
**Solution:**
- Changed gradient from dark blues (#1a365d → #3182ce) to white-to-light-blue (#ffffff → #63b3ed)
- Removed conflicting `text-white` class when gradient is active
- Properly applied WebkitBackgroundClip and WebkitTextFillColor

---

## After Launch Strategy

**Week 1:**

- Send to 10 agency contacts
- Track which sections get most engagement (add analytics)
- Gather feedback

**Week 2:**

- Add testimonials as deals close
- Refine messaging based on feedback
- A/B test CTA copy

**Month 2:**

- Add WordPress backend for easier content updates
- Build case studies section
- Add blog for SEO

---

## Reference Documents

- **[SKM-DIGITAL-POSITIONING.md](docs/SKM-DIGITAL-POSITIONING.md)** - Strategic positioning document that informed the multi-platform rebrand
- **[README.md](README.md)** - Quick start guide and project overview for developers
