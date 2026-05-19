import Link from 'next/link'

type Domain = {
  label: string
  href: string
  accent: string
  description: string
}

const domains: Domain[] = [
  {
    label: 'Tech',
    href: '/tech',
    accent: '#3b82f6',
    description: 'Code, builds, tools, writing & reviews.',
  },
  {
    label: 'Fitness',
    href: '/fitness',
    accent: '#10b981',
    description: 'Training logs, articles & media.',
  },
  {
    label: 'Creative',
    href: '/creative',
    accent: '#f97316',
    description: 'Gallery, IG photos, art & design.',
  },
  {
    label: 'Nerd Stuff',
    href: '/nerd-stuff',
    accent: '#8b5cf6',
    description: 'Collecting, comics & Legos.',
  },
]

export default function DomainGrid() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-10">
          Explore
        </h2>
        <ul className="divide-y divide-zinc-100">
          {domains.map((domain) => (
            <li key={domain.href}>
              <Link
                href={domain.href}
                className="group flex items-center justify-between py-5"
              >
                <span
                  className="text-2xl font-bold tracking-tight transition-opacity group-hover:opacity-70"
                  style={{ color: domain.accent }}
                >
                  {domain.label}
                </span>
                <span className="text-sm text-zinc-400 group-hover:text-zinc-600 transition-colors">
                  {domain.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
