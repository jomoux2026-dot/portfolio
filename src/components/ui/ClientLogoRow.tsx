const CLIENTS = [
  { name: 'Charles Schwab', src: '/images/clients/schwab.png', width: 120 },
  { name: 'PayPal', src: '/images/clients/paypal.png', width: 100 },
  { name: 'uXreactor', src: '/images/clients/uxreactor.png', width: 130 },
  { name: 'CareerFoundry', src: '/images/clients/careerfoundry.png', width: 140 },
]

export function ClientLogoRow() {
  return (
    <div className="logo-row" style={{ marginTop: '72px' }}>
      {CLIENTS.map((client) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={client.name}
          src={client.src}
          alt={client.name}
          width={client.width}
          style={{
            height: '28px',
            width: 'auto',
            objectFit: 'contain',
            opacity: 0.55,
            mixBlendMode: 'screen' as const,
          }}
        />
      ))}

      <style>{`
        .logo-row {
          display: flex;
          flex-wrap: wrap;
          gap: 72px;
          align-items: center;
        }
        @media (max-width: 480px) {
          .logo-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 48px;
          }
        }
      `}</style>
    </div>
  )
}
