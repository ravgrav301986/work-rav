export const ROUTES = {
	home: {
		INDEX: '/',
	},
	about: '/about',
	serveces: '/serveces',
	workProcess: '/work-process',
	contacts: '/contacts',
	blog: '/blog',
	news: '/news',
} as const

export const MAIN_NAVIGATION = [
	{
		link: ROUTES.about,
		text: 'О компании',
	},
	{
		link: ROUTES.serveces,
		text: 'Услуги',
	},
	{
		link: ROUTES.news,
		text: 'Новости',
	},
	{
		link: ROUTES.blog,
		text: 'Блог',
	},
	{
		link: ROUTES.contacts,
		text: 'Контакты',
	},
]
