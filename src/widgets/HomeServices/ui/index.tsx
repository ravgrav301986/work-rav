import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { UiContainer } from '@/shared/ui/UiContainer'
import { cn } from '@/shared/lib/cn'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { HomeServiceItem } from '@/entities/HomeServiceItem'
import { SERVICES } from '../constants/services'
import { HOME_SERVICES_ANCHOR } from '@/shared/constants/routes'

interface Props extends TClassName {}

const HomeServices: FC<Props> = ({ className }) => {
	return (
		<UiContainer
			tag='section'
			className={cn('', className)}
			id={HOME_SERVICES_ANCHOR}
		>
			<div className='md-mid:py-10 py-7 md-mid:px-7 px-5 rounded-lg bg-primary-background'>
				<UiDecorationTitle className='md-mid:text-3xl text-2xl'>
					Услуги
				</UiDecorationTitle>
				<ul className='grid lg-big:grid-cols-4 md-mid:grid-cols-2 xs-big:gap-5 gap-y-2.5 mt-5'>
					{SERVICES.map(data => (
						<HomeServiceItem key={data.id} {...data} Tag='li' />
					))}
				</ul>
			</div>
		</UiContainer>
	)
}

export { HomeServices }
