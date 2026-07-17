export default function Correspondence() {
  return (
    <section
      id="correspondence"
      className="px-6 md:px-16 py-28 scriptorium-ground flex flex-col items-start"
    >
      <p className="font-mono-rune text-[var(--verdigris)] text-xs tracking-[0.3em] uppercase mb-3">
        Folio V &mdash; Final
      </p>
      <h2 className="font-display text-4xl md:text-5xl text-[var(--gold-bright)] mb-6">
        Correspondence
      </h2>
      <p className="text-[var(--parchment-dim)] text-lg max-w-lg leading-relaxed mb-10">
        Open to backend roles, freelance builds, and anything that needs
        an API that won't fall over. A raven sent to the address below
        reaches me fastest.
      </p>

      <div className="flex flex-col gap-4">
        <a href="mailto:iamtjayearl@gmail.com" className="font-display text-2xl text-[var(--parchment)] hover:text-[var(--gold-bright)] transition-colors border-b border-[var(--gold)]/40 pb-1 w-fit">
          iamtjayearl@gmail.com
        </a>
        <div className="flex gap-6 mt-2 font-mono-rune text-sm">
          <a href="https://github.com/tjayearl" className="text-[var(--verdigris)] hover:text-[var(--gold)] transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/tjay-earl" className="text-[var(--verdigris)] hover:text-[var(--gold)] transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}