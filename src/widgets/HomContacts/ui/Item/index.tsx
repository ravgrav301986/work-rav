import { FC, ReactNode } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiCopyButton } from '@/shared/ui/UiCopyButton'
import { UiTypography } from '@/shared/ui/UiTypography'

interface Props extends TClassName {
	title: string
	copyItems: { value: string; content: ReactNode }[]
}

const Item: FC<Props> = ({ className, copyItems, title }) => {
	return (
		<li className={cn('md-low:w-auto w-full', className)}>
			<UiTypography font='Montserrat-SB' className='text-lg'>
				{title}
			</UiTypography>
			<div className='flex flex-wrap gap-2 mt-4 md-low:w-auto w-full'>
				{copyItems.map(({ content, value }) => {
					return (
						<UiCopyButton
							className='md-low:w-auto w-full'
							copyValue={value}
							key={value}
							toastText=' Номер скопирован!'
						>
							{content}
						</UiCopyButton>
					)
				})}
			</div>
		</li>
	)
}

export { Item }
