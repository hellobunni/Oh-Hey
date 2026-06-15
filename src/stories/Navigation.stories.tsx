import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  TopNav, MobileMenu} from '@/components/ui/navigation'
import { cn, cva } from '@/lib/utils'
import TopNavigation from '@/components/navigation/topNavigation'
import Breadcrumb from '@/components/navigation/breadcrumb'
import AnchorNav from '@/components/navigation/AnchorNav'
import Pagination from '@/components/navigation/Pagination'
import PrevNext from '@/components/navigation/PrevNext'
import StepNav from '@/components/navigation/StepNav'
import SideNav from '@/components/navigation/SideNav'
import Tabs from '@/components/navigation/Tabs'

const meta = {
  title: 'Components/Navigation',
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── Layout helpers ───────────────────────────────────────────────────────────


function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('font-mono text-xs tracking-wide uppercase text-ink-soft mb-3', className)}>
      {children}
    </div>
  )
}

const gridVariants = cva('grid gap-3', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
    },
  },
  defaultVariants: {
    cols: 2,
  },
})

function Grid({ cols, children }: { cols?: 1 | 2 | 3; children: React.ReactNode }) {
  return <div className={cn(gridVariants({ cols }))}>{children}</div>
}

function Card({ name, arg, children, bodyClassName }: {
  name: string; arg?: string; children: React.ReactNode; bodyClassName?: string
}) {
  return (
    <div className="border border-line-strong flex flex-col">
      <div className="flex justify-between items-center py-2 px-3 border-b border-line bg-paper-2 font-mono text-xs">
        <span className="font-medium">{name}</span>
        {arg && <span className="text-accent">{arg}</span>}
      </div>
      <div className={cn(bodyClassName)}>
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

export const TopNavBrands: Story = {
  name: 'Navigation — top nav brands',
  render: () => <TopNavigation />,
}

// ─── Mobile Nav ───────────────────────────────────────────────────────────────

const MOBILE_ITEMS = [
  { label: 'Writing', href: '/writing', count: '12 new', active: true },
  { label: 'Tech',     href: '/tech',     count: 14 },
  { label: 'Fitness',  href: '/fitness',  count: 9  },
  { label: 'Creative', href: '/creative', count: 6  },
  { label: 'Nerd',     href: '/nerd',     count: 11 },
  { label: 'About',    href: '/about' },
]

function MobileNavDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-line-strong overflow-hidden" style={{ width: 390 }}>
      <TopNav
        brand="oh-hey-lynae"
        links={[]}
        brandHref="/"
        mobile
        menuOpen={open}
        onMenuClick={() => setOpen((p) => !p)}
      />
      {open && (
        <MobileMenu
          items={MOBILE_ITEMS}
          externalLink={{ label: 'Lunar Kodara' }}
        />
      )}
      <div className="h-48 bg-paper-2 flex items-center justify-center font-mono text-xs text-ink-mute">
        page content
      </div>
    </div>
  )
}

export const MobileNavStory: Story = {
  name: 'Navigation — mobile nav',
  render: () => (
    <div>
      <SectionLabel>Mobile nav · interactive</SectionLabel>
      <p className="font-mono text-xs text-ink-mute mb-6 max-w-md leading-relaxed">
        Tap the hamburger to open the drawer. Tap again (or press Esc) to close.
        Items render as <code className="text-accent">&lt;a&gt;</code> when an href is provided.
      </p>
      <MobileNavDemo />
    </div>
  ),
}

// ─── TopNav + MobileNav interaction ───────────────────────────────────────────

