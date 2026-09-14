import { CurtainScene } from '@/features/curtain-playground/components/curtain-scene';

export default function CurtainPlaygroundPage() {
  return <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8"><h1 className="text-4xl font-extrabold tracking-[-.055em] sm:text-6xl">Visualisasi gorden</h1><p className="mt-4 max-w-xl text-[var(--muted)]">POC untuk membandingkan bentuk, finishing, dan bukaan di satu ruang.</p><div className="mt-10"><CurtainScene /></div></div>;
}
