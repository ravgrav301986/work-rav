'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiTypography } from '@/shared/ui/UiTypography'
import Image from 'next/image'
import { Info } from './Info'
import { UiButton } from '@/shared/ui/UiButton'
import { MD_MID } from '@/shared/constants/breakpoints'
import { useScreen } from '@/shared/hooks'

interface Props extends TClassName {}

const HomeHero: FC<Props> = ({ className }) => {
	const { screenWidth } = useScreen()

	return (
		<section className='relative md-mid:min-h-auto min-h-[555px] md-mid:h-auto h-[calc(100vh-var(--header-height))]'>
			<UiContainer className={cn('h-full', className)}>
				<div className='md-mid:relative z-[0] md-mid:pl-16 md-mid:pt-16 md-mid:pb-10 pb-12 md-mid:block flex flex-col justify-end h-full'>
					<UiTypography
						font='Montserrat-B'
						className='md-mid:text-[40px] text-2xl '
					>
						Мы создаём сайты
						<br />
						и приложения, которые
						<br />
						<span className='main-text-gradient'>работают на ваш успех!</span>
					</UiTypography>
					{screenWidth >= MD_MID ? (
						<Info className='mt-5 mb-7' />
					) : (
						<UiTypography font='Montserrat-R' className='text-[15px] mt-4 mb-7'>
							От концепции до запуска: полный цикл разработки под ваши задачи.
						</UiTypography>
					)}
					<UiButton theme='fill-invert' className='uppercase w-max'>
						<UiTypography font='Montserrat-SB'>Заказать проект</UiTypography>
					</UiButton>
					<Image
						src={
							screenWidth >= MD_MID
								? '/images/Home/backgrounds/Hero/main-bg.png'
								: '/images/Home/backgrounds/Hero/main-bg-mobile.png'
						}
						alt='Главный фон'
						width={screenWidth >= MD_MID ? 1440 : 380}
						height={screenWidth >= MD_MID ? 450 : 555}
						className={cn(
							'absolute inset-0 size-full object-cover -z-[1] md-mid:rounded-md',
							{
								'object-top': screenWidth < MD_MID,
							}
						)}
					/>
				</div>
			</UiContainer>
		</section>
	)
}

export { HomeHero }
