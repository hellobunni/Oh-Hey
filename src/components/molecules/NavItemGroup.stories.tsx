import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { NavItemGroup } from '@/components/molecules/NavItemGroup'

const ITEMS = ['Home', 'Videos', 'Schedule', 'About']

const meta = {
  title: 'Molecules/NavItemGroup',
  component: NavItemGroup,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    items: ITEMS,
    activeIndex: 0,
    onSelect: fn(),
  },
} satisfies Meta<typeof NavItemGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'NavItemGroup — showcase',
  render: () => {
    const [active, setActive] = React.useState(0)

    return (
      <div>
        <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
          Molecules · Nav Item Group
        </div>
        <h2 className="mb-1 font-pixel text-2xl text-primary">NAV ITEM GROUP</h2>
        <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
          Route/tab triggers with a shared sliding mint underline (.2s ease) — one indicator moves
          between items on hover and selection, rather than each item drawing its own border.
          Disabled items mute and ignore pointer.
        </p>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
          Interactive · hover & select
        </div>
        <div
          className="mb-8 border border-line bg-paper-2 p-5"
          style={{ borderRadius: 10 }}
        >
          <NavItemGroup items={ITEMS} activeIndex={active} onSelect={setActive} />
          <div className="mt-3 font-mono text-[11px] text-ink-mute">
            Active: {ITEMS[active]}
          </div>
        </div>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
          With disabled item
        </div>
        <div
          className="mb-8 border border-line bg-paper-2 p-5"
          style={{ borderRadius: 10 }}
        >
          <NavItemGroup
            items={[
              'Home',
              'Videos',
              { label: 'Schedule', disabled: true },
              'About',
            ]}
            activeIndex={0}
            onSelect={fn()}
          />
        </div>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
          Link items (href)
        </div>
        <div
          className="mb-8 border border-line bg-paper-2 p-5"
          style={{ borderRadius: 10 }}
        >
          <NavItemGroup
            items={[
              { label: 'Home', href: '/' },
              { label: 'Videos', href: '/videos' },
              { label: 'About', href: '/about' },
            ]}
            activeIndex={1}
          />
        </div>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark context</div>
        <div
          data-theme="dark"
          className="border border-line bg-paper p-5"
          style={{ borderRadius: 10 }}
        >
          <NavItemGroup items={ITEMS} activeIndex={2} onSelect={fn()} />
        </div>
      </div>
    )
  },
}

export const Interactive: Story = {
  render: () => {
    const [active, setActive] = React.useState(0)
    return (
      <NavItemGroup items={ITEMS} activeIndex={active} onSelect={setActive} />
    )
  },
}

export const WithDisabled: Story = {
  args: {
    items: [
      'Home',
      'Videos',
      { label: 'Schedule', disabled: true },
      'About',
    ],
    activeIndex: 0,
  },
}
