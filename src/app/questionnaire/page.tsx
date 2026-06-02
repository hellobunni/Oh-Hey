'use client'

import { useState } from 'react'
import { STEPS } from '@/data/questionnaire.data'
import { ProgressRail } from '@/components/kodara/start/ProgressRail'
import { ChoiceCard } from '@/components/kodara/start/ChoiceCard'

export default function QuestionnairePage() {
  const [step, setStep]       = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [done, setDone]       = useState(false)

  const s          = STEPS[step]
  const value      = answers[s.key] ?? ''
  const setValue   = (v: string) => setAnswers((a) => ({ ...a, [s.key]: v }))
  const canAdvance = value.trim().length > 0
  const isLast     = step === STEPS.length - 1

  const next = () => {
    if (!canAdvance) return
    if (isLast) {
      // TODO: POST `answers` to Resend server action
      setDone(true)
    } else {
      setStep((n) => n + 1)
    }
  }

  if (done) {
    return (
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
        <div className="max-w-[520px] border border-line-strong p-12 text-center">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-accent">● Received</div>
          <h2 className="font-sans text-[40px] font-bold leading-tight tracking-tight text-ink">
            Got it. Talk <span className="text-accent">soon.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[380px] text-base leading-relaxed text-ink-2">
            I read every submission personally and reply within 48 hours — yes, no, or who'd be a better fit. Want to skip the wait?
          </p>
          <a
            href="https://cal.com/your-handle"
            className="mt-8 inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            Book a call now <span>→</span>
          </a>
          <div className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-ink-mute">
            Or head back to <a href="/consulting" className="text-accent">kodara</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-[1fr_1.6fr] gap-24 px-[clamp(20px,5vw,80px)] py-24 max-lg:grid-cols-1 max-lg:gap-12">
      <ProgressRail current={step} />

      <div>
        {/* question header */}
        <div className="border-y border-line-strong py-9">
          <div className="font-serif text-[32px] font-light italic text-accent">
            {String(step + 1).padStart(2, '0')}
            <span className="ml-3.5 align-middle font-mono text-xs uppercase not-italic tracking-[0.18em] text-ink-mute">
              / {STEPS.length}
            </span>
          </div>
          <div className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-ink max-[640px]:text-2xl">
            {s.question}
          </div>
          {s.hint && (
            <div className="mt-3.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
              {s.hint}
            </div>
          )}
        </div>

        {/* answer input */}
        {s.type === 'choice' && (
          <div className="mt-8 grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
            {s.options!.map((o) => (
              <ChoiceCard
                key={o.key}
                optKey={o.key}
                name={o.name}
                sub={o.sub}
                selected={value === o.key}
                onClick={() => setValue(o.key)}
              />
            ))}
          </div>
        )}
        {s.type === 'text' && (
          <input
            autoFocus
            className="mt-8 w-full border border-line-strong bg-paper px-4 py-4 font-mono text-sm text-ink outline-none focus:border-accent placeholder:text-ink-mute"
            placeholder="Type your answer…"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
        {s.type === 'textarea' && (
          <textarea
            autoFocus
            rows={5}
            className="mt-8 w-full resize-none border border-line-strong bg-paper px-4 py-4 font-mono text-sm text-ink outline-none focus:border-accent placeholder:text-ink-mute"
            placeholder="A few sentences is plenty…"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}

        {/* nav controls */}
        <div className="mt-12 flex items-center justify-between">
          <button
            onClick={() => setStep((n) => Math.max(0, n - 1))}
            disabled={step === 0}
            className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-accent disabled:opacity-30"
          >
            ← Previous
          </button>
          <button
            onClick={next}
            disabled={!canAdvance}
            className="inline-flex items-center gap-3 bg-accent px-8 py-[18px] font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white transition-opacity disabled:opacity-30"
          >
            {isLast ? 'Submit' : 'Continue'} <span>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
