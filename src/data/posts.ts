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
    id: 2,
    slug: '12-week-strength-block-week-4-check-in',
    title: '12-week strength block: week 4 check-in',
    excerpt: "Squats are finally feeling smooth. Here's what's clicking and what still needs work.",
    domain: 'Fitness',
    date: 'Apr 5, 2026',
    body: `Four weeks in. Here's the honest rundown.

Squats finally clicked this week — the cue that fixed it was thinking about "pushing the floor away" rather than "standing up." Sounds obvious in retrospect, but something about the phrasing made my bracing tighten up at the right moment. My depth improved and I wasn't getting that forward lean out of the hole anymore.

Bench is moving steadily. Nothing exciting, just adding 2.5lb each session and hitting the reps. The boring stuff works.

Deadlift is the one I'm watching. My lower back was talking to me after Wednesday's session — not injured, just tired. I think I'm pulling with too much lumbar extension at lockout. Dropping the weight 10% next week to clean up the pattern before I load it again.

Sleep has been the X factor. The two nights I got 8+ hours I felt noticeably stronger. The two nights I got 6 I dragged through the session. I know this, and I still don't prioritize it enough.

Goals for weeks 5–8: keep the squat pattern, fix the deadlift finish, get to bed before midnight at least 5 nights a week.`,
  },
  {
    id: 3,
    slug: 'new-prints-and-the-process-behind-them',
    title: 'New prints & the process behind them',
    excerpt: 'A look at the three pieces I finished this month and the tools I used to get there.',
    domain: 'Creative',
    date: 'Apr 3, 2026',
    body: `Three new prints finished this month. I want to talk about the process more than the output, because the output is just the artifact — the interesting part is how I got there.

The first piece started as a gesture drawing I did during a 20-minute warmup session. I liked the negative space in one corner and built the whole composition around it. That doesn't usually work for me, starting from a corner, but this time it did.

The second one I threw away twice. The third version is what you see. I kept the color palette from version one (a warm ochre against a desaturated teal that I mixed and re-mixed six times) and the composition from version two. Frankenstein piece. It works.

For tools: Procreate for the initial sketches and value studies, then I printed a transfer and worked on Fabriano hot press with gouache. The texture you see in the shadows is from a silicone brush I almost never use — I was experimenting and it stuck.

The third piece is the quietest. Just two shapes and a lot of white space. I almost didn't share it because it felt too minimal, but it's the one I keep looking at.`,
  },
  {
    id: 4,
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
    id: 5,
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
  },
  {
    id: 6,
    slug: 'running-base-phase-what-and-why',
    title: 'Running base phase: what and why',
    excerpt: "Taking a break from lifting to rebuild my aerobic base. Here's the plan.",
    domain: 'Fitness',
    date: 'Mar 25, 2026',
    body: `I've been lifting consistently for about three years. My aerobic fitness has quietly atrophied the whole time.

I noticed it on a hike last fall. Steeper sections that used to feel moderate were harder than they should have been. My resting heart rate has crept up. Recovery between sets that aren't even that heavy takes longer than it used to.

So I'm spending eight weeks rebuilding the base. Not replacing lifting entirely — I'll keep two sessions a week — but shifting the priority.

The plan is simple: run five days a week, all Zone 2. That means conversational pace, heart rate under 145, ego off. Most of these runs will feel embarrassingly easy. That's the point. Zone 2 work builds the mitochondrial density and cardiac output that everything else sits on top of.

I'm also doing one longer run on weekends, starting at 60 minutes and adding 10 minutes every two weeks.

Eight weeks from now I expect my resting heart rate to drop, my perceived effort on moderate cardio to decrease, and my recovery between lifting sets to improve. I'll check back in.

If you've been lifting for years and ignoring your aerobic base, you might want to do the same thing.`,
  },
]

export function getPostById(id: number): Post | undefined {
  return posts.find((p) => p.id === id)
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
