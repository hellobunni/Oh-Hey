import HeroTerminalOH from '@/components/hero/HeroTerminalOH'
import { getAllPosts } from '@/lib/posts'
import type { Domain } from '@content/domains'

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
    </main>
  )
}
