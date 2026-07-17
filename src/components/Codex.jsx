const entries = [
  {
    year: '2026 — 2027',
    title: 'Kenya Broadcasting Corporation',
    role: 'Backend Developer, Digital Division (Internship)',
    body: 'Built Digital AdBoard from the ground up — nine FastAPI routers, Firestore security rules, a real KBC rate card of 57 products, and an immutable audit log enforcing a hard payment gate before campaign briefs reach Digital Ops.',
  },
  {
    year: '2025',
    title: 'Moringa School',
    role: 'Software Engineering Program',
    body: 'Trained across React, TypeScript, Next.js, FastAPI, and PostgreSQL. Graduated into backend work by way of building things that needed to survive contact with real data.',
  },
];

export default function Codex() {
  return (
    <section id="codex" className="px-6 md:px-16 py-28 max-w-4xl">
      <p className="font-mono-rune text-[var(--verdigris)] text-xs tracking-[0.3em] uppercase mb-3">
        Folio II
      </p>
      <h2 className="font-display text-4xl md:text-5xl text-[var(--gold-bright)] mb-14">
        The Codex
      </h2>

      <div className="space-y-16">
        {entries.map((entry, i) => (
          <article key={i} className="relative pl-8 md:pl-12 border-l border-[var(--gold)]/30">
            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[var(--rubric)] ring-2 ring-[var(--ink)] ring-offset-2 ring-offset-[var(--ink)]" />
            <p className="font-mono-rune text-[var(--gold)] text-sm mb-1">{entry.year}</p>
            <h3 className="font-display text-2xl md:text-3xl text-[var(--parchment)]">
              {entry.title}
            </h3>
            <p className="text-[var(--verdigris)] font-medium italic mt-1 mb-3">{entry.role}</p>
            <p className="text-lg text-[var(--parchment-dim)] leading-relaxed max-w-2xl">
              {entry.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}