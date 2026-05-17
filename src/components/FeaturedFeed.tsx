import { Link } from '@tanstack/react-router'
import { posts, domainStyles } from '../data/posts'

export default function FeaturedFeed() {
  return (
    <section className="md:px-6 px-10 py-20 border-zinc-100">
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
              <li key={post.id}>
                <Link
                  to="/posts/$postId"
                  params={{ postId: String(post.id) }}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <h3 className="text-sm font-medium text-zinc-800 group-hover:text-zinc-500 transition-colors truncate">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className={`hidden md:inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
                      {post.domain}
                    </span>
                    <time className="text-xs text-zinc-400 w-24 text-right">{post.date}</time>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
