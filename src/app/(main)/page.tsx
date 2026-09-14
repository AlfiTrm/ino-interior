import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/features/shared/components';
import { projects, services } from '@/data/interior';
import { Hero } from '@/features/home/components/hero';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero />
      {/*
      <section className="relative isolate min-h-[min(760px,calc(100svh-5rem))] overflow-hidden bg-[var(--ink)] text-white">
        <Image src={featuredProjects[0].image} alt={featuredProjects[0].imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,33,23,0.82)_0%,rgba(20,33,23,0.48)_48%,rgba(20,33,23,0.08)_100%)]" />
        <Container className="relative flex min-h-[min(760px,calc(100svh-5rem))] items-end py-14 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-[-0.065em] sm:text-7xl lg:text-8xl">Ruang yang bekerja sebaik tampilnya.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/78 sm:text-lg">Interior untuk tempat orang bekerja, singgah, dan tinggal—dibentuk dari cara ruang itu benar-benar dipakai.</p>
            <div className="mt-10 flex flex-wrap gap-4 text-sm font-bold">
              <Link href="/portofolio" className="bg-white px-5 py-3 text-[var(--ink)] transition-colors hover:bg-white/80">Lihat portofolio</Link>
              <Link href="/kontak" className="px-5 py-3 underline decoration-1 underline-offset-4 hover:text-white/70">Konsultasi proyek</Link>
            </div>
          </div>
        </Container>
      </section> */}

      <section className="py-24 sm:py-32"><Container><div className="grid gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:gap-20">
        <h2 className="max-w-sm text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">Ruang yang punya alasan untuk setiap detailnya.</h2>
        <div className="grid gap-10 sm:grid-cols-2">{services.map((service) => <article key={service.title}><h3 className="text-lg font-extrabold tracking-[-0.035em]">{service.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">{service.description}</p></article>)}</div>
      </div></Container></section>

      <section className="pb-24 sm:pb-32"><Container>
        <div className="mb-10 flex items-end justify-between gap-6"><h2 className="max-w-lg text-3xl font-extrabold tracking-[-0.05em] sm:text-5xl">Pilihannya terlihat. Cara ruang itu bekerja terasa.</h2><Link href="/portofolio" className="hidden shrink-0 text-sm font-bold underline decoration-1 underline-offset-4 sm:block">Semua proyek</Link></div>
        <div className="grid gap-5 lg:grid-cols-12">{featuredProjects.map((project, index) => <article key={project.slug} className={index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}><div className={index === 0 ? 'relative aspect-[4/3] overflow-hidden' : 'relative aspect-[16/10] overflow-hidden'}><Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" /></div><div className="mt-4 flex items-baseline justify-between gap-4"><div><h3 className="text-lg font-extrabold tracking-[-0.035em]">{project.title}</h3><p className="mt-1 text-sm text-[var(--muted)]">{project.scope} · {project.location}</p></div><span className="shrink-0 text-xs font-bold text-[var(--muted)]">Konsep</span></div></article>)}</div>
        <Link href="/portofolio" className="mt-8 inline-block text-sm font-bold underline decoration-1 underline-offset-4 sm:hidden">Semua proyek</Link>
      </Container></section>

      <section className="bg-[var(--forest)] py-24 text-white sm:py-32"><Container><div className="max-w-3xl"><h2 className="text-4xl font-extrabold tracking-[-0.055em] sm:text-6xl">Punya ruang yang perlu diselesaikan?</h2><p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">Ceritakan konteksnya. Kita mulai dari apa yang perlu dilakukan ruang tersebut.</p><Link href="/kontak" className="mt-10 inline-block bg-white px-5 py-3 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-white/80">Mulai konsultasi</Link></div></Container></section>
    </>
  );
}
