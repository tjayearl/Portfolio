export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8 border-t border-[var(--gold)]/15 flex items-center justify-between">
      <p className="font-mono-rune text-xs text-[var(--parchment-dim)]">
        &copy; {new Date().getFullYear()} Tjay Earl
      </p>
      <p className="font-mono-rune text-xs text-[var(--verdigris)]">
        Bound &amp; illuminated in Nairobi
      </p>
    </footer>
  );
}
