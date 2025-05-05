import { FC } from 'react'
import { TUiTypographyProps, UiTypography } from '../UiTypography'
import { TTag } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'

type TUiDecorationTitleProps = Omit<
	TUiTypographyProps<{ WrapperTag?: TTag }>,
	'font'
>

const UiDecorationTitle: FC<TUiDecorationTitleProps> = ({
	children,
	className,
	WrapperTag = 'div',
	...props
}) => {
	return (
		<div
			className={cn(
				'relative after:mt-5 after:w-full after:block after:h-0.5 after:bg-[linear-gradient(90deg,#C0C0C0,transparent)] text-3xl',
				className
			)}
		>
			{/* @ts-ignore */}
			<UiTypography font='Montserrat-B' {...props}>
				<span className='text-primary-text-accent'>// </span>
				{children}
			</UiTypography>
		</div>
	)
}

export { UiDecorationTitle, type TUiDecorationTitleProps }
