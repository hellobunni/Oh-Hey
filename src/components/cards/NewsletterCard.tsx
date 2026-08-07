import { Mail } from 'lucide-react'
import { CardShell } from './CardShell'
import type { NewsletterCardProps } from './types'

export function NewsletterCard({
  icon,
  label = 'NEWSLETTER',
  headline,
  tagline,
  cta,
  href,
  className,
}: Omit<NewsletterCardProps, 'variant'>) {
  const resolvedIcon = icon ?? <Mail size={12} strokeWidth={2} aria-hidden />

  return (
    <CardShell href={href} className={className}>
      <div className="card-eyebrow card-eyebrow--accent inline-flex items-center gap-2">
        {resolvedIcon}
        {label}
      </div>
      <div className="card-title card-title--lg" style={{ marginTop: '14px' }}>
        {headline}
      </div>
      {tagline && (
        <div className="card-body" style={{ marginTop: '12px' }}>{tagline}</div>
      )}
      {cta && (
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.08em',
            color: 'var(--color-accent)',
          }}
        >
          {cta}
        </div>
      )}
    </CardShell>
  )
} 

