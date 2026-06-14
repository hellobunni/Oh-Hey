export type Domain = 'Tech' | 'Fitness' | 'Creative' | 'Nerd Stuff'

export type Post = {
  id: number
  slug: string
  title: string
  excerpt: string
  domain: Domain
  date: string
  body: string
}

export const domainStyles: Record<Domain, { badge: string; dot: string }> = {
  Tech: {
    badge: 'bg-blue-50 text-blue-600',
    dot: 'bg-blue-500',
  },
  Fitness: {
    badge: 'bg-emerald-50 text-emerald-600',
    dot: 'bg-emerald-500',
  },
  Creative: {
    badge: 'bg-orange-50 text-orange-600',
    dot: 'bg-orange-500',
  },
  'Nerd Stuff': {
    badge: 'bg-violet-50 text-violet-600',
    dot: 'bg-violet-500',
  },
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'building-a-personal-site-with-tanstack-start',
    title: 'Building a personal site with TanStack Start',
    excerpt: 'Why I chose TanStack over Next.js and how the DX compares after a week of building.',
    domain: 'Tech',
    date: 'Apr 7, 2026',
    body: `I've shipped several personal sites over the years — Gatsby, Next.js, SvelteKit, plain Vite. Each one taught me something. This one taught me that file-based routing doesn't have to mean opinionated everything.

TanStack Start is still young, but the DX is surprisingly tight for a v1. The router is the star: typed params, typed search params, nested layouts, and loaders that actually feel ergonomic. I didn't hit a single "why won't this type-check" moment that lasted more than five minutes.

The part I was most curious about was SSR. TanStack Start handles it through Vinxi under the hood, which means you get server functions, streaming, and edge-ready output without wiring up a custom server. For a personal site that's mostly static content, that's more than enough.

Where it still shows its age is the ecosystem. Plugins, adapters, and third-party integrations are thinner than Next.js. If you need a rich plugin ecosystem or a large community to copy-paste solutions from, stick with Next. But if you want to actually understand your stack and enjoy the process, Start is worth the bet.

I'll keep building here. The repo is clean, the patterns are consistent, and I'm not fighting the framework.`,
  },
  {
    id: 3,
    slug: 'my-top-10-lego-sets-right-now',
    title: 'My top 10 Lego sets right now',
    excerpt: 'The builds sitting on my shelf and why each one earned its spot.',
    domain: 'Nerd Stuff',
    date: 'Apr 1, 2026',
    body: `I have too many Lego sets. This is not a complaint.

Here are the ten currently on the shelf and why each one is staying there:

The Botanical Collection rose bouquet is the one people always ask about first. The color accuracy on those petals is genuinely impressive. It's also a surprisingly meditative build — repetitive in a good way.

The Icons Typewriter is pure nostalgia engineering. Every mechanism works. The carriage return clicks. I've demonstrated how it works to everyone who has come to my apartment in the last year.

The Architecture Skyline series: I have four of them lined up. They're small, they're fast, and they're satisfying in a different way than the big sets. More like a palate cleanser.

The Technic Bugatti Chiron is the oldest set on the shelf and still the most technically impressive thing I've built. The W16 engine with moving pistons alone is worth it.

The rest I'll save for a longer post — this is already getting long and I haven't even gotten to the Millennium Falcon in the closet that I haven't started yet because I'm waiting for the right weekend.`,
  },
  {
    id: 4,
    slug: 'the-tools-i-actually-use-every-day',
    title: 'The tools I actually use every day',
    excerpt: 'A no-fluff rundown of my dev setup, apps, and hardware as of Q2 2026.',
    domain: 'Tech',
    date: 'Mar 28, 2026',
    body: `No affiliate links. No sponsored mentions. Just what's actually open on my machine most days.

Editor: Cursor. I switched from VS Code about six months ago and haven't looked back. The AI-native workflow is genuinely faster once you stop trying to use it like a dumb autocomplete and start treating it like a pairing partner.

Terminal: Ghostty. Fast, native, sensible defaults. I spent years configuring iTerm2 and Warp and at some point I just wanted something that worked without ceremony.

Notes: Obsidian for anything that needs to persist. Apple Notes for quick capture. I've tried to consolidate these into one app four times and I've stopped fighting it.

Design: Figma for anything collaborative or component-based. Pixelmator Pro for quick image work. Procreate on iPad for anything that needs to feel like drawing.

Hardware: M3 MacBook Pro 16" at the desk, M2 iPad Pro when I'm moving around. The combination is the most productive I've ever been on hardware.

One underrated tool: Raycast. If you're still using Spotlight I genuinely feel bad for you.`,
  }
]

export function getPostById(id: number): Post | undefined {
  return posts.find((p) => p.id === id)
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
