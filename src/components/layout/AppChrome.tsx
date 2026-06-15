'use client'

import { usePathname } from 'next/navigation'
import { Nav, type NavItem } from '@/components/Nav'
import FooterSwitch from '@/components/layout/FooterSwitch'
import { cn } from '@/lib/utils'

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isKodara = pathname.startsWith('/consulting') || pathname === '/questionnaire'

  const KODARA_ITEMS: NavItem[] = [
    { label: 'Work', href: '/consulting/work' },
    { label: 'Services', href: '/consulting/services' },
    { label: 'Approach', href: '/consulting/approach' },
    { label: 'About', href: '/consulting/about' },
  ]

  return (
    <div className={cn('min-h-screen flex flex-col font-sans tracking-normal antialiased wrap-anywhere'
    ) }>
      {!isKodara && <Nav />}
      {isKodara && <Nav brand="kodara" items={KODARA_ITEMS} ctaLabel="Start a project →" ctaHref="/consulting/contact" linksAlign="center" brandHref="/consulting" />}
      {children}
      <FooterSwitch/>
    </div>
  )
}