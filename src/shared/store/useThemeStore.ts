import { create } from 'zustand'

const THEME_STORAGE_KEY = 'ravcode-wiki-theme'

type TTheme = 'dark' | 'light'
interface TUseThemeStore {
	theme: TTheme
	setTheme: (theme: TTheme) => void
}

export const useThemeStore = create<TUseThemeStore>()((set, get) => ({
	theme:
		typeof window !== 'undefined'
			? (localStorage.getItem(THEME_STORAGE_KEY) as TTheme | null) || 'light'
			: 'light',
	setTheme: theme => {
		localStorage.setItem(THEME_STORAGE_KEY, theme)
		set({ theme })
	},
}))

export const themeSelector = (state: TUseThemeStore) => state.theme
export const setThemeSelector = (state: TUseThemeStore) => state.setTheme
