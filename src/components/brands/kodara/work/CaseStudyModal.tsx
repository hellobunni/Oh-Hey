'use client'

import { useEffect } from 'react'
import type { Project } from '@/data/work.data'

const LEFT_GRID =
  '[background-image:linear-gradient(to_right,rgba(37,99,235,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.09)_1px,transparent_1px)] [background-size:32px_32px]'

const SECTIONS = [
  { key: 'overview' as const, label: 'The Challenge' },
  { key: 'whatIDid' as const, label: 'The Approach' },
  { key: 'outcome'  as const, label: 'The Outcome'  },
]

export function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="relative flex max-h-[90vh] w-full max-w-[780px] overflow-hidden border border-line bg-paper shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Left panel ─────────────────────────────────────────── */}
        <div
          className={`relative flex w-[200px] shrink-0 flex-col bg-kodara-accent-soft-solid max-md:hidden ${LEFT_GRID}`}
        >
          <span className="px-6 pt-6 font-mono text-xxs uppercase tracking-[0.12em] text-accent">
            ● {project.tag}
          </span>

          {/* Logo image or placeholder */}
          <div className="mx-4 my-4 flex flex-1 items-center justify-center overflow-hidden border border-line">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.client} logo`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-ink/[0.06] p-6">
                <div className="h-8 w-24 rounded-sm bg-ink/10" />
              </div>
            )}
          </div>

          <span className="px-6 pb-6 font-mono text-xxs tracking-[0.12em] text-ink-mute">
            PROJECT {project.idx}
          </span>
        </div>

        {/* ── Right panel (scrollable) ────────────────────────────── */}
        <div className="flex flex-1 flex-col overflow-y-auto">

          {/* Header */}
          <div className="border-b border-line px-8 pb-7 pt-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
              Case Study · <span className="text-accent">{project.client}</span>
            </p>
            <h2 className="font-sans text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.0] tracking-tight text-ink">
              {project.title}
            </h2>
            <div className="mt-6 flex flex-wrap gap-8 font-mono">
              {([
                ['Year', project.year],
                ['Role', project.role],
                ['Type', project.tag],
              ] as const).map(([k, v]) => (
                <div key={k}>
                  <div className="text-xxs uppercase tracking-[0.18em] text-ink-mute">{k}</div>
                  <div className="mt-[3px] text-xs text-ink">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats (optional) */}
          {project.stats && (
            <div
              className="grid border-b border-line"
              style={{ gridTemplateColumns: `repeat(${project.stats.length}, 1fr)` }}
            >
              {project.stats.map((s, i) => (
                <div key={i} className="border-r border-line p-6 last:border-r-0">
                  <div className="font-sans text-3xl font-extrabold text-accent">{s.value}</div>
                  <div className="mt-1 font-mono text-xxs uppercase tracking-[0.14em] text-ink-mute">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Challenge / Approach / Outcome */}
          <div className="space-y-7 border-b border-line px-8 py-8">
            {SECTIONS.map(({ key, label }) => (
              <div key={key}>
                <div className="mb-2 flex items-center gap-2 font-mono text-xxs uppercase tracking-[0.18em] text-accent">
                  <span aria-hidden="true">→</span>
                  {label}
                </div>
                <p className="text-sm leading-relaxed text-ink-2">{project[key]}</p>
              </div>
            ))}
          </div>

          {/* Quote (optional) */}
          {project.quote && (
            <div className="border-b border-line bg-kodara-accent-soft-solid px-8 py-8">
              <blockquote className="font-serif text-xl italic leading-snug text-ink">
                "{project.quote.text}"
              </blockquote>
              <div className="mt-4 font-mono text-xxs uppercase tracking-[0.18em] text-ink-mute">
                — {project.quote.attribution}
              </div>
            </div>
          )}

          {/* Footer — stack + CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-2 font-mono text-xxs uppercase tracking-[0.18em] text-accent">
                <span aria-hidden="true">→</span> Stack
              </span>
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="border border-line px-3 py-1 font-mono text-xxs uppercase tracking-[0.12em] text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="/consulting/contact"
              className="shrink-0 bg-accent px-5 py-[10px] font-mono text-xxs uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90"
            >
              Start a project like this →
            </a>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-4 top-4 z-10 flex h-7 w-7 items-center justify-center border border-line bg-paper font-mono text-xs text-ink-mute transition-colors hover:border-accent hover:text-accent"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
