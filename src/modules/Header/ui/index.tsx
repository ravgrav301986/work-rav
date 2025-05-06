'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiLogo } from '@/shared/ui/UiLogo'
import { MainNavigation } from '@/segments/MainNavigation'
import { Actions } from './Actions'
import { useScreen } from '@/shared/hooks'
import { LG_MID } from '@/shared/constants/breakpoints'
import { Top } from './Top'
import { ThemeSwitcher } from '@/segments/ThemeSwitcher'

interface Props extends TClassName {}

const Header: FC<Props> = ({ className }) => {
	const { screenWidth } = useScreen()

	return (
		<header
			className={cn(
				'sticky left-0 top-0 bg-primary-background z-10 shadow-[2px_0_5px_0_rgba(0,0,0,0.10)]',
				className
			)}
		>
			<Top />
			<UiContainer className=''>
				<div className='flex items-center justify-between xs-big:py-6 py-2.5'>
					<UiLogo />
					{screenWidth >= LG_MID ? (
						<>
							<MainNavigation className='lg-big:text-[15px] text-[13px] lg-big:gap-x-8 gap-x-4 mx-auto' />
							<ThemeSwitcher className='ml-auto mr-3' />
						</>
					) : null}
					<Actions />
				</div>
			</UiContainer>
		</header>
	)
}

export { Header }
