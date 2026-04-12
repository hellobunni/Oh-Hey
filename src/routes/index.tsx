import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import DomainGrid from '../components/DomainGrid'
import FeaturedFeed from '../components/FeaturedFeed'
import NewsletterSignup from '../components/NewsletterSignup'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <main>
      <Hero />
      <DomainGrid />
      <FeaturedFeed />
      <NewsletterSignup />
    </main>
  )
}
