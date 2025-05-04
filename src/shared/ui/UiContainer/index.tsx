import { cn } from '@/shared/lib/cn'
import { TDynamicTagProps } from '@/shared/types/shared'

const containerCls = 'w-full max-w-[1440px] px-5 mx-auto'

type TUiContainerProps = TDynamicTagProps
const UiContainer: TUiContainerProps = ({ tag: Tag, className, ...props }) => {
	//@ts-ignore
	return <Tag className={cn([containerCls, className])} {...props} />
}

export { UiContainer, type TUiContainerProps }
