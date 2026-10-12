import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/features/shared/components';
import { CurtainScene } from '@/features/curtain-playground/components/curtain-scene';

export const metadata: Metadata = {
  title: 'Demo tirai',
  description: 'Atur jenis penutup jendela, finishing, dan bukaan untuk melihat perbedaan suasananya.',
};

export default function CurtainPlaygroundPage() {
  return <>
    <section className="page-intro">
      <Container>
        <Link href="/layanan#tirai" className="text-link text-sm text-[var(--muted)]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 12H5m7 7-7-7 7-7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Kembali ke layanan tirai
        </Link>
        <div className="mt-8 grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-16">
          <h1 className="display max-w-3xl">
            Atur cahaya<br />
            <span className="editorial text-[var(--forest)]">di ruang Anda.</span>
          </h1>
          <div className="max-w-lg lg:justify-self-end lg:pb-2">
            <p className="body-copy">
              Pilih jenis penutup, finishing, dan tingkat bukaan. Pratinjau ruang akan mengikuti pilihan Anda.
            </p>
          </div>
        </div>
      </Container>
    </section>
    <section aria-label="Konfigurasi tirai" className="pb-16 sm:pb-24 lg:pb-32">
      <Container>
        <CurtainScene />
        <p className="mt-5 border-t border-[var(--line)] pt-4 text-xs leading-5 text-[var(--muted)]">
          Simulasi ini membantu membandingkan jenis dan bukaan penutup jendela. Tampilan dapat berbeda dari bahan sebenarnya.
        </p>
      </Container>
    </section>
  </>;
}
