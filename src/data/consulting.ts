// ─── CONSULTING PAGE CONTENT ────────────────────────────────────────────────
// Edit this file to update copy, pricing, offerings, and process steps.
// The consulting page at /consulting reads entirely from here.

export const hero = {
  eyebrow: 'Strategic Design & Technology Consulting',
  headline: {
    line1: 'The thinking',
    line2: 'AI cannot',
    line2italic: true,
    line3: 'do for you.',
  },
  subhead:
    '12 years across brand, design, UX, and engineering — combined with AI that compresses timelines and multiplies output. You get strategic depth and speed in one engagement.',
  ctaPrimary: "Let's see if we're a fit",
  ctaSecondary: 'View offerings',
  nameplate: {
    name: 'font-mono',
    title: 'Founder & Principal Consultant',
  },
}

export const approach = {
  body: "Most businesses don't fail because they lack execution. They fail because no one connected the business problem to the right solution before spending the budget. That's the gap I fill — and AI lets me fill it faster than any traditional engagement.",
  iLead: [
    'Knowing which problem to solve first',
    'Cross-industry pattern recognition',
    'Brand and product taste',
    'Honest, accountable pushback',
    'Translating between business and technical teams',
  ],
  aiAccelerates: [
    'Research and competitive analysis',
    'Rapid design iteration',
    'Boilerplate and documentation',
    'Options generation at speed',
    'Timelines that used to take months',
  ],
}

export type OfferingMeta = {
  label: string
  value: string
  isPrice?: boolean
}

export type Offering = {
  number: string
  name: string
  type: string
  description: string
  meta: OfferingMeta[]
}

export const offerings: Offering[] = [
  {
    number: '01',
    name: 'The Blueprint',
    type: 'Audit & Strategy',
    description:
      "A focused diagnostic for companies that are building, rebuilding, or stuck. I come in, assess your brand, product, UX, or tech — and give you a clear, prioritized plan before you spend another dollar in the wrong direction.",
    meta: [
      { label: 'Timeline', value: '1–2 weeks' },
      { label: 'Deliverable', value: 'Audit + roadmap + debrief' },
      { label: 'Rate', value: 'Hourly', isPrice: true },
    ],
  },
  {
    number: '02',
    name: 'The Build',
    type: 'Project Engagement',
    description:
      "For companies that have a vision and need someone to execute it with taste, technical depth, and strategic thinking baked in — not just someone who takes orders. I own the project from strategy through delivery.",
    meta: [
      { label: 'Timeline', value: '4–10 weeks' },
      { label: 'Deliverable', value: 'Shipped & documented' },
      { label: 'Investment', value: 'Based on scope', isPrice: false },
    ],
  },
  {
    number: '03',
    name: 'The Partner',
    type: 'Fractional Retainer',
    description:
      "For founders and teams who need a senior creative-technical brain in their corner on an ongoing basis. Not an agency. Not a junior freelancer. Someone who thinks about your business like they own a piece of it.",
    meta: [
      { label: 'Commitment', value: '3-month minimum' },
      { label: 'Includes', value: 'Hours + async + strategy' },
      { label: 'Starting at', value: '$1,000 / mo', isPrice: true },
    ],
  },
]

export const industries = [
  'Healthcare',
  'Finance',
  'Crypto & Web3',
  'E-Commerce',
  'Entertainment',
  'B2B SaaS',
]

export type ProcessStep = {
  number: string
  tag: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    tag: 'Week 0',
    title: 'Intake',
    description: "Complete the questionnaire. I'll review and reach out within 48 hours if it's a fit.",
  },
  {
    number: '02',
    tag: 'Week 1',
    title: 'Discovery',
    description:
      'A focused conversation to understand the real problem, the constraints, and what success looks like.',
  },
  {
    number: '03',
    tag: 'Week 1–2',
    title: 'Scope',
    description:
      'Clear deliverables, timeline, and investment — agreed before a single pixel or line of code.',
  },
  {
    number: '04',
    tag: 'Ongoing',
    title: 'Execution',
    description:
      "Heads-down work with regular check-ins. You're never waiting and wondering where things stand.",
  },
  {
    number: '05',
    tag: 'Close',
    title: 'Delivery',
    description:
      'Shipped, documented, and handed off cleanly. With a clear path forward if you want to keep going.',
  },
]

export const cta = {
  eyebrow: 'Ready to work together?',
  headline: "Let's figure out if we're",
  headlineItalic: 'a fit.',
  sub: "Answer a few questions about what you're building. I'll review and be in touch within 48 hours.",
  button: 'Start the questionnaire',
}

export const footer = {
  copy: '© 2026 Kodara. All rights reserved.',
  backLabel: '← Back to oh-hey-lynae',
}
