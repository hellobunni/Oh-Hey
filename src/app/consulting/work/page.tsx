'use client'

import { useState } from 'react'
import { PROJECTS } from '@/data/work.data'
import { PageHero } from '@/components/kodara/shared/PageHero'
import { WorkFilter } from '@/components/kodara/work/WorkFilter'
import { ProjectCard } from '@/components/kodara/work/ProjectCard'
import { CtaSection } from '@/components/kodara/CtaSection'

export default function WorkPage() {
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === active)

  return (
    <div>
      <PageHero
        crumb="Work"
        eyebrow="Selected projects · 2022–2025"
        title={<>Work that <span className="text-accent">shipped</span><br />&amp; stuck around.</>}
        lede={<>A sample of engagements across <span className="font-medium text-accent">design systems, frontend, brand, and UX</span> — early-stage to enterprise. Names shown with permission; more under NDA.</>}
      />

      <WorkFilter
        active={active}
        onChange={setActive}
        shown={shown.length}
        total={PROJECTS.length}
      />

      <div className="grid grid-cols-2 border-b border-line max-md:grid-cols-1">
        {shown.map((p) => <ProjectCard key={p.idx} project={p} />)}
      </div>

      <CtaSection
        eyebrow="Have something like this?"
        body="Tell me what you're building. I'll review and be in touch within 48 hours."
      />
    </div>
  )
}
