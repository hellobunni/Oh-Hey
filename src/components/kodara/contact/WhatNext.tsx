import { WHAT_NEXT } from '@/data/contact.data'

export function WhatNext() {
  return (
    <div className="px-[clamp(20px,5vw,80px)] py-16">
      <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        — What happens next
      </div>
      {WHAT_NEXT.map((s) => (
        <div key={s.n} className="grid grid-cols-[40px_1fr] gap-4 border-b border-line py-[18px] first:border-t">
          <div className="pt-[3px] font-mono text-xs text-accent">{s.n}</div>
          <div>
            <h4 className="font-sans text-base font-semibold tracking-tight text-ink">{s.h}</h4>
            <div className="mt-1 text-[13px] leading-snug text-ink-soft">{s.d}</div>
          </div>
        </div>
      ))}
      <div className="mt-7 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
        <span className="text-accent">●</span>{' '}
        Avg. response: <span className="text-accent">under 48 hours</span> · no sales sequence
      </div>
    </div>
  )
}
