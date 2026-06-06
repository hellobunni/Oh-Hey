import Hero from '@/components/Hero'
import ClientReel from '@/components/ClientReel'
import FeaturedFeed from '@/components/FeaturedFeed'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedFeed />
      <ClientReel />
      <NewsletterSignup />
    </main>
  )
}
