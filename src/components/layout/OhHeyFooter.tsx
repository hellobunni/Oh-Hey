import { cn } from '@/lib/utils'

type FooterColumn = { title: string; links: { label: string; href: string }[] }

interface OhHeyFooterProps {
  blurb?: string
  columns?: FooterColumn[]
  version?: string
  className?: string
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  { title: 'DOMAINS', links: [
    { label: 'Tech', href: '/tech' }, { label: 'Fitness', href: '/fitness' },
    { label: 'Creative', href: '/creative' }, { label: 'Nerd Stuff', href: '/nerd' },
  ]},
  { title: 'SITE', links: [
    { label: 'Archive', href: '/archive' }, { label: 'About', href: '/about' },
    { label: 'Now', href: '/now' }, { label: 'RSS', href: '/rss.xml' },
  ]},
  { title: 'ELSEWHERE', links: [
    { label: 'GitHub', href: 'https://github.com/hellobunni' }, { label: 'Instagram', href: 'https://www.instagram.com/ohheylynae/' }
  ]},
]

export default function OhHeyFooter({
  blurb = 'A logbook by Bryanna Lynae. Built with care & caffeine in 2026.',
  columns = DEFAULT_COLUMNS,
  version = 'v3.0.0',
  className,
}: OhHeyFooterProps) {
  return (
    <footer
      className={cn(
        'grid grid-cols-[2fr_1fr_1fr_1fr] gap-8 border-t border-line',
        'px-[clamp(20px,5vw,80px)] py-6 font-mono text-xs',
        className,
      )}
    >
      <div>
        <div className="mb-3.5 font-semibold text-ink">oh-hey-lynae</div>
        <p className="max-w-[280px] font-sans text-xs leading-[1.55] text-ink-soft">
          {blurb}
        </p>
      </div>

      {columns.map((col) => (
        <div key={col.title}>
          <div className="mb-3.5 text-ink-mute">{col.title}</div>
          {col.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block py-1 text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      ))}

      <div className="col-span-full mt-7 flex justify-between border-t border-line pt-7 text-ink-mute">
        <div>© 2026 Bryanna Lynae · ALL RIGHTS RESERVED</div>
        <div>
          {version} ·{' '}
          <a href="/consulting" className="inline text-accent">↗ kodara/</a>
        </div>
      </div>
    </footer>
  )
}

export { OhHeyFooter }
export type { OhHeyFooterProps, FooterColumn }