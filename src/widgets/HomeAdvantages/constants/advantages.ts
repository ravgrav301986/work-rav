import { TAdvantage } from '../types/Advantage'

export const ADVANTAGES: (TAdvantage & { id: number })[] = [
	{
		id: 1,
		icon: '/images/Home/vectors/Advantages/individual-solutions.svg',
		title: 'Индивидуальные решения',
		description: 'под задачи вашего бизнеса.',
	},
	{
		id: 2,
		icon: '/images/Home/vectors/Advantages/full-development-cycle.svg',
		title: 'Полный цикл разработки',
		description: 'от идеи до запуска.',
	},
	{
		id: 3,
		icon: '/images/Home/vectors/Advantages/modern-technologies.svg',
		title: 'Современные технологии',
		description: 'скорость, безопасность, удобство.',
	},
	{
		id: 4,
		icon: '/images/Home/vectors/Advantages/support.svg',
		title: 'Поддержка',
		description: 'гарантия качества и помощь после запуска.',
	},
]
