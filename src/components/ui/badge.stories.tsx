import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Circle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Tag } from '@/components/ui/tag'
import { Count } from '@/components/ui/count'

const meta = {
  title: 'Atoms/Tags & Badges',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const LightDark: Story = {
  name: 'Light / Dark mode',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="flex flex-col gap-7 bg-deep p-12 text-paper-ink">
      <div className="font-px text-[22px] text-mint">TAG & BADGE — TWO SEPARATE COMPONENTS</div>
      <p className="max-w-[760px] font-sans text-[13px] font-semibold text-ink-soft">
        Tag = static label/category, square, pixel font, no interaction. Badge = status signal,
        pill or dot, sans font. Numeric quantity lives on the Count atom.
      </p>

      {/* ── Tag ─────────────────────────────────────────────────────────── */}
      <div className="font-px text-[15px] text-pink border-b-2 border-card pb-2">
        TAG COMPONENT
      </div>

      <div className="flex flex-wrap gap-8">
        <div
          data-theme="light"
          className="flex w-[420px] flex-col gap-3 rounded-2xl bg-paper p-7"
        >
          <div className="font-px text-xs text-ink">LIGHT MODE</div>
          <div className="flex flex-wrap gap-2">
            <Tag variant="neutral">EP.12</Tag>
            <Tag variant="primary">Primary</Tag>
            <Tag variant="outline">Outline</Tag>
          </div>
        </div>

        <div
          data-theme="dark"
          className="flex w-[420px] flex-col gap-3 rounded-2xl border border-line bg-paper p-7"
        >
          <div className="font-px text-xs text-mint">DARK MODE</div>
          <div className="flex flex-wrap gap-2">
            <Tag variant="neutral">EP.12</Tag>
            <Tag variant="primary">Primary</Tag>
            <Tag variant="outline">Outline</Tag>
          </div>
        </div>
      </div>

      {/* ── Badge ───────────────────────────────────────────────────────── */}
      <div className="font-px text-[15px] text-pink border-b-2 border-card pb-2 mt-3">
        BADGE COMPONENT
      </div>

      <div className="flex flex-wrap gap-8">
        <div
          data-theme="light"
          className="flex w-[420px] flex-col gap-3 rounded-2xl bg-paper p-7"
        >
          <div className="font-px text-xs text-ink">LIGHT MODE</div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="mint">LIVE</Badge>
            <Badge tone="pink">NEW</Badge>
            <Badge tone="neutral">OFFLINE</Badge>
            <span className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-ink">
              <Badge shape="dot" tone="pink" aria-label="Alert" />
              DOT
            </span>
            <Count value={9} />
          </div>
        </div>

        <div
          data-theme="dark"
          className="flex w-[420px] flex-col gap-3 rounded-2xl border border-line bg-paper p-7"
        >
          <div className="font-px text-xs text-mint">DARK MODE</div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="mint">LIVE</Badge>
            <Badge tone="pink">NEW</Badge>
            <Badge tone="neutral">OFFLINE</Badge>
            <span className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-ink">
              <Badge shape="dot" tone="pink" aria-label="Alert" />
              DOT
            </span>
            <Count value={9} />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Tags: Story = {
  name: 'Tags — variants & sizes',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Atoms · Tags
      </div>
      <h2 className="mb-1 font-px text-2xl text-mint">TAGS</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Static content labels in Silkscreen with sharp corners. Neutral flips with paper/ink;
        primary and outline hold brand hexes in both modes. Not interactive.
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Variants</div>
      <div
        className="mb-8 flex flex-wrap items-center gap-3 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Tag variant="neutral">EP.12</Tag>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="outline">Outline</Tag>
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Sizes</div>
      <div
        className="mb-8 flex flex-wrap items-center gap-3 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Tag size="sm" variant="neutral">sm · EP.01</Tag>
        <Tag size="md" variant="neutral">md · EP.12</Tag>
        <Tag size="sm" variant="primary">sm</Tag>
        <Tag size="md" variant="primary">md</Tag>
        <Tag size="sm" variant="outline">sm</Tag>
        <Tag size="md" variant="outline">md</Tag>
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Domain</div>
      <div
        className="mb-8 flex flex-wrap items-center gap-3 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Tag variant="tech">Tech</Tag>
        <Tag variant="fitness">Fitness</Tag>
        <Tag variant="creative">Creative</Tag>
        <Tag variant="nerd">Nerd Stuff</Tag>
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark context</div>
      <div
        data-theme="dark"
        className="flex flex-wrap items-center gap-3 border border-line bg-paper p-5"
        style={{ borderRadius: 10 }}
      >
        <Tag variant="neutral">EP.07</Tag>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="outline">Outline</Tag>
      </div>
    </div>
  ),
}

export const Badges: Story = {
  name: 'Badges — tones, shapes & sizes',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Atoms · Badges
      </div>
      <h2 className="mb-1 font-px text-2xl text-mint">BADGES</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Status signals in Quicksand bold. Mint / pink / neutral tones; pill (default) or status
        dot. For numeric quantity, use the <code className="font-mono text-xs text-pink">Count</code> atom.
        Pass <code className="font-mono text-xs text-pink">interactive</code> for filter-chip
        scale on hover.
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Tones (pill)</div>
      <div
        className="mb-8 flex flex-wrap items-center gap-3 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Badge tone="mint">
          <Circle size={7} className="fill-current" strokeWidth={0} aria-hidden />
          LIVE
        </Badge>
        <Badge tone="pink">NEW</Badge>
        <Badge tone="neutral">OFFLINE</Badge>
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Status dots
      </div>
      <div
        className="mb-8 flex flex-wrap items-center gap-3 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Badge shape="dot" tone="mint" aria-label="Live" />
        <Badge shape="dot" tone="pink" aria-label="Alert" />
        <Badge shape="dot" tone="neutral" aria-label="Muted" />
        <Badge shape="dot" dotColor="#2563eb" aria-label="Tech" />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Sizes</div>
      <div
        className="mb-8 flex flex-wrap items-center gap-3 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Badge size="sm" tone="mint">sm · LIVE</Badge>
        <Badge size="md" tone="mint">md · LIVE</Badge>
        <Badge size="sm" tone="pink">sm · NEW</Badge>
        <Badge size="md" tone="pink">md · NEW</Badge>
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Interactive (filter chips)
      </div>
      <div
        className="mb-8 flex flex-wrap items-center gap-3 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Badge interactive tone="mint">LIVE</Badge>
        <Badge interactive tone="pink">NEW</Badge>
        <Badge interactive tone="neutral">ALL</Badge>
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark context</div>
      <div
        data-theme="dark"
        className="flex flex-wrap items-center gap-3 border border-line bg-paper p-5"
        style={{ borderRadius: 10 }}
      >
        <Badge tone="mint">
          <Circle size={7} className="fill-current" strokeWidth={0} aria-hidden />
          LIVE
        </Badge>
        <Badge tone="pink">NEW</Badge>
        <Badge tone="neutral">OFFLINE</Badge>
        <Badge shape="dot" tone="pink" aria-label="Alert" />
      </div>
    </div>
  ),
}
