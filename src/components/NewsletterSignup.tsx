import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // TODO: wire up to email service
    setSubmitted(true)
  }

  return (
    <section className="px-6 py-20 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <h2 className="text-lg font-bold text-zinc-900 mb-1">
            Stay in the loop.
          </h2>
          <p className="text-sm text-zinc-500">
            New posts across all four domains, straight to your inbox.
          </p>
        </div>

        {submitted ? (
          <p className="text-sm font-medium text-emerald-600">
            You're in. Talk soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400 w-full sm:w-64"
            />
            <Button
              type="submit"
              className="bg-zinc-900 text-white hover:bg-zinc-700 shrink-0"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
