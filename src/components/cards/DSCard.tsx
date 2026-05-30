import { FeaturedCard } from './FeaturedCard'
import { NewsletterCard } from './NewsletterCard'
import { OfferingCard } from './OfferingCard'
import type { DSCardProps } from './types'

export function DSCard(props: DSCardProps) {
  if (props.variant === 'offering') return <OfferingCard {...props} />
  if (props.variant === 'newsletter') return <NewsletterCard {...props} />

  return <FeaturedCard {...props} />
}
