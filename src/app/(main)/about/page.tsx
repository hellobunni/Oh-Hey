import { AbHero } from '@/components/about/AbHero'
import { AbTimeline } from '@/components/about/AbTimeline'
import { AbValues } from '@/components/about/AbValues'
import { AbCapabilities } from '@/components/about/AbCapabilities'
import { HomeOutro } from '@/components/home/HomeOutro'
import { subscribeToNewsletter } from '@/app/actions'

export default function About() {
  return (
    <main>
      <AbHero />
      <AbTimeline />
      <AbValues />
      <AbCapabilities />
      <HomeOutro onSubscribe={subscribeToNewsletter} />
    </main>
  )
}
