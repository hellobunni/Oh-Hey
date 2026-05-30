import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const nav = cva(
  'sticky top-0 z-10 flex items-center justify-between border-b backdrop-blur-md bg-[color-mix(in_oklab,var(--paper)_58%,transparent)]',
  {
    variants: {
      brand: {
        'oh-a': 'border-line bg-[color-mix(in_oklab,var(--paper)_58%,transparent)]',
        'lv-a': 'border-red-500',
      },
      density: {
        cozy: 'px-[clamp(20px,5vw,80px)] py-[22px]',
        packed: 'px-[var(--pad-x)] py-4',
      },
    },
    defaultVariants: { brand: 'oh-a', density: 'cozy' },
  },
)

const navLink = cva(
  'font-mono text-xs text-ink-soft transition-colors hover:text-ink',
  {
    variants: {
      active: { true: 'text-ink', false: '' },
    },
    defaultVariants: { active: false },
  },
)

type NavItem = { label: string; href: string; active?: boolean }

interface NavProps extends VariantProps<typeof nav> {
  brandLabel?: string
  items?: NavItem[]
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: 'Writing', href: '/writing', active: true },
  { label: 'Tech', href: '/tech' },
  { label: 'Fitness', href: '/fitness' },
  { label: 'Creative', href: '/creative' },
  { label: 'Nerd', href: '/nerd' },
  { label: 'About', href: '/about' },
]

function Nav({
  brand,
  density,
  brandLabel = 'oh-hey-lynae',
  items = DEFAULT_ITEMS,
  ctaLabel = 'Subscribe →',
  ctaHref = '/subscribe',
  className,
}: NavProps) {
  return (
    <nav className={cn(nav({ brand, density }), className)}>
     
      {brandLabel ? <a className="inline-flex items-center gap-2.5 font-mono font-semibold text-sm text-ink no-underline">
            <span className="w-2 h-2 bg-accent shrink-0" />
            oh-hey-lynae
          </a> : <a className="inline-flex items-center gap-2.5 font-mono font-semibold text-sm text-ink no-underline">
            <span className="w-2 h-2 bg-accent shrink-0" />
            Kodara
          </a>}

      <div className="flex items-center gap-7">
        {items.map((item) => (
          <a key={item.href} href={item.href} className={navLink({ active: item.active })}>
            {item.label}
          </a>
        ))}
      </div>

      <a
        href={ctaHref}
        className="border border-line-strong bg-paper px-3.5 py-2 font-mono text-xs text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        {ctaLabel}
      </a>
    </nav>
  )
}

export { Nav }
export type { NavProps, NavItem }