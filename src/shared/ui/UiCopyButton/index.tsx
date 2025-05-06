'use client'
import { FC } from 'react'
import { TChildren, TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { Check, Copy, X } from 'lucide-react'
import { toast } from 'react-toastify'

interface Props extends TClassName, TChildren {
	copyValue: string
	toastText: string
}

const UiCopyButton: FC<Props> = ({
	className,
	children,
	toastText,
	copyValue,
}) => {
	const notify = () =>
		toast(toastText, {
			className: '!p-3 !min-h-12',
			type: 'success',
			hideProgressBar: true,
			icon: <Check className='size-5' color='var(--color-primary)' />,
			closeButton: (
				<button className='absolute right-2 top-2'>
					<X className='size-5' color='var(--color-primary)' />
				</button>
			),
		})

	return (
		<button
			onClick={() => {
				notify()
				navigator.clipboard.writeText(copyValue)
			}}
			className={cn(
				'flex gap-x-3 items-center bg-secondary-background p-2 rounded-lg',
				className
			)}
		>
			<Copy />
			{children}
		</button>
	)
}

export { UiCopyButton }
