import Link from 'next/link';
import { Container } from '@/features/shared/components';
import { projects } from '@/data/interior';
import { ProjectImage } from '@/features/portfolio/components/project-image';

export function Hero() {
  const project = projects[0];

  return <section data-motion-hero className="pb-8 pt-6 sm:pt-10">
    <Container>
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-10">
        <div className="flex flex-col justify-between pb-2 lg:py-8">
          <div>
            <h1 data-motion-item="headline" className="display max-w-xl">Ruang yang<br />terasa <span className="editorial text-[var(--forest)]">tepat.</span></h1>
            <p data-motion-item="copy" className="body-copy mt-7 max-w-[23rem]">Interior untuk tempat bekerja, singgah, dan tinggal. Dimulai dari cara Anda menjalani hari.</p>
            <Link href="/portofolio" data-motion-item="action" className="button button-primary mt-8">Lihat konsep ruang
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" /></svg>
            </Link>
          </div>
          <p data-motion-item="meta" className="mt-12 hidden text-sm leading-6 text-[var(--muted)] lg:block">Kantor & komersial<br />Hospitality & hunian</p>
        </div>
        <div data-motion-item="visual">
          <Link href={'/portofolio/' + project.slug} aria-label="Lihat konsep Paviliun Senja" className="group block">
            <ProjectImage src={project.image} alt={project.imageAlt} priority sizes="(min-width:1600px) 820px,(min-width:1024px) 55vw,100vw" className="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[.94] lg:max-h-[700px]" imageClassName="object-[60%_center] transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transform-none" />
            <div className="mt-4 flex items-baseline justify-between gap-4 text-xs sm:text-sm"><span>{project.title} <span className="text-[var(--muted)]">/ {project.scope}</span></span><span className="shrink-0 text-[var(--muted)]">Konsep proyek</span></div>
          </Link>
        </div>
      </div>
    </Container>
  </section>;
}
