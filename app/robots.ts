import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		host: 'https://ravcoder.ru',
		sitemap: 'https://ravcoder.ru',
	}
}
