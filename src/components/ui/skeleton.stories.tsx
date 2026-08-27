import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton, SkeletonVideoCard } from '@/components/ui/skeleton'

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    shape: { control: 'select', options: ['rect', 'circle', 'text', 'thumbnail'] },
  },
  args: { shape: 'rect', width: 200, height: 16 },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Showcase: Story = {
  name: 'Skeleton — showcase',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
        Atoms · Skeleton
      </div>
      <h2 className="mb-1 font-px text-2xl text-mint">SKELETON</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Loading placeholder — shape mirrors the real surface (thumbnail, avatar, text). Shimmer
        1.4s linear. Never mix with spinners on the same view.
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Shapes</div>
      <div
        className="mb-8 flex flex-wrap items-end gap-5 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <div className="flex flex-col gap-2">
          <Skeleton shape="circle" width={48} height={48} />
          <span className="font-mono text-[10px] text-ink-soft">circle</span>
        </div>
        <div className="flex w-40 flex-col gap-2">
          <Skeleton shape="text" />
          <Skeleton shape="text" width="60%" />
          <span className="font-mono text-[10px] text-ink-soft">text</span>
        </div>
        <div className="flex w-36 flex-col gap-2">
          <Skeleton shape="rect" height={64} />
          <span className="font-mono text-[10px] text-ink-soft">rect</span>
        </div>
        <div className="flex w-44 flex-col gap-2">
          <Skeleton shape="thumbnail" height={80} />
          <span className="font-mono text-[10px] text-ink-soft">thumbnail</span>
        </div>
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        Video card composite
      </div>
      <div
        className="mb-8 flex flex-wrap gap-4 border border-line bg-paper-2 p-5"
        style={{ borderRadius: 10 }}
      >
        <SkeletonVideoCard />
        <SkeletonVideoCard />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark</div>
      <div
        data-theme="dark"
        className="flex flex-wrap gap-4 border border-line bg-paper p-5"
        style={{ borderRadius: 10 }}
      >
        <SkeletonVideoCard />
        <div className="flex flex-col gap-2 pt-2">
          <Skeleton shape="circle" width={48} height={48} />
          <Skeleton shape="text" width={160} />
          <Skeleton shape="text" width={100} />
        </div>
      </div>
    </div>
  ),
}
