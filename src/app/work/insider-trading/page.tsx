import type { Metadata } from 'next'
import Link from 'next/link'
import { INSIDER_TRADING_CASE_STUDY } from '@/content/case-studies/insider-trading'
import { CaseStudyHero } from '@/components/work/CaseStudyHero'
import { OverviewSection } from '@/components/work/OverviewSection'
import { ProcessSection } from '@/components/work/ProcessSection'
import { ImageGallery } from '@/components/work/ImageGallery'
import { OutcomeSection } from '@/components/work/OutcomeSection'

export const metadata: Metadata = {
  title: 'Protecting Company Emails from Insider Trading Allegations',
  description:
    'A UX case study on designing a compliance tool for Charles Schwab that helps plan holders create legally defensible SEC Rule 10b5-1 trading plans.',
}

export default function InsiderTradingCaseStudy() {
  const cs = INSIDER_TRADING_CASE_STUDY

  return (
    <>
      {/* Back link */}
      <div
        style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '12px 40px',
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <Link
          href="/#work"
          style={{
            fontSize: '12px',
            fontWeight: 300,
            color: '#a0a0a0',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'color 0.2s ease',
          }}
        >
          ← Back to Work
        </Link>
      </div>

      <CaseStudyHero caseStudy={cs} />
      <OverviewSection caseStudy={cs} />
      <ProcessSection steps={cs.process} />
      <ImageGallery images={cs.gallery} />
      <OutcomeSection outcome={cs.outcome} />
    </>
  )
}
