'use client'

import { usePathname } from 'next/navigation'
import { Nav, type NavItem } from '@/components/Nav'
import FooterSwitch from '@/components/layout/FooterSwitch'
import KodaraNav from './KodaraNav'
import { cn } from '@/lib/utils'

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isComingSoon = pathname === '/coming-soon' || pathname === '/'
  const isKodara = pathname === '/consulting'
  // TODO: remove this once we have a home page and replace comingsoon with home
  const isHome = pathname === '/home'

  const KODARA_ITEMS: NavItem[] = [
    { label: 'Work', href: '/home' },
    { label: 'Services', href: '/services' },
    { label: 'Approach', href: '/approach' },
    { label: 'About', href: '/about' },
  ]

  return (
    <div
  className={cn(
    'min-h-screen flex flex-col font-sans tracking-normal antialiased [overflow-wrap:anywhere]',
    isKodara
      ? '[background-image:linear-gradient(to_right,var(--color-hairline)_1px,transparent_1px)] [background-size:calc(100%/12)_100%]'
      : '[background-image:linear-gradient(to_right,var(--color-hairline)_1px,transparent_1px)] [background-size:calc(100%/12)_100%]',
  )}
>
      {!isComingSoon && !isKodara && <Nav />}
      {isKodara && !isComingSoon && !isHome && <Nav brand="kodara" items={KODARA_ITEMS} ctaLabel="Start a project →" ctaHref="/contact" />}
      {children}
      {!isComingSoon && <FooterSwitch />}
    </div>
  )
}