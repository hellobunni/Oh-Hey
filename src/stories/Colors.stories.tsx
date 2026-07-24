import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Design System/Colors',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Brand Palette (hex reference) ────────────────────────────────────────────

const OHL_PALETTE = [
  { name: 'Deep',       hex: '#100f1a', label: 'canvas / page bg',    token: '--color-deep' },
  { name: 'Ink',        hex: '#1d1c29', label: 'surface / cards',      token: '--color-paper-2 (dark)' },
  { name: 'Card',       hex: '#2b2a3d', label: 'panels',               token: '--color-card (dark)' },
  { name: 'Primary',    hex: '#7ed6c0', label: 'primary / CTA',        token: '--color-primary' },
  { name: 'Accent',     hex: '#f2a7c3', label: 'accent / alert',       token: '--color-accent' },
  { name: 'Alert',      hex: '#e0559b', label: 'alert on light bg',    token: '--color-alert' },
  { name: 'Link',       hex: '#8fa8e8', label: 'links / info',         token: '--color-link' },
  { name: 'Paper',      hex: '#f6f3ec', label: 'light surface / bg',   token: '--color-paper (light)' },
  { name: 'Navy',       hex: '#3a3550', label: 'text on paper',        token: '--color-ink (light)' },
]

export const BrandPalette: Story = {
  name: 'Colors — OHL brand palette',
  render: () => (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">Foundations · Colors</div>
      <h2 className="font-pixel text-2xl text-primary mb-1">BRAND PALETTE</h2>
      <p className="font-sans text-sm text-ink-soft mb-8 max-w-xl leading-relaxed">
        Nine palette values. Always use CSS tokens — never hardcode hex. Tokens auto-flip in dark mode via <code className="font-mono text-xs text-accent">data-theme="dark"</code>.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {OHL_PALETTE.map(({ name, hex, label, token }) => (
          <div key={token} style={{ width: 140 }}>
            <div style={{ height: 80, background: hex, borderRadius: 10, border: '1px solid rgba(0,0,0,0.06)' }} />
            <div className="font-sans font-bold text-sm mt-2">{name}</div>
            <div className="font-mono text-ink-soft" style={{ fontSize: 10, letterSpacing: '0.04em', marginTop: 2 }}>{hex}</div>
            <div className="font-sans text-ink-mute" style={{ fontSize: 11, marginTop: 2 }}>{label}</div>
            <div className="font-mono text-link" style={{ fontSize: 10, marginTop: 3 }}>{token}</div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const SurfaceContrast: Story = {
  name: 'Colors — surface contrast',
  parameters: { backgrounds: { default: 'deep' } },
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <div style={{ background: '#100f1a', padding: 28, borderRadius: 14, minWidth: 260, flex: 1 }}>
        <div className="font-pixel text-xs text-accent mb-4 tracking-widest">DARK MODE</div>
        <div style={{ background: '#1d1c29', borderRadius: 12, padding: 18, marginBottom: 10 }}>
          <div className="font-pixel text-sm text-primary mb-1">Surface card</div>
          <div className="font-sans text-xs" style={{ color: '#8a869e' }}>#1D1C29 · --color-paper-2 (dark)</div>
        </div>
        <div style={{ background: '#2b2a3d', borderRadius: 12, padding: 18 }}>
          <div className="font-pixel text-sm text-link mb-1">Panel card</div>
          <div className="font-sans text-xs" style={{ color: '#8a869e' }}>#2B2A3D · --color-card (dark)</div>
        </div>
        <div style={{ marginTop: 10, borderTop: '1px solid rgba(232,230,240,0.08)', paddingTop: 10 }}>
          <div className="font-sans text-xs" style={{ color: '#7ed6c0' }}>✦ Mint text on deep canvas</div>
          <div className="font-sans text-xs" style={{ color: '#f2a7c3', marginTop: 4 }}>✦ Pink alert on deep canvas</div>
          <div className="font-sans text-xs" style={{ color: '#8fa8e8', marginTop: 4 }}>✦ Periwinkle link on deep canvas</div>
        </div>
      </div>

      <div style={{ background: '#f6f3ec', padding: 28, borderRadius: 14, minWidth: 260, flex: 1, border: '1px solid rgba(0,0,0,0.07)' }}>
        <div className="font-pixel text-xs text-alert mb-4 tracking-widest">LIGHT MODE</div>
        <div style={{ background: '#eee9dd', borderRadius: 12, padding: 18, marginBottom: 10 }}>
          <div className="font-pixel text-sm" style={{ color: '#3a3550' }}>Surface card</div>
          <div className="font-sans text-xs" style={{ color: '#6d6880', marginTop: 4 }}>#EEE9DD · --color-paper-2 (light)</div>
        </div>
        <div style={{ background: '#dcd6ca', borderRadius: 12, padding: 18 }}>
          <div className="font-pixel text-sm" style={{ color: '#3a3550' }}>Panel card</div>
          <div className="font-sans text-xs" style={{ color: '#6d6880', marginTop: 4 }}>#DCD6CA · --color-card (light)</div>
        </div>
        <div style={{ marginTop: 10, borderTop: '1px solid rgba(43,40,56,0.08)', paddingTop: 10 }}>
          <div className="font-sans text-xs text-primary">✦ Mint accent on paper</div>
          <div className="font-sans text-xs text-alert" style={{ marginTop: 4 }}>✦ Hot-pink alert on paper</div>
          <div className="font-sans text-xs text-link" style={{ marginTop: 4 }}>✦ Periwinkle link on paper</div>
        </div>
      </div>
    </div>
  ),
}


