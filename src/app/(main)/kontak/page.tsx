import type { Metadata } from 'next';
import { Container } from '@/features/shared/components';
import { ConsultationComposer } from '@/features/shared/components/consultation-composer';

export const metadata: Metadata = { title: 'Kontak', description: 'Siapkan pesan berisi kebutuhan ruang sebelum memulai percakapan konsultasi.' };

export default function ContactPage() {
  return <>
    <section className="page-intro"><Container><div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:gap-20">
      <div><h1 className="display">Mulai dari<br />cerita <span className="editorial text-[var(--forest)]">ruang Anda.</span></h1><p className="body-copy mt-7 max-w-lg">Ceritakan jenis ruang, lokasinya, dan apa yang sedang Anda cari. Informasi itu membantu percakapan dimulai dari konteks yang jelas.</p></div>
      <aside className="max-w-sm self-end border-l border-[var(--forest)] pl-5 lg:mb-2"><h2 className="font-semibold">Sebelum menulis</h2><p className="body-copy mt-3 text-sm">Siapkan tujuan ruang dan hal yang ingin diperbaiki. Foto atau ukuran bisa dibicarakan nanti.</p></aside>
    </div></Container></section>
    <section className="pb-20 sm:pb-28"><Container><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
      <div><h2 className="section-heading">Kirim konteksnya.</h2><p className="body-copy mt-5 max-w-sm text-sm">Formulir ini menyusun draf pesan di perangkat Anda. Demo belum memakai nomor WhatsApp INO yang terverifikasi.</p><p className="mt-8 text-xs leading-6 text-[var(--muted)]">Semua proyek pada halaman portofolio merupakan studi konsep untuk demo company profile.</p></div>
      <ConsultationComposer whatsappNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER} />
    </div></Container></section>
  </>;
}
