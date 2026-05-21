<<<<<<< HEAD:src/routes/questionnaire.tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import '../styles/lv.css'

export const Route = createFileRoute('/questionnaire')({
  head: () => ({
    meta: [{ title: "Let's Work Together — Lunar Vega" }],
  }),
  component: QuestionnairePage,
})
=======
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
>>>>>>> d44ae0fcfcf7a589454ff07977c7e729281afc90:src/app/questionnaire/page.tsx

type FormState = {
  projectType: string
  engagementType: string
  projectStage: string
  companySize: string
  timeline: string
  budget: string
  details: string
  name: string
  email: string
}

<<<<<<< HEAD:src/routes/questionnaire.tsx
function OptionCard({
  label,
  sublabel,
  selected,
  onClick,
}: {
  label: string
  sublabel?: string
  selected: boolean
  onClick: () => void
}) {
=======
function OptionCard({ label, sublabel, selected, onClick }: { label: string; sublabel?: string; selected: boolean; onClick: () => void }) {
>>>>>>> d44ae0fcfcf7a589454ff07977c7e729281afc90:src/app/questionnaire/page.tsx
  return (
    <button
      type="button"
      onClick={onClick}
      className={`lv-q-option${selected ? ' selected' : ''}`}
    >
      <span>{label}</span>
      {sublabel && <span className="lv-q-option-sublabel">{sublabel}</span>}
    </button>
  )
}

const TOTAL_STEPS = 7

export default function QuestionnairePage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormState>({
    projectType: '',
    engagementType: '',
    projectStage: '',
    companySize: '',
    timeline: '',
    budget: '',
    details: '',
    name: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function set(key: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function canAdvance() {
    switch (step) {
      case 0: return !!form.projectType
      case 1: return !!form.engagementType
      case 2: return !!form.projectStage
      case 3: return !!form.companySize
      case 4: return !!form.timeline
      case 5: return !!form.budget
      case 6: return !!form.name && !!form.email
      default: return false
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
<<<<<<< HEAD:src/routes/questionnaire.tsx
      <div className="lv-q">
        <nav className="lv-q-nav">
          <Link to="/" className="lv-q-wordmark">Lunar Vega</Link>
        </nav>
        <div className="lv-q-success">
          <div className="lv-q-success-inner">
            <p className="lv-q-success-eyebrow">Submission received</p>
            <h1 className="lv-q-success-headline">
              Thanks —<br /><em>I'll be in touch.</em>
            </h1>
            <div className="lv-q-success-divider" />
            <p className="lv-q-success-body">
              I review every submission personally and respond within 48 hours if it's a fit.
            </p>
            <Link to="/" className="lv-q-success-link">← Back to oh-hey-lynae</Link>
=======
      <main className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-lg mx-auto">
          <div className="border border-zinc-100 rounded-2xl px-8 py-16 text-center">
            <p className="text-lg font-bold text-zinc-900 mb-2">Thanks — I&apos;ll be in touch soon.</p>
            <p className="text-sm text-zinc-500">I review every submission and reach out within a few days.</p>
>>>>>>> d44ae0fcfcf7a589454ff07977c7e729281afc90:src/app/questionnaire/page.tsx
          </div>
        </div>
      </div>
    )
  }

  const progressPct = ((step + 1) / TOTAL_STEPS) * 100

  return (
<<<<<<< HEAD:src/routes/questionnaire.tsx
    <div className="lv-q">
      <nav className="lv-q-nav">
        <Link to="/" className="lv-q-wordmark">Lunar Vega</Link>
        <Link to="/consulting" className="lv-q-back">← Consulting</Link>
      </nav>
=======
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-lg mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 leading-none mb-3">
            Let&apos;s see if<br />we&apos;re a fit.
          </h1>
          <p className="text-sm text-zinc-500">Step {step + 1} of {TOTAL_STEPS}</p>
        </div>
>>>>>>> d44ae0fcfcf7a589454ff07977c7e729281afc90:src/app/questionnaire/page.tsx

      <main className="lv-q-main">
        <div className="lv-q-inner">
          <p className="lv-q-eyebrow">New inquiry</p>
          <h1 className="lv-q-headline">Let's see if<br />we're a fit.</h1>
          <p className="lv-q-step-count">Step {step + 1} of {TOTAL_STEPS}</p>

<<<<<<< HEAD:src/routes/questionnaire.tsx
          <div className="lv-q-progress-track">
            <div className="lv-q-progress-fill" style={{ width: `${progressPct}%` }} />
=======
        <form onSubmit={handleSubmit}>
          {step === 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-zinc-900 mb-1">What type of work are you looking for?</h2>
              {[
                'Design system',
                'Frontend development',
                'Full-stack development',
                'UI/UX consulting',
                'Brand & visual design',
                'Something else',
              ].map((opt) => (
                <OptionCard key={opt} label={opt} selected={form.projectType === opt} onClick={() => set('projectType', opt)} />
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-zinc-900 mb-1">What kind of engagement are you thinking?</h2>
              {[
                { label: 'Quick single-page site', sublabel: 'Flat rate · $500' },
                { label: 'Monthly retainer', sublabel: 'Ongoing support & work · ~$1,000/mo' },
                { label: 'One-time project', sublabel: 'Scoped & priced per project' },
                { label: 'Ongoing collaboration', sublabel: 'Long-term partnership, flexible scope' },
                { label: 'Not sure yet', sublabel: undefined },
              ].map(({ label, sublabel }) => (
                <OptionCard
                  key={label}
                  label={label}
                  sublabel={sublabel}
                  selected={form.engagementType === label}
                  onClick={() => set('engagementType', label)}
                />
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-zinc-900 mb-1">Where is your project right now?</h2>
              {[
                'Starting from scratch',
                'Early prototype or MVP',
                'Existing product — adding features',
                'Existing product — needs a rethink',
                'Ongoing maintenance & scaling',
              ].map((opt) => (
                <OptionCard key={opt} label={opt} selected={form.projectStage === opt} onClick={() => set('projectStage', opt)} />
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-zinc-900 mb-1">How big is your team or company?</h2>
              {[
                'Just me',
                '2–10 people',
                '11–50 people',
                '51–200 people',
                '200+ people',
              ].map((opt) => (
                <OptionCard key={opt} label={opt} selected={form.companySize === opt} onClick={() => set('companySize', opt)} />
              ))}
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-zinc-900 mb-1">When do you need to get started?</h2>
              {[
                'As soon as possible',
                'Within the next month',
                '1–3 months from now',
                '3–6 months from now',
                'Just exploring for now',
              ].map((opt) => (
                <OptionCard key={opt} label={opt} selected={form.timeline === opt} onClick={() => set('timeline', opt)} />
              ))}
            </div>
          )}

          {step === 5 && (
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-zinc-900 mb-1">What&apos;s your rough budget?</h2>
              {[
                'Under $5,000',
                '$5,000 – $15,000',
                '$15,000 – $50,000',
                '$50,000+',
                'Not sure yet',
              ].map((opt) => (
                <OptionCard key={opt} label={opt} selected={form.budget === opt} onClick={() => set('budget', opt)} />
              ))}
            </div>
          )}

          {step === 6 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-lg font-bold text-zinc-900 mb-1">Last step — tell me about yourself.</h2>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
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
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  required
                  className="bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="details" className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Anything else? <span className="normal-case font-normal">(optional)</span>
                </label>
                <textarea
                  id="details"
                  placeholder="Share any extra context, links, or questions…"
                  value={form.details}
                  onChange={(e) => set('details', e.target.value)}
                  rows={4}
                  className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 resize-none"
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-10">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors"
              >
                ← Back
              </button>
            ) : (
              <span />
            )}

            {step < TOTAL_STEPS - 1 ? (
              <Button
                type="button"
                disabled={!canAdvance()}
                onClick={() => setStep((s) => s + 1)}
                className="bg-zinc-900 text-white hover:bg-zinc-700 rounded-full px-6 disabled:opacity-30"
              >
                Next →
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!canAdvance()}
                className="bg-zinc-900 text-white hover:bg-zinc-700 rounded-full px-6 disabled:opacity-30"
              >
                Submit →
              </Button>
            )}
>>>>>>> d44ae0fcfcf7a589454ff07977c7e729281afc90:src/app/questionnaire/page.tsx
          </div>

          <form onSubmit={handleSubmit}>
            {step === 0 && (
              <div>
                <p className="lv-q-question">What type of work are you looking for?</p>
                <div className="lv-q-options">
                  {[
                    'Strategic Consulting',
                    'UX / Product Audit',
                    'Brand & Visual Design',
                    'Full-Stack Build',
                    'Fractional Tech Leadership',
                    'Something else',
                  ].map((opt) => (
                    <OptionCard key={opt} label={opt} selected={form.projectType === opt} onClick={() => set('projectType', opt)} />
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <p className="lv-q-question">What kind of engagement are you thinking?</p>
                <div className="lv-q-options">
                  {[
                    { label: 'The Blueprint', sublabel: 'Audit & strategy · hourly' },
                    { label: 'The Build', sublabel: 'Project engagement · scoped per project' },
                    { label: 'The Partner', sublabel: 'Fractional retainer · from $1,000/mo' },
                    { label: 'Not sure yet', sublabel: undefined },
                  ].map(({ label, sublabel }) => (
                    <OptionCard
                      key={label}
                      label={label}
                      sublabel={sublabel}
                      selected={form.engagementType === label}
                      onClick={() => set('engagementType', label)}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="lv-q-question">Where is your project right now?</p>
                <div className="lv-q-options">
                  {[
                    'Starting from scratch',
                    'Early prototype or MVP',
                    'Existing product — adding features',
                    'Existing product — needs a rethink',
                    'Ongoing maintenance & scaling',
                  ].map((opt) => (
                    <OptionCard key={opt} label={opt} selected={form.projectStage === opt} onClick={() => set('projectStage', opt)} />
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="lv-q-question">How big is your team or company?</p>
                <div className="lv-q-options">
                  {[
                    'Just me',
                    '2–10 people',
                    '11–50 people',
                    '51–200 people',
                    '200+ people',
                  ].map((opt) => (
                    <OptionCard key={opt} label={opt} selected={form.companySize === opt} onClick={() => set('companySize', opt)} />
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <p className="lv-q-question">When do you need to get started?</p>
                <div className="lv-q-options">
                  {[
                    'As soon as possible',
                    'Within the next month',
                    '1–3 months from now',
                    '3–6 months from now',
                    'Just exploring for now',
                  ].map((opt) => (
                    <OptionCard key={opt} label={opt} selected={form.timeline === opt} onClick={() => set('timeline', opt)} />
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <p className="lv-q-question">What's your rough budget?</p>
                <div className="lv-q-options">
                  {[
                    'Under $5,000',
                    '$5,000 – $15,000',
                    '$15,000 – $50,000',
                    '$50,000+',
                    'Not sure yet',
                  ].map((opt) => (
                    <OptionCard key={opt} label={opt} selected={form.budget === opt} onClick={() => set('budget', opt)} />
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p className="lv-q-question">Last step — tell me about yourself.</p>
                <div className="lv-q-field">
                  <label htmlFor="name" className="lv-q-label">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    required
                    className="lv-q-input"
                  />
                </div>
                <div className="lv-q-field">
                  <label htmlFor="email" className="lv-q-label">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    required
                    className="lv-q-input"
                  />
                </div>
                <div className="lv-q-field">
                  <label htmlFor="details" className="lv-q-label">
                    Anything else? <span>(optional)</span>
                  </label>
                  <textarea
                    id="details"
                    placeholder="Share any extra context, links, or questions…"
                    value={form.details}
                    onChange={(e) => set('details', e.target.value)}
                    rows={4}
                    className="lv-q-textarea"
                  />
                </div>
              </div>
            )}

            <div className="lv-q-controls">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="lv-q-btn-back"
                >
                  ← Back
                </button>
              ) : (
                <span />
              )}

              {step < TOTAL_STEPS - 1 ? (
                <button
                  type="button"
                  disabled={!canAdvance()}
                  onClick={() => setStep((s) => s + 1)}
                  className="lv-q-btn-next"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canAdvance()}
                  className="lv-q-btn-next"
                >
                  Submit →
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
