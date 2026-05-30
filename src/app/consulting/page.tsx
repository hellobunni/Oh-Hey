'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import '../../styles/lv.css'
import {
  hero,
  approach,
  offerings,
  industries,
  processSteps,
  cta,
  footer,
} from '../../data/consulting'
import {
  FigmaLogo,
  QualigenceLogo,
  RedBullLogo,
  RocketLogo,
  StockXLogo,
  UMichLogo,
} from '../../utils/logos'
import { buttonVariants } from '@/components/ui/button'

const reelLogos = [
  { id: 'stockx',     Logo: StockXLogo },
  { id: 'redbull',    Logo: RedBullLogo },
  { id: 'rocket',     Logo: RocketLogo },
  { id: 'umich',      Logo: UMichLogo },
  { id: 'qualigence', Logo: QualigenceLogo },
  { id: 'figma',      Logo: FigmaLogo },
]

export default function ConsultingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.lv-animate').forEach((el) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = '0'
      htmlEl.style.transform = 'translateY(20px)'
      htmlEl.style.transition =
        'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      observer.observe(htmlEl)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="lv-a lv-page">
      <nav className="lv-nav">
        <Link href="/" className="nav-wordmark">Kodara</Link>
        <Link href="/questionnaire" className="nav-cta">Start a project</Link>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="hero-eyebrow fade-up delay-1">{hero.eyebrow}</p>
          <h1 className="hero-headline fade-up delay-2">
            {hero.headline.line1}<br />
            {hero.headline.line2italic
              ? <em>{hero.headline.line2}</em>
              : hero.headline.line2}<br />
            {hero.headline.line3}
          </h1>
          <p className="hero-subhead fade-up delay-3">{hero.subhead}</p>
          <div className="hero-actions fade-up delay-4">
            <Link
              href="/questionnaire"
              className={buttonVariants({ variant: 'accent', size: 'lg' })}
            >
              {hero.ctaPrimary}
            </Link>
            <a href="#offerings" className="btn-ghost">{hero.ctaSecondary}</a>
          </div>
        </div>

        <div className="hero-image-wrap fade-up delay-3">
          <div className="hero-image-frame">
            <img src="/images/headshot.png" alt={hero.nameplate.name} />
            <div className="hero-name-plate">
              <div className="hero-name">{hero.nameplate.name}</div>
              <div className="hero-title">{hero.nameplate.title}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="logo-reel">
        <div className="logo-reel-track">
          <div className="logo-reel-inner">
            {[0, 1].map((copy) => (
              <div key={copy} className="logo-reel-group">
                {reelLogos.map(({ id, Logo }) => (
                  <div key={id} className="logo-reel-item">
                    <Logo />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="ai-section lv-animate">
        <div>
          <p className="section-label">The approach</p>
          <h2 className="ai-headline">
            AI handles<br />
            the execution.<br />
            <em>I handle the thinking</em><br />
            that makes it matter.
          </h2>
          <p className="ai-body">{approach.body}</p>
        </div>
        <div className="ai-columns">
          <div>
            <p className="ai-col-label">Where I lead</p>
            <ul className="ai-list">
              {approach.iLead.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <p className="ai-col-label">Where AI accelerates</p>
            <ul className="ai-list">
              {approach.aiAccelerates.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="offerings-section lv-animate" id="offerings">
        <div className="offerings-header">
          <div>
            <p className="section-label">What we do together</p>
            <h2 className="offerings-headline">Three ways<br />to engage.</h2>
          </div>
        </div>
        <div className="offerings-grid">
          {offerings.map((o) => (
            <div key={o.number} className="offering-card">
              <div className="offering-number">{o.number}</div>
              <h3 className="offering-name">{o.name}</h3>
              <p className="offering-type">{o.type}</p>
              <p className="offering-desc">{o.description}</p>
              <div className="offering-meta">
                {o.meta.map((row) => (
                  <div key={row.label} className="offering-meta-row">
                    <span className="offering-meta-label">{row.label}</span>
                    <span className={row.isPrice ? 'offering-price' : 'offering-meta-value'}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="industries-section lv-animate">
        <div className="industries-left">
          <p className="section-label">Experience across</p>
          <h2 className="industries-headline">12 years.<br />6 industries.<br />Both sides of the table.</h2>
        </div>
        <div className="industries-grid">
          {industries.map((name) => (
            <div key={name} className="industry-item">{name}</div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="process-section lv-animate">
        <div className="process-header">
          <p className="section-label">How it works</p>
          <h2 className="process-headline">A process designed<br />to move fast<br />and move right.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((s) => (
            <div key={s.number} className="process-step">
              <div className="process-dot">{s.number}</div>
              <p className="process-step-tag">{s.tag}</p>
              <h3 className="process-step-title">{s.title}</h3>
              <p className="process-step-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      <section className="cta-section lv-animate">
        <div className="cta-inner">
          <p className="cta-eyebrow">{cta.eyebrow}</p>
          <h2 className="cta-headline">{cta.headline}<br /><em>{cta.headlineItalic}</em></h2>
          <p className="cta-sub">{cta.sub}</p>
          <Link
            href="/questionnaire"
            className={buttonVariants({ variant: 'accent', size: 'lg' })}
          >
            {cta.button}
          </Link>
        </div>
      </section>

      <footer>
        <span className="footer-copy">{footer.copy}</span>
        <Link href="/" className="footer-back">{footer.backLabel}</Link>
      </footer>
    </div>
  )
}
