import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://ravcoder.ru'

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			priority: 1.0,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date(),
			priority: 0.9,
		},
		{
			url: `${baseUrl}/news`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contacts`,
			lastModified: new Date(),
			priority: 0.7,
		},
	]
}
