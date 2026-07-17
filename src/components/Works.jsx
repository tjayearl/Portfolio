const projects = [
  {
    name: 'TasklyAI',
    desc: 'A Kenyan gig marketplace connecting recruiters with service providers. Built the full backend — auth, task lifecycle, M-Pesa integration — while migrating to Supabase for real-time subscriptions.',
    stack: ['FastAPI', 'PostgreSQL', 'Supabase', 'Render'],
  },
  {
    name: 'Digital AdBoard',
    desc: "KBC's internal campaign management system. Enforces a signed order-sheet workflow and hard payment gate before Digital Ops can touch a brief.",
    stack: ['FastAPI', 'Firestore', 'Firebase Auth', 'Cloudinary'],
  },
  {
    name: 'E.A.R.L AI',
    desc: 'A personal AI assistant running on local Llama/Ollama, reachable through Vanguard — a WebSocket tunnel I built from scratch to bridge a home machine to a public relay.',
    stack: ['FastAPI', 'Ollama', 'WebSockets', 'PostgreSQL'],
  },
  {
    name: 'Sentinel / ISS',
    desc: 'A reusable Python security middleware package — rate limiting, JWT blacklisting, RBAC, audit logging — meant to sit in front of every backend I ship.',
    stack: ['Python', 'JWT', 'Middleware'],
  },
  {
    name: 'BalanceIQ',
    desc: 'A personal finance dashboard for tracking spend and net worth over time, deployed as a two-service split between Vercel and Render.',
    stack: ['React', 'FastAPI', 'PostgreSQL'],
  },
  {
    name: 'Machines',
    desc: 'A vehicle marketplace concept — listings, search, and dealer accounts — built as a portfolio piece from a long-standing interest in cars.',
    stack: ['React', 'TypeScript', 'FastAPI'],
  },
];

export default function Works() {
  return (
    <section id="works" className="px-6 md:px-16 py-28 scriptorium-ground">
      <p className="font-mono-rune text-[var(--verdigris)] text-xs tracking-[0.3em] uppercase mb-3">
        Folio III
      </p>
      <h2 className="font-display text-4xl md:text-5xl text-[var(--gold-bright)] mb-14">
        Works &amp; Commissions
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.name} className="folio p-6 flex flex-col">
            <h3 className="font-display text-xl text-[var(--parchment)] mb-3">{p.name}</h3>
            <p className="text-[var(--parchment-dim)] leading-relaxed flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {p.stack.map((s) => (<span key={s} className="tag-inscribed px-2 py-1">{s}</span>))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}