import Link from 'next/link';
import { Container } from '@/features/shared/components';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-lg font-extrabold tracking-[-0.05em]">INO Interior</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
              Mulai percakapan untuk ruang yang perlu bekerja sebaik tampilnya.
            </p>
          </div>
          <nav aria-label="Navigasi footer" className="grid content-start gap-3 text-sm font-bold">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="w-fit hover:text-white/65">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-start md:justify-end">
            <Link href="/kontak" className="bg-white px-5 py-3 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-white/80">
              Konsultasi proyek
            </Link>
          </div>
        </div>
        <p className="mt-12 text-xs text-white/45">© {new Date().getFullYear()} INO Interior · Demo konsep</p>
      </Container>
    </footer>
  );
}
