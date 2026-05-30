import { cn } from '@/lib/utils'
import React from 'react'


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

const SideNav = ({ groups, className }: SideNavProps) => {
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

export default SideNav