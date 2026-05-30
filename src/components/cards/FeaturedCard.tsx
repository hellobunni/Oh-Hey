import { cn } from '@/lib/utils'
import type { Domain } from '@/components/ui/post-row'
import { CardShell } from './CardShell'
import type { FeaturedCardProps } from './types'

const DOMAIN_LABELS: Record<Domain, string> = {
  tech: 'TECH',
  fitness: 'FITNESS',
  creative: 'CREATIVE',
  nerd: 'NERD STUFF',
}

export function FeaturedCard({
  prefix,
  domain,
  title,
  date,
  readTime,
  href,
  className,
}: Omit<FeaturedCardProps, 'variant'>) {
  const domainLabel = DOMAIN_LABELS[domain]
  const eyebrow = [prefix, domainLabel].filter(Boolean).join(' · ')

  return (
    <CardShell href={href} className={cn('card--featured', className)}>
      <div className="card-eyebrow" style={{ color: `var(--color-${domain})` }}>
        {eyebrow}
      </div>
      <div className="card-title card-title--md" style={{ marginTop: '12px' }}>
        {title}
      </div>
      <div className="card-meta" style={{ marginTop: '8px' }}>
        {date}{readTime && ` · ${readTime}`}
      </div>
    </CardShell>
  )
}
