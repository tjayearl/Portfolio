export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 relative">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="rubric-divider absolute top-24 left-6 right-6 md:left-16 md:right-16" />
        <div className="rubric-divider absolute bottom-24 left-6 right-6 md:left-16 md:right-16" />
      </div>

      <p className="font-mono-rune text-[var(--verdigris)] text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
        Folio I &mdash; Frontispiece
      </p>

      <h1 className="font-display font-black text-[13vw] md:text-[6.5rem] leading-[0.9] text-[var(--parchment)] tracking-tight">
        Tjay Earl
      </h1>

      <p className="font-display text-[var(--gold-bright)] text-lg md:text-2xl mt-4 tracking-wide">
        Backend Developer &amp; Systems Builder
      </p>

      <p className="max-w-xl mt-6 text-[var(--parchment-dim)] text-lg md:text-xl leading-relaxed italic">
        I keep the ledgers of software honest &mdash; APIs that hold under load,
        databases that don't lie, and auth that actually locks the door.
        Nairobi-based, FastAPI-fluent, presently apprenticed at the
        Kenya Broadcasting Corporation.
      </p>

      <div className="flex items-center gap-5 mt-10">
        <a href="#codex" className="wax-seal shrink-0" aria-label="Read the Codex">
          <span className="font-display text-[var(--parchment)] text-lg font-bold">TE</span>
        </a>
        <a href="#correspondence" className="font-mono-rune text-sm text-[var(--parchment)] border border-[var(--gold)] px-5 py-3 hover:bg-[var(--gold)] hover:text-[var(--ink-deep)] transition-colors">
          Send a Raven &rarr;
        </a>
      </div>
    </section>
  );
}