import { ProcessStep } from '@/lib/types'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface ProcessSectionProps {
  steps: ProcessStep[]
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section
      style={{
        padding: '80px 40px',
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%',
        borderTop: '1px solid #1a1a1a',
      }}
    >
      <p
        style={{
          fontSize: '11px',
          fontWeight: 300,
          color: '#aaaaaa',
          letterSpacing: '0.12em',
          textTransform: 'uppercase' as const,
          marginBottom: '64px',
        }}
      >
        Process
      </p>

      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '80px' }}>
        {steps.map((step) => (
          <div
            key={step.number}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'start',
            }}
            className="process-step-grid"
          >
            {/* Text */}
            <div>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 300,
                  color: '#aaaaaa',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}
              >
                {String(step.number).padStart(2, '0')}
              </p>
              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  marginBottom: '16px',
                }}
              >
                {step.heading}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 300,
                  color: '#a0a0a0',
                  lineHeight: 1.8,
                }}
              >
                {step.body}
              </p>
            </div>

            {/* Image or placeholder */}
            <ImagePlaceholder
              label={`Process step ${step.number} — annotated wireframe or photo`}
              height={280}
              style={{ borderRadius: '4px' }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-step-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
