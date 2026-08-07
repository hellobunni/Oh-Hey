import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    side: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    content: { control: 'text' },
  },
  args: {
    content: 'Adds this video to your queue',
    side: 'top',
    children: <Button size="sm">HOVER ME</Button>,
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'Tooltip — showcase',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
        Atoms · Tooltip
      </div>
      <h2 className="mb-1 font-pixel text-2xl text-primary">TOOLTIP</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Always deep ink bg for contrast. Quicksand 11px. 200ms delay-in, 0 delay-out. Fade + 4px
        slide from the trigger side.
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Placements
      </div>
      <div
        className="mb-8 flex flex-wrap items-center justify-center gap-10 border border-line bg-paper-2 p-10"
        style={{ borderRadius: 10 }}
      >
        {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
          <Tooltip key={side} side={side} content={`Placement: ${side}`}>
            <Button size="sm" variant="secondary">
              {side.toUpperCase()}
            </Button>
          </Tooltip>
        ))}
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark</div>
      <div
        data-theme="dark"
        className="flex justify-center border border-line bg-paper p-10"
        style={{ borderRadius: 10 }}
      >
        <Tooltip content="Same deep bg in both themes">
          <Button size="sm">HOVER ME</Button>
        </Tooltip>
      </div>
    </div>
  ),
}
