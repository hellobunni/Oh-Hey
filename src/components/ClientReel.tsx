// Official brand SVGs sourced from Simple Icons (simpleicons.org) and Wikimedia Commons.
// Qualigence uses a wordmark — swap for an official SVG when available.
// All logos render via fill="currentColor" so the grey treatment applies uniformly.

import { FigmaLogo, QualigenceLogo, RedBullLogo, RocketLogo, StockXLogo, UMichLogo } from "#/utils/logos"

const logos = [
  { id: 'stockx',     Logo: StockXLogo },
  { id: 'redbull',    Logo: RedBullLogo },
  { id: 'rocket',     Logo: RocketLogo },
  { id: 'umich',      Logo: UMichLogo },
  { id: 'qualigence', Logo: QualigenceLogo },
  { id: 'figma',      Logo: FigmaLogo },
]

export default function ClientReel() {
  return (
    <section className="pt-8 pb-3 overflow-hidden w-full">
      <p className="text-center text-[.625rem] font-semibold uppercase tracking-widest text-zinc-300 mb-8">
        Worked with
      </p>

      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div
          className="flex w-max mx-auto"
          style={{ animation: 'marquee 60s linear infinite' }}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-20 pr-20 shrink-0">
              {logos.map(({ id, Logo }) => (
                <div
                  key={id}
                  className="text-zinc-300 hover:text-zinc-400 transition-colors flex items-center"
                >
                  <Logo />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
