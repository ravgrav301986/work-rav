'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/shared/types/shared'
import { UiButton } from '@/shared/ui/UiButton'
import { cn } from '@/shared/lib/cn'
import {
	useModalsStore,
	toggleModalSelector,
	modalsStatesSelector,
} from '@/shared/store/useModalsStore'
import { BURGER_MENU } from '@/shared/constants/modals-slugs'

const itemCls = 'h-[2.5px] w-full bg-primary rounded-full duration-300'

interface Props extends TClassName {}

const BurgerMenuOpen: FC<Props> = ({ className }) => {
	const menuState =
		useModalsStore(modalsStatesSelector)[BURGER_MENU]?.visibleState
	const toggleMenu = useModalsStore(toggleModalSelector)

	const handleClick: MouseEventHandler = () => {
		toggleMenu({ slug: BURGER_MENU })
	}

	return (
		<UiButton
			className={cn('flex flex-col items-center gap-y-1.5 w-5', className)}
			onClick={handleClick}
		>
			<span className={cn(itemCls, { ['w-[85%] opacity-80']: menuState })} />
			<span className={cn(itemCls, { ['w-[70%] opacity-80']: menuState })} />
			<span className={cn(itemCls, { ['w-[85%] opacity-80']: menuState })} />
		</UiButton>
	)
}

export { BurgerMenuOpen }
