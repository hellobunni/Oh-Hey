import type { ReactNode } from 'react'
import type { Domain } from '@/components/ui/post-row'

export interface BaseCardProps {
  href?: string
  className?: string
}

export interface OfferingCardProps extends BaseCardProps {
  variant: 'offering'
  index: number
  indexLabel?: string
  title: string
  subtitle?: string
  description?: string
  rateLabel?: string
  rateValue?: string
}

export interface NewsletterCardProps extends BaseCardProps {
  variant: 'newsletter'
  icon?: string
  label?: string
  headline: ReactNode
  tagline?: string
  cta?: string
}

export interface FeaturedCardProps extends BaseCardProps {
  variant: 'featured'
  prefix?: string
  domain: Domain
  title: string
  date: string
  readTime?: string
}

export type DSCardProps =
  | OfferingCardProps
  | NewsletterCardProps
  | FeaturedCardProps
