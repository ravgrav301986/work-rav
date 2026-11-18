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
import { FloatingRobot } from '@/shared/ui/FloatingRobot'

interface Props extends TClassName {}

const HomeHero: FC<Props> = ({ className }) => {
	const { screenWidth } = useScreen()

	return (
		<section className='relative md-mid:h-auto h-[560px] text-primary-text-PROTECT'>
			<UiContainer className={cn('h-full', className)}>
				<div className='relative z-0 md-mid:pl-14 md-mid:py-6 px-5 pb-9 flex flex-col md-mid:justify-center justify-end md-mid:h-[430px] h-full overflow-hidden md-mid:rounded-md'>
					<div className='relative z-10 max-w-[640px]'>
						<UiTypography
							font='Montserrat-B'
							className='md-mid:text-[36px] text-2xl leading-tight'
						>
							Разработка ПО,
							<br />
							робототехники и ИИ-решений
							<br />
							<span className='main-text-gradient'>для вашего бизнеса!</span>
						</UiTypography>
						{screenWidth >= MD_MID ? (
							<Info className='mt-3 mb-5' />
						) : (
							<UiTypography font='Montserrat-R' className='text-[15px] mt-3 mb-6'>
								От концепции до запуска: полный цикл разработки под ваши задачи.
							</UiTypography>
						)}
						<UiButton theme='fill-invert' className='uppercase w-max'>
							<UiTypography font='Montserrat-SB'>
								<a
									href='https://t.me'
									target='_blank'
									rel='noopener noreferrer'
								>
									Заказать проект
								</a>
							</UiTypography>
						</UiButton>
					</div>

					{/* Безопасная лётная зона: на телефоне вверху над текстом, на компьютере справа от текста */}
					<FloatingRobot className='!absolute right-0 top-0 md-mid:bottom-0 w-full md-mid:w-[46%] h-[44%] md-mid:h-full z-20' />

					<Image
						src={
							screenWidth >= MD_MID
								? '/images/Home/backgrounds/Hero/main-bg1.png'
								: '/images/Home/backgrounds/Hero/main-bg-mobile1.png'
						}
						alt='Разработка ПО, робототехники и ИИ-решений RAV:Coder'
						width={screenWidth >= MD_MID ? 1440 : 380}
						height={screenWidth >= MD_MID ? 450 : 555}
						priority
						className={cn(
							'absolute inset-0 size-full object-cover object-center -z-10 md-mid:rounded-md',
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
