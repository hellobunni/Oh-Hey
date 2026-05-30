import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'

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

const Pagination = ({ total, current, onChange, className }: PaginationProps) => {
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

export default Pagination