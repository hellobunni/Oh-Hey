type Domain = 'Tech' | 'Fitness' | 'Creative' | 'Nerd Stuff'

type Post = {
  id: number
  title: string
  excerpt: string
  domain: Domain
  date: string
}

const domainStyles: Record<Domain, { badge: string; dot: string }> = {
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

const posts: Post[] = [
  {
    id: 1,
    title: 'Building a personal site with TanStack Start',
    excerpt: 'Why I chose TanStack over Next.js and how the DX compares after a week of building.',
    domain: 'Tech',
    date: 'Apr 7, 2026',
  },
  {
    id: 2,
    title: '12-week strength block: week 4 check-in',
    excerpt: "Squats are finally feeling smooth. Here's what's clicking and what still needs work.",
    domain: 'Fitness',
    date: 'Apr 5, 2026',
  },
  {
    id: 3,
    title: 'New prints & the process behind them',
    excerpt: 'A look at the three pieces I finished this month and the tools I used to get there.',
    domain: 'Creative',
    date: 'Apr 3, 2026',
  },
  {
    id: 4,
    title: 'My top 10 Lego sets right now',
    excerpt: 'The builds sitting on my shelf and why each one earned its spot.',
    domain: 'Nerd Stuff',
    date: 'Apr 1, 2026',
  },
  {
    id: 5,
    title: 'The tools I actually use every day',
    excerpt: 'A no-fluff rundown of my dev setup, apps, and hardware as of Q2 2026.',
    domain: 'Tech',
    date: 'Mar 28, 2026',
  },
  {
    id: 6,
    title: 'Running base phase: what and why',
    excerpt: 'Taking a break from lifting to rebuild my aerobic base. Here\'s the plan.',
    domain: 'Fitness',
    date: 'Mar 25, 2026',
  },
]

export default function FeaturedFeed() {
  return (
    <section className="px-6 py-24 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Latest
          </h2>
          <a
            href="/feed"
            className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            View all →
          </a>
        </div>

        <ul className="divide-y divide-zinc-100">
          {posts.map((post) => {
            const styles = domainStyles[post.domain]
            return (
              <li key={post.id} className="group flex items-center justify-between gap-4 py-4 cursor-pointer">
                <h3 className="text-sm font-medium text-zinc-800 group-hover:text-zinc-500 transition-colors truncate">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 shrink-0">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
                    {post.domain}
                  </span>
                  <time className="text-xs text-zinc-400 w-24 text-right">{post.date}</time>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
