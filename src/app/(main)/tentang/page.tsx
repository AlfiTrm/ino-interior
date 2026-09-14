import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/features/shared/components';

export const metadata: Metadata = { title: 'Tentang', description: 'Kenal lebih jauh dengan INO Interior.' };

export default function AboutPage() {
  return <>
    <section className="pt-16 sm:pt-24"><Container><div className="grid items-end gap-10 lg:grid-cols-[1.15fr_.65fr]"><div><p className="text-lg font-bold text-[var(--forest)]">Kenal kami lebih jauh</p><h1 className="mt-5 max-w-3xl text-5xl font-extrabold tracking-[-.065em] sm:text-7xl">Kami mengerjakan ruang sampai detail yang sering luput terlihat.</h1></div><Image src="/assets/illustrations/layanan.png" alt="Ilustrasi ruang kerja, tempat makan, rumah, dan jendela" width={600} height={600} className="w-full max-w-sm justify-self-end" /></div></Container></section>
    <section className="py-20 sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><h2 className="text-3xl font-extrabold tracking-[-.05em] sm:text-4xl">Yang kami percaya</h2><p className="max-w-2xl text-3xl font-extrabold leading-tight tracking-[-.045em] sm:text-5xl">Ruang yang enak dipakai akan terasa tepat, bahkan sebelum orang tahu kenapa.</p></div></Container></section>
    <section className="pb-20 sm:pb-28"><Container><div className="grid gap-10 lg:grid-cols-[1fr_.9fr]"><div className="relative aspect-[4/3] overflow-hidden"><Image src="/assets/portfolio/teras-pagi.png" alt="Ruang keluarga dengan cahaya pagi dan material kayu" fill sizes="(min-width:1024px) 55vw,100vw" className="object-cover" /></div><div className="flex flex-col justify-between py-2"><div><h2 className="text-3xl font-extrabold tracking-[-.05em] sm:text-4xl">Cara kami bekerja</h2><ul className="mt-7 space-y-5 text-lg leading-7 text-[var(--muted)]"><li>Mulai dari kebutuhan orang di dalam ruang.</li><li>Perhatikan cahaya, bahan, dan alur gerak.</li><li>Jaga hasilnya tetap nyaman dipakai setiap hari.</li></ul></div><p className="mt-10 text-sm font-bold text-[var(--forest)]">Interior · wallpaper · tirai · penutup jendela</p></div></div></Container></section>
    <section className="bg-[var(--ink)] py-20 text-white sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-[1fr_.7fr]"><div><h2 className="text-4xl font-extrabold tracking-[-.055em] sm:text-6xl">Punya ruang yang ingin dibuat lebih pas?</h2><Link href="/kontak" className="mt-9 inline-block bg-white px-5 py-3 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-white/80">Mulai ngobrol</Link></div><p className="self-end max-w-sm text-lg leading-7 text-white/72">Ceritakan dulu kebutuhannya. Kami bantu cari arah yang paling masuk akal.</p></div></Container></section>
  </>;
}
