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
