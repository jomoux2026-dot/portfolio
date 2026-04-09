'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { StrengthCard } from '@/components/ui/StrengthCard'

const STRENGTHS = [
  {
    title: '10 Years of Experience',
    description:
      'My background spans B2C and B2B in finance, medical technologies, and enterprise communications that have impacted millions of lives.',
  },
  {
    title: 'UI & UX Proficiency',
    description:
      'I apply design thinking principles to craft elegant solutions that align with complex business and user requirements.',
  },
  {
    title: 'Wide Interaction Design Knowledge',
    description:
      'Experience with iOS, Android, and Responsive Web across nearly a decade gives me a deep understanding of the subtle nuances between them.',
  },
  {
    title: 'Pixel Perfection',
    description:
      "I'm a designer who names all their layers and does not tolerate a single pixel out of place. This helps me catch mistakes that others miss.",
  },
  {
    title: 'Strong Communicator',
    description:
      'Expert in speaking with developers, product folk, legal, and compliance. I speak clearly and unambiguously to keep everyone aligned.',
  },
  {
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
        maxWidth: '1280px',
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
            <StrengthCard title={strength.title} description={strength.description} />
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
