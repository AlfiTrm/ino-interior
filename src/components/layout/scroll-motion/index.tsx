'use client';

import { ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, type ReactNode } from 'react';

const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 4);

const lenisOptions = {
  anchors: { duration: 1.2, easing: easeOut },
  lerp: 0.12,
  respectReducedMotion: true,
  smoothWheel: true,
  stopInertiaOnNavigate: true,
  syncTouch: false,
};

function SectionRevealObserver() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const content = document.getElementById('content');
    if (!content) return;

    const sections = Array.from(content.querySelectorAll<HTMLElement>('section')).filter(
      (section) => !section.parentElement?.closest('section'),
    );
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observers: IntersectionObserver[] = [];
    let removeFocusListeners: (() => void)[] = [];

    const clearObservers = () => {
      observers.forEach((observer) => observer.disconnect());
      observers = [];
      removeFocusListeners.forEach((remove) => remove());
      removeFocusListeners = [];
    };

    const setupReveals = () => {
      clearObservers();

      const canReveal = !reducedMotion.matches && 'IntersectionObserver' in window;

      sections.forEach((section, index) => {
        section.removeAttribute('data-motion-intro');
        section.removeAttribute('data-scroll-reveal');

        if (index === 0) {
          section.setAttribute('data-motion-intro', '');
          return;
        }

        const markVisible = () => {
          section.dataset.scrollReveal = 'visible';
        };

        if (!canReveal) {
          markVisible();
          return;
        }

        const bounds = section.getBoundingClientRect();
        const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
        const visibleHeight = Math.max(
          0,
          Math.min(bounds.bottom, viewportHeight) - Math.max(bounds.top, 0),
        );
        const requiredHeight = Math.min(bounds.height, viewportHeight) * 0.6;

        if (bounds.height <= 0 || visibleHeight >= requiredHeight) {
          markVisible();
          return;
        }

        section.dataset.scrollReveal = 'pending';
        const threshold = requiredHeight / bounds.height;
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting && entry.intersectionRatio >= threshold) {
            markVisible();
            observer.disconnect();
          }
        }, { threshold });
        const revealOnFocus = () => {
          markVisible();
          observer.disconnect();
        };

        section.addEventListener('focusin', revealOnFocus, { once: true });
        removeFocusListeners.push(() => section.removeEventListener('focusin', revealOnFocus));
        observer.observe(section);
        observers.push(observer);
      });

      document.documentElement.classList.toggle('motion-ready', canReveal);
    };

    setupReveals();
    reducedMotion.addEventListener('change', setupReveals);

    return () => {
      reducedMotion.removeEventListener('change', setupReveals);
      clearObservers();
    };
  }, [pathname]);

  return null;
}

export function ScrollMotion({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      <SectionRevealObserver />
      {children}
    </ReactLenis>
  );
}
