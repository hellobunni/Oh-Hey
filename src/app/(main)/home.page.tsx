
import HeroTerminalOH from '@/components/hero/HeroTerminalOH'
import { LatestWriting } from '@/components/home/LatestWriting'
import { DomainGrid } from '@/components/home/DomainGrid'
import { posts } from '@/data/posts'
import type { Domain } from '@/data/domains'
import { HomeOutro } from '@/components/home/HomeOutro'

const DOMAIN_KEY: Record<string, Domain> = {
  'Tech':      'tech',
  'Fitness':   'fitness',
  'Creative':  'creative',
  'Nerd Stuff': 'nerd',
}

const latestPosts = posts.slice(0, 5).map((p, i) => ({
  n:       String(i + 1).padStart(2, '0'),
  title:   p.title,
  excerpt: p.excerpt,
  domain:  DOMAIN_KEY[p.domain],
  date:    p.date,
  href:    `/${DOMAIN_KEY[p.domain]}/${p.slug}`,
}))

export default function HomePage() {
  return (
    <main>
      <HeroTerminalOH />
      <LatestWriting posts={latestPosts} />
      <DomainGrid />
      {/* TODO: newsletter subscription
          - Create src/actions/subscribe.ts as a Next.js Server Action
          - Use Resend (already installed) to add email to audience + send confirmation
          - Pass action: <HomeOutro onSubscribe={subscribeAction} />
          - Add error state to NewsletterSignup for failed submissions */}
      <HomeOutro />
    </main>
  )
}
