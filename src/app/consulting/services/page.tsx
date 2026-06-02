import { ServicesHero } from '@/components/kodara/services/ServicesHero'
import { ServiceRow } from '@/components/kodara/services/ServiceRow'
import { Outcomes } from '@/components/kodara/services/Outcomes'
import { ServiceStack } from '@/components/kodara/services/ServiceStack'
import { LeadCapture } from '@/components/kodara/services/LeadCapture'
import { Faq } from '@/components/kodara/services/Faq'
import { SectionHead } from '@/components/kodara/services/_shared'
import { CtaSection } from '@/components/kodara/CtaSection'
import ClientReel from '@/components/ClientReel'
import { SERVICES } from '@/data/services.data'

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <ClientReel />

      <SectionHead
        label="What I do"
        side="[04 / SERVICES]"
        title={<>Four senior services,<br />scoped to <span className="text-accent">your shape.</span></>}
      />
      <div className="border-t border-line px-[clamp(20px,5vw,80px)] pb-12">
        {SERVICES.map((s) => <ServiceRow key={s.num} service={s} />)}
      </div>

      <Outcomes />
      <LeadCapture />
      <ServiceStack />
      <Faq />

      <CtaSection eyebrow="Ready to scope it?" className="bg-kodara-accent-soft/20" />
    </div>
  )
}