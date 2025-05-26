import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiButton } from '@/shared/ui/UiButton'
import { UiTypography } from '@/shared/ui/UiTypography'
import { EMAIL } from '@/shared/constants/main-info'

interface Props extends TClassName {}

const Info: FC<Props> = ({ className }) => {
	return (
		<div className={cn('flex flex-col md-mid:items-end gap-y-4', className)}>
			<UiButton theme='fill' className='w-max'>
				<UiTypography font='Montserrat-SB'><a href="https://t.me/Ravcoderbot_bot">Оставить заявку</a></UiTypography>
			</UiButton>
			<UiTypography font='Montserrat-L' className='lg-big:text-[15px] text-xs'>
				{EMAIL}
			</UiTypography>
		</div>
	)
}

export { Info }
