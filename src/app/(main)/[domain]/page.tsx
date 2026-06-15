import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { posts } from '@/data/posts'
import { DOMAIN_META, type Domain } from '@/data/domains'
import { SectionHeader } from '@/components/layout/SectionHeader'
const VALID_DOMAINS = ['tech', 'fitness', 'creative', 'nerd'] as const
type DomainSlug = typeof VALID_DOMAINS[number]

const DOMAIN_CONFIG: Record<DomainSlug, { postsDomain: string; desc: string }> = {
  tech:     { postsDomain: 'Tech',       desc: 'Frontend craft, dev tools, building in public.' },
  fitness:  { postsDomain: 'Fitness',    desc: 'Strength training, running, the boring middle.' },
  creative: { postsDomain: 'Creative',   desc: 'Prints, process, gouache vs procreate.' },
  nerd:     { postsDomain: 'Nerd Stuff', desc: 'Comics, cards, gaming, the Lego shelf.' },
}

export function generateStaticParams() {
  return VALID_DOMAINS.map(domain => ({ domain }))
}

type Params = Promise<{ domain: string }>

export default async function CategoryPage({ params }: { params: Params }) {
  const { domain: rawDomain } = await params

  if (!VALID_DOMAINS.includes(rawDomain as DomainSlug)) notFound()
  const domain = rawDomain as DomainSlug

  const meta         = DOMAIN_META[domain]
  const config       = DOMAIN_CONFIG[domain]
  const domainPosts  = posts.filter(p => p.domain === config.postsDomain)
  const otherDomains = VALID_DOMAINS.filter(d => d !== domain)

  return (
    <main>
      {/* ── Hero ── */}
      <section className="site-inner grid-bg-transparent">
        <div className="py-16">
          <div className="font-mono text-xs text-ink-mute mb-10">
            ~/oh-hey-lynae · {domain}/
          </div>

          <div className="flex items-center gap-2.5 mb-6">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: meta.var }}
            />
            <span className="font-mono text-sm" style={{ color: meta.var }}>
              {meta.label}
            </span>
          </div>

          <h1
            className="font-sans font-black text-ink tracking-tight leading-[0.94] mb-6"
            style={{ fontSize: 'clamp(52px, 6.5vw, 80px)' }}
          >
            {meta.label}.
          </h1>

          <p className="font-sans text-base text-ink-soft max-w-[460px] mb-4">
            {config.desc}
          </p>

          <p className="font-mono text-xs text-ink-mute">
            {domainPosts.length} {domainPosts.length === 1 ? 'post' : 'posts'}
          </p>
        </div>
      </section>

      {/* ── Post list ── */}
      {domainPosts.length === 0 ? (
        <div className="py-24">
          <p className="font-mono text-sm text-ink-mute mb-3">// nothing published here yet</p>
          <p className="font-sans text-sm text-ink-soft">
            Posts in this domain are on the way.{' '}
            <Link href="/archive" className="text-accent border-b border-accent/40">
              Browse all writing →
            </Link>
          </p>
        </div>
      ) : (
        <section>
          <SectionHeader
            num="01"
            title={`${meta.label.toUpperCase()} · ${domainPosts.length} ${domainPosts.length === 1 ? 'POST' : 'POSTS'}`}
          />

          <div className="site-inner">
            {domainPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/${domain}/${post.slug}`}
                className={cn(
                  'group grid grid-cols-[60px_1fr_120px] items-center gap-5',
                  ' py-5 transition-all',
                  'hover:-mx-3 hover:bg-paper-2 hover:px-3',
                )}
              >
                <span className="font-mono text-xs text-ink-mute">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="text-base font-medium tracking-[-0.01em] text-ink">
                  {post.title}
                  <span className="mt-1 block text-sm font-normal text-ink-soft">
                    {post.excerpt}
                  </span>
                </span>

                <span className="text-right font-mono text-xs text-ink-soft">{post.date}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Other domains ── */}
      <section>
        <SectionHeader num={domainPosts.length > 0 ? '02' : '01'} title="OTHER DOMAINS" />

        <div className="grid grid-cols-3  max-md:grid-cols-1 site-inner">
          {otherDomains.map((d) => {
            const m     = DOMAIN_META[d]
            const count = posts.filter(p => p.domain === DOMAIN_CONFIG[d].postsDomain).length
            return (
              <Link
                key={d}
                href={`/${d}`}
                className="p-7 last:border-r-0 transition-colors hover:bg-paper-2 max-md:border-r-0 max-md:border-b max-md:last:border-b-0"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className="inline-block h-2.5 w-2.5"
                    style={{ background: m.var }}
                  />
                  <span className="font-sans text-[22px] font-bold tracking-[-0.02em] text-ink">
                    {m.label}
                  </span>
                </div>
                <div className="font-mono text-sm text-ink-mute">
                  {String(count).padStart(2, '0')} posts
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
