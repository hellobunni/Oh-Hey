import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { formatPostDate, getAllPosts, getPostBySlug } from '@/lib/posts'
import { DOMAIN_META, domainFromLabel, isDomain, type Domain } from '@content/domains'
import { MDXRemote } from 'next-mdx-remote/rsc'

export function generateStaticParams() {
  return getAllPosts().flatMap(post => {
    const domain = domainFromLabel(post.domain)
    return domain ? [{ domain, slug: post.slug }] : []
  })
}

type Params = Promise<{ domain: string; slug: string }>

export default async function PostPage({ params }: { params: Params }) {
  const { domain: rawDomain, slug } = await params

  if (!isDomain(rawDomain)) notFound()
  const domain: Domain = rawDomain

  const post = getPostBySlug(slug)
  if (!post || post.domain !== DOMAIN_META[domain].label) notFound()

  const meta = DOMAIN_META[domain]

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

          <time dateTime={post.date} className="block font-mono text-xs text-ink-mute mb-16">{formatPostDate(post.date)}</time>

          {/* Body */}
          <div className="prose prose-zinc max-w-none border-t border-line pt-12">
            <MDXRemote source={post.content} />
          </div>

          {/* Footer nav */}
          <div className="mt-20 pt-8 flex items-center justify-between">
            <Link
              href={`/${domain}`}
              className="inline-flex items-center gap-1 font-mono text-xs text-ink-mute hover:text-ink transition-colors"
            >
              <ArrowLeft size={12} strokeWidth={2} aria-hidden />
              {meta.label}
            </Link>
            <Link
              href="/archive"
              className="inline-flex items-center gap-1 font-mono text-xs text-ink-mute hover:text-ink transition-colors"
            >
              all posts
              <ArrowRight size={12} strokeWidth={2} aria-hidden />
            </Link>
          </div>

        </div>
      </article>
    </main>
  )
}
