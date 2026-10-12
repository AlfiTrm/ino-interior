import Link from 'next/link';
import { Container } from './container';

export function Consultation({ title = 'Ruang Anda berikutnya, kita mulai dari percakapan.' }: { title?: string }) {
  return <section className="section-space bg-[var(--forest)] text-white"><Container><div className="grid items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-24"><h2 className="section-heading max-w-3xl">{title}</h2><div><p className="max-w-sm text-base leading-7 text-[#e0e7db]">Ceritakan ruangnya, siapa yang akan memakainya, dan apa yang ingin Anda benahi.</p><Link href="/kontak#konsultasi" className="button button-light mt-7">Bicarakan kebutuhan ruang</Link></div></div></Container></section>;
}
