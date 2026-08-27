import { notFound, permanentRedirect } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { domainFromLabel } from '@content/domains'

/**
 * Legacy route. The canonical home for a post is /[domain]/[slug]; this served
 * the same MDX at a second URL, which splits ranking signals between them.
 * Prerendered so the redirect is static rather than a per-request function.
 */
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

type Params = Promise<{ slug: string }>

export default async function LegacyPostPage({ params }: { params: Params }) {
  const { slug } = await params

  const post = getPostBySlug(slug)
  if (!post) notFound()

  const domain = domainFromLabel(post.domain)
  if (!domain) notFound()

  permanentRedirect(`/${domain}/${slug}`)
}
