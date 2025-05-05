import { cn } from '@/shared/lib/cn'
import { FC, ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: 'ghost' | 'fill' | 'fill-invert' | 'outlined'
}

const UiButton: FC<Props> = ({
	className,
	children,
	type = 'button',
	theme = 'ghost',
	...props
}) => {
	return (
		<button
			{...props}
			className={cn(
				'duration-150',
				{
					['py-2.5 px-4 rounded-sm text-[15px]']: theme !== 'ghost',
					['bg-primary text-secondary-text hover:bg-primaryH active:bg-primaryA']:
						theme === 'fill',
					['border border-solid border-black']: theme === 'outlined',
					['bg-primary-invert text-primary-text-accent hover:opacity-70 active:opacity-90']:
						theme === 'fill-invert',
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export { UiButton }
