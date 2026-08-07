'use client'
import { useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
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
    <div className={cn('text-center', className)}>
      <Avatar
        variant="round"
        size={88}
        ring="accent"
        className="mx-auto mb-[22px]"
      />
      <h3 className="font-pixel text-2xl text-ink leading-snug">
        ONE LETTER,{' '}
        <span className="text-pink">EVERY OTHER SUNDAY.</span>
      </h3>
      <p className="mt-3.5 font-sans font-medium text-sm text-ink-soft max-w-[400px] mx-auto">
        Whatever I made, lifted, drew, or read that week. No tracking, no sponsors, easy unsubscribe.
      </p>

      {status === 'done' ? (
        <p className="mt-7 inline-flex items-center justify-center gap-2 font-pixel text-sm text-primary">
          <Check size={14} strokeWidth={3} aria-hidden />
          YOU'RE IN — SEE YOU SUNDAY
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-7 flex shadow-[5px_5px_0_rgba(0,0,0,0.4)] max-w-[480px] mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={cn(
              'flex-1 min-w-0 border-2 border-r-0 border-card bg-card-2 px-4 py-[15px]',
              'font-sans font-semibold text-base text-ink placeholder:text-ink-soft',
              'outline-none focus:border-mint transition-colors',
            )}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="font-pixel text-xs bg-mint text-ink border-0 px-5 cursor-pointer transition-colors hover:bg-pink disabled:opacity-50 whitespace-nowrap"
          >
            {status === 'loading' ? '...' : '+1UP'}
          </button>
        </form>
      )}
    </div>
  )
}

export { NewsletterSignup }
