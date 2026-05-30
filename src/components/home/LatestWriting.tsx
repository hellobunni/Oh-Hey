import { DOMAIN_META, type Domain } from '@/data/domains'
import { cn } from '@/lib/utils'
import { SectionHeader } from '../layout/SectionHeader'

export type Post = {
  n: string
  title: string
  excerpt: string
  domain: Domain
  date: string
  href: string
}

interface LatestWritingProps {
  posts: Post[]
  num?: string
  className?: string
}

function LatestWriting({ posts, num = '01', className }: LatestWritingProps) {
  return (
    <section className={className}>
      <SectionHeader num={num} title="LATEST WRITING" action={{ label: 'View archive →', href: '/archive' }} />

      <div className="border-t border-line px-[clamp(20px,5vw,80px)] pb-12">
        {posts.map((p) => {
          const meta = DOMAIN_META[p.domain]
          return (
            <a
              key={p.n}
              href={p.href}
              className={cn(
                'group grid grid-cols-[60px_1fr_140px_100px] items-center gap-5',
                'border-b border-line py-5 transition-all',
                'hover:-mx-3 hover:bg-paper-2 hover:px-3',
              )}
            >
              <span className="font-mono text-xs text-ink-mute">{p.n}</span>

              <span className="text-[18px] font-medium tracking-[-0.01em] text-ink">
                {p.title}
                <span className="mt-1 block text-sm font-normal text-ink-soft">
                  {p.excerpt}
                </span>
              </span>

              <span
                className="inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-xs"
                style={{
                  color: meta.var,
                  borderColor: `color-mix(in oklab, ${meta.var} 35%, transparent)`,
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: meta.var }} />
                {meta.label}
              </span>

              <span className="text-right font-mono text-xs text-ink-soft">{p.date}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export { LatestWriting }