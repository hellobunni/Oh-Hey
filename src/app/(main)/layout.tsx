
import FooterSwitch from '@/components/layout/FooterSwitch'
import { Nav } from '@/components/Nav'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
          {/* Only keyframes stay — everything else is Tailwind */}
          <style>{`
        @keyframes cs-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 var(--color-accent-soft); }
          50%       { opacity: 0.5; box-shadow: 0 0 0 6px transparent; }
        }
        @keyframes cs-blink { 50% { opacity: 0; } }
        .cs-pulse { animation: cs-pulse 1.8s var(--ease-out) infinite; }
        .cs-blink { animation: cs-blink 1.1s steps(1) infinite; }
      `}</style>

      <div className="min-h-screen flex flex-col bg-paper text-ink antialiased font-sans tracking-normal [background-image:linear-gradient(to_right,var(--color-hairline)_1px,transparent_1px)] [background-size:calc(100%/12)_100%]">
      <Nav />
      {children}
      <FooterSwitch />
</div>

    </>
  )
}
