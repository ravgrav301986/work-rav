import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { HomeHero } from '@/widgets/HomeHero'
import { HomeAdvantages } from '@/widgets/HomeAdvantages'

interface Props extends TClassName {}

const HomeScreen: FC<Props> = ({ className }) => {
	return (
		<main className={cn('', className)}>
			<HomeHero />
			<HomeAdvantages className='mt-5' />
		</main>
	)
}

export { HomeScreen }
