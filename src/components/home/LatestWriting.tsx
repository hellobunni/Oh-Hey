import { DOMAIN_META, type Domain } from '@content/domains'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/layout/SectionHeader'

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
  title?: string
  action?: { label: string; href: string }
  className?: string
}

function LatestWriting({ posts, num = '01', title = 'LATEST WRITING', action, className }: LatestWritingProps) {
  return (
    <section className={className}>
      <SectionHeader num={num} title={title} action={action} />

      <div className="px-[clamp(20px,5vw,80px)] md:pb-12 site-inner">
        <div className="bg-paper-warm border-2 border-paper-ink shadow-[6px_6px_0_rgba(0,0,0,0.5)]">
          {posts.map((p, i) => {
            const meta = DOMAIN_META[p.domain]
            return (
              <a
                key={p.n}
                href={p.href}
                className={cn(
                  'group flex items-center gap-5 px-5 py-[18px] no-underline',
                  'transition-colors hover:bg-[color-mix(in_oklab,var(--color-paper-warm)_88%,var(--color-paper-ink))]',
                  i < posts.length - 1 && 'border-b-2 border-dashed border-paper-ink/20',
                )}
              >
                <span className="font-mono text-xs text-ink-soft/50 w-7 shrink-0">{p.n}</span>

                <span className="flex-1 min-w-0">
                  <span className="block font-px text-sm text-paper-ink leading-snug">{p.title}</span>
                  <span className="mt-1 block font-sans text-xs text-paper-ink/60 truncate">{p.excerpt}</span>
                </span>

                <span className={cn('font-px text-[9px] px-[7px] py-1 text-ink shrink-0', meta.chip)}>
                  {meta.label.toUpperCase()}
                </span>

                <span className="font-mono text-xs text-paper-ink/50 whitespace-nowrap shrink-0">{p.date}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { LatestWriting }
