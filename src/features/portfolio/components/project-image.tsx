'use client';

import Image from 'next/image';
import { useState } from 'react';

export function ProjectImage({ src, alt, sizes, priority = false, className = '', imageClassName = '' }: { src: string; alt: string; sizes: string; priority?: boolean; className?: string; imageClassName?: string }) {
  const [failed, setFailed] = useState(false);
  return <div className={`relative overflow-hidden bg-[var(--surface)] ${className}`}>
    {failed ? <div role="status" className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center text-sm text-[var(--muted)]"><span>Gambar belum dapat ditampilkan.</span><span>Informasi konsep tetap tersedia di bawah.</span><button type="button" className="text-link" onClick={() => setFailed(false)}>Muat ulang gambar</button></div> : <Image src={src} alt={alt} fill priority={priority} sizes={sizes} onError={() => setFailed(true)} className={`object-cover ${imageClassName}`} />}
  </div>;
}
