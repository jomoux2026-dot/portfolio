interface TagProps {
  label: string
}

export function Tag({ label }: TagProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '10px',
        fontWeight: 400,
        letterSpacing: '0.08em',
        color: '#aaaaaa',
        textTransform: 'uppercase' as const,
        border: '1px solid #2a2a2a',
        borderRadius: '3px',
        padding: '4px 10px',
        lineHeight: 1,
      }}
    >
      {label}
    </span>
  )
}
