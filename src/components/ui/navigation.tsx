import React from 'react'
import { Menu, X } from 'lucide-react'
import { cn, cva } from '@/lib/utils'

// ─── Top Nav ──────────────────────────────────────────────────────────────────

export type NavBrand     = 'oh-hey-lynae'
export type NavLinksAlign = 'left' | 'center' | 'right'

export interface NavLink {
  label:   string
  href?:   string
  active?: boolean
}

export interface TopNavProps {
  brand:         NavBrand
  links:         NavLink[]
  cta?:          { label: string; href?: string }
  brandHref?:    string
  linksAlign?:   NavLinksAlign
  mobile?:       boolean
  menuOpen?:     boolean
  onMenuClick?:  () => void
  className?:    string
}

// ─── CVA variants ─────────────────────────────────────────────────────────────

const navContainerVariants = cva(
  'flex items-center h-14 border-b-2 px-6',
  {
    variants: {
      brand: {
        'oh-hey-lynae': 'bg-paper border-card',
      },
    },
    defaultVariants: { brand: 'oh-hey-lynae' },
  }
)

const navBrandVariants = cva(
  'flex items-center gap-2.5 no-underline whitespace-nowrap shrink-0',
  {
    variants: {
      brand: {
        'oh-hey-lynae': 'font-pixel text-sm text-mint',
      },
    },
  }
)

const navLinkVariants = cva(
  'py-1.5 px-2.5 no-underline whitespace-nowrap cursor-pointer transition-colors duration-100',
  {
    variants: {
      brand: {
        'oh-hey-lynae': 'text-sm text-ink-soft hover:text-ink',
      },
      active: {
        true:  '',
        false: '',
      },
    },
    compoundVariants: [
      { brand: 'oh-hey-lynae', active: true, class: 'text-accent' },
    ],
    defaultVariants: { active: false },
  }
)

const navCtaVariants = cva(
  'shrink-0 no-underline cursor-pointer transition-all duration-100',
  {
    variants: {
      brand: {
        'oh-hey-lynae': 'font-pixel text-xs bg-pink text-ink py-2.5 px-3.5 shadow-[3px_3px_0_rgba(0,0,0,0.35)] hover:bg-mint hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_rgba(0,0,0,0.35)]',
      },
    },
  }
)

const linksAlignClass: Record<NavLinksAlign, string> = {
  left:   'justify-start',
  center: 'justify-center',
  right:  'justify-end',
}

// ─── Brand marks ──────────────────────────────────────────────────────────────

const BRAND_MARK: Record<NavBrand, React.ReactNode> = {
  'oh-hey-lynae': (
    <>
      <img
        src="/avatar-face.png"
        alt="ohheylynae"
        className="w-[40px] h-[40px] shrink-0"
        style={{ border: '2px solid var(--color-mint)', imageRendering: 'auto' }}
      />
      <span>OHHEYLYNAE</span>
    </>
  ),
}

// ─── TopNav ───────────────────────────────────────────────────────────────────

function TopNav({
  brand,
  links,
  cta,
  brandHref,
  linksAlign = 'left',
  mobile = false,
  menuOpen = false,
  onMenuClick,
  className,
}: TopNavProps) {
  const ctaLabel = cta?.label.trim()
  const ctaHref  = cta?.href?.trim()
  const showCta  = !mobile && !!ctaLabel && !!ctaHref

  return (
    <nav className={cn(
      navContainerVariants({ brand }),
      mobile && 'justify-between px-4',
      className,
    )}>
      <a href={brandHref} className={navBrandVariants({ brand })}>
        {BRAND_MARK[brand]}
      </a>

      {!mobile && (
        <div className={cn('flex items-center gap-0.5 flex-1 px-6', linksAlignClass[linksAlign])}>
          {links.map((link) => (
            <a
              key={link.label}
              className={navLinkVariants({ brand, active: !!link.active })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {showCta && (
        <a className={navCtaVariants({ brand })} href={ctaHref}>
          {ctaLabel}
        </a>
      )}

      {mobile && (
        <button
          type="button"
          className="flex items-center justify-center cursor-pointer p-1 bg-transparent border-0 text-current"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={onMenuClick}
        >
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      )}
    </nav>
  )
}

// ─── Mobile menu (drawer) ─────────────────────────────────────────────────────

export interface MobileMenuItem {
  label:   string
  count?:  number | string
  active?: boolean
  href?:   string
}

export interface MobileMenuProps {
  items:         MobileMenuItem[]
  version?:      string
  externalLink?: { label: string; href?: string }
  className?:    string
}

function MobileMenu({ items, version = 'VERSION 3.0', externalLink, className }: MobileMenuProps) {
  return (
    <div className={cn('bg-paper border-x-2 border-b-2 border-card flex flex-col', className)}>
      {items.map((item) => {
        const Tag = item.href ? 'a' : 'div'
        return (
          <Tag
            key={item.label}
            {...(item.href ? { href: item.href } : {})}
            className={cn(
              'flex items-center justify-between px-5 py-[18px] border-b border-card text-md text-ink no-underline cursor-pointer transition-colors duration-100 hover:bg-card-2',
              item.active && 'text-mint',
            )}
          >
            {item.label}
            {item.count != null && (
              <span className="font-mono text-xs text-ink-mute">{item.count}</span>
            )}
          </Tag>
        )
      })}
      <div className="flex justify-between px-5 py-4 font-mono text-xxs tracking-widest text-ink-mute">
        <span>{version}</span>
        {externalLink && (
          <a href={externalLink.href} className="hover:text-ink transition-colors duration-100">
            ↗ {externalLink.label}
          </a>
        )}
      </div>
    </div>
  )
}

export { TopNav, MobileMenu }
