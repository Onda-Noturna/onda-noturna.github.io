import { MetadataRoute } from 'next'
import { siteConfig, navigationItems } from '@/config/site.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const pageUrls = navigationItems.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: item.href === '/' ? 1 : 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...pageUrls,
  ]
}