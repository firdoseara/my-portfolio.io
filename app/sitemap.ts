import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://me.toinfinite.dev',
            lastModified: '2025-09-10', // Use a static date to avoid hydration mismatch
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
