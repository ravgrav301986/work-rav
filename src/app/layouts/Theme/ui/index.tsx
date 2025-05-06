'use client'
import { FC, useEffect } from 'react'
import { TChildren } from '@/shared/types/shared'
import { themeSelector, useThemeStore } from '@/shared/store/useThemeStore'

interface Props extends TChildren {}

const ThemeLayout: FC<Props> = ({ children }) => {
	const theme = useThemeStore(themeSelector)

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.dataset.theme = 'dark'
		} else {
			document.documentElement.dataset.theme = 'light'
		}
	}, [theme])

	return <>{children}</>
}

export { ThemeLayout }
