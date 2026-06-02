import { PageHero } from '@/components/kodara/shared/PageHero'
import { AboutIntro } from '@/components/kodara/about/AboutIntro'
import { Timeline } from '@/components/kodara/about/Timeline'
import { Values } from '@/components/kodara/about/Values'
import { Capabilities } from '@/components/kodara/about/Capabilities'
import { CtaSection } from '@/components/kodara/CtaSection'

export default function AboutPage() {
  return (
    <div>
      <PageHero
        crumb="About"
        eyebrow="Who's behind Kodara"
        title={<>A generalist<br />who actually <span className="text-accent">ships.</span></>}
        lede={<>Kodara is one person: me. That's the point — <span className="font-medium text-accent">no handoffs, no telephone game</span>, just senior judgment from first call to final commit.</>}
      />
      <AboutIntro />
      <Timeline />
      <Values />
      <Capabilities />
      <CtaSection eyebrow="Want to work together?" />
    </div>
  )
}
