import React from 'react'
import { cn } from '@/lib/utils'

export type BroadsheetBrand = 'oh-hey' | 'lv'

export interface HeroBroadsheetProps {
  brand?:     BroadsheetBrand
  meta?:      string
  headline?:  React.ReactNode
  sub?:       string
  children?:  React.ReactNode
  className?: string
}

// Column grid matches the brand's palette
const GRID_STYLE: Record<BroadsheetBrand, React.CSSProperties> = {
  'oh-hey': {
    backgroundImage: [
      'repeating-linear-gradient(',
      '  to right,',
      '  rgba(12,12,12,0.06) 0px,',
      '  rgba(12,12,12,0.06) 1px,',
      '  transparent 1px,',
      '  transparent 14.285%',
      ')',
    ].join(''),
  },
  lv: {
    backgroundImage: [
      'repeating-linear-gradient(',
      '  to right,',
      '  rgba(37,99,235,0.07) 0px,',
      '  rgba(37,99,235,0.07) 1px,',
      '  transparent 1px,',
      '  transparent 12.5%',
      ')',
    ].join(''),
  },
}

const BRAND_BG: Record<BroadsheetBrand, string> = {
  'oh-hey': 'bg-paper',
  lv:       'bg-white',
}

const BRAND_DEFAULTS: Record<BroadsheetBrand, {
  meta:     string
  headline: React.ReactNode
  sub:      string
}> = {
  'oh-hey': {
    meta:     'A LITTLE BIT OF EVERYTHING · OH-HEY-LYNAE',
    headline: (
      <>
        A little bit of{' '}
        <em className="not-italic text-accent font-serif">everything,</em>{' '}
        loudly.
      </>
    ),
    sub: "The logbook. Writing, building, lifting, drawing — all of it, nothing siloed.",
  },
  lv: {
    meta:     'DESIGN + ENGINEERING · KODARA',
    headline: (
      <>
        Built for founders{' '}
        <em className="not-italic text-accent">who ship.</em>
      </>
    ),
    sub: "Senior design and engineering, without the agency overhead.",
  },
}

export default function HeroBroadsheet({
  brand     = 'oh-hey',
  meta,
  headline,
  sub,
  children,
  className,
}: HeroBroadsheetProps) {
  const defs = BRAND_DEFAULTS[brand]
  const resolvedMeta     = meta     ?? defs.meta
  const resolvedHeadline = headline ?? defs.headline
  const resolvedSub      = sub      ?? defs.sub

  return (
    <section
      className={cn(BRAND_BG[brand], 'border-b border-line', className)}
      style={GRID_STYLE[brand]}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        {/* Meta */}
        <div className="font-mono text-xs text-ink-mute tracking-[0.1em] uppercase mb-10">
          {resolvedMeta}
        </div>

        {/* Mega headline */}
        <h1
          className="font-sans font-black text-ink tracking-tight leading-[0.92] max-w-[1000px] mb-6"
          style={{ fontSize: 'clamp(52px, 8vw, 112px)' }}
        >
          {resolvedHeadline}
        </h1>

        {/* Sub */}
        {resolvedSub && (
          <p className="font-sans text-body text-ink-soft leading-normal max-w-[560px] mb-12">
            {resolvedSub}
          </p>
        )}

        {/* Sub-grid slot */}
        {children && (
          <div className="border-t border-line pt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
