'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { Content } from './Content'
import { UiButton } from '@/shared/ui/UiButton'
import Image from 'next/image'
import { UiTypography } from '@/shared/ui/UiTypography'
import { useScreen } from '@/shared/hooks'
import { LG_BIG } from '@/shared/constants/breakpoints'
import { HOME_ABOUT_ANCHOR } from '@/shared/constants/routes'

interface Props extends TClassName {}

const HomeAbout: FC<Props> = ({ className }) => {
	const { screenWidth } = useScreen()

	return (
		<UiContainer
			tag='section'
			className={cn('', className)}
			id={HOME_ABOUT_ANCHOR}
		>
			<div className='flex justify-between bg-primary-background gap-x-14 lg-big:pl-10 lg-big:pr-0 px-5 rounded-lg overflow-hidden'>
				<div className='flex-1 lg-big:py-10 py-7'>
					<UiDecorationTitle className='lg-big:text-3xl text-2xl'>
						О компании
					</UiDecorationTitle>
					{screenWidth < LG_BIG ? (
						<Image
							src='/images/Home/illustrations/About/bird2.png'
							alt='Красивая картинка'
							width={652}
							height={503}
							className='object-cover w-full max-h-[300px] rounded-lg mt-7 mb-2.5'
						/>
					) : null}
					<Content className='mt-7 mb-10' />
					<UiButton
						theme='fill'
						className='uppercase md-mid:w-auto w-full text-center'
					>
						<UiTypography font='Montserrat-SB'><a href="https://t.me/Ravcoder">Узнать больше</a></UiTypography>
					</UiButton>
				</div>
				{screenWidth >= LG_BIG ? (
					<Image
						src='/images/Home/illustrations/About/bird2.png'
						alt='Красивая картинка'
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
