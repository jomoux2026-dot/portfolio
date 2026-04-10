import { CaseStudy } from '@/lib/types'

interface OverviewSectionProps {
  caseStudy: CaseStudy
}

export function OverviewSection({ caseStudy }: OverviewSectionProps) {
  const meta = caseStudy.metadata
  const metaItems = [
    { label: 'Role', value: meta.role },
    { label: 'Duration', value: meta.duration },
    { label: 'Team', value: meta.team },
    { label: 'Tools', value: meta.tools },
  ]

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
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="overview-grid"
      >
        {/* Overview text */}
        <div>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 300,
              color: '#aaaaaa',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              marginBottom: '20px',
            }}
          >
            Overview
          </p>
          <p
            style={{
              fontSize: '17px',
              fontWeight: 300,
              color: '#d0d0d0',
              lineHeight: 1.8,
            }}
          >
            {caseStudy.overview}
          </p>
        </div>

        {/* Metadata grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}
        >
          {metaItems.map((item) => (
            <div key={item.label}>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 300,
                  color: '#aaaaaa',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  marginBottom: '8px',
                }}
              >
                {item.label}
              </p>
              <p style={{ fontSize: '14px', fontWeight: 400, color: '#ffffff', lineHeight: 1.5 }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .overview-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
