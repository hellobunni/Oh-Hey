import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Foundation/Colors',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const LIGHT = [
  { name: 'Paper',       hex: '#fbfaf6', token: '--color-paper' },
  { name: 'Paper 2',     hex: '#EEE9DD', token: '--color-paper-2' },
  { name: 'Ink',         hex: '#2B2838', token: '--color-ink' },
  { name: 'Ink 2',       hex: '#3D3A4A', token: '--color-ink-2' },
  { name: 'Ink soft',    hex: '#6D6880', token: '--color-ink-soft' },
  { name: 'Ink mute',    hex: '#9A96B0', token: '--color-ink-mute' },
  { name: 'Primary',     hex: '#7ED6C0', token: '--color-primary' },
  { name: 'Accent',      hex: '#F2A7C3', token: '--color-accent' },
  { name: 'Link',        hex: '#8FA8E8', token: '--color-link' },
  { name: 'Alert',       hex: '#E0559B', token: '--color-alert' },
  { name: 'Gold',        hex: '#E9C46A', token: '--color-gold' },
  { name: 'Deep',        hex: '#100F1A', token: '--color-deep' },
  { name: 'Card',        hex: '#2B2A3D', token: '--color-card' },
  { name: 'Paper warm',  hex: '#2A2740', token: '--color-paper-warm' },
  { name: 'Paper ink',   hex: '#E8E6F0', token: '--color-paper-ink' },
]

const DARK = [
  { name: 'Paper',       hex: '#100F1A', token: '--color-paper' },
  { name: 'Paper 2',     hex: '#1D1C29', token: '--color-paper-2' },
  { name: 'Ink',         hex: '#E8E6F0', token: '--color-ink' },
  { name: 'Ink 2',       hex: '#C9C5E0', token: '--color-ink-2' },
  { name: 'Ink soft',    hex: '#8A869E', token: '--color-ink-soft' },
  { name: 'Ink mute',    hex: '#444258', token: '--color-ink-mute' },
  { name: 'Card',        hex: '#2B2A3D', token: '--color-card' },
  { name: 'Card 2',      hex: '#1D1C29', token: '--color-card-2' },
  { name: 'Deep',        hex: '#100F1A', token: '--color-deep' },
  { name: 'Paper warm',  hex: '#fbfaf6', token: '--color-paper-warm' },
  { name: 'Paper ink',   hex: '#2B2838', token: '--color-paper-ink' },
]

function SwatchGrid({
  items,
  border,
}: {
  items: { name: string; hex: string; token: string }[]
  border: string
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {items.map(({ name, hex, token }) => (
        <div key={`${token}-${hex}`} style={{ width: 120 }}>
          <div style={{ height: 72, background: hex, borderRadius: 10, border: `1px solid ${border}` }} />
          <div className="font-sans font-bold text-sm mt-2">{name}</div>
          <div className="font-mono text-ink-soft" style={{ fontSize: 10, marginTop: 2 }}>{hex}</div>
          <div className="font-mono text-link" style={{ fontSize: 10, marginTop: 2 }}>{token}</div>
        </div>
      ))}
    </div>
  )
}

export const LightMode: Story = {
  name: 'Colors — light (default)',
  render: () => (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">Foundations · Colors</div>
      <h2 className="font-pixel text-2xl text-primary mb-1">LIGHT MODE</h2>
      <p className="font-sans text-sm text-ink-soft mb-8 max-w-xl leading-relaxed">
        Default <code className="font-mono text-xs text-accent">:root</code> / <code className="font-mono text-xs text-accent">data-theme=&quot;light&quot;</code>.
        Brand accents stay fixed across themes.
      </p>
      <SwatchGrid items={LIGHT} border="rgba(43,40,56,0.08)" />
    </div>
  ),
}

export const DarkMode: Story = {
  name: 'Colors — dark',
  parameters: { backgrounds: { default: 'deep' } },
  render: () => (
    <div className="text-ink-2">
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">Foundations · Colors</div>
      <h2 className="font-pixel text-2xl text-primary mb-1">DARK MODE</h2>
      <p className="font-sans text-sm text-ink-soft mb-8 max-w-xl leading-relaxed">
        <code className="font-mono text-xs text-accent">[data-theme=&quot;dark&quot;]</code> — surfaces and ink flip; primary / accent / link / alert / gold do not.
      </p>
      <SwatchGrid items={DARK} border="rgba(232,230,240,0.08)" />
      <div className="mt-8 font-mono text-xs text-ink-soft">
        Unchanged accents: primary #7ED6C0 · accent #F2A7C3 · link #8FA8E8 · alert #E0559B · gold #E9C46A
      </div>
    </div>
  ),
}

export const SurfaceContrast: Story = {
  name: 'Colors — surface contrast',
  parameters: { backgrounds: { default: 'deep' } },
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <div style={{ background: '#100F1A', padding: 28, borderRadius: 14, minWidth: 260, flex: 1 }}>
        <div className="font-pixel text-xs text-accent mb-4 tracking-widest">DARK MODE</div>
        <div style={{ background: '#1D1C29', borderRadius: 12, padding: 18, marginBottom: 10 }}>
          <div className="font-pixel text-sm text-primary mb-1">paper-2</div>
          <div className="font-sans text-xs" style={{ color: '#8A869E' }}>#1D1C29</div>
        </div>
        <div style={{ background: '#2B2A3D', borderRadius: 12, padding: 18 }}>
          <div className="font-pixel text-sm text-link mb-1">card</div>
          <div className="font-sans text-xs" style={{ color: '#8A869E' }}>#2B2A3D</div>
        </div>
      </div>

      <div style={{ background: '#fbfaf6', padding: 28, borderRadius: 14, minWidth: 260, flex: 1, border: '1px solid rgba(43,40,56,0.08)' }}>
        <div className="font-pixel text-xs text-alert mb-4 tracking-widest">LIGHT MODE</div>
        <div style={{ background: '#EEE9DD', borderRadius: 12, padding: 18, marginBottom: 10 }}>
          <div className="font-pixel text-sm" style={{ color: '#2B2838' }}>paper-2</div>
          <div className="font-sans text-xs" style={{ color: '#6D6880', marginTop: 4 }}>#EEE9DD</div>
        </div>
        <div style={{ background: '#2B2A3D', borderRadius: 12, padding: 18 }}>
          <div className="font-pixel text-sm text-primary mb-1">card</div>
          <div className="font-sans text-xs" style={{ color: '#8A869E', marginTop: 4 }}>#2B2A3D · dark panel on paper</div>
        </div>
      </div>
    </div>
  ),
}
