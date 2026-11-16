import { TServiceItem } from '@/entities/HomeServiceItem/types/Service'


export const SERVICES: TServiceItem[] = [
	{
		description:
			'Программируем роботов и умные системы на C++ и Python: алгоритмы движения, логика поведения и компьютерное зрение под ваши задачи',
		fromPrice: 15000,
		icon: '/images/Home/vectors/Services/support.svg',
		id: 1,
		title: 'Робототехника на C++ и Python',
	},
	{
		description:
			'Создаем надежные веб-сайты, сервисы и мобильные приложения для любых задач, обеспечивая рост и стабильность бизнеса',
		fromPrice: 8000,
		icon: '/images/Home/vectors/Services/web-dev.svg',
		id: 2,
		title: 'Разработка веб-сайтов и приложений',
	},
	{
		description:
			'Проектируем интерфейсы, где каждая деталь работает на удобство, эстетику и вовлеченность клиента',
		fromPrice: 6000,
		icon: '/images/Home/vectors/Services/design.svg',
		id: 3,
		title: 'UI/UX-дизайн',
	},
	{
		description:
			'Обеспечиваем бесперебойную работу проектов, внедряем ИИ-решения и быстро решаем технические задачи',
		fromPrice: 'hours',
		icon: '/images/Home/vectors/Services/support.svg',
		id: 4,
		title: 'Техническая поддержка и ИИ',
	},
]
