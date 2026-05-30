import React from 'react'
import { cn, cva, type VariantProps } from '@/lib/utils'

// ─── Top Nav ──────────────────────────────────────────────────────────────────

export type NavBrand = 'oh-a' | 'oh-b' | 'lv-a' | 'lv-b'

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
  mobile?:       boolean
  menuOpen?:     boolean
  onMenuClick?:  () => void
  className?:    string
}

const navContainerVariants = cva(
  'flex items-center h-14 border-b px-6',
  {
    variants: {
      brand: {
        'oh-a': 'bg-paper border-line',
        'oh-b': 'bg-paper-2 border-line',
        'lv-a': 'bg-vega-dark border-white/[0.07]',
        'lv-b': 'bg-ink border-white/[0.06]',
      },
    },
    defaultVariants: { brand: 'oh-a' },
  }
)

const navBrandVariants = cva(
  'flex items-center gap-2 no-underline whitespace-nowrap shrink-0',
  {
    variants: {
      brand: {
        'oh-a': 'text-body font-medium text-ink',
        'oh-b': 'font-serif text-[20px] font-bold text-ink',
        'lv-a': 'font-mono text-sm font-semibold tracking-[0.1em] text-vega-ink',
        'lv-b': 'font-mono text-sm tracking-[0.06em] text-[#f0f0ee]',
      },
    },
  }
)

const navLinkVariants = cva(
  'py-1.5 px-2.5 no-underline whitespace-nowrap cursor-pointer transition-colors duration-100',
  {
    variants: {
      brand: {
        'oh-a': 'text-[14px] text-ink-soft hover:text-ink',
        'oh-b': 'text-[14px] text-ink-soft hover:text-ink',
        'lv-a': 'font-mono text-xs tracking-[0.08em] uppercase text-white/45 hover:text-vega-ink',
        'lv-b': 'font-mono text-xs tracking-[0.08em] uppercase text-white/40 hover:text-white/75',
      },
      active: {
        true:  '',
        false: '',
      },
    },
    compoundVariants: [
      { brand: 'oh-a', active: true, class: 'text-accent'      },
      { brand: 'oh-b', active: true, class: 'text-ink'         },
      { brand: 'lv-a', active: true, class: 'text-vega-accent' },
      { brand: 'lv-b', active: true, class: 'text-[#f0f0ee]'   },
    ],
    defaultVariants: { active: false },
  }
)

const navCtaVariants = cva(
  'shrink-0 no-underline cursor-pointer',
  {
    variants: {
      brand: {
        'oh-a': 'py-[7px] px-[14px] text-sm font-medium text-ink border border-line-strong hover:bg-paper-2 transition-colors duration-100',
        'oh-b': 'py-[7px] px-[14px] font-mono text-xs tracking-[0.06em] text-ink-soft border border-[rgba(58,56,53,0.35)]',
        'lv-a': 'py-2 px-5 bg-vega-accent font-mono text-xs font-bold tracking-[0.1em] uppercase text-vega-dark',
        'lv-b': 'py-2 px-5 font-mono text-xs tracking-[0.1em] uppercase text-[#f0f0ee] border border-white/15',
      },
    },
  }
)

const BRAND_MARK: Record<NavBrand, React.ReactNode> = {
  'oh-a': (
    <>
      <span className="w-3 h-3 bg-accent shrink-0" />
      <span>oh-hey-lynae</span>
    </>
  ),
  'oh-b': <span>oh-hey-lynae.</span>,
  'lv-a': (
    <>
      <span className="w-4 h-4 border-[1.5px] border-current shrink-0" />
      <span>Kodara</span>
    </>
  ),
  'lv-b': (
    <>
      <span className="inline-flex items-center justify-center w-[22px] h-[22px] border border-white/20 text-[9px] tracking-[0.04em] text-white/55">
        LV
      </span>
      <span>Kodara</span>
    </>
  ),
}

function TopNav({ brand, links, cta, brandHref, mobile = false, menuOpen = false, onMenuClick, className }: TopNavProps) {
  return (
    <nav className={cn(
      navContainerVariants({ brand }),
      mobile && 'justify-between px-4',
      className
    )}>
      <a href={brandHref} className={navBrandVariants({ brand })}>
        {BRAND_MARK[brand]}
      </a>

      {!mobile && (
        <div className="flex items-center gap-0.5 flex-1 px-6">
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

      {cta && !mobile && (
        <a className={navCtaVariants({ brand })} href={cta.href}>
          {cta.label}
        </a>
      )}

      {mobile && (
        <button
          type="button"
          className="flex flex-col items-center justify-center gap-[5px] cursor-pointer p-1 bg-transparent border-0 text-current"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={onMenuClick}
        >
          {menuOpen ? (
            <>
              <span className="block w-[22px] h-[1.5px] bg-current rotate-45 translate-y-[3.5px]" />
              <span className="block w-[22px] h-[1.5px] bg-current -rotate-45 -translate-y-[3.5px]" />
            </>
          ) : (
            <>
              <span className="block w-[22px] h-[1.5px] bg-current" />
              <span className="block w-[22px] h-[1.5px] bg-current" />
              <span className="block w-[22px] h-[1.5px] bg-current" />
            </>
          )}
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
    <div className={cn('bg-paper border-x border-b border-line flex flex-col', className)}>
      {items.map((item) => {
        const Tag = item.href ? 'a' : 'div'
        return (
          <Tag
            key={item.label}
            {...(item.href ? { href: item.href } : {})}
            className={cn(
              'flex items-center justify-between px-5 py-[18px] border-b border-line text-[20px] text-ink no-underline cursor-pointer transition-colors duration-100 hover:bg-paper-2',
              item.active && 'text-accent'
            )}
          >
            {item.label}
            {item.count != null && (
              <span className="font-mono text-xs text-ink-mute">{item.count}</span>
            )}
          </Tag>
        )
      })}
      <div className="flex justify-between px-5 py-4 font-mono text-[10px] tracking-[0.1em] text-ink-mute">
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





export { TopNav, MobileMenu}
