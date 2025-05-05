import { FC } from 'react'
import { TChildren } from '@/shared/types/shared'
import Image from 'next/image'

interface Props extends TChildren {
	hide?: boolean
}

const IconDecorBorder: FC<Props> = ({ children, hide }) => {
	return (
		<>
			{!hide ? (
				<>
					<Image
						alt='Декорация'
						width={27}
						height={27}
						src='/images/Home/vectors/WorkProcess/icon-decor.svg'
						className='size-[27px] absolute left-0 bottom-0 rotate-180'
					/>
					<Image
						alt='Декорация'
						width={27}
						height={27}
						src='/images/Home/vectors/WorkProcess/icon-decor.svg'
						className='size-[27px] absolute left-0 top-0 -rotate-90'
					/>
					<Image
						alt='Декорация'
						width={27}
						height={27}
						src='/images/Home/vectors/WorkProcess/icon-decor.svg'
						className='size-[27px] absolute right-0 bottom-0 rotate-90'
					/>
					<Image
						alt='Декорация'
						width={27}
						height={27}
						src='/images/Home/vectors/WorkProcess/icon-decor.svg'
						className='size-[27px] absolute right-0 top-0'
					/>
				</>
			) : null}
			{children}
		</>
	)
}

export { IconDecorBorder }
