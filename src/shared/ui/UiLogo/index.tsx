import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/shared/types/shared'
import Link from 'next/link'
import { ROUTES } from '@/shared/constants/routes'
import { cn } from '@/shared/lib/cn'
import Image from 'next/image'

interface Props extends TClassName {
	onClick?: MouseEventHandler
}

const UiLogo: FC<Props> = ({ className, onClick }) => {
	return (
		<Link
			onClick={onClick}
			href={ROUTES.home.INDEX}
			className={cn(
				'lg-big:w-[143px] xs-big:w-[100px] w-[82px] aspect-[143/50] block',
				className
			)}
		>
			<Image
				src='/images/shared/main-logo.svg'
				alt='rav'
				width={143}
				height={50}
				className='size-full'
			/>
		</Link>
	)
}

export { UiLogo }
