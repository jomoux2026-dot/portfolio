import Link from 'next/link'
import { CTAType } from '@/lib/types'

interface CTAButtonProps {
  cta: CTAType
}

const LABELS: Record<CTAType['type'], string> = {
  'case-study': 'View Case Study',
  'press-release': 'Read Press Release',
  'see-it-live': 'See It Live',
}

export function CTAButton({ cta }: CTAButtonProps) {
  const label = LABELS[cta.type]
  const href = cta.type === 'case-study' ? `/work/${cta.slug}` : cta.url
  const isExternal = cta.type !== 'case-study'

  const arrow = ' →'

  if (isExternal) {
    return (
      <>
        <a href={href} target="_blank" rel="noopener noreferrer" className="cta-link">
          {label}{arrow}
        </a>
        <style>{`
          .cta-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #ffffff;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          .cta-link:hover { color: #aaaaaa; }
        `}</style>
      </>
    )
  }

  return (
    <>
      <Link href={href} className="cta-link">
        {label}{arrow}
      </Link>
      <style>{`
        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .cta-link:hover { color: #aaaaaa; }
      `}</style>
    </>
  )
}
