export type Step = {
  key:      string
  label:    string
  question: string
  hint?:    string
  type:     'choice' | 'text' | 'textarea'
  options?: { key: string; name: string; sub: string }[]
}

export const STEPS: Step[] = [
  {
    key: 'scope', label: 'Scope of work', type: 'choice',
    question: 'What type of work are you looking for?',
    hint: 'Select one — you can add context next',
    options: [
      { key: 'A', name: 'Strategic Consulting',        sub: 'Direction, decision frameworks, and roadmap clarity.' },
      { key: 'B', name: 'UX/Product Audit',            sub: 'Gaps, friction points, and a prioritized action plan.' },
      { key: 'C', name: 'Brand & Visual Design',       sub: 'Identity systems, voice, and visual language.' },
      { key: 'D', name: 'Full-Stack Build',            sub: 'Frontend, backend, DB, deploy — end to end.' },
      { key: 'E', name: 'Fractional Tech Leadership',  sub: 'Part-time CTO or tech lead embedded with your team.' },
      { key: 'F', name: 'Something else',              sub: 'Tell me what you have in mind — open to it.' },
    ],
  },
  {
    key: 'timeline', label: 'Timeline', type: 'choice',
    question: 'When do you need this?',
    options: [
      { key: 'A', name: 'ASAP',        sub: 'Yesterday, ideally.' },
      { key: 'B', name: '1–3 months',  sub: 'Planned and funded.' },
      { key: 'C', name: '3–6 months',  sub: 'Scoping ahead.' },
      { key: 'D', name: 'Exploring',   sub: 'No firm date yet.' },
    ],
  },
  {
    key: 'budget', label: 'Budget range', type: 'choice',
    question: "What's the budget range?",
    hint: 'Helps me recommend the right scope — no wrong answer',
    options: [
      { key: 'A', name: 'Under $5K',          sub: 'An audit, strategy session, or scoped sprint.' },
      { key: 'B', name: '$5K–$15K',           sub: 'A defined build or brand project.' },
      { key: 'C', name: '$15K–$30K',          sub: 'A full build or design system.' },
      { key: 'D', name: 'Monthly / retainer', sub: 'Ongoing partnership — not a one-time project.' },
    ],
  },
  {
    key: 'company', label: 'About you', type: 'text',
    question: 'Tell me about your company',
    hint: 'Name, stage, what you do',
  },
  {
    key: 'details', label: 'The project', type: 'textarea',
    question: "What's broken, missing, or holding you back?",
    hint: 'What you have, what you need, and what a win looks like',
  },
  {
    key: 'contact', label: 'Your details', type: 'text',
    question: 'Where can I reach you?',
    hint: 'Name + email',
  },
]
