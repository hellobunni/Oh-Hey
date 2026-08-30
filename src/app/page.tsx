
import Hero from '@/components/hero/Hero'
import ComingSoonHero from '@/components/home/ComingSoonHero'
import UpNow from '@/components/home/UpNow'
import WhatsComingSection from '@/components/home/WhatsComingSection'
import FollowStrip from '@/components/home/FollowStrip'
import { LatestWriting } from '@/components/home/LatestWriting'
import LatestVideos from '@/components/organisms/LatestVideos'
import { NewsletterSignup } from '@/components/ui/NewsletterSignup'
import { getAllPosts } from '@/lib/posts'
import { getLatestVideos } from '@/lib/youtube'
import { subscribeToNewsletter } from '@/app/actions'
import type { Domain } from '@content/domains'

const COMING_SOON = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

const DOMAIN_KEY: Record<string, Domain> = {
  'Tech':      'tech',
  'Fitness':   'fitness',
  'Creative':  'creative',
  'Nerd Stuff': 'nerd',
}

export default async function HomePage() {
  const latestVideos = await getLatestVideos(COMING_SOON ? 2 : 5)

  if (COMING_SOON) {
    return (
      <main>
        <ComingSoonHero />
        <UpNow videos={latestVideos} />
        <WhatsComingSection />
        <section id="newsletter" className="border-t-2 border-paper-2 py-20 px-6">
          <NewsletterSignup
            onSubscribe={subscribeToNewsletter}
            headline={
              <>GET THE{' '}<span className="text-mint">START SIGNAL.</span></>
            }
            body="One email when the full site launches — plus whatever I make, played, lifted, or done along the way. No spam, no sponsors."
          />
        </section>
        <FollowStrip />
      </main>
    )
  }

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
      <Hero/>
      <div>
        <LatestVideos videos={latestVideos} num="01" />
        <LatestWriting posts={latestPosts} num="02" />
      </div>
    </main>
  )
}
