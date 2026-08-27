import { cn } from '@/lib/utils'
import React from 'react'

export interface BreadcrumbItem {
    label: string
    href?: string
  }

export interface BreadcrumbProps {
    items:      BreadcrumbItem[]
    sep?:       string
    className?: string
  }

const Breadcrumb = ({items, sep='/', className} : BreadcrumbProps) => {
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
              ? <span className="text-pink">{item.label}</span>
              : <a className="text-ink-soft no-underline cursor-pointer transition-colors duration-100 hover:text-ink" href={item.href}>{item.label}</a>
            }
            {!isLast && <span className="text-ink-mute">{sep}</span>}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Breadcrumb