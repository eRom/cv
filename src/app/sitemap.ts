import { MetadataRoute } from 'next'

/**
 * Génération du sitemap.xml pour le référencement
 * Next.js génère automatiquement le fichier sitemap.xml à partir de cette fonction
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://romainecarnot.fr'
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
