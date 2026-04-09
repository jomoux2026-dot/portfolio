export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #111111',
        paddingLeft: 'var(--page-margin)',
        paddingRight: 'var(--page-margin)',
        boxSizing: 'border-box' as const,
      }}
    >
      {/* Back to Top */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '28px',
          paddingBottom: '20px',
        }}
      >
        <a
          href="#"
          style={{
            fontSize: '13px',
            fontWeight: 400,
            color: '#ffffff',
            textDecoration: 'none',
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s ease',
          }}
          className="back-to-top"
        >
          ↑ Back to Top
        </a>
      </div>

      {/* Bottom row */}
      <div
        style={{
          paddingTop: '24px',
          paddingBottom: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap' as const,
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a
            href="mailto:jomoux2026@gmail.com"
            style={{
              fontSize: '14px',
              fontWeight: 300,
              color: '#aaaaaa',
              textDecoration: 'none',
            }}
          >
            jomoux2026@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/joshjmoon"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '14px',
              fontWeight: 300,
              color: '#aaaaaa',
              textDecoration: 'none',
            }}
          >
            linkedin/in/joshjmoon
          </a>
        </div>

        <span style={{ fontSize: '14px', fontWeight: 300, color: '#ffffff' }}>
          Based in California
        </span>
      </div>

      <style>{`
        .back-to-top:hover { color: #aaaaaa; }
      `}</style>
    </footer>
  )
}
