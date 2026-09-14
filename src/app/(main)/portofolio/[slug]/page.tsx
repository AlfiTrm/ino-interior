import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/features/shared/components';
import { projects } from '@/data/interior';

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <article><div className="relative aspect-[16/9]"><Image src={project.image} alt={project.imageAlt} fill priority sizes="100vw" className="object-cover" /></div><Container className="py-16 sm:py-24"><p className="text-sm font-bold text-[var(--muted)]">{project.category} · {project.location}</p><h1 className="mt-4 text-5xl font-extrabold tracking-[-.06em] sm:text-7xl">{project.title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">{project.summary}</p><p className="mt-10 text-sm font-bold">{project.scope} · Konsep proyek {project.year}</p></Container></article>;
}
