export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Full-bleed background image */}
      <img
        src="/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay — bottom fade to white */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

      {/* Content sits above the overlay */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-24">

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-zinc-900 leading-none mb-6">
          Oh Hey, <br/>Lynae.
        </h1>
      </div>
    </section>
  )
}
