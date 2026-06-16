export type ProjectTag = 'Design System' | 'Frontend' | 'Brand + Web' | 'UX Strategy'

export type Project = {
  idx:       string
  slug:      string
  tag:       ProjectTag
  client:    string
  title:     string
  desc:      string
  year:      string
  role:      string
  href?:     string
  // Detail page fields
  headline:  string
  overview:  string
  whatIDid:  string
  outcome:   string
  tags:      string[]
}

export const PROJECTS: Project[] = [
  {
    idx:      '01',
    slug:     'stockx',
    tag:      'Frontend',
    client:   'StockX',
    title:    'Custom email infrastructure',
    desc:     'Built newsletter pages and email templates inside their WordPress environment — on-brand, responsive, and maintainable for the internal team after handoff.',
    year:     '2022',
    role:     'Freelance Contractor',
    headline: 'Custom email infrastructure for a marketplace that moves at market speed.',
    overview: 'StockX runs on urgency — drops, bids, and price alerts that hit inboxes at the exact right moment. When they needed a frontend contractor to build out their newsletter and email page infrastructure, the job wasn\'t just templating. It was making sure a high-volume, brand-sensitive communications channel looked right across every client and device.',
    whatIDid: 'Over six months as a short-term contractor, I built custom newsletter pages and email templates inside their WordPress environment. The work covered template architecture, responsive layout, brand-consistent styling, and making the system maintainable for the internal team after I handed it off.',
    outcome:  'Delivered a reusable, on-brand email page system inside the existing WordPress stack — no new tooling overhead, no custom training required for the StockX team. Clean handoff, system adopted on schedule.',
    tags:     ['WordPress', 'Email', 'Frontend', 'Contract'],
  },
  {
    idx:      '02',
    slug:     'fanatics',
    tag:      'Design System',
    client:   'Fanatics',
    title:    'Design systems and e-commerce frontend at scale',
    desc:     'Built and maintained component libraries, contributed to JavaScript and Elixir codebases, and created prototypes that bridged design and engineering across a fully distributed, multi-squad org.',
    year:     '2023',
    role:     'Full-Time Employee',
    headline: 'Design systems and e-commerce frontend at scale — fully remote, multi-team.',
    overview: 'Fanatics is one of the largest licensed sports merchandise platforms in the world. I joined as a full-time employee on a fully distributed team, embedded across multiple product squads working on the core e-commerce experience.',
    whatIDid: 'My work spanned three areas: design systems, frontend engineering, and prototyping. I built and maintained component libraries, contributed to the JavaScript and Elixir codebases powering the storefront, and created interactive prototypes that bridged design and engineering decision-making across teams. Working remote-first across multiple squads required the kind of systems thinking and documentation discipline that makes the difference between a component library and a component library people actually use.',
    outcome:  'Contributed to a design system used across multiple product teams. Shipped production features across the e-commerce stack in both JavaScript and Elixir, coordinating async across a fully distributed organization.',
    tags:     ['Design Systems', 'JavaScript', 'Elixir', 'E-commerce', 'Prototyping', 'Remote'],
  },
  {
    idx:      '03',
    slug:     'zingermans',
    tag:      'Brand + Web',
    client:   "Zingerman's",
    title:    'A warmer, more considered web presence',
    desc:     'Built and styled custom WordPress themes, handled ongoing maintenance, and extended into print — producing graphic design assets so the brand felt consistent from the homepage to the menu insert.',
    year:     '2020',
    role:     'Freelance Contractor',
    headline: "A warmer, more considered web presence for an Ann Arbor institution.",
    overview: "Zingerman's has been a beloved Michigan food brand for decades — known for quality, character, and a cult following that extends well beyond Ann Arbor. What they needed was a digital presence that matched that warmth and earned trust at first glance.",
    whatIDid: "Over eight months as a freelance contractor, I handled the full web relationship: built and styled custom WordPress themes, performed ongoing site maintenance, and extended the engagement into physical marketing — producing graphic design assets for print collateral alongside the digital work. It was the kind of integrated engagement where the brand had to feel consistent whether someone was reading a menu insert or landing on the homepage.",
    outcome:  'A cohesive, maintained web presence and a consistent visual language across digital and physical touchpoints — delivered and handed off cleanly at the end of the engagement.',
    tags:     ['WordPress', 'Graphic Design', 'Print', 'Brand', 'Contractor'],
  },
  {
    idx:      '04',
    slug:     'umich-athletics',
    tag:      'UX Strategy',
    client:   'U-M Athletics',
    title:    'Conversion-focused landing pages',
    desc:     'Improved marketing and landing pages for one of the most storied athletics programs in the country — tightening flows, improving visual hierarchy, and instrumenting Google Analytics to surface what was working.',
    year:     '2023',
    role:     'Contractor',
    headline: 'Conversion-focused landing pages for one of the most storied athletics programs in the country.',
    overview: 'Michigan Athletics operates at a scale most programs don\'t — recruiting cycles, ticket campaigns, and fan engagement that runs year-round. As a short-term contractor brought in for a specific season, my focus was performance: making the pages that mattered most work harder.',
    whatIDid: 'I improved marketing and landing pages with a direct focus on conversion — tightening flows, improving visual hierarchy, and reducing friction in the paths that moved people from interest to action. Alongside the build work, I worked within Google Analytics to measure what was working, identify drop-off points, and inform the iteration cycle.',
    outcome:  'Improved marketing page performance with measurable analytics instrumentation in place. Left the team with clearer visibility into what their pages were doing — and a stronger baseline to build from.',
    tags:     ['Frontend', 'Landing Pages', 'Google Analytics', 'Conversion', 'Contractor'],
  },
  {
    idx:      '05',
    slug:     'qualigence',
    tag:      'Brand + Web',
    client:   'Qualigence',
    title:    'Full marketing infrastructure for a Michigan talent firm',
    desc:     'Owned the complete marketing web presence — custom WordPress themes, marketing tooling, and end-to-end campaigns — embedded with the sales team at a recruiting firm with a Fortune 500 client list.',
    year:     '2022',
    role:     'Full-Time Employee',
    headline: 'Full marketing infrastructure for a Michigan talent firm that punches above its weight.',
    overview: 'Qualigence International is a recruiting and talent optimization firm with a 20-year track record and a client list that includes Fortune 500 companies — run lean, from Livonia, Michigan. They needed a full marketing engine, not just a website refresh.',
    whatIDid: 'As a full-time employee embedded with the marketing and sales team, I owned the complete marketing web presence: built custom WordPress themes, developed and maintained marketing tooling, and led campaigns end-to-end alongside a cross-functional team. The work touched everything from the site architecture and design to the tools that supported sales outreach and lead generation. I wasn\'t just executing — I was helping shape what the marketing org was doing and how.',
    outcome:  "A coherent, fully custom digital marketing infrastructure that supported the sales team's day-to-day, built from the ground up and maintained in-house. Campaigns shipped, tools adopted, team enabled.",
    tags:     ['WordPress', 'Marketing', 'Campaigns', 'Sales Enablement', 'Full-Time'],
  },
  {
    idx:      '06',
    slug:     'redbull',
    tag:      'Brand + Web',
    client:   'Red Bull',
    title:    'High-energy campaign work',
    desc:     'Contributed frontend and visual design on campaign-facing digital deliverables — working within Red Bull\'s established brand system at the pace that kind of engagement demands.',
    year:     '2023',
    role:     'Freelance Contractor',
    headline: "High-energy campaign work for a brand that already knows how to show up.",
    overview: "Red Bull doesn't need help with energy — they need execution that matches it. As a freelance contractor, I was brought in to support campaign and digital work for their marketing efforts, contributing frontend and design skill to a brand that sets the standard for activations.",
    whatIDid: "Contributed frontend and visual design work on campaign-facing digital deliverables, working within Red Bull's established brand system and at the pace that kind of engagement demands. Contractor work here is exactly what it sounds like: senior execution, fast turnaround, no ramp-up overhead.",
    outcome:  "Delivered on scope and on time within Red Bull's brand standards.",
    tags:     ['Frontend', 'Brand', 'Campaign', 'Contractor'],
  },
  {
    idx:      '07',
    slug:     'bitwise',
    tag:      'Frontend',
    client:   'Bitwise',
    title:    'Senior capacity when a small team needed room to breathe',
    desc:     'Six-month contract integrating with a small internal team to absorb workload and reduce pressure on core members — low-overhead, high-output, no handoff debt.',
    year:     '2024',
    role:     'Contractor',
    headline: 'Senior capacity when a small team needed room to breathe.',
    overview: "Small, high-functioning teams sometimes just need an extra set of senior hands — not a full engagement, not a retainer, just someone who can pick up context fast and take real work off the board. That's what Bitwise needed, and that's what I delivered.",
    whatIDid: 'Over a six-month contract, I integrated with a small internal team to absorb workload and reduce the pressure on core team members who were stretched thin. The work was varied by nature — that\'s the point of a capacity engagement — and the value was in being low-overhead, high-output, and easy to work with.',
    outcome:  'A six-month engagement completed cleanly, with the core team able to focus where they were needed most. No handoff debt, no lingering dependencies.',
    tags:     ['Frontend', 'Contractor', 'Capacity', 'Support'],
  },
]

export const WORK_FILTERS = ['All', 'Design System', 'Frontend', 'Brand + Web', 'UX Strategy'] as const
