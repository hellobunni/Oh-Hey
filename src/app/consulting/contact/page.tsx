'use client'

import { useState } from 'react'
import { PageHero } from '@/components/brands/kodara/shared/PageHero'
import { ContactLane } from '@/components/brands/kodara/contact/ContactLane'
import { DirectChannels } from '@/components/brands/kodara/contact/DirectChannels'
import { WhatNext } from '@/components/brands/kodara/contact/WhatNext'
import { Questionnaire } from '@/components/brands/kodara/contact/Questionnaire'
import { CAL_URL } from '@/data/contact.data'

type Mode = 'contact' | 'questionnaire'

export default function ContactPage() {
  const [mode, setMode] = useState<Mode>('contact')

  if (mode === 'questionnaire') {
    return (
      <div>
        <div className="border-b border-line px-[clamp(20px,5vw,80px)] py-6">
          <div className="font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
            <span className="text-accent">Kodara</span> — Start a project
          </div>
        </div>
        <Questionnaire onExit={() => setMode('contact')} />
      </div>
    )
  }

  return (
    <div>
      <PageHero
        crumb="Contact"
        eyebrow="— Let's work together"
        title={<>The right<br /><span className="text-accent">starting point.</span></>}
        lede="Three ways in — pick what fits where you are right now."
      />

      {/* three lane grid */}
      <div className="grid grid-cols-3 border-b border-line max-md:grid-cols-1">
        <ContactLane
          num="01"
          tagline="Best fit"
          title="Start with context"
          desc="Six short questions. Takes 3 minutes. Helps me reply with something useful instead of a blank 'tell me more.'"
          action="Open questionnaire"
          primary
          onClick={() => setMode('questionnaire')}
        />
        <ContactLane
          num="02"
          tagline="Quick sync"
          title="Book a call"
          desc="30 minutes. No agenda required — come with a vague idea and we'll figure out if and how I can help."
          action="Pick a time"
          href={CAL_URL}
        />
        <ContactLane
          num="03"
          tagline="Old school"
          title="Just email me"
          desc="Prefer writing? Drop a note. No template, no form — just tell me what's going on."
          action="Send an email"
          href="mailto:mail.kodaraadvisory.co"
          linkText="Send an email"
        />
      </div>

      {/* direct + what next */}
      <div className="grid grid-cols-2 border-b border-line max-md:grid-cols-1">
        <DirectChannels />
        <WhatNext />
      </div>
    </div>
  )
}
