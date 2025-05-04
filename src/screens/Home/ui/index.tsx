import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'

interface Props extends TClassName {}

const HomeScreen: FC<Props> = ({ className }) => {
	return <main className={cn('', className)}></main>
}

export { HomeScreen }
