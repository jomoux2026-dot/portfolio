import { ImageLightbox } from '@/components/ui/ImageLightbox'

interface RuleExplainerSectionProps {
  heading: string
  text: string
  image?: string
  imageAlt?: string
}

export function RuleExplainerSection({ heading, text, image, imageAlt }: RuleExplainerSectionProps) {
  return (
    <section
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'var(--page-margin)',
        paddingRight: 'var(--page-margin)',
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box' as const,
        borderTop: '1px solid #1a1a1a',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: image ? '1fr 1fr' : '1fr',
          gap: '64px',
          alignItems: 'stretch',
        }}
        className="rule-grid"
      >
        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column' as const, justifyContent: 'flex-start' }}>
          <p style={{
            fontSize: '11px',
            fontWeight: 300,
            color: '#aaaaaa',
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            marginBottom: '20px',
          }}>
            Background
          </p>
          <h2 style={{
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            marginBottom: '20px',
          }}>
            {heading}
          </h2>
          <p style={{
            fontSize: '16px',
            fontWeight: 300,
            color: '#d0d0d0',
            lineHeight: 1.8,
          }}>
            {text}
          </p>
        </div>

        {/* Image — cropped to match text column height */}
        {image && (
          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#0d0d0d',
            height: '100%',
            minHeight: '200px',
          }}>
            <ImageLightbox
              src={image}
              alt={imageAlt ?? heading}
            />
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .rule-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
