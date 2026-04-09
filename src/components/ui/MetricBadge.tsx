interface MetricBadgeProps {
  value: string
  label: string
}

export function MetricBadge({ value, label }: MetricBadgeProps) {
  return (
    <div style={{ marginTop: '12px' }}>
      <span
        style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#ffffff',
          display: 'block',
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: '12px',
          fontWeight: 300,
          color: '#a0a0a0',
          letterSpacing: '0.06em',
          textTransform: 'uppercase' as const,
        }}
      >
        {label}
      </span>
    </div>
  )
}
