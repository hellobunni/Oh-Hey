import { Square } from 'lucide-react'

type CurrentlyItem = { label: string; value: string }

interface CurrentlyCardProps {
  items?: CurrentlyItem[]
  updated?: string
  className?: string
}

const DEFAULT_ITEMS: CurrentlyItem[] = [
  { label: 'BUILDING', value: 'This site, on TanStack Start' },
  { label: 'READING', value: 'A Pattern Language — Alexander' },
  { label: 'TRAINING', value: 'Week 4 — 12-week strength block' },
  { label: 'PLAYING', value: 'Building the Lego Bugatti, slowly' },
]

function CurrentlyCard({ items = DEFAULT_ITEMS, updated = 'Apr 2026', className }: CurrentlyCardProps) {
  return (
    <div className={className}>
      <div className="inline-flex items-center gap-2 font-mono text-sm font-medium uppercase tracking-wide text-pink">
        <Square size={12} strokeWidth={2.5} aria-hidden />
        Currently
      </div>
      <h3 className="mt-3.5 text-xl font-bold leading-tight tracking-[-0.02em] text-ink">
        What I'm into<br />right now.
      </h3>
      <p className="mt-3 max-w-[380px] text-sm text-ink-soft">
        A living snapshot — updated whenever the season changes. The honest version of an "about" page.
      </p>

      <dl className="mt-6 border-t border-line">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-baseline gap-4 border-b border-line py-3"
          >
            <dt className="w-20 shrink-0 font-mono text-xxs uppercase tracking-wider text-ink-mute">
              {it.label}
            </dt>
            <dd className="text-sm text-ink">{it.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 font-mono text-xxs uppercase tracking-wider text-ink-mute">
        Updated {updated} ·{' '}
        <a href="/now" className="text-pink">full /now page →</a>
      </div>
    </div>
  )
}

export { CurrentlyCard }
