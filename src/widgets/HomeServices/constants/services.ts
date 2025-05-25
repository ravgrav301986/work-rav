import { TServiceItem } from '@/entities/HomeServiceItem/types/Service'

export const SERVICES: TServiceItem[] = [
	{
		description:
			'Создаем надежные решения для любых задач, обеспечивая рост и стабильность бизнеса',
		fromPrice: 400000,
		
		icon: '/images/Home/vectors/Services/web-dev.svg',
		id: 1,
		title: 'Разработка веб-сайтов и приложений',
	},
	{
		description:
			'Проектируем интерфейсы, где каждая деталь работает на удобство и вовлеченность клиента',
		fromPrice: 7000  ,
		icon: '/images/Home/vectors/Services/design.svg',
		id: 2,
		title: 'UI/UX-дизайн ',
	},
	{
		description:
			'Обеспечиваем бесперебойную работу и быстро решаем задачи, сохраняя ваш комфорт',
		fromPrice: 'hours',
		icon: '/images/Home/vectors/Services/support.svg',
		id: 3,
		title: 'Техническая поддержка',
	},
	{
		description:
			'Продвигаем сайты в поиске и улучшаем видимость, привлекая целевую аудиторию бизнеса',
		fromPrice: 7000,
		icon: '/images/Home/vectors/Services/seo.svg',
		id: 4,
		title: 'Продвижение и SEO',
	},
]
