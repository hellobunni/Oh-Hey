import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/layout/SectionHeader'

interface Video {
  title: string
  description: string
  href: string
  type: string
  length: number
  date: string
}

interface LatestVideosProps {
  videos: Video[]
  num?: string
  title?: string
  action?: { label: string; href: string }
  className?: string
}

export default function LatestVideos({ videos, num = '02', title = 'LATEST VIDEOS', action, className }: LatestVideosProps) {
  return (
    <section className={className}>
      <SectionHeader num={num} title={title} action={action} />

      <div className="px-[clamp(20px,5vw,80px)] md:pb-12 site-inner">
        <div className="bg-paper-warm border-2 border-paper-ink shadow-[6px_6px_0_rgba(0,0,0,0.5)]">
          {videos.map((v, i) => (
            <a
              key={i}
              href={v.href}
              className={cn(
                'group flex items-center gap-5 px-5 py-[18px] no-underline',
                'transition-colors hover:bg-[color-mix(in_oklab,var(--color-paper-warm)_88%,var(--color-paper-ink))]',
                i < videos.length - 1 && 'border-b-2 border-dashed border-paper-ink/20',
              )}
            >
              <span className="font-mono text-xs text-ink-soft/50 w-7 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>

              <Play size={11} className="shrink-0 text-paper-ink/40 fill-current" aria-hidden />

              <span className="flex-1 min-w-0">
                <span className="block font-px text-sm text-paper-ink leading-snug">{v.title}</span>
                <span className="mt-1 block font-sans text-xs text-paper-ink/60 truncate">{v.description}</span>
              </span>

              <span className="font-px text-[9px] px-[7px] py-1 text-ink bg-mint/20 shrink-0">
                {v.type.toUpperCase()}
              </span>

              <span className="font-mono text-xs text-paper-ink/50 whitespace-nowrap shrink-0">{v.length}m</span>

              <span className="font-mono text-xs text-paper-ink/50 whitespace-nowrap shrink-0">{v.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}