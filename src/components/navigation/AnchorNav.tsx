import { cn } from '@/lib/utils'
import React from 'react'

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

const AnchorNav = ({ items, label = '// ON THIS PAGE', className }: AnchorNavProps) => {
  const [active, setActive] = React.useState(() => items.findIndex(i => i.active))

  return (
    <div className={cn('flex flex-col pl-4 border-l border-line', className)}>
    <div className="font-mono text-xxs tracking-[0.1em] text-ink-mute mb-3">
      {label}
    </div>
    {items.map((item, i) => (
      <a
        key={item.label}
        className={cn(
          'relative block py-1.5 font-mono text-xs no-underline cursor-pointer transition-colors duration-100',
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

export default AnchorNav