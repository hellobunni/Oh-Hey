import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="py-12 border-b border-line hero-section">
      <div className="ds-sec-label">14 · Patterns — Hero</div>
      <h2 className="ds-h2">Two hero structures.</h2>
      <div className="ds-grid-2">
        <div className="brand-panel">
          <div className="eyebrow">DIRECTION A · TERMINAL</div>
          <h4>Notes from <em>/ a curious</em> generalist.</h4>
          <p>Two-column hero: bold display headline + terminal card with mono context. Used for oh-hey home and LV consulting hero A.</p>
        </div>
        <div className="brand-panel">
          <div className="eyebrow">DIRECTION B · BROADSHEET</div>
          <h4>A little bit of <em>everything,</em> loudly.</h4>
          <p>Single-column mega display with editorial italic emphasis, meta row above and sub-grid below. For oh-hey home B and LV consulting B.</p>
        </div>
      </div>
    </section>
  )
}