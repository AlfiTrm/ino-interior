'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Container } from '@/features/shared/components';
import { projects } from '@/data/interior';

export function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const project = projects[0];
  function move(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    imageRef.current?.style.setProperty('transform', `scale(1.04) translate(${((event.clientX - rect.left) / rect.width - .5) * -1.2}%, ${((event.clientY - rect.top) / rect.height - .5) * -1.2}%)`);
  }
  return <section onPointerMove={move} onPointerLeave={() => imageRef.current?.style.setProperty('transform', 'scale(1.04)')} className="relative isolate min-h-[min(760px,calc(100svh-5rem))] overflow-hidden bg-[var(--ink)] text-white">
    <Image ref={imageRef} src={project.image} alt={project.imageAlt} fill priority sizes="100vw" className="object-cover transition-transform duration-500 ease-out motion-reduce:transform-none" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,33,23,.82),rgba(20,33,23,.48),rgba(20,33,23,.08))]" />
    <Container className="relative flex min-h-[min(760px,calc(100svh-5rem))] items-end py-14 sm:py-20"><div className="max-w-3xl"><h1 className="text-5xl font-extrabold tracking-[-.065em] sm:text-7xl lg:text-8xl">Ruang yang bekerja sebaik tampilnya.</h1><p className="mt-7 max-w-xl text-base leading-7 text-white/78 sm:text-lg">Interior untuk tempat orang bekerja, singgah, dan tinggal—dibentuk dari cara ruang itu benar-benar dipakai.</p><div className="mt-10 flex flex-wrap gap-4 text-sm font-bold"><Link href="/portofolio" className="bg-white px-5 py-3 text-[var(--ink)] transition-colors hover:bg-white/80">Lihat portofolio</Link><Link href="/kontak" className="px-5 py-3 underline underline-offset-4 hover:text-white/70">Konsultasi proyek</Link></div></div></Container>
  </section>;
}
