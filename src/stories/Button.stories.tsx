import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'accent', 'ghost'],

    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'default', children: 'Send message →' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'View archive' },
}

export const Accent: Story = {
  args: { variant: 'accent', children: 'Start questionnaire →' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'View all →' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', padding: '32px' }}>
      <Button variant="default">Send message →</Button>
      <Button variant="secondary">View archive</Button>
      <Button variant="accent">Start questionnaire →</Button>
      <Button variant="ghost">View all →</Button>
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
        All buttons are <code className="font-mono text-xs text-accent">rounded-none</code> — the pixel aesthetic is intentional. <strong>accent</strong> and <strong>secondary</strong> use Silkscreen. <strong>ghost</strong> uses Quicksand bold in pink.
      </p>

      {/* Variants */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Variants</div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center', padding: 20, background: 'var(--color-paper-2)', border: '1px solid var(--color-line)', borderRadius: 10 }}>
        <Button variant="accent">PRIMARY</Button>
        <Button variant="secondary">SECONDARY</Button>
        <Button variant="default">Default</Button>
        <Button variant="ghost">Text link →</Button>
      </div>

      {/* Sizes */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Sizes (accent)</div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center', padding: 20, background: 'var(--color-paper-2)', border: '1px solid var(--color-line)', borderRadius: 10 }}>
        <Button variant="accent" size="sm">SMALL</Button>
        <Button variant="accent" size="default">DEFAULT</Button>
        <Button variant="accent" size="lg">LARGE</Button>
      </div>

      {/* Disabled */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">Disabled state</div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center', padding: 20, background: 'var(--color-paper-2)', border: '1px solid var(--color-line)', borderRadius: 10 }}>
        <Button variant="accent" disabled>PRIMARY</Button>
        <Button variant="secondary" disabled>SECONDARY</Button>
        <Button variant="default" disabled>Default</Button>
        <Button variant="ghost" disabled>Text link →</Button>
      </div>

      {/* Dark context */}
      <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">In dark context</div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32, alignItems: 'center', padding: 20, background: '#1d1c29', borderRadius: 10 }}>
        <Button variant="accent">PRIMARY</Button>
        <Button variant="secondary">SECONDARY</Button>
        <Button variant="ghost">Text link →</Button>
      </div>

      {/* Usage notes */}
      <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div className="font-mono text-xs text-ink-soft"><span className="text-primary">accent</span> — Primary action. Silkscreen, mint fill, dark text. Zero border-radius.</div>
        <div className="font-mono text-xs text-ink-soft"><span className="text-link">secondary</span> — Alternate action. Silkscreen, 3px mint border, transparent bg. Zero border-radius.</div>
        <div className="font-mono text-xs text-ink-soft"><span className="text-ink">default</span> — Neutral / destructive. Geist Mono, ink fill. Zero border-radius.</div>
        <div className="font-mono text-xs text-ink-soft"><span className="text-accent">ghost</span> — Inline text-link. Quicksand bold, pink. No bg or border.</div>
      </div>
    </div>
  ),
}
