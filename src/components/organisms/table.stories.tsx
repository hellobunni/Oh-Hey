import type { Meta, StoryObj } from '@storybook/react-vite'
import { Table } from '@/components/organisms/table'
import { Badge } from '@/components/ui/badge'

const ROWS = [
  { title: '100 Days, One Farm', views: '4.2K', status: 'LIVE' as const },
  { title: 'I Beat It Blindfolded', views: '1.8K', status: 'DRAFT' as const },
  { title: 'Cozy Chaos Ep. 12', views: '982', status: 'SCHEDULED' as const },
  { title: 'Speedrun Practice', views: '3.1K', status: 'LIVE' as const },
]

const statusTone = {
  LIVE: 'mint' as const,
  DRAFT: 'neutral' as const,
  SCHEDULED: 'pink' as const,
}

const meta = {
  title: 'Organisms/Table',
  component: Table,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

function VideoTable({ density = 'default' as const }) {
  return (
    <Table density={density}>
      <Table.Header>
        <Table.Row>
          <Table.Head>Video</Table.Head>
          <Table.Head>Views</Table.Head>
          <Table.Head>Status</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {ROWS.map((row) => (
          <Table.Row key={row.title} interactive>
            <Table.Cell className="font-semibold">{row.title}</Table.Cell>
            <Table.Cell className="text-ink-soft">{row.views}</Table.Cell>
            <Table.Cell>
              <Badge tone={statusTone[row.status]} shape="pill" size="sm">
                {row.status}
              </Badge>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export const Default: Story = {
  render: () => <VideoTable />,
}

export const Showcase: Story = {
  name: 'Table — showcase',
  render: () => (
    <div>
      <div className="mb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
        Organisms · Table
      </div>
      <h2 className="mb-1 font-pixel text-2xl text-primary">TABLE</h2>
      <p className="mb-8 max-w-xl font-sans text-sm leading-relaxed text-ink-soft">
        Muted uppercase headers, zebra rows, Badge pills for status. Row hover lifts slightly.
        Density default (14×18) or compact (8×14).
      </p>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Default</div>
      <div
        className="mb-8 overflow-hidden border border-line bg-paper-2"
        style={{ borderRadius: 10 }}
      >
        <VideoTable />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Compact</div>
      <div
        className="mb-8 overflow-hidden border border-line bg-paper-2"
        style={{ borderRadius: 10 }}
      >
        <VideoTable density="compact" />
      </div>

      <div className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft">Dark</div>
      <div
        data-theme="dark"
        className="overflow-hidden border border-line bg-paper"
        style={{ borderRadius: 10 }}
      >
        <VideoTable />
      </div>
    </div>
  ),
}
