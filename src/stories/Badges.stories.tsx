import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'Components/Badges & Tags',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Data ─────────────────────────────────────────────────────────────────────

const DOMAINS = [
  { label: 'Tech',      variant: 'tech'     },
  { label: 'Fitness',   variant: 'fitness'  },
  { label: 'Creative',  variant: 'creative' },
  { label: 'Nerd Stuff',variant: 'nerd'     },
] as const

// ─── Helpers ──────────────────────────────────────────────────────────────────


// ─── Domain Tags & Status Pills ───────────────────────────────────────────────

export const DomainTags: Story = {
  name: 'Badges — domain tags & pills',
  render: () => (
    <div>
      <div className="font-mono text-xs tracking-wide uppercase text-ink-soft mb-2">09 · Components — Badges &amp; Tags</div>
      <h2 className="font-serif text-3xl font-bold mb-8">
        Domain tags &amp; status pills.
      </h2>

      {/* Squared */}
      <div className="font-mono text-xs tracking-wide uppercase text-ink-soft mb-3">Squared — terminal / post-row contexts</div>
      <div className="flex flex-wrap items-center gap-2 p-6 bg-paper-2 border border-line rounded-md mb-10">
        {DOMAINS.map(({ label, variant }) => (
          <Badge key={variant} variant={variant} shape="square">
            <span className={`badge-dot badge-${variant} w-1.5 h-1.5 rounded-full shrink-0`} />
            {label}
          </Badge>
        ))}
      </div>
      <div className="font-mono text-xs mb-8 text-ink-soft">Squared variant for terminal/post-row contexts.</div>

      {/* Pill */}
      <div className="font-mono text-xs tracking-wide uppercase text-ink-soft mb-3">Pill — editorial / featured contexts</div>
      <div className="flex flex-wrap items-center gap-2 p-6 bg-paper-2 border border-line rounded-md mb-10">
        {DOMAINS.map(({ label, variant }) => (
          <Badge key={variant} variant={variant} shape="pill">
            <span className={`badge-dot badge-${variant} w-1.5 h-1.5 rounded-full shrink-0`} />
            {label}
          </Badge>
        ))}
      </div>
      <div className="font-mono text-xs mb-8 text-ink-soft">Pill variant for editorial/featured contexts.</div>
    </div>
  ),
}

// ─── All Variants Side-by-Side ────────────────────────────────────────────────

export const AllVariants: Story = {
  name: 'Badges — all variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {(['square', 'pill'] as const).map((shape) => (
        <div key={shape}>
          <div className="font-mono text-xs tracking-wide uppercase text-ink-soft mb-3">{shape === 'square' ? 'Squared' : 'Pill'}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {DOMAINS.map(({ label, variant }) => (
              <Badge key={variant} variant={variant} shape={shape}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                  background: `var(--color-${variant})`,
                }} />
                {label}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

// ─── CSS Class Usage ──────────────────────────────────────────────────────────

export const CSSClasses: Story = {
  name: 'Badges — CSS classes',
  render: () => (
    <div>
      <div className="font-mono text-xs tracking-wide uppercase text-ink-soft mb-3">Via .badge + .badge-&#123;domain&#125; classes</div>
      <div className="flex flex-wrap items-center gap-2 p-6 bg-paper-2 border border-line rounded-md mb-10 flex-col">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {DOMAINS.map(({ label, variant }) => (
            <span key={variant} className={`badge badge-${variant}`}>
              <span className="badge-dot" />
              {label}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {DOMAINS.map(({ label, variant }) => (
            <span key={variant} className={`badge badge-pill badge-${variant}`}>
              <span className="badge-dot" />
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="font-mono text-xs mb-8 text-ink-soft">
        Raw CSS — no JS required. Use when rendering server-side markup or in MDX.
      </div>
    </div>
  ),
}
