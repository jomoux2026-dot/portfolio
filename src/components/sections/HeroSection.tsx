'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ClientLogoRow } from '@/components/ui/ClientLogoRow'

const LINES = [
  "I'm a product designer with 10 years of experience.",
  "Mostly in finance.",
  "I specialize in interaction and visual design.",
  "I clarify user goals, balance them with business requirements, and convert them into elegant designs.",
  "Often in highly-regulated industries.",
  "I've shipped B2B & B2C products.",
  "Thanks for stopping by.",
]

const INTERVAL_MS = 3080 // 2800 + 10%

export function HeroSection() {
  const reduced = useReducedMotion()
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => {
      setLineIndex((i) => (i + 1) % LINES.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [reduced])

  const fadeUp = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: 'easeOut' as const, delay },
  })

  return (
    <section
      id="hero"
      style={{
        minHeight: 'var(--hero-min-height)',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        paddingTop: '140px',
        paddingBottom: '100px',
        paddingLeft: 'var(--page-margin)',
        paddingRight: 'var(--page-margin)',
        maxWidth: '1440px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box' as const,
      }}
    >
      {/* Mixed-weight headline */}
      <motion.h1
        {...fadeUp(0)}
        style={{
          fontSize: 'clamp(48px, 5.5vw, 72px)',
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          marginBottom: '8px',
        }}
      >
        <span style={{ fontWeight: 300, color: '#888888' }}>I&apos;m </span>
        <span style={{ fontWeight: 700, color: '#ffffff' }}>Josh Moon</span>
        <span style={{ fontWeight: 700, color: '#ffffff' }}>.</span>
      </motion.h1>

      {/* Animated cycling subtitle */}
      <motion.div {...fadeUp(0.1)}>
        <div
          style={{
            fontSize: 'clamp(28px, 3.6vw, 48px)',
            fontWeight: 300,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            maxWidth: '900px',
            minHeight: '3.6em',
            position: 'relative' as const,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={lineIndex}
              initial={{ opacity: 0, y: reduced ? 0 : 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduced ? 0 : -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              style={{
                color: '#888888',
                margin: 0,
                position: 'absolute' as const,
                top: 0,
                left: 0,
                right: 0,
              }}
            >
              {LINES[lineIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Client logos */}
      <motion.div {...fadeUp(0.25)}>
        <ClientLogoRow />
      </motion.div>
    </section>
  )
}
