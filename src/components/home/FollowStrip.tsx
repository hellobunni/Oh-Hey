const PLATFORMS = ['YOUTUBE', 'TIKTOK', 'INSTAGRAM', 'TWITCH', 'DISCORD'] as const

export default function FollowStrip() {
  return (
    <section className="border-t-2 border-b-2 border-card bg-card-2">
      <div className="max-w-[1080px] mx-auto px-6 py-9 flex items-center gap-[18px] flex-wrap">
        <span className="font-pixel text-sm text-ink mr-auto">FIND ME EVERYWHERE →</span>
        {PLATFORMS.map((p) => (
          <a
            key={p}
            href="#"
            className="font-pixel text-xs px-3.5 py-2.5 border-2 border-card text-ink-soft bg-paper transition-colors hover:border-mint hover:text-mint"
          >
            {p}
          </a>
        ))}
      </div>
    </section>
  )
}
