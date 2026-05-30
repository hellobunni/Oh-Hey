import React from 'react'
import { cn } from '@/lib/utils'
import { TopNav, type NavLink, type NavLinksAlign } from '@/components/ui/navigation'

const OH_HEY_LINKS: NavLink[] = [
  { label: 'Writing', active: true },
  { label: 'Tech' },
  { label: 'Fitness' },
  { label: 'Creative' },
  { label: 'Nerd' },
  { label: 'About' },
]

const KODARA_LINKS: NavLink[] = [
  { label: 'Approach' },
  { label: 'Services', active: true },
  { label: 'Process' },
  { label: 'Industries' },
]

interface NavRow {
  name: string
  arg:  string
  node: React.ReactNode
}

const BRAND_ROWS: NavRow[] = [
  {
    name: 'oh-hey-lynae · links left (default)',
    arg:  'brand="oh-hey-lynae" linksAlign="left"',
    node: <TopNav brand="oh-hey-lynae" links={OH_HEY_LINKS} cta={{ label: 'Subscribe →' }} linksAlign="left" />,
  },
  {
    name: 'oh-hey-lynae · links center',
    arg:  'brand="oh-hey-lynae" linksAlign="center"',
    node: <TopNav brand="oh-hey-lynae" links={OH_HEY_LINKS} cta={{ label: 'Subscribe →' }} linksAlign="center" />,
  },
  {
    name: 'oh-hey-lynae · links right',
    arg:  'brand="oh-hey-lynae" linksAlign="right"',
    node: <TopNav brand="oh-hey-lynae" links={OH_HEY_LINKS} cta={{ label: 'Subscribe →' }} linksAlign="right" />,
  },
  {
    name: 'Kodara · links left',
    arg:  'brand="kodara" linksAlign="left"',
    node: <TopNav brand="kodara" links={KODARA_LINKS} cta={{ label: 'Start a project →' }} linksAlign="left" />,
  },
  {
    name: 'Kodara · links center',
    arg:  'brand="kodara" linksAlign="center"',
    node: <TopNav brand="kodara" links={KODARA_LINKS} cta={{ label: 'Start a project →' }} linksAlign="center" />,
  },
  {
    name: 'Kodara · links right',
    arg:  'brand="kodara" linksAlign="right"',
    node: <TopNav brand="kodara" links={KODARA_LINKS} cta={{ label: 'Start a project →' }} linksAlign="right" />,
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
        Components — Navigation
      </div>
      <h2 className="font-serif text-3xl font-bold mb-2">
        Two brands, <em>three alignments.</em>
      </h2>
      <p className="font-mono text-sm text-ink-soft mb-8 max-w-2xl leading-relaxed">
        <code className="text-accent">brand</code> sets the visual identity.{' '}
        <code className="text-accent">linksAlign</code> controls where nav links sit: left, center, or right.
      </p>

      <div className="font-mono text-xs tracking-wide uppercase text-ink-soft mb-3">
        Top nav · 2 brands × 3 alignments
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
