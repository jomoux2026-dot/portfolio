import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        textAlign: 'center' as const,
      }}
    >
      <p
        style={{
          fontSize: '12px',
          fontWeight: 300,
          color: '#aaaaaa',
          letterSpacing: '0.12em',
          textTransform: 'uppercase' as const,
          marginBottom: '16px',
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '24px',
        }}
      >
        Page not found
      </h1>
      <Link
        href="/"
        style={{
          fontSize: '13px',
          fontWeight: 300,
          color: '#a0a0a0',
          textDecoration: 'none',
          letterSpacing: '0.1em',
          textTransform: 'uppercase' as const,
          borderBottom: '1px solid #333',
          paddingBottom: '2px',
        }}
      >
        ← Back home
      </Link>
    </div>
  )
}
