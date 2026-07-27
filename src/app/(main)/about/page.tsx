import { Hero } from '@/components/brands/oh-hey/about/Hero'
import { Timeline } from '@/components/brands/oh-hey/about/Timeline'
import { Values } from '@/components/brands/oh-hey/about/Values'
import { Capabilities } from '@/components/brands/oh-hey/about/Capabilities'
import { HomeOutro } from '@/components/brands/oh-hey/home/HomeOutro'
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
