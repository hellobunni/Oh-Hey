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
  brand:      NavBrand
  links:      NavLink[]
  cta?:       { label: string; href?: string }
  mobile?:    boolean
  className?: string
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
      <span>LUNAR VEGA</span>
    </>
  ),
  'lv-b': (
    <>
      <span className="inline-flex items-center justify-center w-[22px] h-[22px] border border-white/20 text-[9px] tracking-[0.04em] text-white/55">
        LV
      </span>
      <span>Lunar Vega</span>
    </>
  ),
}

function TopNav({ brand, links, cta, mobile = false, className }: TopNavProps) {
  return (
    <nav className={cn(
      navContainerVariants({ brand }),
      mobile && 'justify-between px-4',
      className
    )}>
      <a className={navBrandVariants({ brand })}>
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
        <div className="flex flex-col gap-[5px] cursor-pointer p-1" aria-label="Open menu">
          <span className="block w-[22px] h-[1.5px] bg-current" />
          <span className="block w-[22px] h-[1.5px] bg-current" />
          <span className="block w-[22px] h-[1.5px] bg-current" />
        </div>
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
    <div className={cn('bg-paper border border-line flex flex-col', className)}>
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            'flex items-center justify-between px-5 py-[18px] border-b border-line text-[20px] text-ink cursor-pointer transition-colors duration-100',
            item.active && 'text-accent'
          )}
        >
          {item.label}
          {item.count != null && (
            <span className="font-mono text-xs text-ink-mute">{item.count}</span>
          )}
        </div>
      ))}
      <div className="flex justify-between px-5 py-4 font-mono text-[10px] tracking-[0.1em] text-ink-mute">
        <span>{version}</span>
        {externalLink && <span>↗ {externalLink.label}</span>}
      </div>
    </div>
  )
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

export interface TabItem {
  label:  string
  count?: number
}

export interface TabsProps {
  items:      TabItem[]
  active?:    number
  variant?:   'default' | 'underline'
  onChange?:  (index: number) => void
  className?: string
}

const tabsContainerVariants = cva(
  'inline-flex',
  {
    variants: {
      variant: {
        default:   'border border-line-strong',
        underline: 'border-b border-line',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

const tabItemVariants = cva(
  'inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-[12px] bg-transparent border-none cursor-pointer whitespace-nowrap transition-colors duration-100',
  {
    variants: {
      variant: {
        default:   'border-r border-line-strong last:border-r-0',
        underline: 'border-b-2 border-transparent -mb-px pb-[6px]',
      },
      active: {
        true:  '',
        false: '',
      },
    },
    compoundVariants: [
      { variant: 'default',   active: false, class: 'text-ink-soft hover:bg-paper-2 hover:text-ink'   },
      { variant: 'default',   active: true,  class: 'bg-ink text-white'                               },
      { variant: 'underline', active: false, class: 'text-ink-soft hover:text-ink'                    },
      { variant: 'underline', active: true,  class: 'text-ink border-b-accent'                        },
    ],
    defaultVariants: { variant: 'default', active: false },
  }
)

function Tabs({ items, active = 0, variant = 'default', onChange, className }: TabsProps) {
  const [current, setCurrent] = React.useState(active)

  const handleClick = (i: number) => {
    setCurrent(i)
    onChange?.(i)
  }

  return (
    <div className={cn(tabsContainerVariants({ variant }), className)}>
      {items.map((item, i) => (
        <button
          key={item.label}
          className={tabItemVariants({ variant, active: current === i })}
          onClick={() => handleClick(i)}
        >
          {item.label}
          {item.count != null && (
            <span className="text-[10px] opacity-60">{item.count}</span>
          )}
        </button>
      ))}
    </div>
  )
}

// ─── Breadcrumbs ──────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items:      BreadcrumbItem[]
  sep?:       string
  className?: string
}

function Breadcrumb({ items, sep = '/', className }: BreadcrumbProps) {
  return (
    <div className={cn(
      'flex items-center gap-1.5 flex-wrap font-mono text-xs tracking-[0.06em] uppercase',
      className
    )}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <React.Fragment key={item.label}>
            {isLast
              ? <span className="text-accent">{item.label}</span>
              : <a className="text-ink-soft no-underline cursor-pointer transition-colors duration-100 hover:text-ink" href={item.href}>{item.label}</a>
            }
            {!isLast && <span className="text-ink-mute">{sep}</span>}
          </React.Fragment>
        )
      })}
    </div>
  )
}

