import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

const fullTime = [
  { year: 'Now',  company: 'Centaur AI',                    field: 'Software engineering' },
  { year: '2022', company: 'Fanatics, Inc.',                 field: 'Software engineering · UI & design systems' },
  { year: '2020', company: 'InsideOut Design + Development', field: 'Frontend development' },
  { year: '2018', company: 'Qualigence International',       field: 'Web development' },
]

const freelance = [
  { year: '2025', company: 'Bitwise',          field: 'Software engineering' },
  { year: '2021', company: 'Red Bull',          field: 'Software engineering' },
  { year: '2019', company: 'StockX',            field: 'Software engineering' },
  { year: '2016', company: 'Umich Athletics',   field: 'Design & marketing' },
  { year: '2015', company: 'Procerus Skin Care', field: 'Marketing & design' },
]

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

        <div className="mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-6">
            Experience
          </h2>
          <ul className="divide-y divide-zinc-100">
            {fullTime.map((item) => (
              <li key={`${item.year}-${item.company}`} className="flex items-baseline gap-6 py-4">
                <span className="text-xs text-zinc-400 w-10 shrink-0">{item.year}</span>
                <span className="text-sm font-semibold text-zinc-900 w-36 shrink-0">{item.company}</span>
                <span className="text-sm text-zinc-500">{item.field}</span>
              </li>
            ))}

            {/* Freelance dropdown row */}
            <li className="divide-y divide-zinc-100">
              <button
                type="button"
                onClick={() => setFreelanceOpen((o) => !o)}
                className="w-full flex items-baseline gap-6 py-4 text-left group"
              >
                <span className="text-xs text-zinc-400 w-10 shrink-0">2013</span>
                <span className="text-sm font-semibold text-zinc-900 w-36 shrink-0 group-hover:text-zinc-500 transition-colors">
                  Freelance
                </span>
                <span className="text-sm text-zinc-500 flex-1">Frontend development & design</span>
                <span className={`text-xs text-zinc-400 transition-transform duration-200 ${freelanceOpen ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>

              {freelanceOpen && (
                <ul className="divide-y divide-zinc-50 bg-zinc-50 rounded-lg mb-2">
                  {freelance.map((item) => (
                    <li key={`${item.year}-${item.company}`} className="flex items-baseline gap-6 px-4 py-3">
                      <span className="text-xs text-zinc-400 w-10 shrink-0">{item.year}</span>
                      <span className="text-sm font-medium text-zinc-700 w-36 shrink-0">{item.company}</span>
                      <span className="text-sm text-zinc-400">{item.field}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>

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