function ResponsiveNavDemo() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="flex flex-col gap-8">
      {/* Desktop */}
      <div>
        <SectionLabel className="mb-2">Desktop — TopNav (full links + CTA)</SectionLabel>
        <div className="border border-line-strong overflow-hidden">
          <TopNav
            brand="oh-hey-lynae"
            links={OH_A_LINKS}
            brandHref="/"
            cta={{ label: 'Subscribe →', href: '/subscribe' }}
          />
        </div>
      </div>

      {/* Mobile */}
      <div>
        <SectionLabel className="mb-2">Mobile — MobileNav (hamburger → drawer)</SectionLabel>
        <div className="border border-line-strong overflow-hidden" style={{ width: 390 }}>
          <TopNav
            brand="oh-hey-lynae"
            links={[]}
            brandHref="/"
            mobile
            menuOpen={mobileOpen}
            onMenuClick={() => setMobileOpen((p) => !p)}
          />
          {mobileOpen && (
            <MobileMenu
              items={MOBILE_ITEMS}
              externalLink={{ label: 'Lunar Kodara' }}
            />
          )}
          <div className="h-32 bg-paper-2 flex items-center justify-center font-mono text-xs text-ink-mute">
            page content
          </div>
        </div>
      </div>

      {/* Annotation */}
      <div className="border border-line bg-paper-2 px-4 py-3 font-mono text-xs text-ink-soft leading-relaxed max-w-lg">
        <span className="text-ink font-medium block mb-1">How they connect</span>
        Both use the same <code className="text-accent">TopNav</code> primitive.
        Desktop passes <code className="text-accent">links</code> + <code className="text-accent">cta</code>.
        Mobile passes <code className="text-accent">mobile</code> + <code className="text-accent">menuOpen</code> + <code className="text-accent">onMenuClick</code>,
        then conditionally renders <code className="text-accent">MobileMenu</code> below.
        The <code className="text-accent">MobileNav</code> component wires this up with managed state.
      </div>
    </div>
  )
}

export const MobileTopNavInteraction: Story = {
  name: 'Navigation — TopNav + MobileNav interaction',
  render: () => <ResponsiveNavDemo />,
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

export const TabsStory: Story = {
  name: 'Navigation — tabs',
  render: () => (
    <div>
      <SectionLabel>Tabs · 2 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Segmented" arg=".tk-tabs (default)" bodyClassName="p-6 flex justify-center">
          <Tabs items={[
            { label: 'All',      count: 40 },
            { label: 'Tech',     count: 14 },
            { label: 'Fitness',  count: 9  },
            { label: 'Creative', count: 6  },
            { label: 'Nerd',     count: 11 },
          ]} />
        </Card>
        <Card name="Underline" arg=".tk-tabs.variant-underline" bodyClassName="p-6">
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
      <SectionLabel>Breadcrumbs · 2 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Default" arg=".tk-breadcrumb" bodyClassName="p-6 flex justify-center">
          <Breadcrumb items={[
            { label: 'oh-hey-lynae' },
            { label: 'writing'      },
            { label: 'tech'         },
            { label: 'building-tanstack' },
          ]} />
        </Card>
        <Card name="Long path" arg="truncated" bodyClassName="p-6 flex justify-center">
          <Breadcrumb items={[
            { label: '~'            },
            { label: 'kodara'       },
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
      <SectionLabel>Pagination &amp; step · 3 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Pagination" arg=".tk-pagination" bodyClassName="p-6 flex justify-center">
          <Pagination total={7} current={2} />
        </Card>
        <Card name="Prev / next post" arg="paired pagination" bodyClassName="p-6">
          <PrevNext
            prev={{ title: '12-week strength block' }}
            next={{ title: 'New prints & process'   }}
          />
        </Card>
      </Grid>
      <div className="mt-3">
        <Card name="Step nav (questionnaire)" arg=".tk-step-nav" bodyClassName="p-6">
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
      <SectionLabel>Side nav · 2 stories</SectionLabel>
      <Grid cols={2}>
        <Card name="Sectioned side nav" arg=".tk-side-nav" bodyClassName="p-0">
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
        <Card name="Anchor TOC" arg=".tk-anchor-nav" bodyClassName="py-7 px-6">
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
