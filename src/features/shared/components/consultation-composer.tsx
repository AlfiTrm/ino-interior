'use client';

import { useState } from 'react';

type ConsultationComposerProps = { whatsappNumber?: string };

export function ConsultationComposer({ whatsappNumber }: ConsultationComposerProps) {
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const project = String(form.get('project') ?? '').trim();
    const location = String(form.get('location') ?? '').trim();
    const brief = String(form.get('brief') ?? '').trim();
    setMessage(['Halo, saya ingin membicarakan kebutuhan interior.', project && 'Jenis ruang: ' + project, location && 'Lokasi: ' + location, brief && 'Kebutuhan: ' + brief].filter(Boolean).join('\n'));
    setCopied(false);
    setError('');
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setError('');
    } catch {
      setError('Pesan belum berhasil disalin. Pilih dan salin teks pesannya secara manual.');
    }
  }

  const candidate = whatsappNumber?.replace(/\D/g, '');
  const destination = candidate && /^[1-9]\d{7,14}$/.test(candidate) ? candidate : undefined;
  const whatsappHref = destination ? 'https://wa.me/' + destination + '?text=' + encodeURIComponent(message) : null;

  return <div id="konsultasi" className="scroll-mt-28">
    <form onSubmit={prepare} className="grid gap-6">
      <label className="grid gap-2 text-sm font-medium">Jenis ruang
        <select name="project" required defaultValue="" className="field"><option value="" disabled>Pilih kebutuhan ruang</option><option>Kantor atau ruang komersial</option><option>Kafe, restoran, atau penginapan</option><option>Rumah atau apartemen</option><option>Tirai dan penutup jendela</option><option>Lainnya</option></select>
      </label>
      <label className="grid gap-2 text-sm font-medium">Lokasi ruang <span className="font-normal text-[var(--muted)]"> (opsional)</span>
        <input className="field" name="location" autoComplete="address-level2" placeholder="Contoh: Malang" />
      </label>
      <label className="grid gap-2 text-sm font-medium">Apa yang ingin Anda benahi?
        <textarea className="field min-h-32 resize-y" name="brief" rows={4} placeholder="Ceritakan sedikit tentang ruang dan kebutuhan Anda." />
      </label>
      <button type="submit" className="button button-primary w-full sm:w-fit">Siapkan pesan konsultasi</button>
    </form>
    {message && <section aria-label="Draft pesan konsultasi" className="mt-8 border-t border-[var(--line)] pt-6"><h3 className="text-lg font-semibold">Pesan sudah siap</h3><p className="body-copy mt-2 text-sm">{destination ? 'Periksa isi pesan sebelum meneruskan ke WhatsApp.' : 'Pilih salin untuk menempelkan pesan di WhatsApp. Tujuan resmi INO belum tersedia dalam demo ini.'}</p><pre className="mt-5 max-w-full whitespace-pre-wrap break-words bg-[var(--surface)] p-5 font-sans text-sm leading-7 text-[var(--ink)]">{message}</pre><div className="mt-4 flex flex-col gap-3 sm:flex-row"><button type="button" onClick={copyMessage} className="button button-primary">{copied ? 'Pesan tersalin' : 'Salin pesan'}</button>{whatsappHref && <a href={whatsappHref} target="_blank" rel="noreferrer" className="button button-light">Buka WhatsApp</a>}</div><p aria-live="polite" className="mt-3 text-sm text-[var(--muted)]">{error || (copied ? 'Pesan berhasil disalin ke clipboard.' : '')}</p></section>}
  </div>;
}
