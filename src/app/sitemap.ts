import { MetadataRoute } from 'next'

/**
 * Génération du sitemap.xml pour le référencement
 * Next.js génère automatiquement le fichier sitemap.xml à partir de cette fonction
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cv.romain-ecarnot.com'
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/scrollytelling`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
