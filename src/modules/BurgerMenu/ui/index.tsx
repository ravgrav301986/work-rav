'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiPortalWrapper } from '@/shared/ui/UiPortalWrapper'
import { Header } from './Header'
import {
	hideModalSelector,
	modalsStatesSelector,
	useModalsStore,
} from '@/shared/store/useModalsStore'
import { BURGER_MENU } from '@/shared/constants/modals-slugs'
import { useModalsBase } from '@/shared/hooks/useModalsBase'
import { useScreen } from '@/shared/hooks'
import { LG_MID } from '@/shared/constants/breakpoints'
import { Content } from './Content'
import { Actions } from './Actions'
import { ThemeSwitcher } from '@/segments/ThemeSwitcher'
import { UiTypography } from '@/shared/ui/UiTypography'

const SLUG = BURGER_MENU

interface Props extends TClassName {}

const BurgerMenu: FC<Props> = ({ className }) => {
	// INITIAL DATA & HOOKS
	const { screenWidth } = useScreen()
	useModalsBase({ slug: SLUG, unmountDelay: 400 })

	// ZUSTAND
	const mountedState = useModalsStore(modalsStatesSelector)[SLUG]?.mountedState
	const visibleState = useModalsStore(modalsStatesSelector)[SLUG]?.visibleState
	const hideModal = useModalsStore(hideModalSelector)

	// HANDLERS
	const handleItemClick = () => {
		hideModal({ slug: SLUG })
	}

	return (
		<UiPortalWrapper selector='#modals'>
			{mountedState && screenWidth < LG_MID ? (
				<section
					className={cn(
						'fixed inset-0 bg-primary-background px-4 pt-2.5 pb-7 duration-[400ms] overflow-auto',
						{ ['translate-x-full']: !visibleState },
						className
					)}
				>
					<Header handleClose={handleItemClick} />
					<div className='mt-12 mb-25'>
						<Content handleClose={handleItemClick} />
						<div className='flex items-center gap-x-3 mt-5'>
							<ThemeSwitcher />
							<UiTypography font='Montserrat-R'>Переключить тему</UiTypography>
						</div>
					</div>
					<Actions />
				</section>
			) : null}
		</UiPortalWrapper>
	)
}

export { BurgerMenu }
