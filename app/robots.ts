import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
			},
			{
				userAgent: 'Yandex',
				allow: '/',
				crawlDelay: 1,
			},
		],
		host: 'https://ravcoder.ru',
		sitemap: 'https://ravcoder.ru/sitemap.xml',
	}
}
