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

interface Props extends TClassName {}

const Header: FC<Props> = ({ className }) => {
	const { screenWidth } = useScreen()

	return (
		<header className={cn('', className)}>
			<UiContainer className='flex items-center justify-between xs-big:py-6 py-2.5'>
				<UiLogo />
				{screenWidth >= LG_MID ? <MainNavigation /> : null}
				<Actions />
			</UiContainer>
		</header>
	)
}

export { Header }
