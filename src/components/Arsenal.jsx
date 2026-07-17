const groups = [
  { label: 'Core', items: ['Python', 'FastAPI', 'PostgreSQL', 'Firebase'] },
  { label: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind'] },
  { label: 'Infrastructure', items: ['Render', 'Vercel', 'Supabase', 'Docker'] },
  { label: 'Practice', items: ['JWT / RBAC', 'REST APIs', 'WebSockets', 'CI basics'] },
];

export default function Arsenal() {
  return (
    <section id="arsenal" className="px-6 md:px-16 py-28 max-w-4xl">
      <p className="font-mono-rune text-[var(--verdigris)] text-xs tracking-[0.3em] uppercase mb-3">
        Folio IV
      </p>
      <h2 className="font-display text-4xl md:text-5xl text-[var(--gold-bright)] mb-14">
        The Arsenal
      </h2>

      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
        {groups.map((g) => (
          <div key={g.label}>
            <h3 className="font-display text-[var(--rubric)] text-lg mb-4 tracking-wide">
              {g.label}
            </h3>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li key={item} className="font-mono-rune text-[var(--parchment-dim)] text-sm border-b border-[var(--gold)]/15 pb-2 flex items-center gap-3">
                  <span className="text-[var(--gold)]">&#10035;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}