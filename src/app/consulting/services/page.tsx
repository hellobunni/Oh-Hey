import { ServicesHero } from '@/components/brands/kodara/services/ServicesHero'
import { ServiceRow } from '@/components/brands/kodara/services/ServiceRow'
import { Outcomes } from '@/components/brands/kodara/services/Outcomes'
import { ServiceStack } from '@/components/brands/kodara/services/ServiceStack'
import { LeadCapture } from '@/components/brands/kodara/services/LeadCapture'
import { Faq } from '@/components/brands/kodara/services/Faq'
import { SectionHead } from '@/components/brands/kodara/services/_shared'
import { CtaSection } from '@/components/brands/kodara/CtaSection'
import { SERVICES } from '@/data/services.data'

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
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