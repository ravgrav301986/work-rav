import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { MainNavigation } from '@/segments/MainNavigation'

interface Props extends TClassName {
	handleClose: MouseEventHandler
}

const Content: FC<Props> = ({ className, handleClose }) => {
	return (
		<MainNavigation
			handleItemClick={handleClose}
			className={cn('flex-col gap-y-4', className)}
		/>
	)
}

export { Content }
