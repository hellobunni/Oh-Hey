import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { SchedulePanel } from '@/components/organisms/SchedulePanel'

const meta = {
  title: 'Organisms/SchedulePanel',
  component: SchedulePanel,
  parameters: { layout: 'padded', backgrounds: { default: 'deep' } },
  tags: ['autodocs'],
  args: {
    items: [
      {
        day: 'Fri',
        detail: '8pm — Co-op',
        today: true,
        href: '#cal',
        onAddToCalendar: fn(),
      },
      { day: 'Tues', detail: '7pm — Variety', href: '#cal', onAddToCalendar: fn() },
      { day: 'Thurs', detail: '7pm — Art', href: '#cal', onAddToCalendar: fn() },
      { day: 'Sun', detail: '3pm — Chill', selected: true },
      { day: 'Mon', detail: null },
    ],
  },
} satisfies Meta<typeof SchedulePanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'SchedulePanel — showcase',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
        Organisms · Schedule Panel
      </div>
      <h2 className="mb-1 font-px text-2xl text-mint">SCHEDULE</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Today: mint left border, tinted bg, TODAY tag, one-shot pulse. Hover on interactive rows
        lifts to 4% white and reveals add-to-calendar. Selected is a static 4% highlight. Empty
        rows are italic muted and never clickable.
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        All states
      </div>
      <div className="mb-8">
        <SchedulePanel
          items={[
            {
              day: 'Fri',
              detail: '8pm — Co-op',
              today: true,
              href: '#',
              onAddToCalendar: fn(),
            },
            {
              day: 'Tues',
              detail: '7pm — Variety',
              href: '#',
              onAddToCalendar: fn(),
            },
            {
              day: 'Thurs',
              detail: '7pm — Art',
              href: '#',
              onAddToCalendar: fn(),
            },
            { day: 'Sun', detail: '3pm — Chill', selected: true },
            { day: 'Mon', detail: null },
          ]}
        />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Empty panel
      </div>
      <SchedulePanel items={[]} />
    </div>
  ),
}

export const Empty: Story = {
  args: { items: [] },
}

export const WithEmptyDay: Story = {
  args: {
    items: [
      { day: 'Mon', detail: null },
      { day: 'Fri', detail: '8pm — Co-op', today: true, href: '#', onAddToCalendar: fn() },
      { day: 'Sun', detail: '3pm — Chill', selected: true },
    ],
  },
}
