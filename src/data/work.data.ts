export type ProjectTag = 'Design System' | 'Frontend' | 'Brand + Web' | 'UX Strategy'

export type Project = {
  idx:    string
  tag:    ProjectTag
  client: string
  title:  string
  desc:   string
  year:   string
  role:   string
  href?:  string
}

export const PROJECTS: Project[] = [
  { idx: '01', tag: 'Design System', client: 'StockX',       title: 'A resale-scale design system',    desc: 'Tokenized the marketplace UI and shipped a governed component library that three product teams now build on.',              year: '2025', role: 'DS + Frontend'  },
  { idx: '02', tag: 'Frontend',      client: 'Benzinga',     title: 'Real-time markets dashboard',    desc: 'Rebuilt the data terminal frontend — streaming quotes, sub-100ms interactions, fully accessible.',                        year: '2024', role: 'Frontend Lead'  },
  { idx: '03', tag: 'Brand + Web',   client: 'U-M Athletics', title: 'Recruiting microsite system',   desc: 'A templated, brand-locked site system the athletics team spins up per sport without a developer.',                       year: '2024', role: 'Brand + Build'  },
  { idx: '04', tag: 'UX Strategy',   client: 'Qualigence',   title: 'Hiring-platform UX audit',       desc: 'Heuristic audit + flow redesign that cut the recruiter onboarding path from 11 steps to 4.',                            year: '2023', role: 'UX Consulting'  },
  { idx: '05', tag: 'Frontend',      client: "Zingerman's",  title: 'Mail-order storefront',          desc: "A faster, warmer e-commerce front end for the famous food purveyor — built for the holiday rush.",                      year: '2023', role: 'Full-stack'     },
  { idx: '06', tag: 'Brand + Web',   client: 'Red Bull',     title: 'Event activation landing',       desc: 'A high-energy campaign site for a regional activation — motion-forward, shipped in 9 days.',                            year: '2022', role: 'Design + Build' },
]

export const WORK_FILTERS = ['All', 'Design System', 'Frontend', 'Brand + Web', 'UX Strategy'] as const
