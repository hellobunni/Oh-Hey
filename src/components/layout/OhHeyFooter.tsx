import { cn } from '@/lib/utils'

interface OhHeyFooterProps {
  className?: string
}

export default function OhHeyFooter({ className }: OhHeyFooterProps) {
  return (
    <footer className={cn('border-t-2 border-card px-6 py-8', className)}>
      <div className="max-w-[1080px] mx-auto flex items-center gap-4 flex-wrap">
        <span className="w-[34px] h-[34px] border-2 border-mint bg-card-2 shrink-0" />
        <span className="font-pixel text-xs text-mint">OHHEYLYNAE</span>
        <span className="font-pixel text-[9px] text-ink-soft">© 2026 · GG</span>
        <div className="ml-auto flex gap-[18px] font-sans font-semibold text-sm">
          <a href="/rss.xml"                         className="text-ink-soft hover:text-mint transition-colors">RSS</a>
          <a href="/about"                            className="text-ink-soft hover:text-mint transition-colors">About</a>
          <a href="/now"                              className="text-ink-soft hover:text-mint transition-colors">Now</a>
          <a href="https://kodaraadvisory.com"        className="text-peri   hover:text-mint transition-colors">↗ kodara</a>
        </div>
      </div>
    </footer>
  )
}

export { OhHeyFooter }
export type { OhHeyFooterProps }
