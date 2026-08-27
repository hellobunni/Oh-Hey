import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Toast, ToastStack } from '@/components/molecules/toast'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Molecules/Toast',
  component: Toast,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['success', 'error', 'info'] },
    message: { control: 'text' },
    duration: { control: { type: 'number', min: 0, max: 10000, step: 500 } },
  },
  args: {
    message: 'Video published successfully',
    tone: 'success',
    duration: 0,
    instant: true,
    dismissible: true,
    onDismiss: fn(),
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'Toast — showcase',
  render: () => {
    const [toasts, setToasts] = React.useState<
      { id: number; tone: 'success' | 'error' | 'info'; message: string }[]
    >([])
    const idRef = React.useRef(0)

    const push = (tone: 'success' | 'error' | 'info', message: string) => {
      const id = ++idRef.current
      setToasts((t) => [...t, { id, tone, message }])
    }

    return (
      <div>
        <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
          Molecules · Toast / Notification
        </div>
        <h2 className="mb-1 font-px text-2xl text-mint">TOAST</h2>
        <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
          System feedback — left-border accent only. Success/info auto-dismiss 4s; error persists.
          Distinct from AlertToast (social/stream events).
        </p>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Tones</div>
        <div
          className="mb-8 flex flex-col gap-3 border border-line bg-paper-2 p-5"
          style={{ borderRadius: 10 }}
        >
          <Toast instant duration={0} tone="success" message="Video published successfully" />
          <Toast instant duration={0} tone="error" message="Upload failed — check your connection" />
          <Toast instant duration={0} tone="info" message="New follower: mochi_plays" />
        </div>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
          Live stack (top-right)
        </div>
        <div
          className="mb-8 flex flex-wrap gap-2 border border-line bg-paper-2 p-5"
          style={{ borderRadius: 10 }}
        >
          <Button size="sm" onClick={() => push('success', 'Video published successfully')}>
            SUCCESS
          </Button>
          <Button
            size="sm"
            variant="accent"
            onClick={() => push('error', 'Upload failed — check your connection')}
          >
            ERROR
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => push('info', 'New follower: mochi_plays')}
          >
            INFO
          </Button>
        </div>

        <ToastStack>
          {toasts.map((t) => (
            <Toast
              key={t.id}
              tone={t.tone}
              message={t.message}
              onDismiss={() => setToasts((all) => all.filter((x) => x.id !== t.id))}
            />
          ))}
        </ToastStack>

        <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark</div>
        <div
          data-theme="dark"
          className="flex flex-col gap-3 border border-line bg-paper p-5"
          style={{ borderRadius: 10 }}
        >
          <Toast instant duration={0} tone="success" message="Settings saved" />
          <Toast instant duration={0} tone="error" message="Network unreachable" />
        </div>
      </div>
    )
  },
}