// ─── Pagination ───────────────────────────────────────────────────────────────

export interface PaginationProps {
  total:      number
  current:    number
  onChange?:  (page: number) => void
  className?: string
}

const pgVariants = cva(
  'inline-flex items-center justify-center min-w-[40px] h-10 px-2 font-mono text-[12px] bg-transparent border-none border-r border-line-strong cursor-pointer transition-colors duration-100 last:border-r-0',
  {
    variants: {
      state: {
        default:  'text-ink-soft hover:bg-paper-2 hover:text-ink',
        active:   'bg-ink text-white cursor-default',
        disabled: 'text-ink-mute cursor-not-allowed',
        ellipsis: 'border-none cursor-default text-ink-soft',
      },
    },
    defaultVariants: { state: 'default' },
  }
)

function Pagination({ total, current, onChange, className }: PaginationProps) {
  const [page, setPage] = React.useState(current)

  const go = (p: number) => { setPage(p); onChange?.(p) }

  const pages: Array<number | '…'> = []
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else if (page <= 3) {
    pages.push(1, 2, 3, '…', total)
  } else if (page >= total - 2) {
    pages.push(1, '…', total - 2, total - 1, total)
  } else {
    pages.push(1, '…', page - 1, page, page + 1, '…', total)
  }

  return (
    <div className={cn('inline-flex border border-line-strong', className)}>
      <button className={pgVariants({ state: page === 1 ? 'disabled' : 'default' })} onClick={() => page > 1 && go(page - 1)}>←</button>
      {pages.map((p, i) =>
        p === '…'
          ? <button key={`ellipsis-${i}`} className={pgVariants({ state: 'ellipsis' })}>…</button>
          : <button key={p} className={pgVariants({ state: p === page ? 'active' : 'default' })} onClick={() => go(p as number)}>{p}</button>
      )}
      <button className={pgVariants({ state: page === total ? 'disabled' : 'default' })} onClick={() => page < total && go(page + 1)}>→</button>
    </div>
  )
}

// ─── Prev / Next post ─────────────────────────────────────────────────────────

export interface PrevNextProps {
  prev?:      { title: string; href?: string }
  next?:      { title: string; href?: string }
  className?: string
}

function PrevNext({ prev, next, className }: PrevNextProps) {
  return (
    <div className={cn('inline-flex border border-line-strong w-full', className)}>
      {prev && (
        <a
          className="flex flex-col items-start flex-1 px-4 py-2.5 gap-1 no-underline cursor-pointer hover:bg-paper-2 transition-colors duration-100 border-r border-line-strong"
          href={prev.href}
        >
          <span className="font-mono text-[10px] tracking-[0.08em] text-ink-mute uppercase">← PREV</span>
          <span className="text-[13px] text-ink">{prev.title}</span>
        </a>
      )}
      {next && (
        <a
          className="flex flex-col items-end flex-1 px-4 py-2.5 gap-1 no-underline cursor-pointer hover:bg-paper-2 transition-colors duration-100"
          href={next.href}
        >
          <span className="font-mono text-[10px] tracking-[0.08em] text-ink-mute uppercase">NEXT →</span>
          <span className="text-[13px] text-ink">{next.title}</span>
        </a>
      )}
    </div>
  )
}

// ─── Step nav ─────────────────────────────────────────────────────────────────

export type StepStatus = 'done' | 'active' | 'pending'

export interface StepItem {
  label:  string
  status: StepStatus
}

