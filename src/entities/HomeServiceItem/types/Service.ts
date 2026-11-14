import { ReactNode } from 'react'

export interface TServiceItem {
	id: number
	title: ReactNode
	description: ReactNode
	icon: string
	fromPrice?: number | 'hours'
}
