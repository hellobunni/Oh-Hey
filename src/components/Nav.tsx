'use client'

import { cn } from '@/lib/utils'
import { TopNav } from '@/components/ui/navigation'
import MobileNav from '@/components/navigation/MobileNav'
import type { NavBrand, NavLinksAlign, NavLink, MobileMenuItem } from '@/components/ui/navigation'

// ─── Types ────────────────────────────────────────────────────────────────────

export type NavItem = { label: string; href: string; active?: boolean }

export interface NavProps {
  brand?:       NavBrand
  brandHref?:   string
  items?:       NavItem[]
  linksAlign?:  NavLinksAlign
  ctaLabel?:    string
  ctaHref?:     string
  className?:   string
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_ITEMS: NavItem[] = [
  { label: 'Writing',  href: '/archive', active: true },
  { label: 'Tech',     href: '/tech'     },
  { label: 'Fitness',  href: '/fitness'  },
  { label: 'Creative', href: '/creative' },
  { label: 'Nerd',     href: '/nerd'     },
  { label: 'About',    href: '/about'    },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function Nav({
  brand       = 'oh-hey-lynae',
  brandHref   = '/',
  items       = DEFAULT_ITEMS,
  linksAlign  = 'left',
  ctaLabel,
  ctaHref,
  className,
}: NavProps) {
  const navLinks: NavLink[]           = items.map(({ label, href, active }) => ({ label, href, active }))
  const mobileItems: MobileMenuItem[] = items.map(({ label, href, active }) => ({ label, href, active }))
  const cta = ctaLabel?.trim() && ctaHref?.trim()
    ? { label: ctaLabel.trim(), href: ctaHref.trim() }
    : undefined

  const blurBg = brand === 'kodara'
    ? 'bg-[color-mix(in_oklab,var(--color-kodara-accent-soft/5)_85%,transparent)]'
    : 'bg-[color-mix(in_oklab,var(--color-paper)_80%,transparent)]'

  return (
    <div className={cn('sticky top-0 z-40', className)}>
      {/* ── Desktop bar (md+) ── */}
      <div className={cn('hidden md:block backdrop-blur-md', blurBg)}>
        <TopNav
          brand={brand}
          links={navLinks}
          linksAlign={linksAlign}
          cta={cta}
          brandHref={brandHref}
          className="px-[clamp(20px,5vw,80px)]"
        />
      </div>

      {/* ── Mobile bar + drawer (<md) — state lives in MobileNav ── */}
      <div className={cn('md:hidden backdrop-blur-md', blurBg)}>
        <MobileNav
          brand={brand}
          items={mobileItems}
          brandHref={brandHref}
          externalLink={cta}
        />
      </div>
    </div>
  )
}
