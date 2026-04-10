'use client'

import { ProcessStep } from '@/lib/types'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { ImageLightbox } from '@/components/ui/ImageLightbox'

interface ProcessSectionProps {
  steps: ProcessStep[]
}

export function ProcessSection({ steps }: ProcessSectionProps) {
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
          <div key={step.number}>
            {/* Main step row */}
            <div
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
                <p style={{
                  fontSize: '11px',
                  fontWeight: 300,
                  color: '#aaaaaa',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}>
                  {String(step.number).padStart(2, '0')}
                </p>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  marginBottom: '16px',
                }}>
                  {step.heading}
                </h3>
                <p style={{
                  fontSize: '15px',
                  fontWeight: 300,
                  color: '#a0a0a0',
                  lineHeight: 1.8,
                }}>
                  {step.body.includes('•') ? (
                    <>
                      {step.body.split('\n').map((line, i) =>
                        line.startsWith('•') ? (
                          <span key={i} style={{ display: 'block', paddingLeft: '16px', textIndent: '-16px' }}>
                            {line}
                          </span>
                        ) : (
                          <span key={i} style={{ display: 'block' }}>{line}</span>
                        )
                      )}
                    </>
                  ) : (
                    step.body
                  )}
                </p>
              </div>

              {/* Primary image */}
              {step.image ? (
                <div>
                  <div style={{ borderRadius: '4px', overflow: 'hidden' }}>
                    <ImageLightbox
                      src={step.image}
                      alt={`${step.heading} — process image`}
                      style={{ objectFit: 'contain', height: 'auto' }}
                    />
                  </div>
                  {step.imageCaption && (
                    <p style={{
                      fontSize: '12px',
                      fontWeight: 400,
                      color: '#aaaaaa',
                      lineHeight: 1.6,
                      marginTop: '10px',
                    }}>
                      {step.imageCaption}
                    </p>
                  )}
                </div>
              ) : (
                <ImagePlaceholder
                  label={`Process step ${step.number} — annotated wireframe or photo`}
                  height={280}
                  style={{ borderRadius: '4px' }}
                />
              )}
            </div>

            {/* Extra images (e.g. Linear / Hub-and-Spoke comparison) */}
            {step.extraImages && step.extraImages.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${step.extraImages.length}, 1fr)`,
                  gap: '32px',
                  marginTop: '48px',
                }}
                className="process-extra-grid"
              >
                {step.extraImages.map((img) => (
                  <div key={img.src}>
                    <p style={{
                      fontSize: '10px',
                      fontWeight: 400,
                      color: '#aaaaaa',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase' as const,
                      marginBottom: '12px',
                    }}>
                      {img.label}
                    </p>
                    <div style={{ borderRadius: '4px', overflow: 'hidden' }}>
                      <ImageLightbox
                        src={img.src}
                        alt={img.alt}
                        style={{ objectFit: 'contain', height: 'auto' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-step-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .process-extra-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
