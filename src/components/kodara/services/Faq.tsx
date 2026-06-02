'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { FAQS } from '@/data/services.data'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="grid grid-cols-[1fr_2fr] items-start gap-20 border-t border-line px-[clamp(20px,5vw,80px)] py-[72px] max-lg:grid-cols-1 max-lg:gap-10 bg-kodara-accent-soft/20">
      <div>
        <div className="mb-4 font-mono text-sm uppercase tracking-wider text-accent">
          Frequently asked
        </div>
        <h2 className="font-sans text-[40px] font-bold leading-snug tracking-tight text-ink">
          Eight answers<br />before <span className="text-accent">you ask.</span>
        </h2>
        <p className="mt-5 max-w-[320px] text-body text-ink-2">
          The questions I hear most on first calls. If yours isn't here, the questionnaire has a
          free-text field for it.
        </p>
      </div>

      <div className="border-t border-line-strong">
        {FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="border-b border-line py-6">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-sans text-lg font-semibold tracking-tight text-ink max-[640px]:text-base">
                  <span className="mr-4 font-mono text-sm tracking-[0.1em] text-accent">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  {f.q}
                </span>
                <span className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center border border-line-strong font-mono text-accent',
                  isOpen && 'border-accent bg-accent text-paper',
                )}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <p className="max-w-[720px] pt-4 text-body leading-relaxed text-ink-2">{f.a}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
