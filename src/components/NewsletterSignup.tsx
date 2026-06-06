'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Subscription failed')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="px-6 py-24 border-zinc-100">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-bold text-zinc-900 mb-1">Stay in the loop.</h2>
            <p className="text-sm text-zinc-500">New posts across all four domains, straight to your inbox.</p>
          </div>
          {submitted ? (
            <p className="text-sm font-medium text-emerald-600">You're in. Talk soon.</p>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400 w-full"
                />
                <Button type="submit" disabled={loading} className="bg-zinc-900 text-white hover:bg-zinc-700 shrink-0">
                  {loading ? 'Subscribing…' : 'Subscribe'}
                </Button>
              </form>
              {error && <p className="text-sm text-red-500">{error}</p>}
            </>
          )}
        </div>

        <div className="flex flex-col gap-4 sm:border-l sm:border-zinc-100 sm:pl-12">
          <div>
            <h2 className="text-lg font-bold text-zinc-900 mb-1">Want to work together?</h2>
            <p className="text-sm text-zinc-500">I'm available for consulting, collaborations, and projects.</p>
          </div>

          <a
            href="/work-with-me"
            className="self-start inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 h-9 text-sm font-medium text-black hover:bg-primary/80 transition-all"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  )
}
