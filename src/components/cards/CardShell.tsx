import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardShellProps {
  href?: string
  className?: string
  children: ReactNode
}

export function CardShell({ href, className, children }: CardShellProps) {
  const cardClassName = cn('card', className)

  if (href) {
    return (
      <a href={href} className={cardClassName}>
        {children}
      </a>
    )
  }

  return <div className={cardClassName}>{children}</div>
}
