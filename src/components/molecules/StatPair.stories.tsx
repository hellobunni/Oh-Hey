import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { StatPair } from '@/components/molecules/StatPair'

const meta = {
  title: 'Molecules/StatPair',
  component: StatPair,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['peri', 'mint', 'pink', 'gold'] },
    value: { control: 'text' },
    label: { control: 'text' },
  },
  args: {
    value: '1,204',
    label: 'FOLLOWERS',
    tone: 'peri',
  },
} satisfies Meta<typeof StatPair>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'StatPair — showcase',
  render: () => {
    const [followers, setFollowers] = React.useState(1204)
    const [views, setViews] = React.useState(4.2)
    const [filter, setFilter] = React.useState<string | null>(null)

    return (
      <div>
        <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
          Molecules · Stat / Label Pair
        </div>
        <h2 className="mb-1 font-px text-2xl text-mint">STAT / LABEL</h2>
        <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
          Display-only by default. When the value changes, it count-ups over .4s ease-out with a mint
          flash. Empty values render as <code className="font-mono text-xs text-pink">—</code>.
          Optional <code className="font-mono text-xs text-pink">onClick</code> drills into that
          stat.
        </p>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
          Default tones
        </div>
        <div
          className="mb-8 flex flex-wrap gap-3 border border-line bg-paper-2 p-5"
          style={{ borderRadius: 10 }}
        >
          <StatPair value="1,204" label="FOLLOWERS" tone="peri" />
          <StatPair value="4.2K" label="VIEWS" tone="mint" />
          <StatPair value="312" label="SUBS" tone="pink" />
          <StatPair value="89%" label="UPTIME" tone="gold" />
        </div>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Empty</div>
        <div
          className="mb-8 flex flex-wrap gap-3 border border-line bg-paper-2 p-5"
          style={{ borderRadius: 10 }}
        >
          <StatPair value={null} label="CLIPS" tone="mint" />
          <StatPair value="" label="RAIDS" tone="pink" />
        </div>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
          Updating · count-up + mint flash
        </div>
        <div
          className="mb-8 flex flex-wrap items-end gap-3 border border-line bg-paper-2 p-5"
          style={{ borderRadius: 10 }}
        >
          <StatPair
            value={followers.toLocaleString('en-US')}
            label="FOLLOWERS"
            tone="peri"
          />
          <StatPair value={`${views.toFixed(1)}K`} label="VIEWS" tone="mint" />
          <button
            type="button"
            className="cursor-pointer border-2 border-mint bg-transparent px-3 py-2 font-px text-[11px] text-mint"
            onClick={() => {
              setFollowers((n) => n + 37 + Math.floor(Math.random() * 20))
              setViews((n) => Number((n + 0.3 + Math.random() * 0.4).toFixed(1)))
            }}
          >
            BUMP STATS
          </button>
        </div>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
          Actionable · click to filter
        </div>
        <div
          className="mb-3 flex flex-wrap gap-3 border border-line bg-paper-2 p-5"
          style={{ borderRadius: 10 }}
        >
          {(['FOLLOWERS', 'VIEWS', 'SUBS'] as const).map((label, i) => (
            <StatPair
              key={label}
              value={[1204, '4.2K', 312][i]}
              label={label}
              tone={filter === label ? 'primary' : 'link'}
              onClick={() => setFilter((f) => (f === label ? null : label))}
            />
          ))}
        </div>
        <div className="font-mono text-[11px] text-ink-mute">
          {filter ? `Filter: ${filter}` : 'No filter — click a stat'}
        </div>
      </div>
    )
  },
}

export const Empty: Story = {
  args: { value: null, label: 'CLIPS', tone: 'primary' },
}

export const Actionable: Story = {
  args: {
    value: '1,204',
    label: 'FOLLOWERS',
    onClick: fn(),
  },
}

export const Tones: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <StatPair value="1,204" label="FOLLOWERS" tone="peri" />
      <StatPair value="4.2K" label="VIEWS" tone="mint" />
      <StatPair value="312" label="SUBS" tone="pink" />
      <StatPair value="89%" label="UPTIME" tone="gold" />
    </div>
  ),
}
