import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { HomeHero } from '@/widgets/HomeHero'
import { HomeAdvantages } from '@/widgets/HomeAdvantages'
import { HomeAbout } from '@/widgets/HomeAbout'
import { HomeServices } from '@/widgets/HomeServices'
import { HomeWorkProcess } from '@/widgets/HomeWorkProcess'
import { HomeHasQuestions } from '@/widgets/HomeHasQuestions'
import { HomContacts } from '@/widgets/HomContacts'

interface Props extends TClassName {}

const HomeScreen: FC<Props> = ({ className }) => {
	return (
		<main className={cn('', className)}>
			<HomeHero className='mt-5' />
			<HomeAdvantages className='mt-5' />
			<HomeAbout className='mt-[var(--modules-gap)]' />
			<HomeServices className='mt-[var(--modules-gap)]' />
			<HomeWorkProcess className='mt-[var(--modules-gap)]' />
			<HomeHasQuestions className='mt-[var(--modules-gap)]' />
			<HomContacts className='mt-[var(--modules-gap)]' />
		</main>
	)
}

export { HomeScreen }
