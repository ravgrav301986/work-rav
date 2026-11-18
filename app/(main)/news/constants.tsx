import { ReactNode } from 'react'

export interface TNewsItem {
	id: number
	title: ReactNode
	description: ReactNode
	icon: string
	image?: string
}

export const NEWS_POSTS: TNewsItem[] = [
	{
		id: 1,
		title: (
			<>
				Интеллект для машин: программируем роботов на{' '}
				<span className='main-text-gradient'>C++ и Python</span>
			</>
		),
		description: (
			<>
				Учим технику{' '}
				<span className='main-text-gradient'>
					двигаться, анализировать и принимать решения
				</span>{' '}
				под ваши задачи. Разрабатываем надёжные алгоритмы управления,
				компьютерное зрение и логику поведения на C++ и Python.
			</>
		),
		icon: '/images/Home/vectors/Services/web-dev.svg',
		image: '/images/News/news1.png',
	},
	{
		id: 2,
		title: (
			<>
				Цифровые экосистемы: от веб-платформ до{' '}
				<span className='main-text-gradient'>мобильных приложений</span>
			</>
		),
		description: (
			<>
				Создаём быстрые и отказоустойчивые{' '}
				<span className='main-text-gradient'>IT-решения под ключ</span> для
				масштабирования бизнеса. Берём на себя аналитику, архитектуру, дизайн и
				релиз.
			</>
		),
		icon: '/images/Home/vectors/Services/web-dev.svg',
		image: '/images/News/image2.png',
	},
	{
		id: 3,
		title: (
			<>
				<span className='main-text-gradient'>Нейросети и ИИ</span> в реальных
				задачах бизнеса
			</>
		),
		description: (
			<>
				Интегрируем{' '}
				<span className='main-text-gradient'>искусственный интеллект</span> в
				программные и аппаратные комплексы. Создаём умных ассистентов, системы
				распознавания и автоматизации.
			</>
		),
		icon: '/images/Home/vectors/Services/web-dev.svg',
		image: '/images/News/news3.png',
	},
	{
		id: 4,
		title: (
			<>
				Открыт приём проектов: от идеи до{' '}
				<span className='main-text-gradient'>рабочего прототипа</span>
			</>
		),
		description: (
			<>
				Готовы подключиться к вашей задаче на любом этапе: от написания{' '}
				<span className='main-text-gradient'>сложного кода и прошивок</span> до
				создания удобного интерфейса управления.
			</>
		),
		icon: '/images/Home/vectors/Services/web-dev.svg',
		image: '/images/News/image4.png',
	},
]
