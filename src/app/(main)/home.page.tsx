
import HeroTerminalOH from '@/components/hero/HeroTerminalOH'
import { LatestWriting } from '@/components/home/LatestWriting'
import { DomainGrid } from '@/components/home/DomainGrid'
import { getAllPosts } from '@/lib/posts'
import type { Domain } from '@content/domains'
import { HomeOutro } from '@/components/home/HomeOutro'
import { subscribeToNewsletter } from '@/app/actions'

const DOMAIN_KEY: Record<string, Domain> = {
  'Tech':      'tech',
  'Fitness':   'fitness',
  'Creative':  'creative',
  'Nerd Stuff': 'nerd',
}

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 5).map((p, i) => ({
    n:       String(i + 1).padStart(2, '0'),
    title:   p.title,
    excerpt: p.excerpt,
    domain:  DOMAIN_KEY[p.domain],
    date:    p.date,
    href:    `/${DOMAIN_KEY[p.domain]}/${p.slug}`,
  }))

  return (
    <main>
      <HeroTerminalOH />
      <LatestWriting posts={latestPosts} className="grid-bg-transparent"/>
      <DomainGrid className="grid-bg-transparent hidden md:block"/>
      <HomeOutro onSubscribe={subscribeToNewsletter} />
    </main>
  )
}
