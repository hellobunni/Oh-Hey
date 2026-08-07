import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion } from '@/components/molecules/accordion'

const FAQ = [
  {
    value: 'stream',
    title: 'How often do you stream?',
    content:
      'Tuesdays, Thursdays, and Sundays — check the schedule panel for exact times.',
  },
  {
    value: 'game',
    title: 'Can I request a game?',
    content: 'Drop suggestions in Discord — I rotate through the queue when the vibe fits.',
  },
  {
    value: 'discord',
    title: "Where's the Discord?",
    content: 'Linked in the nav and channel about. Come hang — chat goes live with the stream.',
  },
]

const meta = {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    items: FAQ,
    multiple: false,
    defaultValue: ['stream'],
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'Accordion — showcase',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
        Molecules · Accordion
      </div>
      <h2 className="mb-1 font-pixel text-2xl text-primary">ACCORDION</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Quicksand bold 14px headers, +/− convention, hairline dividers. FAQ uses single-open;
        set <code className="font-mono text-xs text-accent">multiple</code> for independent toggles.
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Single-open (FAQ)
      </div>
      <div
        className="mb-8 max-w-lg border border-line bg-paper-2 px-5"
        style={{ borderRadius: 10 }}
      >
        <Accordion items={FAQ} defaultValue={['stream']} />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Multi-open
      </div>
      <div
        className="mb-8 max-w-lg border border-line bg-paper-2 px-5"
        style={{ borderRadius: 10 }}
      >
        <Accordion items={FAQ} multiple defaultValue={['stream', 'discord']} />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark</div>
      <div
        data-theme="dark"
        className="max-w-lg border border-line bg-paper px-5"
        style={{ borderRadius: 10 }}
      >
        <Accordion items={FAQ} defaultValue={['stream']} />
      </div>
    </div>
  ),
}
