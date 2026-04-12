interface OutcomeSectionProps {
  outcome: string
}

export function OutcomeSection({ outcome }: OutcomeSectionProps) {
  return (
    <section
      style={{
        paddingTop: '80px',
        paddingBottom: '120px',
        paddingLeft: 'var(--page-margin)',
        paddingRight: 'var(--page-margin)',
        maxWidth: '1440px',
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
          marginBottom: '24px',
        }}
      >
        Outcome
      </p>
      <p
        style={{
          fontSize: 'clamp(18px, 2vw, 24px)',
          fontWeight: 300,
          color: '#d0d0d0',
          lineHeight: 1.7,
          maxWidth: '720px',
        }}
      >
        {outcome}
      </p>
    </section>
  )
}
