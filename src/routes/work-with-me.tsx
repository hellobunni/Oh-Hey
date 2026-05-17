import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'


export const Route = createFileRoute('/work-with-me')({ component: WorkWithMePage })

function WorkWithMePage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [freelanceOpen, setFreelanceOpen] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    // TODO: wire up to email service
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-zinc-900 leading-none mb-4">
          Let's work<br />together.
        </h1>
        <p className="text-base text-zinc-500 mb-16 max-w-md">
          I'm open to consulting, creative collaborations, and interesting projects.
          Drop me a note and I'll get back to you.
        </p>

        {submitted ? (
          <div className="border border-zinc-100 rounded-2xl px-8 py-12 text-center">
            <p className="text-lg font-bold text-zinc-900 mb-1">Got it — talk soon.</p>
            <p className="text-sm text-zinc-500">I'll be in touch within a few days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or idea…"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="self-start bg-zinc-900 text-white hover:bg-zinc-700 rounded-full px-6"
            >
              Send message →
            </Button>
          </form>
        )}
      </div>
    </main>
  )
}
