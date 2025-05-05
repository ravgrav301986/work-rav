import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiButton } from '@/shared/ui/UiButton'
import { UiTypography } from '@/shared/ui/UiTypography'
import Image from 'next/image'

interface Props extends TClassName {}

const Actions: FC<Props> = ({ className }) => {
	return (
		<div className={cn('flex flex-col gap-y-2.5 max-w-[145px]', className)}>
			<UiButton
				theme='outlined'
				className='flex gap-x-2.5 py-2 items-center text-xs'
			>
				<Image
					src='/images/shared/social/telegram-gradient.svg'
					alt='telegram'
					width={15}
					height={14}
				/>
				<UiTypography font='Montserrat-M'>Консультация</UiTypography>
			</UiButton>
			<UiButton theme='fill' className='uppercase text-[11px] py-2'>
				<UiTypography font='Montserrat-M'>Оставить заявку</UiTypography>
			</UiButton>
		</div>
	)
}

export { Actions }
