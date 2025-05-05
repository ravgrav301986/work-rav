import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiButton } from '@/shared/ui/UiButton'
import { UiTypography } from '@/shared/ui/UiTypography'

interface Props extends TClassName {}

const Info: FC<Props> = ({ className }) => {
	return (
		<div className={cn('flex flex-col md-mid:items-end gap-y-4', className)}>
			<UiButton theme='fill' className='w-max'>
				<UiTypography font='Montserrat-SB'>Оставить заявку</UiTypography>
			</UiButton>
			<UiTypography font='Montserrat-L' className='lg-big:text-[15px] text-xs'>
				info@rav-coder.ru
			</UiTypography>
		</div>
	)
}

export { Info }
