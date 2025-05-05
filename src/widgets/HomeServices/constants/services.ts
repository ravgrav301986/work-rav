import { TServiceItem } from '@/entities/HomeServiceItem/types/Service'

export const SERVICES: TServiceItem[] = [
	{
		description:
			'Мы создаем цифровые продукты, которые помогают бизнесу расти, обеспечивая удобство',
		fromPrice: 400000,
		icon: '/images/Home/vectors/Services/web-dev.svg',
		id: 1,
		title: 'Разработка веб-сайтов и приложений',
	},
	{
		description:
			'Мы создаем цифровые продукты, которые помогают бизнесу расти, обеспечивая удобство',
		fromPrice: 7000,
		icon: '/images/Home/vectors/Services/design.svg',
		id: 2,
		title: 'UI/UX-дизайн',
	},
	{
		description:
			'Мы создаем цифровые продукты, которые помогают бизнесу расти, обеспечивая удобство',
		fromPrice: 'hours',
		icon: '/images/Home/vectors/Services/support.svg',
		id: 3,
		title: 'Техническая поддержка',
	},
	{
		description:
			'Мы создаем цифровые продукты, которые помогают бизнесу расти, обеспечивая удобство',
		fromPrice: 7000,
		icon: '/images/Home/vectors/Services/seo.svg',
		id: 4,
		title: 'Продвижение и SEO',
	},
]
