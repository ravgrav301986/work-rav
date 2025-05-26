import { FC } from 'react'
import { TClassName, TTag } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { TServiceItem } from '../types/Service'
import Image from 'next/image'
import { UiTypography } from '@/shared/ui/UiTypography'
import { UiButton } from '@/shared/ui/UiButton'
import { formatPrice } from '@/shared/lib/formatPrice'
import { UiGradientBorder } from '@/shared/ui/UiGradientBorder'

interface Props extends TClassName, TServiceItem {
	Tag?: TTag
}

const HomeServiceItem: FC<Props> = ({
	className,
	Tag = 'div',
	description,
	fromPrice,
	icon,
	id,
	title,
}) => {
	return (
		<Tag
			className={cn(
				'p-[1px] rounded-lg bg-[linear-gradient(-135deg,transparent_0%,#A1AEBF_50%,transparent_100%)] overflow-hidden flex',
				className
			)}
		>
			<div className='p-5 bg-primary-background rounded-[inherit] flex flex-col'>
				<Image
					src={icon}
					alt={`Иконка для "${title}"`}
					width={48}
					height={48}
				/>
				<UiTypography font='Montserrat-M' className='text-lg my-3'>
					{title}
				</UiTypography>
				<UiTypography font='Montserrat-R' className='text-sm mt-auto'>
					{description}
				</UiTypography>
				<UiTypography
					font='Montserrat-B'
					className='text-xl main-text-gradient mt-3 mb-5'
				>
					{fromPrice === 'hours'
						? 'Часовая оплата'
						: `от ${formatPrice(fromPrice)} ₽  / за час`}
				</UiTypography>
				<UiGradientBorder className='w-max rounded-lg'>
					<UiButton theme='outlined' className='uppercase w-max border-none'>
						<UiTypography font='Montserrat-R' className='main-text-gradient'>
							<a href="https://t.me/Ravcoder">Подробнее</a>
						</UiTypography>
					</UiButton>
				</UiGradientBorder>
			</div>
		</Tag>
	)
}

export { HomeServiceItem }
