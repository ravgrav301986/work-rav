import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ravcoder.ru',
      priority: 1.0,
    },
   
  ]
}