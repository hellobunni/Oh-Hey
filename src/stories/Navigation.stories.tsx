import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  TopNav, MobileMenu, Tabs, Breadcrumb, Pagination, PrevNext, StepNav, SideNav, AnchorNav,
} from '@/components/ui/navigation'

const meta = {
  title: 'Design System/Navigation',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Layout helpers ───────────────────────────────────────────────────────────

const mono11: React.CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: '11px' }

function SectionLabel({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ ...mono11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-soft)', margin: '40px 0 12px', ...style }}>
      {children}
    </div>
  )
}

function Grid({ cols, children }: { cols: 1 | 2 | 3; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '12px' }}>
      {children}
    </div>
  )
}

function Card({ name, arg, children, bodyStyle }: {
  name: string; arg?: string; children: React.ReactNode; bodyStyle?: React.CSSProperties
}) {
  return (
    <div style={{ border: '1px solid var(--color-line, rgba(12,12,12,0.08))', display: 'flex', flexDirection: 'column' }}>
      <div style={{ ...mono11, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 12px', borderBottom: '1px solid var(--color-line)', background: 'var(--color-paper-2, #f4f3ee)' }}>
        <span style={{ fontWeight: 500 }}>{name}</span>
        {arg && <span style={{ color: 'var(--color-accent)' }}>{arg}</span>}
      </div>
      <div style={{ ...bodyStyle }}>
        {children}
      </div>
    </div>
  )
}

// ─── Top Nav ──────────────────────────────────────────────────────────────────

const OH_A_LINKS = [
  { label: 'Writing', active: true },
  { label: 'Tech' },
  { label: 'Fitness' },
  { label: 'Creative' },
  { label: 'Nerd' },
  { label: 'About' },
]

const OH_B_LINKS = [
  { label: 'The Log' },
  { label: 'Domains' },
  { label: 'Shop' },
  { label: 'About' },
  { label: 'Subscribe' },
]

const LV_LINKS = [
  { label: 'Approach' },
  { label: 'Services', active: true },
  { label: 'Process' },
  { label: 'Industries' },
]

export const TopNavBrands: Story = {
  name: 'Navigation — top nav brands',
  render: () => (
    <div>
      <div style={{ ...mono11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-soft)', marginBottom: '8px' }}>
        13 · Components — Navigation
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif, serif)', fontSize: '32px', fontWeight: 700, margin: '0 0 8px' }}>
        One nav, <em>four brand voices.</em>
      </h2>
      <p style={{ ...mono11, fontSize: '13px', color: 'var(--color-ink-soft)', margin: '0 0 32px', maxWidth: '600px', lineHeight: 1.6 }}>
        Single shell (<code style={{ color: 'var(--color-accent)' }}>.tk-nav</code>) with brand modifier classes. All read the same tokens.
      </p>

      <SectionLabel>Top nav · brand variants · 4 stories</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Card name="oh-hey-lynae" arg=".brand-oh-a · default" bodyStyle={{ padding: 0 }}>
          <TopNav brand="oh-a" links={OH_A_LINKS} cta={{ label: 'Subscribe →' }} />
        </Card>
        <Card name="oh-hey-lynae · Editorial" arg=".brand-oh-b" bodyStyle={{ padding: 0 }}>
          <TopNav brand="oh-b" links={OH_B_LINKS} cta={{ label: 'RSS' }} />
        </Card>
        <Card name="Lunar Vega · Tech-forward" arg=".brand-lv-a" bodyStyle={{ padding: 0 }}>
          <TopNav brand="lv-a" links={LV_LINKS} cta={{ label: 'Start a project →' }} />
        </Card>
        <Card name="Lunar Vega · Premium" arg=".brand-lv-b" bodyStyle={{ padding: 0 }}>
          <TopNav brand="lv-b" links={[
            { label: 'Approach' }, { label: 'Offerings' }, { label: 'Process' }, { label: 'Industries' },
          ]} cta={{ label: 'Start a project →' }} />
        </Card>
      </div>
    </div>
  ),
}

// ─── Mobile Nav ───────────────────────────────────────────────────────────────

const MOBILE_ITEMS = [
  { label: 'Writing', count: '12 new', active: true },
  { label: 'Tech',     count: 14 },
  { label: 'Fitness',  count: 9 },
  { label: 'Creative', count: 6 },
  { label: 'Nerd',     count: 11 },
  { label: 'About' },
]

export const MobileNav: Story = {
  name: 'Navigation — mobile',
  render: () => (
    <div>
      <SectionLabel style={{ margin: '0 0 12px' }}>Mobile · 2 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Collapsed" arg=".layout-mobile" bodyStyle={{ padding: 0 }}>
          <TopNav brand="oh-a" links={OH_A_LINKS} mobile />
          <div style={{ height: '160px', background: 'var(--color-paper-2, #f4f3ee)' }} />
        </Card>
        <Card name="Open / drawer" arg="mobile-menu" bodyStyle={{ padding: 0 }}>
          <MobileMenu
            items={MOBILE_ITEMS}
            externalLink={{ label: 'LUNAR VEGA' }}
          />
        </Card>
      </Grid>
    </div>
  ),
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

export const TabsStory: Story = {
  name: 'Navigation — tabs',
  render: () => (
    <div>
      <SectionLabel style={{ margin: '0 0 12px' }}>Tabs · 2 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Segmented" arg=".tk-tabs (default)" bodyStyle={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
          <Tabs items={[
            { label: 'All',      count: 40 },
            { label: 'Tech',     count: 14 },
            { label: 'Fitness',  count: 9  },
            { label: 'Creative', count: 6  },
            { label: 'Nerd',     count: 11 },
          ]} />
        </Card>
        <Card name="Underline" arg=".tk-tabs.variant-underline" bodyStyle={{ padding: '24px' }}>
          <Tabs variant="underline" items={[
            { label: 'Overview' },
            { label: 'Process'  },
            { label: 'Pricing'  },
            { label: 'FAQ'      },
          ]} />
        </Card>
      </Grid>
    </div>
  ),
}

// ─── Breadcrumbs ──────────────────────────────────────────────────────────────

export const Breadcrumbs: Story = {
  name: 'Navigation — breadcrumbs',
  render: () => (
    <div>
      <SectionLabel style={{ margin: '0 0 12px' }}>Breadcrumbs · 2 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Default" arg=".tk-breadcrumb" bodyStyle={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
          <Breadcrumb items={[
            { label: 'oh-hey-lynae' },
            { label: 'writing'      },
            { label: 'tech'         },
            { label: 'building-tanstack' },
          ]} />
        </Card>
        <Card name="Long path" arg="truncated" bodyStyle={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
          <Breadcrumb items={[
            { label: '~'            },
            { label: 'lunar-vega'   },
            { label: 'services'     },
            { label: 'design-systems' },
          ]} />
        </Card>
      </Grid>
    </div>
  ),
}

// ─── Pagination & Steps ───────────────────────────────────────────────────────

export const PaginationAndSteps: Story = {
  name: 'Navigation — pagination & steps',
  render: () => (
    <div>
      <SectionLabel style={{ margin: '0 0 12px' }}>Pagination &amp; step · 3 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Pagination" arg=".tk-pagination" bodyStyle={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
          <Pagination total={7} current={2} />
        </Card>
        <Card name="Prev / next post" arg="paired pagination" bodyStyle={{ padding: '24px' }}>
          <PrevNext
            prev={{ title: '12-week strength block' }}
            next={{ title: 'New prints & process'   }}
          />
        </Card>
      </Grid>
      <div style={{ marginTop: '12px' }}>
        <Card name="Step nav (questionnaire)" arg=".tk-step-nav" bodyStyle={{ padding: '24px' }}>
          <StepNav steps={[
            { label: 'Scope',    status: 'done'    },
            { label: 'Timeline', status: 'done'    },
            { label: 'Budget',   status: 'active'  },
            { label: 'Stage',    status: 'pending' },
            { label: 'Team',     status: 'pending' },
            { label: 'Goals',    status: 'pending' },
            { label: 'Details',  status: 'pending' },
          ]} />
        </Card>
      </div>
    </div>
  ),
}

// ─── Side Nav ─────────────────────────────────────────────────────────────────

export const SideNavStory: Story = {
  name: 'Navigation — side nav',
  render: () => (
    <div>
      <SectionLabel style={{ margin: '0 0 12px' }}>Side nav · 2 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Sectioned side nav" arg=".tk-side-nav" bodyStyle={{ padding: 0 }}>
          <SideNav groups={[
            {
              label: 'Writing',
              items: [
                { label: 'All posts', count: 40, active: true },
                { label: 'Tech',      count: 14 },
                { label: 'Fitness',   count: 9  },
                { label: 'Creative',  count: 6  },
                { label: 'Nerd',      count: 11 },
              ],
            },
            {
              label: 'Pages',
              items: [
                { label: 'Archive' },
                { label: 'About'   },
                { label: 'Now'     },
                { label: 'Shop'    },
              ],
            },
          ]} />
        </Card>
        <Card name="Anchor TOC" arg=".tk-anchor-nav" bodyStyle={{ padding: '28px 24px' }}>
          <AnchorNav items={[
            { label: 'Why TanStack at all' },
            { label: 'The Router',          active: true },
            { label: 'SSR & the runtime'   },
            { label: "What's still rough"  },
            { label: 'Verdict'             },
          ]} />
        </Card>
      </Grid>
    </div>
  ),
}
