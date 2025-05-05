import { FC } from 'react'
import { TChildren, TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiTypography } from '@/shared/ui/UiTypography'
import Image from 'next/image'

interface Props extends TClassName, TChildren {}

const ContentItem: FC<Props> = ({ className, children }) => {
	return (
		<li className={cn('text-lg flex items-start gap-x-2.5', className)}>
			<Image
				src='/images/Home/vectors/About/verif-checkmark.png'
				alt='Почему мы?'
				width={20}
				height={20}
			/>
			<UiTypography font='Montserrat-L'>{children}</UiTypography>
		</li>
	)
}

export { ContentItem }
