import { CardShell } from './CardShell'
import type { OfferingCardProps } from './types'

export function OfferingCard({
  index,
  indexLabel = 'OFFERING',
  title,
  subtitle,
  description,
  rateLabel = 'RATE',
  rateValue,
  href,
  className,
}: Omit<OfferingCardProps, 'variant'>) {
  const idx = String(index).padStart(2, '0')

  return (
    <CardShell href={href} className={className}>
      <div className="card-eyebrow">{idx} · {indexLabel}</div>
      <div className="card-title mt-6">{title}</div>
      {subtitle && (
        <div className="card-subtitle mt-1">{subtitle}</div>
      )}
      {description && (
        <div className="card-body mt-4">{description}</div>
      )}
      {rateValue && (
        <div className="card-footer mt-5">
          <span className="card-footer-label">{rateLabel}</span>
          <span className="card-footer-value">{rateValue}</span>
        </div>
      )}
    </CardShell>
  )
}
