import { FC, InputHTMLAttributes } from 'react'
import { TTag } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	WrapperTag?: TTag
	wrapperClassName?: string
	contentClassName?: string
}

const UiInput: FC<Props> = ({
	WrapperTag = 'div',
	className,
	contentClassName,
	wrapperClassName,
	...props
}) => {
	return (
		<WrapperTag className={cn('', wrapperClassName)}>
			<div className={cn('', contentClassName)}>
				<input
					className={cn(
						'rounded-sm bg-secondary-background font-montserrat font-normal text-[15px] py-[7.5px] px-2.5',
						className
					)}
					{...props}
				/>
			</div>
		</WrapperTag>
	)
}

export { UiInput }
