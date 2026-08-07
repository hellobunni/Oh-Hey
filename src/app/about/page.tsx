import { Hero } from '@/components/about/Hero'
import { Timeline } from '@/components/about/Timeline'
import { Values } from '@/components/about/Values'
import { Capabilities } from '@/components/about/Capabilities'
import { HomeOutro } from '@/components/home/HomeOutro'
import { subscribeToNewsletter } from '@/app/actions'

export default function About() {
  return (
    <main>
      <Hero />
      <Timeline />
      <Values />
      <Capabilities />
      <HomeOutro onSubscribe={subscribeToNewsletter} />
    </main>
  )
}
