'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Project } from '@/lib/types'
import { Tag } from './Tag'
import { CTAButton } from './CTAButton'

interface ProjectCardProps {
  project: Project
  index: number
  hideBorderTop?: boolean
}

export function ProjectCard({ project, index, hideBorderTop }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reduced ? 0 : 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: 'easeOut' as const, delay: index * 0.05 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '42% 1fr',
        gap: '64px',
        alignItems: 'start',
        paddingTop: '40px',
        paddingBottom: '48px',
        borderTop: hideBorderTop ? 'none' : '1px solid #1a1a1a',
      }}
      className="project-row"
    >
      {/* ── Left: Text ───────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>

        {/* Client */}
        <p style={{
          fontSize: '11px',
          fontWeight: 400,
          color: '#aaaaaa',
          letterSpacing: '0.12em',
          textTransform: 'uppercase' as const,
        }}>
          {project.client}
        </p>

        {/* Title */}
        <h3 style={{
          fontSize: 'clamp(18px, 1.7vw, 22px)',
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
        }}>
          {project.title}
        </h3>

        {/* Summary */}
        <p style={{
          fontSize: '14px',
          fontWeight: 300,
          color: '#888888',
          lineHeight: 1.65,
        }}>
          {project.summary}
        </p>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
            {project.metrics.map((m) => (
              <p key={m.label} style={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#cccccc',
              }}>
                <span style={{ fontWeight: 700 }}>{m.value}</span> {m.label}
              </p>
            ))}
          </div>
        )}

        {/* Tags */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const }}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' as const, marginTop: '4px' }}>
          {project.ctas.map((cta, i) => (
            <CTAButton key={i} cta={cta} />
          ))}
        </div>
      </div>

      {/* ── Right: Image ─────────────────────────────── */}
      <div style={{ aspectRatio: '4/3', width: '100%', overflow: 'hidden', borderRadius: '4px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImage}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </motion.div>
  )
}
