import { TESTIMONIALS } from '@/content/testimonials'
import { TestimonialCard } from '@/components/ui/TestimonialCard'

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        paddingLeft: 'var(--page-margin)',
        paddingRight: 'var(--page-margin)',
        maxWidth: '1440px',
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
        Recommendations
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          alignItems: 'stretch',
        }}
        className="testimonials-grid"
      >
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.author} testimonial={t} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
