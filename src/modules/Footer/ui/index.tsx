import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { UiContainer } from '@/shared/ui/UiContainer'
import { cn } from '@/shared/lib/cn'
import { UiLogo } from '@/shared/ui/UiLogo'
import { MainNavigation } from '@/segments/MainNavigation'
import { Info } from './Info'
import { UiTypography } from '@/shared/ui/UiTypography'

interface Props extends TClassName {}

const Footer: FC<Props> = ({ className }) => {
	return (
		<footer className='bg-third-background'>
			<UiContainer tag='div' className={cn('pt-5 pb-12', className)}>
				<div className='flex items-start flex-wrap md-mid:flex-row flex-col'>
					<div className='flex md-mid:items-center md-mid:flex-row flex-col'>
						<UiLogo />
						<MainNavigation className='lg-mid:ml-[150px] lg-low:ml-16 md-mid:ml-5 gap-x-4 md-mid:my-0 my-7 xs-big:flex-row flex-col gap-y-4' />
					</div>
					<Info className='md-mid:ml-auto' />
				</div>
				<UiTypography
					font='Montserrat-L'
					className='xs-big:text-[15px] text-xs mt-12'
				>
					© 2024 “RAV:Coder”. Все права защищены.
				</UiTypography>
			</UiContainer>
		</footer>
	)
}

export { Footer }
