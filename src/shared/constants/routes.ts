export const HOME_ABOUT_ANCHOR = 'home-about-anchor'
export const HOME_SERVICES_ANCHOR = 'home-services-anchor'
export const HOME_WORK_PROCESS_ANCHOR = 'home-work-process-anchor'
export const HOME_CONTACTS_ANCHOR = 'home-contacts-anchor'

export const ROUTES = {
	home: {
		INDEX: '/',
	},
} as const

export const MAIN_NAVIGATION = [
	{
		link: `${ROUTES.home.INDEX}#${HOME_ABOUT_ANCHOR}`,
		text: 'О компании',
	},
	{
		link: `${ROUTES.home.INDEX}#${HOME_SERVICES_ANCHOR}`,
		text: 'Услуги',
	},
	{
		link: `${ROUTES.home.INDEX}#${HOME_WORK_PROCESS_ANCHOR}`,
		text: 'Процесс работы',
	},
	{
		link: `${ROUTES.home.INDEX}#${HOME_CONTACTS_ANCHOR}`,
		text: 'Контакты',
	},
]
