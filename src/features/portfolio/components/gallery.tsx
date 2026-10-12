'use client';

import { useState } from 'react';
import { portfolioCategories, projects } from '@/data/interior';
import { ProjectCard } from './project-card';

export function PortfolioGallery() {
  const [category, setCategory] = useState<(typeof portfolioCategories)[number]>('Semua');
  const visible = category === 'Semua' ? projects : projects.filter((project) => project.category === category);
  return <>
    <div role="group" aria-label="Filter kategori proyek" className="mb-10 flex flex-wrap gap-x-5 gap-y-2 border-b border-[var(--line)] sm:mb-14 sm:gap-x-10">
      {portfolioCategories.map((item) => <button key={item} type="button" aria-pressed={category === item} aria-controls="project-gallery" onClick={() => setCategory(item)} className={'min-h-14 border-b-2 px-1 text-sm transition-colors sm:text-base ' + (category === item ? 'border-[var(--ink)] font-semibold text-[var(--ink)]' : 'border-transparent text-[var(--muted)] hover:text-[var(--forest)]')}>{item}</button>)}
    </div>
    <p role="status" aria-live="polite" aria-atomic="true" className="mb-7 text-sm text-[var(--muted)]">{visible.length} konsep{category === 'Semua' ? ' untuk beragam kebutuhan ruang' : ' ' + category.toLowerCase()}</p>
    <div id="project-gallery" className="grid items-start gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
      {visible.map((project, index) => <div key={project.slug} className={index % 2 ? 'md:pt-20' : ''}><ProjectCard project={project} tall={index % 4 === 0} /></div>)}
    </div>
    {visible.length === 0 && <div className="py-16"><h2 className="text-2xl">Belum ada konsep pada kategori ini.</h2><button type="button" className="text-link mt-4" onClick={() => setCategory('Semua')}>Lihat semua konsep</button></div>}
  </>;
}
