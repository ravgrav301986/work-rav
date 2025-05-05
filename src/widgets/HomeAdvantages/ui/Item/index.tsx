import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiTypography } from '@/shared/ui/UiTypography'
import Image from 'next/image'
import { TAdvantage } from '../../types/Advantage'
import { title } from 'process'

interface Props extends TClassName, TAdvantage {}

const Item: FC<Props> = ({ description, icon, title, className }) => {
	return (
		<li
			className={cn(
				'p-5 flex items-center gap-x-2.5 rounded-lg bg-primary-background',
				className
			)}
		>
			<Image
				src={icon}
				alt={`Иконка для "${title}"`}
				width={60}
				height={60}
				className='md-mid:size-[60px] size-[45px]'
			/>
			<div className='flex flex-col gap-y-1.5 text-[15px]'>
				<UiTypography font='Montserrat-B' tag='h2'>
					{title}
				</UiTypography>
				<UiTypography font='Montserrat-L' tag='h2'>
					{description}
				</UiTypography>
			</div>
		</li>
	)
}

export { Item }
