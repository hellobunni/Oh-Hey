import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Sparkles } from 'lucide-react'
import { AlertToast } from '@/components/molecules/AlertToast'

const meta = {
  title: 'Molecules/AlertToast',
  component: AlertToast,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['accent', 'primary'] },
    headline: { control: 'text' },
    subtext: { control: 'text' },
    duration: { control: { type: 'number', min: 0, max: 10000, step: 500 } },
    dismissible: { control: 'boolean' },
    instant: { control: 'boolean' },
  },
  args: {
    headline: 'NEW SUB!',
    subtext: 'welcome, mochi',
    tone: 'accent',
    duration: 0,
    instant: true,
    dismissible: true,
    onDismiss: fn(),
  },
} satisfies Meta<typeof AlertToast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'AlertToast — showcase',
  render: () => {
    const [key, setKey] = React.useState(0)
    const [visible, setVisible] = React.useState(true)

    return (
      <div>
        <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
          Molecules · Alert Toast
        </div>
        <h2 className="mb-1 font-pixel text-2xl text-primary">ALERT TOAST</h2>
        <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
          Temporal notification — slides in from the left (.45s), holds ~4s, slides out to the right
          (.4s). Hover pauses the timer and lifts slightly. Dismiss via X or swipe right. Optional CTA
          link inside.
        </p>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
          Live choreography
        </div>
        <div
          className="mb-8 flex min-h-[72px] flex-wrap items-start gap-4 border border-line bg-paper-2 p-5"
          style={{ borderRadius: 10 }}
        >
          {visible ? (
            <AlertToast
              key={key}
              headline="NEW SUB!"
              subtext="welcome, mochi"
              duration={4000}
              cta={{ label: 'View profile', href: '#' }}
              onDismiss={() => setVisible(false)}
            />
          ) : (
            <button
              type="button"
              className="cursor-pointer border-2 border-primary bg-transparent px-3 py-2 font-pixel text-[11px] text-primary"
              onClick={() => {
                setKey((k) => k + 1)
                setVisible(true)
              }}
            >
              REPLAY TOAST
            </button>
          )}
          <span className="font-mono text-[11px] text-ink-mute">
            hover to pause · swipe right or X to dismiss
          </span>
        </div>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
          Tones · static
        </div>
        <div
          className="mb-8 flex flex-wrap gap-4 border border-line bg-paper-2 p-5"
          style={{ borderRadius: 10 }}
        >
          <AlertToast instant duration={0} headline="NEW SUB!" subtext="welcome, mochi" />
          <AlertToast
            instant
            duration={0}
            tone="primary"
            headline="INCOMING RAID"
            icon={<Sparkles size={16} className="text-primary" strokeWidth={2} aria-hidden />}
            subtext="pixelwitch — 84 raiders"
            cta={{ label: 'Join raid', onClick: fn() }}
          />
        </div>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark context</div>
        <div
          data-theme="dark"
          className="flex flex-wrap gap-4 border border-line bg-paper p-5"
          style={{ borderRadius: 10 }}
        >
          <AlertToast
            instant
            duration={0}
            headline="NEW SUB!"
            subtext="welcome, mochi"
            cta={{ label: 'Say hi', href: '#' }}
          />
          <AlertToast
            instant
            duration={0}
            tone="primary"
            headline="CLIP SAVED"
            icon={<Sparkles size={16} className="text-primary" strokeWidth={2} aria-hidden />}
            subtext="cozy run · 0:42"
          />
        </div>
      </div>
    )
  },
}

export const WithCta: Story = {
  args: {
    instant: true,
    duration: 0,
    cta: { label: 'View profile', href: '#' },
  },
}

export const AutoDismiss: Story = {
  args: {
    instant: false,
    duration: 4000,
    headline: 'NEW SUB!',
    subtext: 'auto-dismisses in 4s',
  },
}
