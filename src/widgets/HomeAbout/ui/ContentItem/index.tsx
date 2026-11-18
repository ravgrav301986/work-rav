import { FC } from 'react'
import { TChildren, TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiTypography } from '@/shared/ui/UiTypography'
import Image from 'next/image'

interface Props extends TClassName, TChildren {
	icon?: string
	size?: number
}

const ContentItem: FC<Props> = ({
	className,
	children,
	icon = '/images/Home/vectors/About/verif-checkmark.png',
	size = 24,
}) => {
	return (
		<li className={cn('text-lg flex items-start gap-x-3', className)}>
			<Image
				src={icon}
				alt='Преимущество RAV:Coder'
				width={size}
				height={size}
				className='mt-0.5 shrink-0 object-contain'
			/>
			<UiTypography font='Montserrat-L'>{children}</UiTypography>
		</li>
	)
}

export { ContentItem }
