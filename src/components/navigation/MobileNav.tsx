'use client'

import { useEffect, useState } from 'react'
import { TopNav, MobileMenu } from '@/components/ui/navigation'
import type { NavBrand, MobileMenuItem } from '@/components/ui/navigation'

export interface MobileNavProps {
  brand:         NavBrand
  items:         MobileMenuItem[]
  brandHref?:    string
  version?:      string
  externalLink?: { label: string; href?: string }
  className?:    string
}

export default function MobileNav({
  brand,
  items,
  brandHref,
  version,
  externalLink,
  className,
}: MobileNavProps) {
  const [open, setOpen] = useState(false)

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Prevent body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className={className}>
      <TopNav
        brand={brand}
        links={[]}
        brandHref={brandHref}
        mobile
        menuOpen={open}
        onMenuClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <>
          <MobileMenu
            items={items}
            version={version}
            externalLink={externalLink}
          />
          {/* Backdrop — closes drawer on outside tap */}
          <div
            className="fixed inset-0 z-[-1]"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
        </>
      )}
    </div>
  )
}
