import { Project } from '@/lib/types'

export const PROJECTS: Project[] = [
  {
    slug: 'insider-trading',
    title: 'Protecting Company Execs from Insider Trading Allegations',
    tags: ['0 TO 1 DESIGN', 'IOS', 'ANDROID', 'RESPONSIVE WEB'],
    heroImage: '/images/projects/insider-trading/hero.png',
    mockupImages: [
      '/images/projects/insider-trading/mockup-1.jpg',
      '/images/projects/insider-trading/mockup-2.jpg',
      '/images/projects/insider-trading/mockup-3.jpg',
    ],
    client: 'Charles Schwab',
    year: 2024,
    summary:
      'Enabling qualifying insiders from large companies to enroll in a 10b5-1 trading plan quickly and easily.',
    ctas: [{ type: 'case-study', slug: 'insider-trading' }],
  },
  {
    slug: 'inheritors',
    title: 'Helping Inheritors Receive Assets In Their Hour of Need',
    tags: ['0 TO 1 DESIGN', 'RESPONSIVE WEB'],
    heroImage: '/images/projects/inheritors/hero.png',
    mockupImages: [],
    client: 'Charles Schwab',
    year: 2023,
    summary:
      'When a client dies and leaves their assets to beneficiaries, the process has historically been complex, manual, and messy. Not anymore.',
    ctas: [
      { type: 'press-release', url: 'https://pressroom.aboutschwab.com/press-releases/press-release/2023/Schwab-Introduces-Digital-Inheritance-Center/default.aspx' },
      { type: 'see-it-live', url: 'https://www.schwab.com/life-events/losing-a-loved-one' },
    ],
  },
  {
    slug: 'ira-distributions',
    title: 'Making Annual IRA Required Minimum Distributions Easy',
    tags: ['0 TO 1 DESIGN', 'RESPONSIVE WEB'],
    metrics: [
      { value: '+50%', label: 'reduced call volume' },
      { value: '+75%', label: 'adoption rate' },
    ],
    heroImage: '/images/projects/ira-distributions/hero.png',
    mockupImages: [],
    client: 'Charles Schwab',
    year: 2023,
    summary:
      'Helping seniors and Inherited IRA recipients take out their RMDs the easy way.',
    ctas: [{ type: 'see-it-live', url: 'https://www.schwab.com/go-digital/rmd' }],
  },
  {
    slug: 'customer-support',
    title: 'Modernizing Customer Support',
    tags: ['0 TO 1 DESIGN', 'RESPONSIVE WEB'],
    metrics: [{ value: '+32%', label: 'reduced call volume' }],
    heroImage: '/images/projects/customer-support/hero.png',
    mockupImages: [],
    client: 'PayPal',
    year: 2022,
    summary: 'Making customer support self-help and access via chat simple.',
    ctas: [{ type: 'see-it-live', url: 'https://www.paypal.com/us/cshelp/contact-us' }],
  },
]
