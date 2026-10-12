import type { Metadata } from 'next';
import { Container } from '@/features/shared/components';
import { Consultation } from '@/features/shared/components/consultation';
import { PortfolioGallery } from '@/features/portfolio/components/gallery';

export const metadata: Metadata = {
  title: 'Portofolio konsep',
  description: 'Studi konsep kantor, hospitality, dan hunian. Jelajahi ide tata ruang, material, serta pencahayaan bersama INO Interior.',
};

export default function PortfolioPage() {
  return <>
    <section className="page-intro"><Container><div className="grid items-end gap-7 lg:grid-cols-[1.2fr_1fr] lg:gap-16"><h1 className="display">Banyak cara<br />membentuk <span className="editorial text-[var(--forest)]">ruang.</span></h1><div className="max-w-md lg:pb-2"><p className="body-copy">Kantor untuk bertukar ide, tempat singgah yang hangat, rumah yang mengikuti kebiasaan. Temukan pendekatan yang dekat dengan kebutuhan Anda.</p><p className="mt-5 text-xs leading-6 text-[var(--muted)]">Seluruh proyek adalah konsep demo. Visual merupakan ilustrasi konsep dan referensi suasana, bukan dokumentasi pekerjaan INO.</p></div></div></Container></section>
    <section className="pb-16 sm:pb-24 lg:pb-32"><Container><PortfolioGallery /></Container></section>
    <Consultation title="Sudah menemukan suasana yang Anda suka?" />
  </>;
}
