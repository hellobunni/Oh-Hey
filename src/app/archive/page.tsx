import Link from 'next/link'
import { cn } from '@/lib/utils'
import { formatPostDate, getAllPosts, postYear, type Post as LibPost } from '@/lib/posts'
import { DOMAINS, DOMAIN_META, domainFromLabel, isDomain, type Domain } from '@content/domains'
import { SectionHeader } from '@/components/layout/SectionHeader'

type MappedPost = {
  n:       string
  title:   string
  excerpt: string
  domain:  Domain
  /** ISO — drives grouping and the <time datetime> attribute. */
  date:    string
  href:    string
}

function mapPosts(raw: LibPost[]): MappedPost[] {
  return raw.flatMap((p, i) => {
    const domain = domainFromLabel(p.domain)
    // A post with an unrecognised frontmatter domain has no route to link to.
    if (!domain) return []
    return [{
      n:       String(i + 1).padStart(2, '0'),
      title:   p.title,
      excerpt: p.excerpt,
      domain,
      date:    p.date,
      href:    `/${domain}/${p.slug}`,
    }]
  })
}

function groupByYear(mapped: MappedPost[]): [string, MappedPost[]][] {
  const map = new Map<string, MappedPost[]>()
  for (const post of mapped) {
    const year = postYear(post.date)
    if (!map.has(year)) map.set(year, [])
    map.get(year)!.push(post)
  }
  return [...map.entries()].sort(([a], [b]) => Number(b) - Number(a))
}

type SearchParams = Promise<{ domain?: string }>

export default async function ArchivePage({ searchParams }: { searchParams: SearchParams }) {
  const { domain: rawDomain } = await searchParams
  const activeFilter: Domain | undefined = isDomain(rawDomain) ? rawDomain : undefined

  const allPosts = getAllPosts()
  const filtered = activeFilter
    ? allPosts.filter(p => domainFromLabel(p.domain) === activeFilter)
    : allPosts

  const mapped  = mapPosts(filtered)
  const grouped = groupByYear(mapped)

  return (
    <main>
      {/* ── Hero ── */}
      <section className="home-inner">
        <div className="site-inner px-[clamp(20px,5vw,80px)] py-16">
          <div className="font-mono text-xs text-ink-mute mb-10">~/oh-hey-lynae · archive</div>

          <h1
            className="font-sans font-black text-ink tracking-tight leading-[0.94] mb-5"
            style={{ fontSize: 'clamp(52px, 6.5vw, 80px)' }}
          >
            All Writing.
          </h1>

          <p className="font-mono text-sm text-ink-mute">
            {allPosts.length} posts · {DOMAINS.length} domains
          </p>
        </div>
      </section>

      {/* ── Domain filter ── */}
      <div className="grid-bg-transparent pt-13">
        <div className="site-inner flex flex-wrap items-center gap-2.5 px-[clamp(20px,5vw,80px)] py-5">
          <Link
            href="/archive"
            className={cn(
              'border px-3 py-1.5 font-mono text-xs transition-colors',
              !activeFilter
                ? 'border-ink text-ink'
                : 'border-line text-ink-soft hover:border-ink hover:text-ink',
            )}
          >
            All ({allPosts.length})
          </Link>

          {DOMAINS.map((d) => {
            const count  = allPosts.filter(p => domainFromLabel(p.domain) === d).length
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
                {meta.label} ({count})
              </Link>
            )
          })}
        </div>
      </div>

      {/* ── Post list ── */}
     <div className="grid-bg-transparent"> 
      <div className="site-inner pb-20">
      {grouped.length === 0 ? (
        <div className="px-[clamp(20px,5vw,80px)] py-24 max-w-[1500px] mx-auto">
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

            <div className="px-[clamp(20px,5vw,80px)]">
              {yearPosts.map((post) => {
                const meta = DOMAIN_META[post.domain]
                return (
                  <Link
                    key={post.href}
                    href={post.href}
                    className={cn(
                      'group grid grid-cols-[60px_1fr_160px_120px] items-center gap-5',
                      'py-5 transition-all',
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

                    <time dateTime={post.date} className="text-right font-mono text-xs text-ink-soft">{formatPostDate(post.date)}</time>
                  </Link>
                )
              })}
            </div>
          </section>
        ))
      )}
      </div>
     
     </div>
    </main>
  )
}
