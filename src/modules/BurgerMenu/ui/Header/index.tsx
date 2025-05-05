'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/shared/types/shared'
import { UiLogo } from '@/shared/ui/UiLogo'
import { cn } from '@/shared/lib/cn'
import { UiButton } from '@/shared/ui/UiButton'
import { CloseIcon } from '@/shared/icons/CloseIcon'

interface Props extends TClassName {
	handleClose: MouseEventHandler
}

const Header: FC<Props> = ({ className, handleClose }) => {
	const handleItemClick = () => {}

	return (
		<div className={cn('flex justify-between', className)}>
			<UiLogo onClick={handleItemClick} />
			<UiButton onClick={handleClose} className='sticky top-0 right-0'>
				<CloseIcon color='var(--color-primary)' />
			</UiButton>
		</div>
	)
}

export { Header }
