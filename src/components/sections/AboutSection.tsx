export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        paddingTop: '100px',
        paddingBottom: '80px',
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
        About
      </h2>

      {/* Photo + Bio grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '42% 1fr',
          gap: '40px',
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about.jpeg"
          alt="Josh Moon"
          style={{
            width: '100%',
            height: '520px',
            objectFit: 'cover',
            borderRadius: '6px',
            display: 'block',
          }}
        />

        {/* Bio card */}
        <div
          style={{
            backgroundColor: '#111111',
            border: '1px solid #1e1e1e',
            borderRadius: '8px',
            padding: '36px 40px',
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '20px',
          }}
        >
          <p style={{ fontSize: '15px', fontWeight: 300, color: '#d0d0d0', lineHeight: 1.75 }}>
            I&apos;m just a dude.<br />
            I&apos;m 100% Californian, 100% Korean.<br />
            I&apos;ve been international all my life.<br />
            I&apos;ve been to 47 countries in every continent (minus the poles).<br />
            This gives me global insight that helps me to not only think about
            works for Americans, but for all people.
          </p>
          <p style={{ fontSize: '15px', fontWeight: 300, color: '#d0d0d0', lineHeight: 1.75 }}>
            In my free-time, I&apos;m an artsy dude.<br />
            I like creative writing, drawing, painting, pottery, playing music,
            and woodworking.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
