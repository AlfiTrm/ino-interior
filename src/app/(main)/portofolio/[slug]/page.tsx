import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import sources from '../../../../../public/assets/concepts/sources.json';
import { Container } from '@/features/shared/components';
import { Consultation } from '@/features/shared/components/consultation';
import { projects } from '@/data/interior';
import { ProjectImage } from '@/features/portfolio/components/project-image';
import { ProjectCard } from '@/features/portfolio/components/project-card';

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: 'Konsep tidak ditemukan' };
  const image = process.env.NEXT_PUBLIC_SITE_URL ? new URL(project.image, process.env.NEXT_PUBLIC_SITE_URL).toString() : undefined;
  return { title: project.title + ', konsep ' + project.scope.toLowerCase(), description: project.summary, openGraph: { title: project.title + ' | INO Interior', description: project.summary, images: image ? [{ url: image, alt: project.imageAlt }] : undefined } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const related = projects.filter((item) => item.category === project.category && item.slug !== slug).slice(0, 2);
  const credit = sources.filter((item) => project.references.some((reference) => reference.src === item.file));

  return <>
    <article>
      <section className="pb-8 pt-6 sm:pb-12"><Container>
        <Link href="/portofolio" className="text-link mb-8">Kembali ke portofolio</Link>
        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]"><div><h1 className="display">{project.title}</h1><p className="mt-5 max-w-2xl text-xl leading-relaxed tracking-[-.025em] sm:text-2xl">{project.summary}</p></div><div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-[var(--muted)] lg:justify-end"><span>{project.category}</span><span>{project.scope}</span><span>Konsep proyek</span></div></div>
      </Container></section>
      <Container><ProjectImage src={project.image} alt={project.imageAlt} priority sizes="(min-width:1600px) 1472px,100vw" className="aspect-[4/3] md:aspect-[16/9]" /></Container>
      <section className="section-space"><Container><div className="grid gap-9 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <div><h2 className="text-2xl font-medium tracking-[-.04em]">Tentang konsep</h2><p className="mt-4 text-sm text-[var(--muted)]">Konteks lokasi: {project.location}</p><p className="mt-2 text-xs text-[var(--muted)]">Lokasi dan brief bersifat fiktif.</p></div>
        <div className="grid gap-9 sm:grid-cols-2"><div><h3 className="text-lg font-semibold">Kebutuhan ruang</h3><p className="body-copy mt-4">{project.brief}</p></div><div><h3 className="text-lg font-semibold">Arah desain</h3><p className="body-copy mt-4">{project.approach}</p></div><div className="sm:col-span-2"><h3 className="text-sm font-semibold">Palet material</h3><ul className="mt-4 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--muted)]">{project.materials.map((material) => <li key={material}>{material}</li>)}</ul></div></div>
      </div></Container></section>
      <section className="pb-16 sm:pb-24"><Container><div className="mb-9 grid gap-5 lg:grid-cols-2"><h2 className="section-heading">Studi <span className="editorial">suasana.</span></h2><p className="body-copy max-w-md lg:justify-self-end">Referensi visual untuk mengeksplorasi material, cahaya, dan penataan. Foto berasal dari ruang yang berbeda dan tidak menggambarkan satu proyek terbangun.</p></div>
        <div className="grid items-start gap-8 md:grid-cols-2">
          {project.references.map((reference, index) => <figure key={reference.src} className={index === 0 ? 'md:col-span-2' : ''}><ProjectImage src={reference.src} alt={reference.alt} sizes={index === 0 ? '(min-width:1600px) 1472px,100vw' : '(min-width:768px) 48vw,100vw'} className={index === 0 ? 'aspect-[4/3] md:aspect-[16/9]' : 'aspect-[4/3]'} /><figcaption className="mt-3 text-sm leading-6 text-[var(--muted)]">{reference.caption}</figcaption></figure>)}
        </div>
        <details className="mt-8 text-xs leading-6 text-[var(--muted)]"><summary className="flex min-h-11 w-fit cursor-pointer items-center underline underline-offset-4">Sumber foto referensi</summary><ul className="mt-3 space-y-2">{credit.map((item) => <li key={item.file}><a href={item.source} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4">{item.photographer} / Unsplash (tab baru)</a></li>)}</ul><p className="mt-3">Visual utama pada konsep awal merupakan aset demo bawaan. Sumber asalnya belum tercatat.</p></details>
      </Container></section>
    </article>
    <section className="border-t border-[var(--line)] py-14 sm:py-20"><Container><h2 className="section-heading mb-9">Ruang lain untuk <span className="editorial">dilihat.</span></h2><div className="grid gap-10 md:grid-cols-2">{related.map((item) => <ProjectCard key={item.slug} project={item} />)}</div></Container></section>
    <Consultation title="Bawa ide ini ke kebutuhan ruang Anda." />
  </>;
}
