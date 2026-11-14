import { cn } from '@/shared/lib/cn'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { UiTypography } from '@/shared/ui/UiTypography'
import { ContentItem } from '@/widgets/HomeAbout/ui/ContentItem'
import Image from 'next/image'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Услуги | Rav.Coder',
	description:
		'Ознакомьтесь с полным спектром наших услуг, включая веб-разработку, UI/UX дизайн, техническую поддержку и SEO-продвижение.',
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
						<span className='main-text-gradient'>DIGITAL-РЕШЕНИЯ</span> для роста{' '}
						<br className='hidden md-mid:inline' /> вашего бизнеса — от идеи до
						поддержки.
					</UiTypography>

					<Image
						src='/images/Home/Serveces/servis-bg-Frame 6153.png'
						alt='Главный фон'
						width={1400}
						height={500}
						className='absolute inset-0 size-full object-cover -z-[1]'
					/>
				</div>

				<p className='md-mid:my-12 my-8 md-mid:text-2xl text-lg leading-relaxed'>
					Мы разрабатываем современные{' '}
					<span className='main-text-gradient'>
						сайты, мобильные приложения и цифровые сервисы,
					</span>{' '}
					которые помогают бизнесу расти, быть заметным и удобным для клиентов.
					В центре нашей работы — сочетание дизайна, технологий и понимания
					задач заказчика.
				</p>

				<UiDecorationTitle className='md-mid:text-3xl text-2xl mb-6'>
					Наши ключевые направления:
				</UiDecorationTitle>

				<ul className='flex flex-col md-mid:gap-y-6 gap-y-4 md-mid:text-xl text-base'>
					<ContentItem>
						<UiTypography font='Montserrat-M' tag='span'>
							Разработка веб-сайтов и приложений
						</UiTypography>{' '}
						— от лендингов до сложных платформ, с учётом всех требований бизнеса
						и пользователей.
					</ContentItem>
					<ContentItem>
						<UiTypography font='Montserrat-M' tag='span'>
							UI/UX-дизайн
						</UiTypography>{' '}
						— проектируем понятные, привлекательные и эффективные интерфейсы.
					</ContentItem>
					<ContentItem>
						<UiTypography font='Montserrat-M' tag='span'>
							Техническая поддержка
						</UiTypography>{' '}
						— обеспечиваем стабильную работу продуктов и быстро реагируем на
						любые задачи.
					</ContentItem>
					<ContentItem>
						<UiTypography font='Montserrat-M' tag='span'>
							Продвижение и SEO
						</UiTypography>{' '}
						— повышаем видимость сайта, улучшаем позиции в поиске и привлекаем
						целевую аудиторию.
					</ContentItem>
					<ContentItem>
						<UiTypography font='Montserrat-M' tag='span'>
							Внедрение ИИ и нейросетей
						</UiTypography>{' '}
						— внедряем ИИ-решения для автоматизации, персонализации и улучшения
						пользовательского опыта.
					</ContentItem>
				</ul>

				<p className='md-mid:my-14 my-8 md-mid:px-10 text-center md-mid:text-2xl text-lg font-medium'>
					<span className='main-text-gradient'>
						Мы предлагаем гибкий формат сотрудничества: от разовых задач до
						полного сопровождения проектов.
					</span>
				</p>

				<UiDecorationTitle className='md-mid:text-3xl text-2xl mb-6'>
					Технологии будущего уже сегодня
				</UiDecorationTitle>

				<ul className='flex flex-col md-mid:gap-y-5 gap-y-4 md-mid:text-xl text-base'>
					<ContentItem>
						Интегрируем решения{' '}
						<UiTypography font='Montserrat-M' tag='span'>
							на базе нейросетей
						</UiTypography>{' '}
						и искусственного интеллекта для автоматизации, персонализации и
						улучшения цифровых продуктов.
					</ContentItem>
					<ContentItem>
						Мы внедряем нейросетевые технологии в цифровые продукты, чтобы они
						становились{' '}
						<UiTypography font='Montserrat-M' tag='span'>
							умнее, быстрее и эффективнее.
						</UiTypography>
					</ContentItem>
					<ContentItem>
						<UiTypography font='Montserrat-M' tag='span'>
							Используем ИИ
						</UiTypography>{' '}
						для автоматизации, генерации контента, персонализации интерфейсов и
						интеллектуального анализа данных.
					</ContentItem>
				</ul>

				<Image
					src='/images/Home/Serveces/computer-burd.png'
					alt='Технологии и разработка'
					width={1200}
					height={400}
					className='object-cover w-full max-h-[350px] rounded-lg mt-10 mb-4'
				/>
			</UiContainer>
		</section>
	)
}

export default Services
