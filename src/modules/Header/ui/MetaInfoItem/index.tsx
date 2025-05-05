import { FC, ReactNode } from 'react'
import { TChildren, TClassName, TTag } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiTypography } from '@/shared/ui/UiTypography'

interface Props extends TClassName, TChildren {
	icon: ReactNode
	Tag?: TTag
}

const MetaInfoItem: FC<Props> = ({
	Tag = 'div',
	className,
	icon,
	children,
}) => {
	return (
		<Tag className={cn('flex gap-x-2 items-center', className)}>
			{icon}
			<UiTypography
				font='Montserrat-SB'
				className='text-xs flex flex-col gap-y-1'
			>
				{children}
			</UiTypography>
		</Tag>
	)
}

export { MetaInfoItem }
