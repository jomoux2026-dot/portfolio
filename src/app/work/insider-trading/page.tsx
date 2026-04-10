import type { Metadata } from 'next'
import { INSIDER_TRADING_CASE_STUDY } from '@/content/case-studies/insider-trading'
import { CaseStudyHero } from '@/components/work/CaseStudyHero'
import { OverviewSection } from '@/components/work/OverviewSection'
import { RuleExplainerSection } from '@/components/work/RuleExplainerSection'
import { ProcessSection } from '@/components/work/ProcessSection'
import { ImageGallery } from '@/components/work/ImageGallery'
import { OutcomeSection } from '@/components/work/OutcomeSection'
import { PasswordGate } from '@/components/ui/PasswordGate'

export const metadata: Metadata = {
  title: 'Protecting Company Execs from Insider Trading Allegations',
  description:
    'A UX case study on designing a compliance tool for Charles Schwab that helps plan holders create legally defensible SEC Rule 10b5-1 trading plans.',
}

const HERO_IMAGES = [
  '/images/projects/insider-trading/1.png',
  '/images/projects/insider-trading/2.png',
  '/images/projects/insider-trading/3.png',
]

const RULE_EXPLAINER = {
  heading: "What's Rule 10b5-1?",
  text: "Rule 10b5-1 is an SEC rule that protects corporate executives and other insiders from insider trading allegations by restricting when they can trade securities. To comply, individuals enroll in a 10b5-1 plan — a pre-scheduled trading arrangement covering their current holdings, vesting shares, and any future performance awards.",
  image: '/images/projects/insider-trading/rule-explainer.jpg',
}

export default function InsiderTradingCaseStudy() {
  const cs = INSIDER_TRADING_CASE_STUDY

  return (
    <PasswordGate>
      <CaseStudyHero caseStudy={cs} images={HERO_IMAGES} />
      <OverviewSection caseStudy={cs} />
      <RuleExplainerSection
        heading={RULE_EXPLAINER.heading}
        text={RULE_EXPLAINER.text}
        image={RULE_EXPLAINER.image}
        imageAlt="Rule 10b5-1 trading plan diagram"
      />
      <ProcessSection steps={cs.process} />
      <ImageGallery images={cs.gallery} />
      <OutcomeSection outcome={cs.outcome} />
    </PasswordGate>
  )
}
