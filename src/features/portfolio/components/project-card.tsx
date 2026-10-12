import Link from 'next/link';
import type { Project } from '@/data/interior';
import { ProjectImage } from './project-image';

export function ProjectCard({ project, tall = false, priority = false }: { project: Project; tall?: boolean; priority?: boolean }) {
  return <article>
    <Link href={`/portofolio/${project.slug}`} className="group block" aria-label={`${project.title}, ${project.scope}. Lihat konsep proyek.`}>
      <ProjectImage src={project.image} alt={project.imageAlt} priority={priority} sizes="(min-width:1600px) 700px, (min-width:768px) 46vw, 100vw" className={tall ? 'aspect-[4/5] sm:aspect-[5/6]' : 'aspect-[4/3]'} imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transform-none" />
      <div className="mt-4 flex items-baseline justify-between gap-3"><h3 className="text-2xl font-medium leading-tight tracking-[-.045em] sm:text-3xl">{project.title}</h3><span className="shrink-0 text-xs text-[var(--muted)]">Konsep proyek</span></div>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.scope}</p>
    </Link>
  </article>;
}
