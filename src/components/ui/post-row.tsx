import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export type Domain = 'tech' | 'fitness' | 'creative' | 'nerd'

export const DOMAIN_LABELS: Record<Domain, string> = {
  tech:     'Tech',
  fitness:  'Fitness',
  creative: 'Creative',
  nerd:     'Nerd Stuff',
}

export interface PostRowData {
  index:    number
  title:    string
  domain:   Domain
  date:     string
  excerpt?: string
  href?:    string
}

function PostRow({ index, title, domain, date, excerpt, href, className }: PostRowData & { className?: string }) {
  const idx = String(index).padStart(2, '0')

  const inner = (
    <>
      <span className="post-row-idx">{idx}</span>
      <span className="post-row-body">
        <span className="post-row-title">{title}</span>
        {excerpt && <span className="post-row-excerpt">{excerpt}</span>}
      </span>
      <Badge variant={domain} shape="square">
        <span style={{ width: 6, height: 6, borderRadius: '50%', flexShrink: 0, background: `var(--color-${domain})` }} />
        {DOMAIN_LABELS[domain]}
      </Badge>
      <span className="post-row-date">{date}</span>
    </>
  )

  if (href) {
    return <a href={href} className={cn('post-row', className)}>{inner}</a>
  }

  return <div className={cn('post-row', className)}>{inner}</div>
}

function PostList({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('post-row-list', className)}>{children}</div>
}

export { PostRow, PostList }
