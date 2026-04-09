import { Testimonial } from '@/lib/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '24px',
        padding: '32px',
        backgroundColor: '#0d0d0d',
        border: '1px solid #1a1a1a',
        borderRadius: '6px',
      }}
    >
      <p style={{
        fontSize: '14px',
        fontWeight: 300,
        color: '#cccccc',
        lineHeight: 1.8,
        flex: 1,
      }}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '20px' }}>
        <p style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '4px',
        }}>
          {testimonial.author}
        </p>
        <p style={{
          fontSize: '12px',
          fontWeight: 400,
          color: '#aaaaaa',
          letterSpacing: '0.03em',
        }}>
          {testimonial.title} · {testimonial.company}
        </p>
      </div>
    </div>
  )
}
