import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'

interface TUiSpinnerProps extends TClassName {}
const UiSpinner: FC<TUiSpinnerProps> = ({ className }) => {
	return (
		<div
			className={cn(
				'w-14 h-14 rounded-full animate-spin border-[7px] border-solid border-white border-t-transparent',
				className
			)}
		></div>
	)
}

export { UiSpinner, type TUiSpinnerProps }
