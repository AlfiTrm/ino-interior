import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/features/shared/components';
import { Consultation } from '@/features/shared/components/consultation';
import { ProjectImage } from '@/features/portfolio/components/project-image';

export const metadata: Metadata = { title: 'Tentang', description: 'Pendekatan INO Interior dimulai dari aktivitas orang dan kebutuhan ruang.' };

export default function AboutPage() {
  return <>
    <section className="page-intro"><Container><div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-20"><h1 className="display">Ruang berawal<br />dari <span className="editorial text-[var(--forest)]">penghuninya.</span></h1><div className="max-w-lg self-end lg:pb-2"><p className="body-copy">Desain ruang bukan sekadar memilih warna dan furnitur. Kami melihat rutinitas, pergerakan, cahaya, dan kebutuhan orang yang akan menggunakannya.</p><Link href="/portofolio" className="text-link mt-5">Lihat pendekatan dalam konsep ruang</Link></div></div></Container></section>
    <Container><ProjectImage src="/assets/portfolio/ruang-ranting.png" alt="Visual konsep kantor dengan area fokus dan diskusi dalam satu ruang." sizes="(min-width:1600px) 1472px,100vw" className="aspect-[4/3] md:aspect-[16/8]" /></Container>
    <section className="section-space"><Container><div className="grid gap-9 lg:grid-cols-[.65fr_1.35fr] lg:gap-20"><h2 className="text-2xl font-medium tracking-[-.04em] sm:text-3xl">Bagaimana kami membaca ruang</h2><div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
      <article><p className="text-sm text-[var(--muted)]">01 / Kebutuhan</p><h3 className="mt-3 text-xl font-semibold">Apa yang dilakukan orang di dalamnya?</h3><p className="body-copy mt-3 text-sm">Tentukan kegiatan, siapa yang menggunakannya, serta hal yang perlu diperbaiki.</p></article>
      <article><p className="text-sm text-[var(--muted)]">02 / Alur</p><h3 className="mt-3 text-xl font-semibold">Bagaimana orang bergerak?</h3><p className="body-copy mt-3 text-sm">Susun hubungan antara area dan jalur agar kegiatan sehari-hari terasa mudah.</p></article>
      <article><p className="text-sm text-[var(--muted)]">03 / Suasana</p><h3 className="mt-3 text-xl font-semibold">Cahaya dan material apa yang mendukungnya?</h3><p className="body-copy mt-3 text-sm">Pilih warna, tekstur, dan penutup jendela sesuai kebutuhan cahaya dan privasi.</p></article>
      <article><p className="text-sm text-[var(--muted)]">04 / Detail</p><h3 className="mt-3 text-xl font-semibold">Apa yang perlu tetap nyaman digunakan?</h3><p className="body-copy mt-3 text-sm">Pertimbangkan ukuran furnitur, penyimpanan, permukaan, dan kebiasaan perawatan.</p></article>
    </div></div></Container></section>
    <Consultation title="Punya ruang dengan kebutuhan yang spesifik?" />
  </>;
}
