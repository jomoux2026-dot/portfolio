import { CaseStudy } from '@/lib/types'
import { Tag } from '@/components/ui/Tag'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface CaseStudyHeroProps {
  caseStudy: CaseStudy
}

export function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  return (
    <section
      style={{
        padding: '140px 40px 80px',
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {/* Tags */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' as const, marginBottom: '24px' }}>
        {caseStudy.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: 'clamp(28px, 4vw, 52px)',
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          marginBottom: '20px',
          maxWidth: '800px',
        }}
      >
        {caseStudy.title}
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 'clamp(16px, 1.8vw, 20px)',
          fontWeight: 300,
          color: '#a0a0a0',
          lineHeight: 1.6,
          maxWidth: '680px',
          marginBottom: '64px',
        }}
      >
        {caseStudy.subtitle}
      </p>

      {/* Hero image / mockups row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
      >
        {[1, 2, 3].map((i) => (
          <ImagePlaceholder
            key={i}
            label={`Mobile mockup screen ${i} — PNG/JPG`}
            height={420}
            style={{ borderRadius: '8px' }}
          />
        ))}
      </div>
    </section>
  )
}
