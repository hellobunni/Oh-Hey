import React from 'react'
import { cn } from '@/lib/utils'
import { TopNav, type NavLink } from '@/components/ui/navigation'

const OH_A_LINKS: NavLink[] = [
  { label: 'Writing', active: true },
  { label: 'Tech' },
  { label: 'Fitness' },
  { label: 'Creative' },
  { label: 'Nerd' },
  { label: 'About' },
]

const OH_B_LINKS: NavLink[] = [
  { label: 'The Log' },
  { label: 'Domains' },
  { label: 'Shop' },
  { label: 'About' },
  { label: 'Subscribe' },
]

const LV_A_LINKS: NavLink[] = [
  { label: 'Approach' },
  { label: 'Services', active: true },
  { label: 'Process' },
  { label: 'Industries' },
]

const LV_B_LINKS: NavLink[] = [
  { label: 'Approach' },
  { label: 'Offerings' },
  { label: 'Process' },
  { label: 'Industries' },
]

interface BrandRow {
  name: string
  arg: string
  node: React.ReactNode
}

const BRAND_ROWS: BrandRow[] = [
  {
    name: 'oh-hey-lynae',
    arg: '.brand-oh-a · default',
    node: <TopNav brand="oh-a" links={OH_A_LINKS} cta={{ label: 'Subscribe →' }} />,
  },
  {
    name: 'oh-hey-lynae · Editorial',
    arg: '.brand-oh-b',
    node: <TopNav brand="oh-b" links={OH_B_LINKS} cta={{ label: 'RSS' }} />,
  },
  {
    name: 'Kodara · Tech-forward',
    arg: '.brand-lv-a',
    node: <TopNav brand="lv-a" links={LV_A_LINKS} cta={{ label: 'Start a project →' }} />,
  },
  {
    name: 'Kodara · Premium',
    arg: '.brand-lv-b',
    node: <TopNav brand="lv-b" links={LV_B_LINKS} cta={{ label: 'Start a project →' }} />,
  },
]

function BrandCard({ name, arg, children }: { name: string; arg: string; children: React.ReactNode }) {
  return (
    <div className="border border-line-strong flex flex-col">
      <div className="flex justify-between items-center py-2 px-3 border-b border-line bg-paper-2 font-mono text-xs">
        <span className="font-medium">{name}</span>
        <span className="text-accent">{arg}</span>
      </div>
      <div>{children}</div>
    </div>
  )
}

export interface TopNavigationProps {
  className?: string
}

export default function TopNavigation({ className }: TopNavigationProps) {
  return (
    <div className={cn(className)}>
      <div className="font-mono text-xs tracking-wide uppercase text-ink-soft mb-2">
        13 · Components — Navigation
      </div>
      <h2 className="font-serif text-3xl font-bold mb-2">
        One nav, <em>four brand voices.</em>
      </h2>
      <p className="font-mono text-sm text-ink-soft mb-8 max-w-2xl leading-relaxed">
        Single shell (<code className="text-accent">.tk-nav</code>) with brand modifier classes. All read the same tokens.
      </p>

      <div className="font-mono text-xs tracking-wide uppercase text-ink-soft mb-3">
        Top nav · brand variants · 4 stories
      </div>
      <div className="flex flex-col gap-3">
        {BRAND_ROWS.map((row) => (
          <BrandCard key={row.name} name={row.name} arg={row.arg}>
            {row.node}
          </BrandCard>
        ))}
      </div>
    </div>
  )
}
