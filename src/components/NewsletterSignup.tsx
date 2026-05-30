'use client'
import { useState, type FormEvent } from 'react'
import { cn } from '@/lib/utils'

interface NewsletterSignupProps {
  onSubscribe?: (email: string) => Promise<void> | void
  className?: string
}

function NewsletterSignup({ onSubscribe, className }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    try {
      await onSubscribe?.(email)
      setStatus('done')
    } catch {
      setStatus('idle')
    }
  }

  return (
    <div className={className}>
      <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent">
        ▣&nbsp;&nbsp;Newsletter
      </div>
      <h3 className="mt-3.5 text-[28px] font-bold leading-tight tracking-[-0.02em] text-ink">
        One letter,<br />every other Sunday.
      </h3>
      <p className="mt-3 max-w-[380px] text-sm text-ink-soft">
        Whatever I made, lifted, drew, or read that week. No tracking, no sponsors, easy unsubscribe.
      </p>

      {status === 'done' ? (
        <p className="mt-5 border border-[color-mix(in_oklab,var(--c-fitness)_35%,transparent)] bg-[var(--c-fitness-bg)] px-3.5 py-3 font-mono text-[13px] text-[var(--c-fitness)]">
          ✓ You're on the list. Talk soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={cn(
              'flex-1 border border-line-strong bg-paper-2 px-3.5 py-3',
              'font-mono text-[13px] text-ink outline-none focus:border-ink',
            )}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={cn(
              'border border-ink bg-ink px-[18px] py-3 font-mono text-[13px] text-paper',
              'transition-colors hover:bg-paper hover:text-ink disabled:opacity-50',
            )}
          >
            {status === 'loading' ? 'sending…' : 'subscribe →'}
          </button>
        </form>
      )}
    </div>
  )
}

export { NewsletterSignup }