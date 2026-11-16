import { cn } from '@/shared/lib/cn'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { UiTypography } from '@/shared/ui/UiTypography'
import { ContentItem } from '@/widgets/HomeAbout/ui/ContentItem'
import Image from 'next/image'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Услуги — Разработка ПО на заказ, робототехника, ИИ и сайты | RAV:Coder',
	description:
		'Разработка ПО на заказ (C++, Python), программирование роботов, автоматизация бизнеса с помощью ИИ, создание корпоративных сайтов, интернет-магазинов и мобильных приложений под ключ.',
}

const Services = () => {
	return (
		<section className='md-mid:py-10 py-7'>
			<UiContainer>
				<UiDecorationTitle className='md-mid:text-3xl text-2xl mb-6'>
					Услуги
				</UiDecorationTitle>

				<div className='relative z-[0] md-mid:px-16 md-mid:py-16 px-6 py-10 flex flex-col justify-end min-h-[320px] text-amber-50 overflow-hidden rounded-lg'>
					<UiTypography
						font='Montserrat-B'
						className='text-left md-mid:text-3xl text-2xl text-amber-50'
					>
						Всё для вашего проекта
					</UiTypography>
					<UiTypography
						font='Montserrat-R'
						className='md-mid:text-xl text-lg mt-4 text-amber-50 max-w-2xl'
					>
						Комплексные{' '}
						<span className='main-text-gradient'>ИНЖЕНЕРНЫЕ И DIGITAL-РЕШЕНИЯ</span>{' '}
						для роста <br className='hidden md-mid:inline' /> вашего бизнеса — от
						идеи до запуска и поддержки.
					</UiTypography>

					<Image
						src='/images/Home/Serveces/servis-bg-Frame 6153.png'
						alt='Разработка ПО, робототехника и цифровые решения RAV:Coder'
						width={1400}
						height={500}
						className='absolute inset-0 size-full object-cover -z-[1]'
					/>
				</div>

				<p className='md-mid:my-12 my-8 md-mid:text-2xl text-lg leading-relaxed'>
					Мы выполняем{' '}
					<span className='main-text-gradient'>
						разработку ПО на заказ, программирование робототехники на C++ и Python,
						а также создание сайтов и мобильных приложений
					</span>{' '}
					под ключ. Помогаем компаниям масштабироваться за счёт надёжной архитектуры,
					продуманного дизайна и современных алгоритмов.
				</p>

				<UiDecorationTitle className='md-mid:text-3xl text-2xl mb-6'>
					Наши ключевые направления:
				</UiDecorationTitle>

				<ul className='flex flex-col md-mid:gap-y-6 gap-y-4 md-mid:text-xl text-base'>
					<ContentItem>
						<UiTypography font='Montserrat-M' tag='span'>
							Робототехника и разработка ПО на заказ (C++ и Python)
						</UiTypography>{' '}
						— программируем роботов, контроллеры и умные системы: алгоритмы
						движения, логика поведения, встроенное ПО и компьютерное зрение под ваши
						задачи.
					</ContentItem>
					<ContentItem>
						<UiTypography font='Montserrat-M' tag='span'>
							Автоматизация бизнеса с помощью ИИ и нейросетей
						</UiTypography>{' '}
						— внедряем ИИ-агентов, чат-ботов и интеллектуальный анализ данных для
						ускорения работы компании и снижения издержек.
					</ContentItem>
					<ContentItem>
						<UiTypography font='Montserrat-M' tag='span'>
							Разработка веб-сайтов, порталов и приложений под ключ
						</UiTypography>{' '}
						— создаём быстрые лендинги, корпоративные сайты, интернет-магазины и
						сложные веб-платформы на Next.js и TypeScript.
					</ContentItem>
					<ContentItem>
						<UiTypography font='Montserrat-M' tag='span'>
							UI/UX-дизайн и проектирование интерфейсов
						</UiTypography>{' '}
						— проектируем понятные, эстетичные и удобные интерфейсы, которые
						повышают конверсию и вовлечённость клиентов.
					</ContentItem>
					<ContentItem>
						<UiTypography font='Montserrat-M' tag='span'>
							Техническая поддержка, аудит и SEO-продвижение
						</UiTypography>{' '}
						— обеспечиваем стабильную работу проектов 24/7, оптимизируем скорость и
						улучшаем позиции сайта в поиске Яндекса и Google.
					</ContentItem>
				</ul>

				<p className='md-mid:my-14 my-8 md-mid:px-10 text-center md-mid:text-2xl text-lg font-medium'>
					<span className='main-text-gradient'>
						Мы предлагаем гибкий формат сотрудничества: от разовых инженерных задач до
						полного цикла разработки и сопровождения проектов.
					</span>
				</p>

				<UiDecorationTitle className='md-mid:text-3xl text-2xl mb-6'>
					Технологии будущего уже сегодня
				</UiDecorationTitle>

				<ul className='flex flex-col md-mid:gap-y-5 gap-y-4 md-mid:text-xl text-base'>
					<ContentItem>
						Выполняем{' '}
						<UiTypography font='Montserrat-M' tag='span'>
							автоматизацию бизнеса с помощью ИИ
						</UiTypography>{' '}
						и нейросетей: интегрируем языковые модели и компьютерное зрение в ваши
						цифровые продукты и рабочие процессы.
					</ContentItem>
					<ContentItem>
						Соединяем{' '}
						<UiTypography font='Montserrat-M' tag='span'>
							мощь C++ и гибкость Python
						</UiTypography>{' '}
						для создания высокопроизводительных алгоритмов, систем распознавания и
						управления оборудованием.
					</ContentItem>
					<ContentItem>
						Используем{' '}
						<UiTypography font='Montserrat-M' tag='span'>
							современный веб-стек (Next.js, React, TypeScript)
						</UiTypography>{' '}
						для запуска отказоустойчивых веб-сервисов и мобильных приложений с
						высокой скоростью загрузки.
					</ContentItem>
				</ul>

				<Image
					src='/images/Home/Serveces/computer-burd.png'
					alt='Инженерная разработка ПО, робототехника и искусственный интеллект'
					width={1200}
					height={400}
					className='object-cover w-full max-h-[350px] rounded-lg mt-10 mb-4'
				/>
			</UiContainer>
		</section>
	)
}

export default Services
