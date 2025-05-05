import { cn } from '@/shared/lib/cn'
import { TDynamicTagProps } from '@/shared/types/shared'

type TUiContainerProps = TDynamicTagProps
const UiContainer: TUiContainerProps = ({
	tag: Tag = 'div',
	className,
	...props
}) => {
	return (
		//@ts-ignore
		<Tag
			className={cn('w-full max-w-[1440px] px-5 mx-auto', className)}
			{...props}
		/>
	)
}

export { UiContainer, type TUiContainerProps }
