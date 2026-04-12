'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { StrengthCard } from '@/components/ui/StrengthCard'

const AwardIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
)

const LayersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)

const PlaybookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
)

const RulerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="10" rx="2"/>
    <line x1="6"  y1="7" x2="6"  y2="11"/>
    <line x1="10" y1="7" x2="10" y2="13"/>
    <line x1="14" y1="7" x2="14" y2="11"/>
    <line x1="18" y1="7" x2="18" y2="13"/>
  </svg>
)

const MegaphoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 19-9v20L3 13"/>
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
  </svg>
)

const DoorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 4h3a2 2 0 0 1 2 2v14"/>
    <path d="M2 20h3"/>
    <path d="M13 20h9"/>
    <circle cx="16" cy="12" r="1" fill="currentColor"/>
    <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.562z"/>
  </svg>
)

const STRENGTHS = [
  {
    icon: <AwardIcon />,
    title: '10 Years of Experience',
    description:
      'My background spans B2C and B2B in finance, medical technologies, and enterprise communications that have impacted millions of lives.',
  },
  {
    icon: <LayersIcon />,
    title: 'UI & UX Proficiency',
    description:
      'I apply design thinking principles to craft elegant solutions that align with complex business and user requirements.',
  },
  {
    icon: <PlaybookIcon />,
    title: 'Wide Interaction Design Knowledge',
    description:
      'Experience with iOS, Android, and Responsive Web across nearly a decade gives me a deep understanding of the subtle nuances between them.',
  },
  {
    icon: <RulerIcon />,
    title: 'Pixel Perfection',
    description:
      "I'm a designer who names all their layers and does not tolerate a single pixel out of place. This helps me catch mistakes that others miss.",
  },
  {
    icon: <MegaphoneIcon />,
    title: 'Strong Communicator',
    description:
      'Expert in speaking with developers, product folk, legal, and compliance. I speak clearly and unambiguously to keep everyone aligned.',
  },
  {
    icon: <DoorIcon />,
    title: 'Always Open to Feedback',
    description:
      'I leave my ego out of the design process. I never take feedback personally and I love making sure that everyone has a voice when we work together.',
  },
]

export function StrengthsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <section
      id="strengths"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        paddingLeft: 'var(--page-margin)',
        paddingRight: 'var(--page-margin)',
        maxWidth: '1440px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box' as const,
      }}
    >
      <h2 style={{
        fontSize: 'clamp(22px, 2.2vw, 28px)',
        fontWeight: 700,
        color: '#ffffff',
        letterSpacing: '-0.01em',
        marginBottom: '40px',
      }}>
        Key Strengths
      </h2>

      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          alignItems: 'stretch',
        }}
        className="strengths-grid"
      >
        {STRENGTHS.map((strength, i) => (
          <motion.div
            key={strength.title}
            initial={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, ease: 'easeOut' as const, delay: i * 0.05 }}
            style={{ height: '100%' }}
          >
            <StrengthCard
              icon={strength.icon}
              title={strength.title}
              description={strength.description}
            />
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .strengths-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
