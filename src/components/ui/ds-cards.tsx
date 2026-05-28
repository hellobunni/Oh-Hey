import React from 'react'
import { cn } from '@/lib/utils'
import type { Domain } from '@/components/ui/post-row'

// ─── Shared base ──────────────────────────────────────────────────────────────

interface BaseCardProps {
  href?:      string
  className?: string
}

// ─── Offering Card ────────────────────────────────────────────────────────────

export interface OfferingCardProps extends BaseCardProps {
  variant:     'offering'
  index:       number
  indexLabel?: string       // default "OFFERING"
  title:       string
  subtitle?:   string       // e.g. "AUDIT & STRATEGY"
  description?: string
  rateLabel?:  string       // default "RATE"
  rateValue?:  string       // e.g. "Hourly" — omit to hide footer
}

// ─── Newsletter Card ──────────────────────────────────────────────────────────

export interface NewsletterCardProps extends BaseCardProps {
  variant:   'newsletter'
  icon?:     string         // default "▣"
  label?:    string         // default "NEWSLETTER"
  headline:  React.ReactNode
  tagline?:  string
  cta?:      string         // optional action text
}

// ─── Featured Post Card ───────────────────────────────────────────────────────

export interface FeaturedCardProps extends BaseCardProps {
  variant:    'featured'
  prefix?:    string        // e.g. "NEXT →" — shown before domain label
  domain:     Domain
  title:      string
  date:       string
  readTime?:  string        // e.g. "5 MIN"
}

// ─── Discriminated union ──────────────────────────────────────────────────────

export type DSCardProps = OfferingCardProps | NewsletterCardProps | FeaturedCardProps

// ─── Internals ────────────────────────────────────────────────────────────────

const DOMAIN_LABELS: Record<Domain, string> = {
  tech:     'TECH',
  fitness:  'FITNESS',
  creative: 'CREATIVE',
  nerd:     'NERD STUFF',
}

function CardShell({
  href, className, children,
}: { href?: string; className?: string; children: React.ReactNode }) {
  if (href) {
    return <a href={href} className={cn('ds-card', className)}>{children}</a>
  }
  return <div className={cn('ds-card', className)}>{children}</div>
}

// ─── OfferingCard ─────────────────────────────────────────────────────────────

function OfferingCard({
  index, indexLabel = 'OFFERING', title, subtitle, description,
  rateLabel = 'RATE', rateValue, href, className,
}: Omit<OfferingCardProps, 'variant'>) {
  const idx = String(index).padStart(2, '0')
  return (
    <CardShell href={href} className={className}>
      <div className="ds-card-eyebrow">{idx} · {indexLabel}</div>
      <div className="ds-card-title" style={{ marginTop: '24px' }}>{title}</div>
      {subtitle && (
        <div className="ds-card-subtitle" style={{ marginTop: '6px' }}>{subtitle}</div>
      )}
      {description && (
        <div className="ds-card-body" style={{ marginTop: '16px' }}>{description}</div>
      )}
      {rateValue && (
        <div className="ds-card-footer" style={{ marginTop: '20px' }}>
          <span className="ds-card-footer-label">{rateLabel}</span>
          <span className="ds-card-footer-value">{rateValue}</span>
        </div>
      )}
    </CardShell>
  )
}

// ─── NewsletterCard ───────────────────────────────────────────────────────────

function NewsletterCard({
  icon = '▣', label = 'NEWSLETTER', headline, tagline, cta, href, className,
}: Omit<NewsletterCardProps, 'variant'>) {
  return (
    <CardShell href={href} className={className}>
      <div className="ds-card-eyebrow ds-card-eyebrow--accent">
        {icon}&nbsp;&nbsp;{label}
      </div>
      <div className="ds-card-title ds-card-title--lg" style={{ marginTop: '14px' }}>
        {headline}
      </div>
      {tagline && (
        <div className="ds-card-body" style={{ marginTop: '12px' }}>{tagline}</div>
      )}
      {cta && (
        <div style={{
          marginTop: 'auto', paddingTop: '16px',
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          letterSpacing: '0.08em', color: 'var(--color-accent)',
        }}>
          {cta}
        </div>
      )}
    </CardShell>
  )
}

// ─── FeaturedCard ─────────────────────────────────────────────────────────────

function FeaturedCard({
  prefix, domain, title, date, readTime, href, className,
}: Omit<FeaturedCardProps, 'variant'>) {
  const domainLabel = DOMAIN_LABELS[domain]
  const eyebrow = [prefix, domainLabel].filter(Boolean).join(' · ')

  return (
    <CardShell href={href} className={cn('ds-card--featured', className)}>
      <div className="ds-card-eyebrow" style={{ color: `var(--color-${domain})` }}>
        {eyebrow}
      </div>
      <div className="ds-card-title ds-card-title--md" style={{ marginTop: '12px' }}>
        {title}
      </div>
      <div className="ds-card-meta" style={{ marginTop: '8px' }}>
        {date}{readTime && ` · ${readTime}`}
      </div>
    </CardShell>
  )
}

// ─── Unified DSCard ───────────────────────────────────────────────────────────

function DSCard(props: DSCardProps) {
  if (props.variant === 'offering')    return <OfferingCard    {...props} />
  if (props.variant === 'newsletter')  return <NewsletterCard  {...props} />
  return <FeaturedCard {...props} />
}

export { DSCard, OfferingCard, NewsletterCard, FeaturedCard }
