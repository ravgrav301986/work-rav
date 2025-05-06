'use client'
import { ButtonHTMLAttributes, FC, MouseEventHandler } from 'react'
import { UiButton } from '@/shared/ui/UiButton'
import { cn } from '@/shared/lib/cn'
import {
	setThemeSelector,
	themeSelector,
	useThemeStore,
} from '@/shared/store/useThemeStore'
import { Moon, Sun } from 'lucide-react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ThemeSwitcher: FC<Props> = ({ className, ...props }) => {
	const theme = useThemeStore(themeSelector)
	const setTheme = useThemeStore(setThemeSelector)

	const handleClick: MouseEventHandler = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<UiButton
			onClick={handleClick}
			className={cn(
				'group w-[60px] flex justify-center items-center border-2 border-solid border-current rounded-full size-[36px] hover:bg-current',
				className
			)}
			{...props}
		>
			{theme === 'dark' ? (
				<Sun size={20} className='group-hover:text-black' />
			) : (
				<Moon size={20} className='group-hover:text-white' />
			)}
		</UiButton>
	)
}

export { ThemeSwitcher }
