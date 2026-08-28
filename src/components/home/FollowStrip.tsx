import { ArrowRight } from 'lucide-react'

const PLATFORMS = [
  { label: 'YOUTUBE',   href: 'https://www.youtube.com/@ohheylynae' },
  { label: 'TIKTOK',    href: 'https://www.tiktok.com/@ohheylynae' },
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/ohheylynae' },
  { label: 'TWITCH',    href: 'https://www.twitch.tv/ohheylynae' },
  { label: 'DISCORD',   href: 'https://discord.gg/ohheylynae' },
] as const

export default function FollowStrip() {
  return (
    <section className="border-t-2 border-b-2 border-card bg-card-2">
      <div className="max-w-[1080px] mx-auto px-6 py-9 flex items-center gap-[18px] flex-wrap">
        <span className="inline-flex items-center gap-2 font-px text-sm text-ink mr-auto">
          FIND ME EVERYWHERE
          <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
        </span>
        {PLATFORMS.map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-px text-xs px-3.5 py-2.5 border-2 border-card text-ink-soft bg-paper transition-colors hover:border-mint hover:text-mint"
          >
            {p.label}
          </a>
        ))}
      </div>
    </section>
  )
}
