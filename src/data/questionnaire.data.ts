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
      { key: 'A', name: 'Design system',           sub: 'Tokens, components, documentation, governance.' },
      { key: 'B', name: 'Frontend development',    sub: 'Production builds in React, Next, TanStack.' },
      { key: 'C', name: 'Full-stack development',  sub: 'Frontend, backend, DB, deploy — end to end.' },
      { key: 'D', name: 'UI/UX consulting',        sub: 'Audit, strategy, flows, decision frameworks.' },
      { key: 'E', name: 'Brand & visual design',   sub: 'Identity systems, voice, visual language.' },
      { key: 'F', name: 'Something else',          sub: 'Tell me what you have in mind — open to it.' },
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
    options: [
      { key: 'A', name: 'Under $10K', sub: 'A focused audit or sprint.' },
      { key: 'B', name: '$10K–$30K',  sub: 'A defined project.' },
      { key: 'C', name: '$30K–$75K',  sub: 'A larger build.' },
      { key: 'D', name: '$75K+',      sub: 'Ongoing or multi-phase.' },
    ],
  },
  {
    key: 'company', label: 'About you', type: 'text',
    question: 'Tell me about your company',
    hint: 'Name, stage, what you do',
  },
  {
    key: 'details', label: 'The project', type: 'textarea',
    question: 'What are you trying to build or fix?',
  },
  {
    key: 'contact', label: 'Your details', type: 'text',
    question: 'Where can I reach you?',
    hint: 'Name + email',
  },
]
