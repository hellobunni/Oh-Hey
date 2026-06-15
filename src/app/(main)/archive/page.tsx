import Link from 'next/link'
import { cn } from '@/lib/utils'
import { posts } from '@/data/posts'
import { DOMAIN_META, type Domain } from '@/data/domains'
import { SectionHeader } from '@/components/layout/SectionHeader'
// Maps posts.ts Domain → domains.ts Domain slug
const DOMAIN_SLUG: Record<string, Domain> = {
  'Tech':       'tech',
  'Fitness':    'fitness',
  'Creative':   'creative',
  'Nerd Stuff': 'nerd',
}

const VALID_FILTERS = ['tech', 'fitness', 'creative', 'nerd'] as const
type DomainFilter = typeof VALID_FILTERS[number]

const DOMAIN_LABELS: Record<DomainFilter, string> = {
  tech:     'Tech',
  fitness:  'Fitness',
  creative: 'Creative',
  nerd:     'Nerd Stuff',
}

type MappedPost = {
  n:       string
  title:   string
  excerpt: string
  domain:  Domain
  date:    string
  href:    string
}

function mapPosts(raw: typeof posts): MappedPost[] {
  return raw.map((p, i) => {
    const domain = DOMAIN_SLUG[p.domain]
    return {
      n:       String(i + 1).padStart(2, '0'),
      title:   p.title,
      excerpt: p.excerpt,
      domain,
      date:    p.date,
      href:    `/${domain}/${p.slug}`,
    }
  })
}

function groupByYear(mapped: MappedPost[]): [string, MappedPost[]][] {
  const map = new Map<string, MappedPost[]>()
  for (const post of mapped) {
    const year = post.date.split(', ').at(-1) ?? '2026'
    if (!map.has(year)) map.set(year, [])
    map.get(year)!.push(post)
  }
  return [...map.entries()].sort(([a], [b]) => Number(b) - Number(a))
}

type SearchParams = Promise<{ domain?: string }>

export default async function ArchivePage({ searchParams }: { searchParams: SearchParams }) {
  const { domain: rawDomain } = await searchParams
  const activeFilter = VALID_FILTERS.includes(rawDomain as DomainFilter)
    ? (rawDomain as DomainFilter)
    : undefined

  const filtered = activeFilter
    ? posts.filter(p => DOMAIN_SLUG[p.domain] === activeFilter)
    : posts

  const mapped  = mapPosts(filtered)
  const grouped = groupByYear(mapped)

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-paper border-b border-line grid-bg-transparent">
        <div className="site-inner px-[clamp(20px,5vw,80px)] py-16">
          <div className="font-mono text-xs text-ink-mute mb-10">~/oh-hey-lynae · archive</div>

          <h1
            className="font-sans font-black text-ink tracking-tight leading-[0.94] mb-5"
            style={{ fontSize: 'clamp(52px, 6.5vw, 80px)' }}
          >
            All Writing.
          </h1>

          <p className="font-mono text-sm text-ink-mute">
            {posts.length} posts · 4 domains
          </p>
        </div>
      </section>

      {/* ── Domain filter ── */}
      <div className="border-b border-line px-[clamp(20px,5vw,80px)] py-5 flex items-center gap-2.5 flex-wrap">
        <Link
          href="/archive"
          className={cn(
            'border px-3 py-1.5 font-mono text-xs transition-colors',
            !activeFilter
              ? 'border-ink text-ink'
              : 'border-line text-ink-soft hover:border-ink hover:text-ink',
          )}
        >
          All ({posts.length})
        </Link>

        {VALID_FILTERS.map((d) => {
          const count  = posts.filter(p => DOMAIN_SLUG[p.domain] === d).length
          const meta   = DOMAIN_META[d]
          const active = activeFilter === d
          return (
            <Link
              key={d}
              href={`/archive?domain=${d}`}
              className={cn(
                'inline-flex items-center gap-1.5 border px-3 py-1.5 font-mono text-xs transition-colors',
                active
                  ? 'border-ink text-ink'
                  : 'border-line text-ink-soft hover:border-ink hover:text-ink',
              )}
            >
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ background: meta.var }}
              />
              {DOMAIN_LABELS[d]} ({count})
            </Link>
          )
        })}
      </div>

      {/* ── Post list ── */}
      {grouped.length === 0 ? (
        <div className="px-[clamp(20px,5vw,80px)] py-24">
          <p className="font-mono text-sm text-ink-mute mb-2">// nothing here yet</p>
          <Link href="/archive" className="font-sans text-sm text-accent border-b border-accent/40">
            View all posts →
          </Link>
        </div>
      ) : (
        grouped.map(([year, yearPosts], groupIdx) => (
          <section key={year}>
            <SectionHeader
              num={String(groupIdx + 1).padStart(2, '0')}
              title={`${year} · ${yearPosts.length} ${yearPosts.length === 1 ? 'POST' : 'POSTS'}`}
            />

            <div className="border-t border-line px-[clamp(20px,5vw,80px)]">
              {yearPosts.map((post) => {
                const meta = DOMAIN_META[post.domain]
                return (
                  <Link
                    key={post.href}
                    href={post.href}
                    className={cn(
                      'group grid grid-cols-[60px_1fr_160px_120px] items-center gap-5',
                      'border-b border-line py-5 transition-all',
                      'hover:-mx-3 hover:bg-paper-2 hover:px-3',
                    )}
                  >
                    <span className="font-mono text-xs text-ink-mute">{post.n}</span>

                    <span className="text-base font-medium tracking-[-0.01em] text-ink">
                      {post.title}
                      <span className="mt-1 block text-sm font-normal text-ink-soft">
                        {post.excerpt}
                      </span>
                    </span>

                    <span
                      className="inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-xs w-fit"
                      style={{
                        color:       meta.var,
                        borderColor: `color-mix(in oklab, ${meta.var} 35%, transparent)`,
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: meta.var }}
                      />
                      {meta.label}
                    </span>

                    <span className="text-right font-mono text-xs text-ink-soft">{post.date}</span>
                  </Link>
                )
              })}
            </div>
          </section>
        ))
      )}
    </main>
  )
}
