import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/features/shared/components';
import { services } from '@/data/interior';

export const metadata: Metadata = { title: 'Layanan', description: 'Layanan INO untuk kantor, tempat usaha, penginapan, rumah, dan penutup jendela.' };

export default function ServicesPage() {
  return <><section className="pt-20 sm:pt-28"><Container><div className="grid items-end gap-10 lg:grid-cols-[1fr_.7fr]"><div><h1 className="text-5xl font-extrabold tracking-[-.065em] sm:text-7xl">Ada ruang yang mau dibenahi?</h1><p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">Mulai dari kebutuhan sehari-harinya. Kami bantu membuat ruang yang nyaman dipakai dan enak dilihat.</p></div><Image src="/assets/illustrations/layanan.png" alt="Ilustrasi kantor, restoran, rumah, dan jendela bertirai" width={600} height={600} className="w-full max-w-sm justify-self-end" /></div></Container></section><section className="py-20 sm:py-28"><Container><h2 className="mb-10 text-3xl font-extrabold tracking-[-.05em] sm:text-4xl">Yang bisa kami bantu</h2><div className="divide-y divide-[var(--line)]">{services.map((service) => <article key={service.title} className="grid gap-5 py-9 sm:grid-cols-[minmax(14rem,.75fr)_1fr] sm:gap-10"><h3 className="text-2xl font-extrabold tracking-[-.045em] sm:text-3xl">{service.title}</h3><p className="max-w-xl leading-7 text-[var(--muted)]">{service.description}</p></article>)}</div></Container></section><section className="bg-[var(--forest)] py-20 text-white sm:py-28"><Container><div className="max-w-3xl"><h2 className="text-4xl font-extrabold tracking-[-.055em] sm:text-6xl">Ceritakan ruang yang ingin kamu benahi.</h2><p className="mt-6 max-w-xl leading-7 text-white/72">Kami mulai dari kebutuhanmu, bukan dari asumsi.</p><Link href="/kontak" className="mt-9 inline-block bg-white px-5 py-3 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-white/80">Mulai ngobrol</Link></div></Container></section></>;
}
