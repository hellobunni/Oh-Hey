'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface TerminalDomain {
  label: string
  count: string
}

export interface HeroTerminalOHProps {
  meta?:      string
  headline?:  React.ReactNode
  body?:      string
  about?:     string[]
  domains?:   TerminalDomain[]
  className?: string
}

const GRID_STYLE: React.CSSProperties = {
  backgroundImage: [
    'repeating-linear-gradient(',
    '  to right,',
    '  rgba(12,12,12,0.06) 0px,',
    '  rgba(12,12,12,0.06) 1px,',
    '  transparent 1px,',
    '  transparent 14.285%',
    ')',
  ].join(''),
}

function BlinkCursor() {
  const [on, setOn] = useState(true)
  useEffect(() => {
    const id = setInterval(() => setOn(v => !v), 530)
    return () => clearInterval(id)
  }, [])
  return <span style={{ opacity: on ? 1 : 0 }}>_</span>
}

const DEFAULT_HEADLINE: React.ReactNode = (
  <>
    Notes from<br />
    a curious<br />
    <span className="text-accent">/</span>{' '}generalist.
  </>
)

export default function HeroTerminalOH({
  meta     = '~/oh-hey-lynae · idx 026 · updated Apr 2026',
  headline = DEFAULT_HEADLINE,
  body     = "A logbook of things I'm building, lifting, drawing, and obsessing over. Frontend craft sits next to print zines, squat PRs, and Lego shelves. Nothing here pretends to be siloed.",
  about    = [
    '// I write code, ship sites,',
    '// pull heavy, draw weird,',
    '// and collect too much plastic.',
  ],
  domains  = [
    { label: 'tech',     count: '14 posts' },
    { label: 'fitness',  count: '09 posts' },
    { label: 'creative', count: '06 posts' },
    { label: 'nerd',     count: '11 posts' },
  ],
  className,
}: HeroTerminalOHProps) {
  return (
    <section
      className={cn('bg-paper border-b border-line', className)}
      style={GRID_STYLE}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        {/* Meta row */}
        <div className="font-mono text-xs text-ink-mute mb-10">{meta}</div>

        {/* Two-column layout */}
        <div className="grid gap-12 items-start" style={{ gridTemplateColumns: '55fr 45fr' }}>
          {/* Left: headline + body */}
          <div>
            <h1
              className="font-sans font-black text-ink tracking-tight leading-[0.94] mb-8"
              style={{ fontSize: 'clamp(52px, 6.5vw, 80px)' }}
            >
              {headline}
            </h1>
            <p className="font-sans text-body text-ink-soft leading-normal max-w-[460px]">
              {body}
            </p>
          </div>

          {/* Right: terminal card */}
          <div className="border border-line-strong bg-paper-2 self-center">
            {/* Dots header */}
            <div className="flex gap-[7px] items-center px-4 py-[11px] border-b border-line">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="w-[11px] h-[11px] rounded-full"
                  style={{ background: 'rgba(12,12,12,0.15)' }}
                />
              ))}
            </div>
            {/* Terminal body */}
            <div className="px-5 py-4 font-mono text-sm leading-relaxed">
              <div>
                <span className="text-accent">$</span> cat about.txt
              </div>
              {about.map((line, i) => (
                <div key={i} className="text-ink-soft">{line}</div>
              ))}
              <div className="mt-2">
                <span className="text-accent">$</span> ls -l ./domains
              </div>
              {domains.map(d => (
                <div key={d.label}>
                  <span className="inline-block w-[72px]">{d.label}</span>
                  <span className="text-ink-soft">{d.count}</span>
                </div>
              ))}
              <div className="mt-1">
                <span className="text-accent">$</span>{' '}
                <BlinkCursor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
