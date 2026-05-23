'use client'

import { useState } from 'react'
import Link from 'next/link'
import '../../styles/lv.css'

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
      <div className="lv-a lv-q">
        <nav className="lv-q-nav">
          <Link href="/" className="lv-q-wordmark">Lunar Vega</Link>
        </nav>
        <div className="lv-q-success">
          <div className="lv-q-success-inner">
            <p className="lv-q-success-eyebrow">Submission received</p>
            <h1 className="lv-q-success-headline">
              Thanks —<br /><em>I&apos;ll be in touch.</em>
            </h1>
            <div className="lv-q-success-divider" />
            <p className="lv-q-success-body">
              I review every submission personally and respond within 48 hours if it&apos;s a fit.
            </p>
            <Link href="/" className="lv-q-success-link">← Back to oh-hey-lynae</Link>
          </div>
        </div>
      </div>
    )
  }

  const progressPct = ((step + 1) / TOTAL_STEPS) * 100

  return (
    <div className="lv-a lv-q">
      <nav className="lv-q-nav">
        <Link href="/" className="lv-q-wordmark">Lunar Vega</Link>
        <Link href="/consulting" className="lv-q-back">← Consulting</Link>
      </nav>

      <main className="lv-q-main">
        <div className="lv-q-inner">
          <p className="lv-q-eyebrow">New inquiry</p>
          <h1 className="lv-q-headline">Let&apos;s see if<br />we&apos;re a fit.</h1>
          <p className="lv-q-step-count">Step {step + 1} of {TOTAL_STEPS}</p>

          <div className="lv-q-progress-track">
            <div className="lv-q-progress-fill" style={{ width: `${progressPct}%` }} />
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
                <p className="lv-q-question">What&apos;s your rough budget?</p>
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
