import { CaseStudy } from '@/lib/types'
import { Tag } from '@/components/ui/Tag'
import { ImageLightbox } from '@/components/ui/ImageLightbox'

interface CaseStudyHeroProps {
  caseStudy: CaseStudy
  images?: string[]
}

export function CaseStudyHero({ caseStudy, images }: CaseStudyHeroProps) {
  const heroImages = images ?? []

  return (
    <section
      className="cs-hero"
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        paddingLeft: 'var(--page-margin)',
        paddingRight: 'var(--page-margin)',
        maxWidth: '1440px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box' as const,
      }}
    >
      {/* Tags — hidden on mobile */}
      <div
        style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' as const, marginBottom: '24px' }}
        className="cs-tags"
      >
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

      {/* Hero images — full height, no cropping */}
      {heroImages.length > 0 && (
        <>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              marginBottom: '16px',
            }}
            className="cs-hero-grid"
          >
            {heroImages.map((src, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <ImageLightbox
                  src={src}
                  alt={`${caseStudy.title} — screen ${i + 1}`}
                  style={{ objectFit: 'contain', height: 'auto' }}
                />
              </div>
            ))}
          </div>

          {/* NDA disclaimer */}
          <p style={{
            fontSize: '11px',
            fontWeight: 400,
            color: '#aaaaaa',
            lineHeight: 1.6,
          }}>
            Note: Due to NDA restrictions, final screens are not available. All designs shown are recreated from memory and may differ from the shipped product and final outcomes.
          </p>
        </>
      )}

      <style>{`
        @media (max-width: 768px) {
          .cs-tags { display: none !important; }
          .cs-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
