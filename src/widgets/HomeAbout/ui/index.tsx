'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { Content } from './Content'
import { ContentItem } from './ContentItem'
import { UiButton } from '@/shared/ui/UiButton'
import Image from 'next/image'
import { UiTypography } from '@/shared/ui/UiTypography'
import { useScreen } from '@/shared/hooks'
import { LG_BIG } from '@/shared/constants/breakpoints'

interface Props extends TClassName {
	title?: string
	isTeamBlock?: boolean
}

const HomeAbout: FC<Props> = ({
	className,
	title = 'Инженерная команда',
	isTeamBlock = true,
}) => {
	const { screenWidth } = useScreen()

	return (
		<UiContainer tag='section' className={cn('', className)}>
			<div className='flex justify-between bg-primary-background gap-x-14 lg-big:pl-10 lg-big:pr-0 px-5 rounded-lg overflow-hidden'>
				<div className='flex-1 lg-big:py-10 py-7'>
					<UiDecorationTitle className='lg-big:text-3xl text-2xl'>
						{title}
					</UiDecorationTitle>

					{screenWidth < LG_BIG ? (
						<Image
							src='/images/Home/illustrations/About/bird2.png'
							alt='Инженерная IT-студия RAV:Coder'
							width={652}
							height={503}
							className='object-cover w-full max-h-[300px] rounded-lg mt-7 mb-2.5'
						/>
					) : null}

					{isTeamBlock ? (
						<ul className='flex flex-col gap-y-5 mt-7 mb-10'>
							<ContentItem>
								Мы объединяем{' '}
								<UiTypography font='Montserrat-M' tag='span'>
									опытных системных программистов (C++, Python), специалистов по
									робототехнике и архитекторов веб-платформ.
								</UiTypography>
							</ContentItem>
							<ContentItem>
								Пишем чистый, отказоустойчивый код и проектируем{' '}
								<UiTypography font='Montserrat-M' tag='span'>
									алгоритмы реального времени, системы компьютерного зрения и
									нейросетевые модели
								</UiTypography>{' '}
								под высокие нагрузки.
							</ContentItem>
							<ContentItem>
								Работаем без лишних посредников —{' '}
								<UiTypography font='Montserrat-M' tag='span'>
									вы общаетесь напрямую с инженерами,
								</UiTypography>{' '}
								которые погружаются в задачу, составляют чёткое ТЗ и отвечают за
								результат.
							</ContentItem>
							<ContentItem>
								Строим процесс по прозрачным спринтам с регулярными демонстрациями,{' '}
								<UiTypography font='Montserrat-M' tag='span'>
									соблюдаем NDA и передаём 100% прав на исходный код
								</UiTypography>{' '}
								и техническую документацию.
							</ContentItem>
							<ContentItem>
								Берёмся за нестандартные инженерные вызовы —{' '}
								<UiTypography font='Montserrat-M' tag='span'>
									от программирования автономных роботов до запуска сложных
									ИИ-сервисов
								</UiTypography>{' '}
								с последующей поддержкой 24/7.
							</ContentItem>
						</ul>
					) : (
						<Content className='mt-7 mb-10' />
					)}

					<UiButton
						theme='fill'
						className='uppercase md-mid:w-auto w-full text-center'
					>
						<UiTypography font='Montserrat-SB'>
							<a href='https://t.me'>Узнать больше</a>
						</UiTypography>
					</UiButton>
				</div>
				{screenWidth >= LG_BIG ? (
					<Image
						src='/images/Home/illustrations/About/bird2.png'
						alt='Инженерная IT-студия RAV:Coder'
						width={652}
						height={503}
						className='object-cover'
					/>
				) : null}
			</div>
		</UiContainer>
	)
}

export { HomeAbout }
