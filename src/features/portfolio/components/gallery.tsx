'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { portfolioCategories, projects } from '@/data/interior';

export function PortfolioGallery() {
  const [category, setCategory] = useState<(typeof portfolioCategories)[number]>('Semua');
  const visible = category === 'Semua' ? projects : projects.filter((project) => project.category === category);
  return <><div className="mb-10 flex flex-wrap gap-x-7 gap-y-4">{portfolioCategories.map((item) => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)} className={`relative pb-2 text-lg transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-current after:transition-[width] after:duration-300 ${category === item ? 'font-bold text-[var(--ink)] after:w-full' : 'text-[var(--muted)] after:w-0 hover:text-[var(--forest)] hover:after:w-full'}`}>{item}</button>)}</div><div className="grid gap-8 md:grid-cols-2">{visible.map((project) => <Link key={project.slug} href={`/portofolio/${project.slug}`} className="group"><div className="relative aspect-[4/3] overflow-hidden"><Image src={project.image} alt={project.imageAlt} fill sizes="(min-width:768px) 50vw,100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div><h2 className="mt-4 text-2xl font-extrabold tracking-[-.04em]">{project.title}</h2><p className="mt-1 text-sm text-[var(--muted)]">{project.category} · {project.location}</p></Link>)}</div></>;
}
