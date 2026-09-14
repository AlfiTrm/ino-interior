import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/features/shared/components';
import { PortfolioGallery } from '@/features/portfolio/components/gallery';

export const metadata: Metadata = {
  title: 'Portofolio',
  description: 'Pilihan konsep proyek interior INO untuk ruang komersial, hospitality, dan residensial.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-20 sm:pt-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-[-0.065em] sm:text-7xl">Portofolio</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">Konsep ruang untuk konteks kerja, singgah, dan tinggal yang berbeda.</p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <PortfolioGallery />
        </Container>
      </section>

      <section className="bg-[var(--ink)] py-20 text-white sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-[-0.055em] sm:text-5xl">Punya konteks ruang yang berbeda?</h2>
            <p className="mt-6 max-w-xl leading-7 text-white/72">Setiap proyek dimulai dari cara orang datang, bergerak, fokus, dan pulang dari ruang tersebut.</p>
            <Link href="/kontak" className="mt-9 inline-block bg-white px-5 py-3 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-white/80">Bicarakan proyek Anda</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
