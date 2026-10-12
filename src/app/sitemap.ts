import type { MetadataRoute } from 'next';

const paths = ['/', '/layanan', '/portofolio', '/tentang', '/kontak'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!baseUrl) return [];

  const lastModified = new Date();
  return paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified,
    changeFrequency: path === '/' ? 'monthly' : 'yearly',
    priority: path === '/' ? 1 : path === '/portofolio' ? 0.9 : 0.7,
  }));
}
