export type Service = {
  num: string
  name: string
  tag: string
  blurb: string
  keyword: string
  includes: string[]
  specs: { k: string; v: string; ac?: boolean }[]
}

export const SERVICES: Service[] = [
  {
    num: '01', name: 'Design Systems', tag: 'Foundations + Governance', keyword: 'design-system',
    blurb: 'Build the design system that scales with you. Tokens, components, documentation, and the governance model that keeps it from drifting six months later.',
    includes: ['Token architecture', 'Component library', 'Figma + code parity', 'Documentation site', 'Governance model', 'Team onboarding', 'Accessibility audit', 'Migration plan'],
    specs: [{ k: 'TIMELINE', v: '4–8 weeks' }, { k: 'TEAM', v: 'Solo or paired with your eng' }, { k: 'DELIVERY', v: 'Tokens, components, docs, training' }, { k: 'STARTING AT', v: '$24K', ac: true }],
  },
  {
    num: '02', name: 'Frontend Development', tag: 'Production Builds', keyword: 'frontend-development',
    blurb: 'Production-grade frontend work in React, Next.js, TanStack Start. Pixel-faithful, performant, accessible. The kind of code that survives your next team turnover.',
    includes: ['React / Next.js / TanStack', 'TypeScript end-to-end', 'Performance budgets', 'A11y by default', 'CI/CD setup', 'Component testing', 'Storybook stories', 'Handoff & training'],
    specs: [{ k: 'TIMELINE', v: '2–10 weeks' }, { k: 'STACK', v: 'React, TS, Tailwind, Vercel' }, { k: 'DELIVERY', v: 'Shipped & documented' }, { k: 'STARTING AT', v: '$18K', ac: true }],
  },
  {
    num: '03', name: 'UI / UX Consulting', tag: 'Audits + Strategy', keyword: 'ux-consulting',
    blurb: 'A focused diagnostic of your product. Heuristic review, flow analysis, prioritized roadmap. The work that happens before you commit budget to the wrong solution.',
    includes: ['Heuristic UX audit', 'User-flow mapping', 'Conversion analysis', 'IA recommendations', 'A11y review', 'Prioritized roadmap', 'Stakeholder workshop', 'Quick-win wireframes'],
    specs: [{ k: 'TIMELINE', v: '1–3 weeks' }, { k: 'FORMAT', v: 'Async + 2 live sessions' }, { k: 'DELIVERY', v: 'Audit deck + roadmap' }, { k: 'STARTING AT', v: '$8K', ac: true }],
  },
  {
    num: '04', name: 'Brand & Visual Design', tag: 'Identity Systems', keyword: 'brand-design',
    blurb: 'Identity systems for companies that want to look like they mean it. Logo, type, color, voice, and the visual language that holds it all together — without the agency markup.',
    includes: ['Brand strategy', 'Logo & wordmark', 'Type & color system', 'Brand voice guide', 'Asset library', 'Web typography', 'Social templates', 'Launch toolkit'],
    specs: [{ k: 'TIMELINE', v: '4–6 weeks' }, { k: 'OUTPUT', v: 'Brand book + asset library' }, { k: 'DELIVERY', v: 'Figma + Drive + PDF' }, { k: 'STARTING AT', v: '$14K', ac: true }],
  },
]

export const OUTCOMES = [
  { n: '120', unit: '+',  lbl: 'PROJECTS SHIPPED',  d: 'Across early-stage, growth, and enterprise teams.' },
  { n: '12',  unit: 'yr', lbl: 'SENIOR EXPERIENCE',  d: 'Brand, product, engineering — usually on the same project.' },
  { n: '48',  unit: 'hr', lbl: 'RESPONSE WINDOW',    d: "From questionnaire submit to \"yes / no / let's talk\"." },
  { n: '3',   unit: '×',  lbl: 'FASTER DELIVERY',    d: 'AI-augmented pipeline compresses what used to take months.' },
]

export const STACK = [
  { cat: 'FRAMEWORK', tool: 'Next.js',       role: 'PRODUCTION'     },
  { cat: 'FRAMEWORK', tool: 'TanStack Start', role: 'SSR / SPA'     },
  { cat: 'STYLE',     tool: 'Tailwind CSS',  role: 'UTILITY'        },
  { cat: 'STYLE',     tool: 'CSS Vars',      role: 'TOKENS'         },
  { cat: 'DESIGN',    tool: 'Figma',         role: 'SPEC + LIBRARY' },
  { cat: 'DESIGN',    tool: 'Storybook',     role: 'COMPONENT QA'   },
  { cat: 'LANGUAGE',  tool: 'TypeScript',    role: 'END-TO-END'     },
  { cat: 'TESTING',   tool: 'Vitest',        role: 'UNIT + UI'      },
  { cat: 'DEPLOY',    tool: 'Vercel',        role: 'EDGE'           },
  { cat: 'DEPLOY',    tool: 'Fly.io',        role: 'BACKEND'        },
  { cat: 'DB',        tool: 'Postgres',      role: 'NEON / SUPABASE'},
  { cat: 'AI',        tool: 'Claude + GPT',  role: 'PAIRING'        },
]

export const FAQS = [
  { q: 'How is this different from hiring an agency?',  a: 'No account managers, no junior staffing, no markup on rates. You work directly with me, decisions happen in the same day they come up, and the strategic thinking is baked in — not billed on top.' },
  { q: 'What does a typical engagement look like?',     a: 'A short paid discovery to align on the real problem, a written scope with milestones, then heads-down work with weekly check-ins. Everything async by default, sync only when it actually moves the work.' },
  { q: 'Can you work with our existing team?',          a: "Yes — most engagements involve partnering with an existing PM, designer, or engineering lead. I work in your tools (Linear, Slack, your repo) and ship into your workflow, not around it." },
  { q: 'Do you take fixed-bid or hourly?',              a: "Both. Most project work is fixed-bid against a clear scope; ongoing or open-ended work is hourly on a weekly cap. I'll recommend whichever makes more sense once we've scoped it together." },
  { q: 'What stages of company do you usually help?',   a: 'Pre-seed founders shipping their first product, Series A/B teams scaling design, and enterprise teams modernizing one product surface at a time. I avoid early-stage equity-only deals.' },
  { q: 'What about AI tooling?',                        a: "AI is in the pipeline, not the deliverable. It compresses research, iteration, and boilerplate so you get more thinking time for the same engagement length." },
  { q: 'Do you offer ongoing retainers?',               a: 'Yes — three-month minimums, monthly or quarterly billing. Best fit for founders who need a senior creative-technical brain in their corner without committing to a full-time hire.' },
  { q: 'What if we need to pause or stop early?',       a: "No long lock-ins. Project work has a clear off-ramp at each milestone. Retainers can be paused with two weeks notice. The goal is the outcome, not the invoice." },
]
