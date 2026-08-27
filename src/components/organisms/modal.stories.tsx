import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Modal } from '@/components/organisms/modal'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Organisms/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Modal>
      <Modal.Trigger render={<Button size="sm" />}>OPEN MODAL</Modal.Trigger>
      <Modal.Content
        title="Delete video?"
        description="This can't be undone. The video will be removed from your channel."
        confirmLabel="DELETE"
        confirmVariant="destructive"
        onConfirm={fn()}
      />
    </Modal>
  ),
}

export const Showcase: Story = {
  name: 'Modal — showcase',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
        Organisms · Modal / Dialog
      </div>
      <h2 className="mb-1 font-px text-2xl text-mint">MODAL</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Scrim rgba(0,0,0,.6). Silkscreen title, Quicksand body. Cancel = ghost, confirm = primary
        or pink (destructive). Focus trap + Esc. Scale .95→1 entrance.
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Destructive
      </div>
      <div
        className="mb-8 flex gap-3 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Modal>
          <Modal.Trigger render={<Button size="sm" variant="accent" />}>
            DELETE VIDEO
          </Modal.Trigger>
          <Modal.Content
            title="Delete video?"
            description="This can't be undone. The video will be removed from your channel."
            confirmLabel="DELETE"
            confirmVariant="destructive"
            onConfirm={fn()}
          />
        </Modal>
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Primary confirm
      </div>
      <div
        className="mb-8 flex gap-3 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <Modal>
          <Modal.Trigger render={<Button size="sm" />}>PUBLISH</Modal.Trigger>
          <Modal.Content
            title="Publish now?"
            description="This video will go live on your channel immediately."
            confirmLabel="PUBLISH"
            confirmVariant="primary"
            onConfirm={fn()}
          />
        </Modal>
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark</div>
      <div
        data-theme="dark"
        className="flex gap-3 border border-line bg-paper p-5"
        style={{ borderRadius: 10 }}
      >
        <Modal>
          <Modal.Trigger render={<Button size="sm" />}>OPEN</Modal.Trigger>
          <Modal.Content
            title="Save changes?"
            description="Your draft schedule will update for viewers."
            confirmLabel="SAVE"
            onConfirm={fn()}
          />
        </Modal>
      </div>
    </div>
  ),
}
