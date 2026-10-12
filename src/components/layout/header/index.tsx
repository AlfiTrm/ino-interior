'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Container } from '@/features/shared/components';
import { site } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (header.current && !header.current.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    const desktop = window.matchMedia('(min-width: 1024px)');
    function resize() { if (desktop.matches) setOpen(false); }
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('keydown', escape);
    desktop.addEventListener('change', resize);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('keydown', escape);
      desktop.removeEventListener('change', resize);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
  return (
    <header ref={header} className="sticky inset-x-0 top-0 z-50 bg-[var(--canvas)]">
      <Container>
        <div className="flex h-20 items-center justify-between gap-5 lg:h-24">
          <Link href="/" aria-label="INO Interior, beranda" onClick={() => setOpen(false)} className="flex min-h-11 items-baseline gap-2 py-2">
            <span className="text-[2rem] font-semibold leading-none tracking-[-.09em]">ino.</span>
            <span className="text-sm font-medium tracking-[-.03em]">interior</span>
          </Link>
          <nav aria-label="Navigasi utama" className="hidden items-center gap-9 lg:flex">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={`flex min-h-11 items-center text-sm transition-colors hover:text-[var(--forest)] ${isActive(item.href) ? 'font-bold underline underline-offset-8' : 'font-medium'}`}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/kontak#konsultasi" className="button button-primary hidden lg:inline-flex">Bicarakan ruang Anda</Link>
          <button ref={button} type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="flex min-h-11 items-center gap-3 px-2 text-sm font-semibold lg:hidden">
            {open ? 'Tutup' : 'Menu'}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d={open ? 'M5 5l10 10M15 5L5 15' : 'M2 7h16M2 13h16'} stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>
      </Container>
      <nav id="mobile-navigation" aria-label="Navigasi mobile" hidden={!open} className="absolute inset-x-0 top-full bg-[var(--canvas)] px-5 pb-7 shadow-[0_14px_18px_-18px_rgba(32,44,37,.45)] sm:px-8 lg:hidden" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
        {site.navigation.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} onClick={() => setOpen(false)} className="flex min-h-14 items-center border-t border-[var(--line)] text-xl tracking-[-.035em]">{item.label}</Link>)}
        <Link href="/kontak#konsultasi" onClick={() => setOpen(false)} className="button button-primary mt-4 w-full">Bicarakan ruang Anda</Link>
      </nav>
    </header>
  );
}
