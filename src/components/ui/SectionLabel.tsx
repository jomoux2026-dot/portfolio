interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p
      style={{
        fontSize: '12px',
        letterSpacing: '0.12em',
        fontWeight: 300,
        color: '#a0a0a0',
        textTransform: 'uppercase' as const,
        marginBottom: '48px',
      }}
    >
      {children}
    </p>
  )
}
