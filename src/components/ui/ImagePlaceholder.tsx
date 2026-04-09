interface ImagePlaceholderProps {
  label: string
  width?: number | string
  height?: number | string
  style?: React.CSSProperties
}

export function ImagePlaceholder({ label, width = '100%', height = 240, style }: ImagePlaceholderProps) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: '#0d0d1a',
        border: '1px dashed #3a3a5c',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '16px',
        textAlign: 'center' as const,
        ...style,
      }}
    >
      <span style={{ fontSize: '20px', opacity: 0.4 }}>⬜</span>
      <span
        style={{
          fontSize: '11px',
          color: '#3a3a5c',
          letterSpacing: '0.06em',
          fontWeight: 400,
          lineHeight: 1.4,
          maxWidth: '200px',
        }}
      >
        [IMAGE NEEDED: {label}]
      </span>
    </div>
  )
}
