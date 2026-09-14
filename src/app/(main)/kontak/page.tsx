import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/features/shared/components';
import { demoContact } from '@/data/interior';

export const metadata: Metadata = { title: 'Kontak', description: 'Mulai percakapan dengan INO Interior.' };

export default function ContactPage() {
  return <><section className="pt-16 sm:pt-24"><Container><div className="grid items-end gap-10 lg:grid-cols-[1fr_.65fr]"><div><h1 className="max-w-4xl text-5xl font-extrabold tracking-[-.065em] sm:text-7xl">Punya ruang yang ingin dibuat lebih pas?</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">Ceritakan dulu kebutuhanmu. Kami bantu mulai dari hal yang paling penting.</p><a href={demoContact.consultationHref} target="_blank" rel="noreferrer" className="mt-10 inline-block bg-[var(--forest)] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--ink)]">{demoContact.consultationLabel}</a></div><Image src="/assets/illustrations/layanan.png" alt="Ilustrasi ruang yang bisa dibenahi bersama INO Interior" width={600} height={600} className="w-full max-w-sm justify-self-end" /></div></Container></section><section className="py-20 sm:py-28"><Container><div className="grid gap-12 md:grid-cols-2"><div><h2 className="text-2xl font-extrabold tracking-[-.045em]">Datang atau hubungi kami</h2><p className="mt-5 text-lg leading-7 text-[var(--muted)]">{demoContact.location}</p><a href={`mailto:${demoContact.email}`} className="mt-3 inline-block text-lg font-bold underline underline-offset-4">{demoContact.email}</a></div><div><h2 className="text-2xl font-extrabold tracking-[-.045em]">Untuk proyek apa?</h2><p className="mt-5 max-w-md leading-7 text-[var(--muted)]">Kantor, tempat usaha, kafe, restoran, penginapan, rumah, atau kebutuhan tirai dan penutup jendela.</p></div></div></Container></section></>;
}
