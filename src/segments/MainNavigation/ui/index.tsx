import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { MAIN_NAVIGATION } from '@/shared/constants/routes'
import Link from 'next/link'
import { UiTypography } from '@/shared/ui/UiTypography'

interface Props extends TClassName {
	handleItemClick?: MouseEventHandler
}

const MainNavigation: FC<Props> = ({ className, handleItemClick }) => {
	return (
		<nav
			className={cn(
				'flex lg-big:gap-x-12 gap-x-8 text-[15px] text-third-text',
				className
			)}
		>
			{MAIN_NAVIGATION.map(({ link, text }) => {
				return (
					<Link href={link} onClick={handleItemClick} key={link}>
						<UiTypography font='Montserrat-M'>{text}</UiTypography>
					</Link>
				)
			})}
		</nav>
	)
}

export { MainNavigation }
