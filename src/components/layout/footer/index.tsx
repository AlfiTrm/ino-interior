import Link from 'next/link';
import { Container } from '@/features/shared/components';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] py-10 text-[var(--canvas)] sm:py-14">
      <Container>
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <Link href="/" className="inline-flex min-h-11 items-baseline gap-3"><span className="text-5xl font-semibold tracking-[-.09em]">ino.</span><span className="text-sm">interior</span></Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#c6cdc1]">
              Untuk ruang yang nyaman dijalani, setiap hari.
            </p>
          </div>
          <nav aria-label="Navigasi footer" className="grid grid-cols-2 gap-x-12 sm:flex sm:gap-8">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-11 items-center text-sm hover:underline hover:underline-offset-4">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-[#626e60] pt-6 text-xs leading-5 text-[#c6cdc1] sm:flex-row"><p>© {new Date().getFullYear()} INO Interior</p><p>Demo company profile. Seluruh proyek merupakan studi konsep.</p></div>
      </Container>
    </footer>
  );
}
