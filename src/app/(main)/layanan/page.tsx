import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/features/shared/components';
import { Consultation } from '@/features/shared/components/consultation';
import { ProjectImage } from '@/features/portfolio/components/project-image';
import { projects, services } from '@/data/interior';

export const metadata: Metadata = { title: 'Layanan', description: 'Konsep interior untuk kantor, hospitality, rumah, tirai, dan penutup jendela.' };

export default function ServicesPage() {
  return <>
    <section className="page-intro"><Container><div className="grid items-end gap-9 lg:grid-cols-[1.1fr_.9fr] lg:gap-20"><div><h1 className="display">Ruang berubah<br />seiring <span className="editorial text-[var(--forest)]">kebutuhan.</span></h1><p className="body-copy mt-7 max-w-xl">Mulai dari cara orang menggunakan ruang. Pilihan penataan, cahaya, material, dan tirai mengikuti aktivitasnya.</p></div><div className="lg:pb-2"><ProjectImage src="/assets/portfolio/kawasan-21.png" alt="Visual konsep showroom dengan ruang display dan area konsultasi" sizes="(min-width:1024px) 45vw,100vw" className="aspect-[4/3] max-h-[430px]" /></div></div></Container></section>
    <section className="pb-16 sm:pb-24 lg:pb-32"><Container><h2 className="section-heading mb-8 sm:mb-12">Jenis ruang yang kami <span className="editorial">jelajahi.</span></h2>
      <div>{services.map((service, index) => {
        const project = projects.find((item) => item.slug === service.project)!;
        return <article id={service.slug} key={service.slug} className="scroll-mt-28 grid gap-8 border-t border-[var(--line)] py-8 sm:py-10 lg:grid-cols-[.6fr_1.1fr_.8fr] lg:gap-12">
          <div><p className="text-xs text-[var(--muted)]">{String(index + 1).padStart(2, '0')} / {service.category}</p><h3 className="mt-3 text-2xl font-medium tracking-[-.04em] sm:text-3xl">{service.name}</h3></div>
          <div><p className="body-copy">{service.description}</p><ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--muted)]">{service.scope.map((item) => <li key={item}>{item}</li>)}</ul><Link href={'/portofolio/' + service.project} className="text-link mt-4">Lihat studi {project.title}</Link></div>
          <Link href={'/portofolio/' + service.project} aria-label={'Lihat konsep ' + project.title} className="group lg:mt-1"><ProjectImage src={project.image} alt={project.imageAlt} sizes="(min-width:1024px) 27vw,90vw" className="aspect-[5/3] lg:aspect-[4/3]" imageClassName="transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none" /><p className="mt-2 text-xs text-[var(--muted)]">{project.title} / konsep demo</p></Link>
        </article>;
      })}</div>
    </Container></section>
    <Consultation title="Ceritakan ruang yang sedang Anda siapkan." />
  </>;
}
