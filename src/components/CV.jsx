import { cv } from '../data/cv';

export default function CV() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cv" className="px-6 md:px-16 py-28 max-w-4xl">
      <p className="font-mono-rune text-[var(--verdigris)] text-xs tracking-[0.3em] uppercase mb-3 no-print">
        Folio VI
      </p>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-14">
        <h2 className="font-display text-4xl md:text-5xl text-[var(--gold-bright)]">
          The Ledger
        </h2>
        <button
          onClick={handlePrint}
          className="no-print font-mono-rune text-sm text-[var(--parchment)] border border-[var(--gold)] px-5 py-3 hover:bg-[var(--gold)] hover:text-[var(--ink-deep)] transition-colors"
        >
          Download / Print CV &darr;
        </button>
      </div>

      <div id="cv-printable" className="folio p-8 md:p-12">
        {/* Header */}
        <header className="mb-10 pb-6 border-b border-[var(--gold)]/25">
          <h3 className="font-display text-3xl text-[var(--parchment)]">{cv.name}</h3>
          <p className="font-display text-[var(--rubric)] text-lg mt-1">{cv.title}</p>
          <p className="font-mono-rune text-xs text-[var(--parchment-dim)] mt-4 leading-relaxed">
            {cv.location} &middot; {cv.email} &middot; {cv.phone}
            <br />
            {cv.github} &middot; {cv.linkedin} &middot; {cv.site}
          </p>
        </header>

        {/* Summary */}
        <p className="text-lg text-[var(--parchment-dim)] leading-relaxed italic mb-10">
          {cv.summary}
        </p>

        {/* Skills */}
        <CVBlock title="Core Skills & Competencies">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {cv.skills.map((s) => (
              <div key={s.group}>
                <h4 className="font-display text-[var(--rubric)] text-base mb-2">
                  {s.group}
                </h4>
                <ul className="space-y-1">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-[var(--parchment-dim)] text-[0.95rem] leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CVBlock>

        {/* Experience */}
        <CVBlock title="Professional Experience">
          <div className="space-y-8">
            {cv.experience.map((e) => (
              <div key={e.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display text-lg text-[var(--parchment)]">
                    {e.role} &mdash; <span className="text-[var(--verdigris)] italic">{e.org}</span>
                  </h4>
                  <span className="font-mono-rune text-xs text-[var(--gold)]">{e.dates}</span>
                </div>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="text-[var(--parchment-dim)] text-[0.95rem] leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CVBlock>

        {/* Projects */}
        <CVBlock title="Selected Projects">
          <div className="space-y-7">
            {cv.projects.map((p) => (
              <div key={p.name}>
                <h4 className="font-display text-base text-[var(--parchment)]">{p.name}</h4>
                <p className="text-[var(--verdigris)] text-sm italic mb-1">{p.role}</p>
                <ul className="space-y-1 list-disc list-inside">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="text-[var(--parchment-dim)] text-[0.95rem] leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
                {p.stack && (
                  <p className="font-mono-rune text-xs text-[var(--gold)] mt-2">{p.stack}</p>
                )}
              </div>
            ))}
          </div>
        </CVBlock>

        {/* Education */}
        <CVBlock title="Education">
          <div className="space-y-6">
            {cv.education.map((ed) => (
              <div key={ed.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display text-base text-[var(--parchment)]">{ed.title}</h4>
                  <span className="font-mono-rune text-xs text-[var(--gold)]">{ed.dates}</span>
                </div>
                <p className="text-[var(--verdigris)] text-sm italic">
                  {ed.org} &middot; {ed.location}
                </p>
                {ed.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    {ed.bullets.map((b, i) => (
                      <li key={i} className="text-[var(--parchment-dim)] text-[0.95rem] leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </CVBlock>

        {/* Additional */}
        <CVBlock title="Additional Information" last>
          <ul className="space-y-1 list-disc list-inside">
            {cv.additional.map((a, i) => (
              <li key={i} className="text-[var(--parchment-dim)] text-[0.95rem] leading-relaxed">
                {a}
              </li>
            ))}
          </ul>
        </CVBlock>
      </div>
    </section>
  );
}

function CVBlock({ title, children, last = false }) {
  return (
    <div className={last ? '' : 'mb-10 pb-10 border-b border-[var(--gold)]/15'}>
      <h3 className="font-mono-rune text-xs text-[var(--gold)] tracking-[0.2em] uppercase mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}