const links = [
  { href: '#codex', label: 'Codex' },
  { href: '#works', label: 'Works' },
  { href: '#arsenal', label: 'Arsenal' },
  { href: '#cv', label: 'CV' },
  { href: '#correspondence', label: 'Correspondence' },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[var(--ink)]/80 border-b border-[var(--gold)]/15">
      <nav className="flex items-center justify-between px-6 md:px-16 py-4">
        <a href="#" className="font-display text-[var(--gold-bright)] text-sm tracking-[0.2em]">
          TE
        </a>
        <ul className="hidden md:flex gap-8 font-mono-rune text-xs tracking-[0.15em] uppercase">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[var(--parchment-dim)] hover:text-[var(--gold-bright)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}