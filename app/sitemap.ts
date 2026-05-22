import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/about-me', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/support', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/case-studies/mylocalmasjid', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/case-studies/salahtimez', priority: 0.8, changeFrequency: 'monthly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
