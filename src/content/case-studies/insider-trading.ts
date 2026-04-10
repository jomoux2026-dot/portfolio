import { CaseStudy } from '@/lib/types'

export const INSIDER_TRADING_CASE_STUDY: CaseStudy = {
  slug: 'insider-trading',
  title: 'Protecting Company Execs from Insider Trading Allegations',
  subtitle:
    'Enabling qualifying insiders from large companies to enroll in a 10b5-1 trading plan quickly and easily.',
  tags: ['0 TO 1 DESIGN', 'IOS', 'ANDROID', 'RESPONSIVE WEB'],
  heroImage: '/images/projects/insider-trading/hero.png',
  mockupImages: [
    '/images/projects/insider-trading/1.png',
    '/images/projects/insider-trading/2.png',
    '/images/projects/insider-trading/3.png',
  ],
  client: 'Charles Schwab',
  year: 2024,
  summary:
    'Enabling qualifying insiders from large companies to enroll in a 10b5-1 trading plan quickly and easily.',
  ctas: [{ type: 'case-study', slug: 'insider-trading' }],
  metadata: {
    role: 'Sr. UX Designer',
    duration: '6 months',
    team: 'Business, Compliance, Legal, Design Systems, Content Strategy, UX Research, Accessibility',
    tools: 'Figma, UserZoom',
  },
  overview:
    'Launched digital 10b5-1 enrollment experience to iOS and Android. Applied end-to-end UX design process to eventually deliver high-fidelity designs for the web, iOS, and android experiences.',
  problem:
    'The existing process was entirely manual — email-heavy, inconsistent, and prone to errors that could expose the company to regulatory risk.',
  process: [
    {
      number: 1,
      heading: 'Discovery',
      body: 'Conducted user interviews with compliance, service advisors, and executives to understand pain points with the current manual process. The major insights were that users were either experts or novices in trading.',
      image: '/images/projects/insider-trading/process-1.jpg',
    },
    {
      number: 2,
      heading: 'Defining the Problem Space',
      body: 'Synthesized research into a clear list of requirements. Collected additional requirements from compliance and financial advisors to include necessary disclosures and must-have tasks for users to complete.',
      image: '/images/projects/insider-trading/process-2.jpg',
    },
    {
      number: 3,
      heading: 'Wireframing & Concept Exploration',
      body: `Using our design system, we built high-fidelity prototypes to test two plan creation approaches:\n• Linear — actions grouped into sequential sections\n• Hub-and-spoke — users select shares like adding items to a cart`,
      image: '/images/projects/insider-trading/process-3.png',
    },
    {
      number: 4,
      heading: 'Usability Testing & Iteration',
      body: 'We conducted an A/B user test and found overwhelming support for the hub-and-spoke model, as well as other pieces of valuable feedback regarding contextual help and clarifying language and consistency.',
      image: '/images/projects/insider-trading/process-4.png',
      imageCaption: 'In the linear model, unvested share selection and owned share selection are separate steps. In the hub-and-spoke model, they are combined.',
      extraImages: [
        {
          label: 'Linear Model',
          src: '/images/projects/insider-trading/linear-flow.png',
          alt: 'Linear flow model — plan creation wireframe',
        },
        {
          label: 'Hub-and-Spoke Model',
          src: '/images/projects/insider-trading/hub-and-spoke.png',
          alt: 'Hub-and-spoke model — plan creation wireframe',
        },
      ],
    },
    {
      number: 5,
      heading: 'Design Delivery',
      body: 'As designs evolved, I kept engineering continuously aligned — delivering annotated high-fidelity specs across iOS, Android, and responsive web, and partnering closely with developers through implementation to ensure faithful execution in non-prod.',
      image: '/images/projects/insider-trading/process-5.png',
    },
  ],
  outcome:
    'Subsequent user testing showed strong results: 100% task completion across 8 participants and a high client ease score. Participants described the experience as smooth, quick, and easy, and appreciated contextual help for key terms. The digital experience replaced a manual process that previously required a branch visit or multiple phone calls.',
  gallery: [
    {
      src: '/images/projects/insider-trading/final-01.png',
      alt: 'Final screen 1',
      caption: 'Current trading plan status and plan details',
    },
    {
      src: '/images/projects/insider-trading/final-02.png',
      alt: 'Final screen 2',
      caption: 'Share selection and trade schedule creation',
    },
    {
      src: '/images/projects/insider-trading/final-03.png',
      alt: 'Final screen 3',
      caption: 'Unvested share selection and unvested share details',
    },
    {
      src: '/images/projects/insider-trading/final-04.png',
      alt: 'Final screen 4',
      caption: 'Owned share selection and lot details',
    },
    {
      src: '/images/projects/insider-trading/final-05.png',
      alt: 'Final screen 5',
      caption: 'Deciding what to do with future awards',
    },
    {
      src: '/images/projects/insider-trading/final-06.png',
      alt: 'Final screen 6',
      caption: 'Review the trade plan',
    },
    {
      src: '/images/projects/insider-trading/final-07.png',
      alt: 'Final screen 7',
      caption: 'Terms & Conditions and confirmation',
    },
  ],
}
