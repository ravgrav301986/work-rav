import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiButton } from '@/shared/ui/UiButton'
import { UiTypography } from '@/shared/ui/UiTypography'
import Image from 'next/image'
import { useScreen } from '@/shared/hooks'
import { LG_MID } from '@/shared/constants/breakpoints'
import { BurgerMenuOpen } from '@/features/BurgerMenuOpen'
import { UiGradientBorder } from '@/shared/ui/UiGradientBorder'

interface Props extends TClassName {}

const Actions: FC<Props> = ({ className }) => {
	const { screenWidth } = useScreen()

	return (
		<div className={cn('flex lg-big:gap-x-7 gap-x-4', className)}>
			{screenWidth >= LG_MID ? (
				<UiGradientBorder className='w-max rounded-lg'>
					<UiButton
						theme='outlined'
						className='flex gap-x-2.5 py-1.5 items-center lg-big:text-lg text-base border-none'
					>
						<Image
							src='/images/shared/social/telegram-gradient.svg'
							alt='telegram'
							width={19}
							height={17}
							priority
						/>
						<UiTypography font='Montserrat-M'><a href="https://t.me/Ravcoder"> Консультация</a></UiTypography>
					</UiButton>
				</UiGradientBorder>
			) : null}
			<UiButton
				theme='fill'
				className='uppercase lg-big:text-[15px] xs-big:text-sm text-[9px]'
			>
				<UiTypography font='Montserrat-SB'><a href="mailto:ravcoder@yandex.ru"> Оставить заявку</a> </UiTypography>
			</UiButton>
			{screenWidth < LG_MID ? <BurgerMenuOpen className='self-center' /> : null}
		</div>
	)
}

export { Actions }