export interface StepNavProps {
  steps:      StepItem[]
  className?: string
}

const stepVariants = cva(
  'relative flex flex-col gap-1.5 pt-4 font-mono text-sm font-medium',
  {
    variants: {
      status: {
        done:    'text-ink-soft',
        active:  'text-accent',
        pending: 'text-ink-mute',
      },
    },
  }
)

const stepBarVariants = cva(
  'absolute top-0 left-0 h-0.5',
  {
    variants: {
      status: {
        done:    'right-0 bg-ink',
        active:  'w-1/2 bg-accent',
        pending: 'right-0 bg-transparent',
      },
    },
  }
)

function StepNav({ steps, className }: StepNavProps) {
  return (
    <div className={cn('grid grid-flow-col auto-cols-fr relative', className)}>
      {/* background track */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-line-strong" />
      {steps.map((step, i) => (
        <div key={step.label} className={stepVariants({ status: step.status })}>
          <div className={stepBarVariants({ status: step.status })} />
          <span className="text-[10px] tracking-[0.1em] uppercase text-current">
            {`STEP ${String(i + 1).padStart(2, '0')}`}
          </span>
          {step.label}
        </div>
      ))}
    </div>
  )
}

// ─── Side nav ─────────────────────────────────────────────────────────────────

export interface SideNavItem {
  label:   string
  count?:  number
  active?: boolean
  href?:   string
}

export interface SideNavGroup {
  label: string
  items: SideNavItem[]
}

export interface SideNavProps {
  groups:     SideNavGroup[]
  className?: string
}

function SideNav({ groups, className }: SideNavProps) {
  return (
    <div className={cn('flex flex-col gap-8 p-6', className)}>
      {groups.map((group) => (
        <div key={group.label} className="flex flex-col">
          <h6 className="m-0 mb-2 font-mono text-[10px] tracking-[0.1em] uppercase text-ink-mute font-medium">
            {group.label}
          </h6>
          {group.items.map((item) => (
            <a
              key={item.label}
              className={cn(
                'flex items-center justify-between py-2 font-mono text-sm no-underline cursor-pointer border-b border-line transition-colors duration-100 last:border-b-0',
                item.active ? 'text-accent' : 'text-ink-soft hover:text-ink'
              )}
              href={item.href}
            >
              {item.label}
              {item.count != null && (
                <span className="text-xs text-ink-mute">{item.count}</span>
              )}
            </a>
          ))}
        </div>
      ))}
    </div>
  )
}

// ─── Anchor TOC ───────────────────────────────────────────────────────────────

export interface AnchorNavItem {
  label:   string
  href?:   string
  active?: boolean
}

export interface AnchorNavProps {
  items:      AnchorNavItem[]
  label?:     string
  className?: string
}

function AnchorNav({ items, label = '// ON THIS PAGE', className }: AnchorNavProps) {
  const [active, setActive] = React.useState(() => items.findIndex(i => i.active))

  return (
    <div className={cn('flex flex-col pl-4 border-l border-line', className)}>
      <div className="font-mono text-[10px] tracking-[0.1em] text-ink-mute mb-3">
        {label}
      </div>
      {items.map((item, i) => (
        <a
          key={item.label}
          className={cn(
            'relative block py-1.5 font-mono text-[12px] no-underline cursor-pointer transition-colors duration-100',
            i === active ? 'text-ink font-semibold' : 'text-ink-soft hover:text-ink'
          )}
          href={item.href}
          onClick={(e) => { e.preventDefault(); setActive(i) }}
        >
          <span className={cn(
            'absolute left-[-17px] top-0 bottom-0 w-0.5 transition-colors duration-100',
            i === active ? 'bg-accent' : 'bg-transparent'
          )} />
          {item.label}
        </a>
      ))}
    </div>
  )
}

export { TopNav, MobileMenu, Tabs, Breadcrumb, Pagination, PrevNext, StepNav, SideNav, AnchorNav }
