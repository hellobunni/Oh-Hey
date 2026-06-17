'use client'

import { useEffect } from 'react'
import '../../styles/kodara.css'

import {
  FigmaLogo,
  QualigenceLogo,
  RedBullLogo,
  RocketLogo,
  StockXLogo,
  UMichLogo,
} from '../../utils/logos'
import HeroTerminalK from '@/components/hero/HeroTerminalK'
import ClientReel from '@/components/ClientReel'
import { Callout } from '@/components/kodara/Callout'
import { CtaSection } from '@/components/kodara/CtaSection'
import { WhatIDo } from '@/components/WhatIDo'
import { cn } from '@/lib/utils'

const reelLogos = [
  { id: 'stockx',     Logo: StockXLogo },
  { id: 'redbull',    Logo: RedBullLogo },
  { id: 'rocket',     Logo: RocketLogo },
  { id: 'umich',      Logo: UMichLogo },
  { id: 'qualigence', Logo: QualigenceLogo },
  { id: 'figma',      Logo: FigmaLogo },
]

export default function ConsultingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.kodara-animate').forEach((el) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = '0'
      htmlEl.style.transform = 'translateY(20px)'
      htmlEl.style.transition =
        'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      observer.observe(htmlEl)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={cn(
      'kodara',
      
    )}>
       <HeroTerminalK className='bg-kodara-accent-soft/50' />
       <ClientReel className='bg-kodara-accent-soft/50' />
       <WhatIDo className='bg-kodara-accent-soft/50' theme='kodara' />
       <Callout className='bg-kodara-accent-soft/50' />
       <CtaSection  />
    </div>
  )
}
