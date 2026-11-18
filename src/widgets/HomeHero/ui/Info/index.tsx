import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { CheckMarkGradientIcon } from '@/shared/icons/CheckMarkGradientIcon'
import { UiTypography } from '@/shared/ui/UiTypography'
import { INFO } from '../../constants/info'

interface Props extends TClassName {}

const Info: FC<Props> = ({ className }) => {
	return (
		<ul className={cn('flex flex-col gap-y-2.5', className)}>
			{INFO.map(({ description, id, title }) => {
				return (
					<li className='flex items-start gap-x-2.5' key={id}>
						<CheckMarkGradientIcon className='mt-1 shrink-0' />
						<div>
							<UiTypography font='Montserrat-SB' tag='h2' className='text-base leading-snug'>
								{title}
							</UiTypography>
							<UiTypography className='text-sm opacity-90 leading-snug' font='Montserrat-R'>
								{description}
							</UiTypography>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export { Info }
