import Link from 'next/link';
import { Container } from '@/features/shared/components';
import { site } from '@/lib/site';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--canvas)]">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Link href="/" className="text-lg font-extrabold tracking-[-0.05em]">
            INO<span className="font-medium text-[var(--muted)]"> Interior</span>
          </Link>
          <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-bold transition-colors hover:text-[var(--forest)]">
                {item.label}
              </Link>
            ))}
            <Link href="/kontak" className="bg-[var(--forest)] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--ink)]">
              Konsultasi
            </Link>
          </nav>
          <details className="md:hidden">
            <summary className="cursor-pointer list-none px-3 py-3 text-sm font-bold">Menu</summary>
            <nav aria-label="Navigasi mobile" className="absolute right-5 top-[4.75rem] w-52 bg-[var(--forest)] p-2 text-white shadow-[0_12px_32px_rgba(20,33,23,0.16)]">
              {site.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="block px-4 py-3 text-sm font-bold">
                  {item.label}
                </Link>
              ))}
              <Link href="/kontak" className="block px-4 py-3 text-sm font-bold">
                Konsultasi
              </Link>
          </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
