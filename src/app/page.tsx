
import Hero from '@/components/hero/Hero'
import { LatestWriting } from '@/components/home/LatestWriting'
import LatestVideos from '@/components/organisms/LatestVideos'
import { getAllPosts } from '@/lib/posts'
import { getLatestVideos } from '@/lib/youtube'
import type { Domain } from '@content/domains'

const DOMAIN_KEY: Record<string, Domain> = {
  'Tech':      'tech',
  'Fitness':   'fitness',
  'Creative':  'creative',
  'Nerd Stuff': 'nerd',
}

export default async function HomePage() {
  const latestPosts = getAllPosts().slice(0, 5).map((p, i) => ({
    n:       String(i + 1).padStart(2, '0'),
    title:   p.title,
    excerpt: p.excerpt,
    domain:  DOMAIN_KEY[p.domain],
    date:    p.date,
    href:    `/${DOMAIN_KEY[p.domain]}/${p.slug}`,
  }))

  const latestVideos = await getLatestVideos(5)

  return (
    <main>
      <Hero/>
      <div>
        <LatestVideos videos={latestVideos} num="01" />
        <LatestWriting posts={latestPosts} num="02" />
      </div>
    </main>
  )
}
