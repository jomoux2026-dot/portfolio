import { CaseStudy } from '@/lib/types'

export const INSIDER_TRADING_CASE_STUDY: CaseStudy = {
  slug: 'insider-trading',
  title: 'Protecting Company Execs from Insider Trading Allegations',
  subtitle:
    'Enabling qualifying insiders from large companies to enroll in a 10b5-1 trading plan quickly and easily.',
  tags: ['0 TO 1 DESIGN', 'IOS', 'ANDROID', 'RESPONSIVE WEB'],
  heroImage: '/images/projects/insider-trading/hero.jpg',
  mockupImages: [
    '/images/projects/insider-trading/mockup-1.jpg',
    '/images/projects/insider-trading/mockup-2.jpg',
    '/images/projects/insider-trading/mockup-3.jpg',
  ],
  client: 'Charles Schwab',
  year: 2024,
  summary:
    'Leading compliance leaders through their biggest security concerns with a tool requiring high-level plan quality.',
  ctas: [{ type: 'case-study', slug: 'insider-trading' }],
  metadata: {
    role: 'Lead UX Designer',
    duration: '6 months',
    team: 'Product Design, Engineering, Compliance, Legal',
    tools: 'Figma, FigJam, Maze',
  },
  overview:
    'SEC Rule 10b5-1 allows corporate insiders to pre-plan stock trades to avoid accusations of insider trading. Charles Schwab needed a tool that would guide compliance officers and plan holders through a rigorous, legally defensible trading plan creation process — while making an inherently complex workflow feel approachable and trustworthy.',
  problem:
    'The existing process was entirely manual — email-heavy, inconsistent, and prone to errors that could expose the company to regulatory risk. Compliance leaders had no confidence that plans submitted by employees met the required quality standards. The challenge was to design a digital tool that enforced plan quality without adding friction or anxiety for the user.',
  process: [
    {
      number: 1,
      heading: 'Discovery & Stakeholder Research',
      body: 'Conducted in-depth interviews with compliance officers, legal counsel, and plan holders to understand pain points, regulatory requirements, and mental models. Mapped the current email-based process end-to-end to identify failure points.',
      image: '/images/projects/insider-trading/process-1.jpg',
    },
    {
      number: 2,
      heading: 'Defining the Problem Space',
      body: 'Synthesized research into a clear problem statement and success metrics. Identified that compliance leaders needed real-time quality signals during plan creation — not just after submission. This became the core design principle.',
      image: '/images/projects/insider-trading/process-2.jpg',
    },
    {
      number: 3,
      heading: 'Wireframing & Concept Exploration',
      body: 'Explored multiple approaches to surfacing plan quality — inline validation, a quality score, a step-by-step guided flow. Tested paper prototypes with compliance officers to validate which approach built the most trust.',
      image: '/images/projects/insider-trading/process-3.jpg',
    },
    {
      number: 4,
      heading: 'AI Integration',
      body: 'Collaborated with the engineering team to integrate an AI layer that analyzed plan inputs for completeness and regulatory compliance in real time. Designed the UI to surface AI feedback as helpful guidance, not intimidating warnings.',
      image: '/images/projects/insider-trading/process-4.jpg',
    },
    {
      number: 5,
      heading: 'Usability Testing & Iteration',
      body: 'Ran moderated usability sessions with compliance officers and plan holders. Iterated on terminology, information hierarchy, and feedback timing based on findings. Three rounds of testing before final handoff.',
      image: '/images/projects/insider-trading/process-5.jpg',
    },
  ],
  outcome:
    'The tool reduced plan submission errors by standardizing the creation process and providing real-time quality feedback. Compliance leaders reported significantly higher confidence in submitted plans. The email-based process was fully replaced, eliminating a critical point of regulatory exposure for the company.',
  gallery: [
    {
      src: '/images/projects/insider-trading/screen-1.jpg',
      alt: 'Plan creation — step 1: basic plan details',
      caption: 'Step 1: Enter basic plan details and trading window',
    },
    {
      src: '/images/projects/insider-trading/screen-2.jpg',
      alt: 'Plan creation — AI quality feedback panel',
      caption: 'Real-time AI quality feedback surfaces issues before submission',
    },
    {
      src: '/images/projects/insider-trading/screen-3.jpg',
      alt: 'Compliance officer review dashboard',
      caption: 'Compliance dashboard gives officers a clear view of all pending plans',
    },
  ],
}
