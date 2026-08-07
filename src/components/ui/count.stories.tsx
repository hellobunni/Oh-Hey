import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Count } from '@/components/ui/count'
import { Avatar } from '@/components/ui/avatar'

const meta = {
  title: 'Atoms/Count',
  component: Count,
  parameters: { layout: 'centered' },
  argTypes: {
    tone: { control: 'select', options: ['alert', 'primary'] },
    shape: { control: 'select', options: ['circle', 'dot'] },
    size: { control: 'select', options: ['sm', 'md'] },
    placement: { control: 'select', options: ['standalone', 'overlay'] },
    value: { control: { type: 'number', min: 0, max: 200 } },
    max: { control: { type: 'number', min: 1, max: 99 } },
  },
  args: { value: 3, tone: 'alert', shape: 'circle', size: 'md' },
} satisfies Meta<typeof Count>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LightDark: Story = {
  name: 'Light / Dark mode',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="flex flex-col gap-7 bg-deep p-12 text-paper-ink">
      <div className="font-pixel text-[22px] text-primary">COUNT — ATOM</div>
      <p className="max-w-[760px] font-sans text-[13px] font-semibold text-ink-soft">
        Numeric indicator, standalone or overlaid on an icon/avatar. Not a Tag (no text label) or
        Badge (no status meaning) — it communicates quantity only.
      </p>

      <div className="border-b-2 border-card pb-2 font-pixel text-[15px] text-accent">VARIANTS</div>

      <div className="flex flex-wrap gap-8">
        {/* Light */}
        <div
          data-theme="light"
          className="flex w-[440px] flex-col gap-4 rounded-2xl bg-paper p-7"
        >
          <div className="font-pixel text-xs text-ink">LIGHT MODE</div>
          <div className="flex flex-wrap items-center gap-5">
            <Count value={3} />
            <Count value={120} />
            <Count value={12} tone="primary" />
            <div className="relative size-11">
              <div className="size-full rounded-full border-2 border-ink bg-paper-2" />
              <Count value={5} size="sm" placement="overlay" />
            </div>
            <Count shape="dot" aria-label="Unread" />
          </div>
        </div>

        {/* Dark */}
        <div
          data-theme="dark"
          className="flex w-[440px] flex-col gap-4 rounded-2xl border border-line bg-paper-2 p-7"
        >
          <div className="font-pixel text-xs text-primary">DARK MODE</div>
          <div className="flex flex-wrap items-center gap-5">
            <Count value={3} />
            <Count value={120} />
            <Count value={12} tone="primary" />
            <div className="relative size-11">
              <div className="size-full rounded-full border-2 border-ink bg-card" />
              <Count value={5} size="sm" placement="overlay" />
            </div>
            <Count shape="dot" aria-label="Unread" />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Showcase: Story = {
  name: 'Count — showcase',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
        Atoms · Count
      </div>
      <h2 className="mb-1 font-pixel text-2xl text-primary">COUNT</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Quantity only. Truncates above <code className="font-mono text-xs text-accent">max</code>{' '}
        (default 99). Alert for notifications, primary for positive counts. Overlay adds a surface
        cutout ring for avatar/icon corners.
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Tones</div>
      <div
        className="mb-8 flex flex-wrap items-center gap-4 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Count value={3} tone="alert" />
        <Count value={99} tone="alert" />
        <Count value={12} tone="primary" />
        <Count value={1} tone="primary" />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Truncation
      </div>
      <div
        className="mb-8 flex flex-wrap items-center gap-4 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Count value={9} />
        <Count value={99} />
        <Count value={100} />
        <Count value={42} max={9} />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Sizes</div>
      <div
        className="mb-8 flex flex-wrap items-center gap-4 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Count value={5} size="sm" />
        <Count value={5} size="md" />
        <Count value={99} size="sm" />
        <Count value={99} size="md" />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Dot (presence only)
      </div>
      <div
        className="mb-8 flex flex-wrap items-center gap-4 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Count shape="dot" tone="alert" aria-label="Alert" />
        <Count shape="dot" tone="primary" aria-label="New" />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Overlay on avatar
      </div>
      <div
        className="mb-8 flex flex-wrap items-center gap-6 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <div className="relative">
          <Avatar size={44} ring="none" />
          <Count value={5} size="sm" placement="overlay" />
        </div>
        <div className="relative">
          <Avatar size={44} ring="primary" />
          <Count value={12} size="sm" placement="overlay" tone="primary" />
        </div>
        <div className="relative">
          <Avatar size={64} ring="accent" />
          <Count value={120} placement="overlay" />
        </div>
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark context</div>
      <div
        data-theme="dark"
        className="flex flex-wrap items-center gap-5 border border-line bg-paper p-5"
        style={{ borderRadius: 10 }}
      >
        <Count value={3} />
        <Count value={120} />
        <Count value={12} tone="primary" />
        <div className="relative">
          <Avatar size={44} ring="primary" />
          <Count value={5} size="sm" placement="overlay" />
        </div>
        <Count shape="dot" aria-label="Unread" />
      </div>
    </div>
  ),
}
