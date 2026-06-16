import { notFound } from 'next/navigation'
import { PROJECTS } from '@/data/work.data'
import { CtaSection } from '@/components/kodara/CtaSection'

const GRID =
  '[background-image:linear-gradient(to_right,rgba(37,99,235,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.07)_1px,transparent_1px)] [background-size:calc(100%/12)_96px]'

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div>
      {/* Hero */}
      <section className={`border-b border-line px-[clamp(20px,5vw,80px)] pb-14 pt-16 ${GRID}`}>
        <div className="mb-12 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
          <span>KODARA</span>
          <span className="text-ink-mute">/</span>
          <a href="/consulting/work" className="hover:text-accent transition-colors">Work</a>
          <span className="text-ink-mute">/</span>
          <span className="text-accent">{project.client}</span>
        </div>

        <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent before:h-px before:w-8 before:bg-accent before:content-['']">
          {project.tag}
        </div>

        <h1 className="max-w-4xl font-sans font-extrabold leading-[0.94] tracking-tight text-ink [font-size:clamp(36px,5vw,80px)]">
          {project.headline}
        </h1>

        {/* Meta strip */}
        <div className="mt-10 flex flex-wrap gap-10 border-t border-line pt-8 font-mono">
          {([
            ['Client', project.client],
            ['Year',   project.year],
            ['Role',   project.role],
          ] as const).map(([k, v]) => (
            <div key={k}>
              <div className="text-xxs uppercase tracking-[0.18em] text-ink-mute">{k}</div>
              <div className="mt-1 text-sm text-ink">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-line px-[clamp(20px,5vw,80px)] py-16">
        <div className="grid grid-cols-[2fr_1fr] gap-16 max-lg:grid-cols-1 max-lg:gap-12">
          <div className="space-y-12">
            {/* Overview */}
            <div>
              <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Overview
              </h2>
              <p className="text-base leading-relaxed text-ink-2">{project.overview}</p>
            </div>

            {/* What I Did */}
            <div>
              <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                What I Did
              </h2>
              <p className="text-base leading-relaxed text-ink-2">{project.whatIDid}</p>
            </div>

            {/* Outcome */}
            <div>
              <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Outcome
              </h2>
              <p className="text-base leading-relaxed text-ink-2">{project.outcome}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="border border-line p-6">
              <div className="mb-4 font-mono text-xxs uppercase tracking-[0.18em] text-ink-mute">
                Tags
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-line px-3 py-1 font-mono text-xxs uppercase tracking-[0.12em] text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next nav */}
      <section className="border-b border-line">
        <div className="grid grid-cols-2 max-sm:grid-cols-1">
          {(() => {
            const idx = PROJECTS.findIndex((p) => p.slug === slug)
            const prev = PROJECTS[idx - 1]
            const next = PROJECTS[idx + 1]
            return (
              <>
                {prev ? (
                  <a
                    href={`/consulting/work/${prev.slug}`}
                    className="group flex flex-col gap-2 border-r border-line p-8 transition-colors hover:bg-paper-2 max-sm:border-r-0 max-sm:border-b"
                  >
                    <span className="font-mono text-xxs uppercase tracking-[0.18em] text-ink-mute transition-colors group-hover:text-accent">
                      ← Previous
                    </span>
                    <span className="text-sm font-medium text-ink">{prev.client}</span>
                  </a>
                ) : (
                  <div />
                )}
                {next ? (
                  <a
                    href={`/consulting/work/${next.slug}`}
                    className="group flex flex-col items-end gap-2 p-8 transition-colors hover:bg-paper-2"
                  >
                    <span className="font-mono text-xxs uppercase tracking-[0.18em] text-ink-mute transition-colors group-hover:text-accent">
                      Next →
                    </span>
                    <span className="text-sm font-medium text-ink">{next.client}</span>
                  </a>
                ) : (
                  <div />
                )}
              </>
            )
          })()}
        </div>
      </section>

      <CtaSection
        eyebrow="Have a project like this?"
        body="Tell me what you're building. I'll review and be in touch within 48 hours."
      />
    </div>
  )
}
