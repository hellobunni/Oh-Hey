import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { ArrowRight, Download, Play, Settings, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'secondary', 'ghost', 'textLink'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary' },
}

export const Accent: Story = {
  args: { variant: 'accent', children: 'Accent' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost' },
}

export const TextLink: Story = {
  args: { variant: 'textLink', children: 'Text link →' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', padding: '32px' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="textLink">Text link →</Button>
    </div>
  ),
}

export const LightDark: Story = {
  name: 'Light / Dark mode',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="flex flex-wrap gap-8 p-12 bg-deep text-paper-ink">
      {/* Light panel */}
      <div
        data-theme="light"
        className="flex w-[420px] flex-col gap-3.5 rounded-2xl bg-paper p-8"
      >
        <div className="font-pixel text-xs text-ink">LIGHT MODE</div>
        <div className="flex flex-wrap items-center gap-2.5">
          <Button variant="primary">Primary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="textLink">Text link</Button>
        </div>
      </div>

      {/* Dark panel */}
      <div
        data-theme="dark"
        className="flex w-[420px] flex-col gap-3.5 rounded-2xl border border-line bg-paper p-8"
      >
        <div className="font-pixel text-xs text-primary">DARK MODE</div>
        <div className="flex flex-wrap items-center gap-2.5">
          <Button variant="primary">Primary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="textLink">Text link</Button>
        </div>
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  name: 'Button — with icons / icon-only',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">
        <ArrowRight size={14} strokeWidth={3} />
        Continue
      </Button>
      <Button variant="accent">
        <Download size={14} strokeWidth={3} />
        Download
      </Button>
      <IconButton aria-label="Play" icon={<Play size={16} fill="currentColor" strokeWidth={0} />} />
      <IconButton aria-label="Settings" icon={<Settings size={16} strokeWidth={2.5} />} variant="outline" />
      <IconButton aria-label="Close" icon={<X size={14} strokeWidth={2.5} />} variant="ghost" size={36} rounded />
    </div>
  ),
}

export const Showcase: Story = {
  name: 'Buttons — full showcase',
  render: () => (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-2">Atoms · Buttons</div>
      <h2 className="font-pixel text-2xl text-primary mb-1">BUTTONS</h2>
      <p className="font-sans text-sm text-ink-soft mb-8 max-w-xl leading-relaxed">
        Primary/accent/secondary keep brand hexes across themes — ghost and textLink flip via paper/ink tokens.
        Silkscreen + sharp corners for filled/outline; Quicksand + <code className="font-mono text-xs">rounded-lg</code> on ghost.
      </p>

      {/* Variants */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Variants</div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center', padding: 20, background: 'var(--color-paper-2)', border: '1px solid var(--color-line)', borderRadius: 10 }}>
        <Button variant="primary">Primary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="textLink">Text link →</Button>
      </div>

      {/* Icons */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Icon / icon-only</div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center', padding: 20, background: 'var(--color-paper-2)', border: '1px solid var(--color-line)', borderRadius: 10 }}>
        <Button variant="primary"><ArrowRight size={14} strokeWidth={3} />Continue</Button>
        <Button variant="accent"><Download size={14} strokeWidth={3} />Download</Button>
        <IconButton aria-label="Play" icon={<Play size={16} fill="currentColor" strokeWidth={0} />} />
        <IconButton aria-label="Settings" icon={<Settings size={16} strokeWidth={2.5} />} variant="outline" />
        <IconButton aria-label="Close" icon={<X size={14} strokeWidth={2.5} />} variant="ghost" size={36} rounded />
      </div>

      {/* Dark context */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">In dark context</div>
      <div
        data-theme="dark"
        style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center', padding: 20, background: 'var(--color-paper)', border: '1px solid var(--color-line)', borderRadius: 10 }}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="textLink">Text link →</Button>
      </div>

      {/* Sizes */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Sizes (primary)</div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center', padding: 20, background: 'var(--color-paper-2)', border: '1px solid var(--color-line)', borderRadius: 10 }}>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>

      {/* Disabled */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Disabled state</div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center', padding: 20, background: 'var(--color-paper-2)', border: '1px solid var(--color-line)', borderRadius: 10 }}>
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="accent" disabled>Accent</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="ghost" disabled>Ghost</Button>
        <Button variant="textLink" disabled>Text link →</Button>
      </div>

      {/* Usage notes */}
      <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div className="font-mono text-xs text-ink-soft"><span className="text-primary">primary</span> — Mint fill, dark text (fixed on brand).</div>
        <div className="font-mono text-xs text-ink-soft"><span className="text-accent">accent</span> — Pink 3px outline; alert text in light, accent in dark.</div>
        <div className="font-mono text-xs text-ink-soft"><span className="text-ink">secondary</span> — Ink 3px outline; flips with theme.</div>
        <div className="font-mono text-xs text-ink-soft"><span className="text-ink-soft">ghost</span> — Paper-2 / card surface, rounded-lg.</div>
        <div className="font-mono text-xs text-ink-soft"><span className="text-ink-mute">textLink</span> — Inline muted link via ink-mute.</div>
        <div className="font-mono text-xs text-ink-soft"><span className="text-primary">IconButton</span> — solid / outline / ghost · optional rounded.</div>
      </div>
    </div>
  ),
}
