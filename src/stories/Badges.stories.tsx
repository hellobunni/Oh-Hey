import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'Design System/Badges & Tags',
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

const sectionLabel: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'var(--color-ink-soft, #6b6b66)',
  marginBottom: '8px',
}

const groupLabel: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: 'var(--color-ink-soft, #6b6b66)',
  marginBottom: '12px',
}

const compFrame: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '8px',
  padding: '24px',
  background: 'var(--color-paper-2, #f4f3ee)',
  border: '1px solid var(--color-line, rgba(12,12,12,0.08))',
  borderRadius: '4px',
  marginBottom: '10px',
}

const compMeta: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  color: 'var(--color-ink-soft, #6b6b66)',
  marginBottom: '32px',
}

// ─── Domain Tags & Status Pills ───────────────────────────────────────────────

export const DomainTags: Story = {
  name: 'Badges — domain tags & pills',
  render: () => (
    <div>
      <div style={sectionLabel}>09 · Components — Badges &amp; Tags</div>
      <h2 style={{ fontFamily: 'var(--font-serif, serif)', fontSize: '32px', fontWeight: 700, margin: '0 0 32px' }}>
        Domain tags &amp; status pills.
      </h2>

      {/* Squared */}
      <div style={groupLabel}>Squared — terminal / post-row contexts</div>
      <div style={compFrame}>
        {DOMAINS.map(({ label, variant }) => (
          <Badge key={variant} variant={variant} shape="square">
            <span className={`badge-dot badge-${variant}`} style={{ width: 6, height: 6, borderRadius: '50%', flexShrink: 0 }} />
            {label}
          </Badge>
        ))}
      </div>
      <div style={compMeta}>Squared variant for terminal/post-row contexts.</div>

      {/* Pill */}
      <div style={groupLabel}>Pill — editorial / featured contexts</div>
      <div style={compFrame}>
        {DOMAINS.map(({ label, variant }) => (
          <Badge key={variant} variant={variant} shape="pill">
            <span className={`badge-dot badge-${variant}`} style={{ width: 6, height: 6, borderRadius: '50%', flexShrink: 0 }} />
            {label}
          </Badge>
        ))}
      </div>
      <div style={compMeta}>Pill variant for editorial/featured contexts.</div>
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
          <div style={groupLabel}>{shape === 'square' ? 'Squared' : 'Pill'}</div>
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
      <div style={groupLabel}>Via .badge + .badge-&#123;domain&#125; classes</div>
      <div style={{ ...compFrame, flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
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
      <div style={compMeta}>
        Raw CSS — no JS required. Use when rendering server-side markup or in MDX.
      </div>
    </div>
  ),
}
