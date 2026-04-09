export type CTAType =
  | { type: 'case-study'; slug: string }
  | { type: 'press-release'; url: string }
  | { type: 'see-it-live'; url: string }

export interface Project {
  slug: string
  title: string
  tags: string[]
  metrics?: { value: string; label: string }[]
  heroImage: string
  mockupImages: string[]
  client: string
  year: number
  summary: string
  ctas: CTAType[]
}

export interface ProcessStep {
  number: number
  heading: string
  body: string
  image?: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface CaseStudy extends Project {
  subtitle: string
  overview: string
  problem: string
  process: ProcessStep[]
  outcome: string
  gallery: GalleryImage[]
  metadata: {
    role: string
    duration: string
    team: string
    tools: string
  }
}

export interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}
