import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from './(main)/blog/constants'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://ravcoder.ru'

	const staticPages: MetadataRoute.Sitemap = [
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
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: new Date(),
			priority: 0.4,
		},
	]

	const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: new Date(),
		priority: 0.7,
	}))

	return [...staticPages, ...blogPages]
}
