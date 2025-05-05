import { FC } from 'react'
import { TChildren, TClassName, TTag } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'

interface TUiGradientBorderProps extends TClassName, TChildren {
	Tag?: TTag
}

const UiGradientBorder: FC<TUiGradientBorderProps> = ({
	Tag = 'div',
	children,
	className,
}) => {
	return (
		<Tag
			className={cn('border-solid border-transparent p-[2px]', className)}
			style={{
				boxShadow: `
				0 0 0 1px inset #339eea,
				0 0 0 1.5px inset #33b7a1,
				0 0 0 1px inset #336aea
            `,
			}}
		>
			{children}
		</Tag>
	)
}

export { UiGradientBorder, type TUiGradientBorderProps }
