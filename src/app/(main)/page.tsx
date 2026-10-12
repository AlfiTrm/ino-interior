import Link from 'next/link';
import { Container } from '@/features/shared/components';
import { Consultation } from '@/features/shared/components/consultation';
import { featuredSlugs, projects, services } from '@/data/interior';
import { Hero } from '@/features/home/components/hero';
import { ProjectCard } from '@/features/portfolio/components/project-card';

export default function Home() {
  const featured = featuredSlugs.map((slug) => projects.find((project) => project.slug === slug)!);

  return <>
    <Hero />
    <section className="section-space">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <p className="text-sm font-medium text-[var(--muted)]">Cara kami melihat ruang</p>
          <div><h2 className="section-heading max-w-4xl">Bagus dilihat.<br /><span className="editorial">Nyaman dijalani.</span></h2><p className="body-copy mt-7 max-w-xl">Meja tempat bertukar ide. Sudut untuk melepas lelah. Cahaya yang masuk di waktu yang pas. Detail ruang berangkat dari kegiatan orang di dalamnya.</p><Link href="/tentang" className="text-link mt-5">Kenali pendekatan INO</Link></div>
        </div>
      </Container>
    </section>

    <section className="pb-16 sm:pb-24 lg:pb-32">
      <Container>
        <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end"><h2 className="section-heading">Pilihan <span className="editorial">ruang.</span></h2><Link href="/portofolio" className="text-link">Lihat seluruh konsep</Link></div>
        <div className="grid items-start gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {featured.map((project, index) => <div key={project.slug} className={index % 2 ? 'md:pt-24' : ''}><ProjectCard project={project} tall={index === 0 || index === 3} /></div>)}
        </div>
      </Container>
    </section>

    <section className="section-space border-t border-[var(--line)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><h2 className="section-heading max-w-md">Kebutuhan berbeda,<br /><span className="editorial">perhatian yang sama.</span></h2><p className="body-copy mt-6 max-w-sm">Dari ruang usaha sampai rumah, kami mulai dengan memahami apa yang perlu dilakukan ruang tersebut.</p></div>
          <div>{services.map((service) => <Link key={service.slug} href={'/layanan#' + service.slug} className="group block border-b border-[var(--line)] py-6 first:pt-0"><h3 className="text-2xl font-medium tracking-[-.04em] transition-colors group-hover:text-[var(--forest)] sm:text-3xl">{service.name}</h3><p className="body-copy mt-3 max-w-xl text-sm">{service.description}</p></Link>)}</div>
        </div>
      </Container>
    </section>
    <Consultation />
  </>;
}
