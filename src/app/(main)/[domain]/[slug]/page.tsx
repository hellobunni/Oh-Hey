import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts, getPostBySlug } from '@/data/posts'
import { DOMAIN_META, type Domain } from '@/data/domains'

const VALID_DOMAINS = ['tech', 'fitness', 'creative', 'nerd'] as const
type DomainSlug = typeof VALID_DOMAINS[number]

const DOMAIN_CONFIG: Record<DomainSlug, { postsDomain: string }> = {
  tech:     { postsDomain: 'Tech' },
  fitness:  { postsDomain: 'Fitness' },
  creative: { postsDomain: 'Creative' },
  nerd:     { postsDomain: 'Nerd Stuff' },
}

export function generateStaticParams() {
  return posts.map(post => {
    const domainSlug = Object.entries(DOMAIN_CONFIG).find(
      ([, cfg]) => cfg.postsDomain === post.domain
    )?.[0]
    if (!domainSlug) return null
    return { domain: domainSlug, slug: post.slug }
  }).filter(Boolean)
}

type Params = Promise<{ domain: string; slug: string }>

export default async function PostPage({ params }: { params: Params }) {
  const { domain: rawDomain, slug } = await params

  if (!VALID_DOMAINS.includes(rawDomain as DomainSlug)) notFound()
  const domain = rawDomain as DomainSlug

  const post = getPostBySlug(slug)
  if (!post || post.domain !== DOMAIN_CONFIG[domain].postsDomain) notFound()

  const meta = DOMAIN_META[domain]
  const paragraphs = post.body.split('\n\n').filter(Boolean)

  return (
    <main>
      <article className="grid-bg-transparent">
        <div className="site-inner px-[clamp(20px,5vw,80px)] py-16 max-w-5xl">

          {/* Breadcrumb */}
          <div className="font-mono text-xs text-ink-mute mb-10">
            <Link href="/" className="hover:text-ink transition-colors">~/oh-hey-lynae</Link>
            {' · '}
            <Link href={`/${domain}`} className="hover:text-ink transition-colors">{domain}/</Link>
            {' · '}
            <span>{slug}</span>
          </div>

          {/* Domain tag */}
          <div className="flex items-center gap-2.5 mb-6">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: meta.var }}
            />
            <Link
              href={`/${domain}`}
              className="font-mono text-sm transition-opacity hover:opacity-70"
              style={{ color: meta.var }}
            >
              {meta.label}
            </Link>
          </div>

          {/* Title */}
          <h1
            className="font-sans font-black text-ink tracking-tight leading-[0.94] mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="font-sans text-base text-ink-soft max-w-[560px] mb-3 leading-relaxed">
            {post.excerpt}
          </p>

          <p className="font-mono text-xs text-ink-mute mb-16">{post.date}</p>

          {/* Body */}
          <div className="flex flex-col gap-6 border-t border-paper-3 pt-12">
            {paragraphs.map((p, i) => (
              <p key={i} className="font-sans text-base text-ink-soft leading-[1.8]">
                {p}
              </p>
            ))}
          </div>

          {/* Footer nav */}
          <div className="mt-20 pt-8 flex items-center justify-between">
            <Link
              href={`/${domain}`}
              className="font-mono text-xs text-ink-mute hover:text-ink transition-colors"
            >
              ← {meta.label}
            </Link>
            <Link
              href="/archive"
              className="font-mono text-xs text-ink-mute hover:text-ink transition-colors"
            >
              all posts →
            </Link>
          </div>

        </div>
      </article>
    </main>
  )
}
