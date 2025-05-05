import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiContainer } from '@/shared/ui/UiContainer'
import { Item } from './Item'
import { ADVANTAGES } from '../constants/advantages'

interface Props extends TClassName {}

const HomeAdvantages: FC<Props> = ({ className }) => {
	return (
		<UiContainer tag='section' className={cn('', className)}>
			<ul className='grid lg-big:grid-cols-4 md-low:grid-cols-2 gap-5'>
				{ADVANTAGES.map(({ id, ...data }) => (
					<Item key={id} {...data} />
				))}
			</ul>
		</UiContainer>
	)
}

export { HomeAdvantages }
