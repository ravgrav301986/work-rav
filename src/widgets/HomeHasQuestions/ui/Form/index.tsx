'use client'

import { FC } from 'react'
import Link from 'next/link'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiButton } from '@/shared/ui/UiButton'
import { UiTypography } from '@/shared/ui/UiTypography'
import { toast } from 'react-toastify'

interface Props extends TClassName {}

const Form: FC<Props> = ({ className }) => {
	const email = 'ravcoder@yandex.ru'

	const handleCopy = () => {
		navigator.clipboard.writeText(email)
		toast.success('Почта ravcoder@yandex.ru скопирована!')
	}

	return (
		<div
			className={cn(
				'grid grid-cols-1 md-low:grid-cols-3 gap-4 w-full max-w-[740px]',
				className
			)}
		>
			<a
				href={`mailto:${email}`}
				className='h-[52px] px-4 rounded-lg bg-[#1E242D] border border-[#A1AEBF]/30 text-white hover:border-blue-400 transition-colors flex items-center justify-center text-center'
			>
				<UiTypography font='Montserrat-M' className='text-[15px]'>
					{email}
				</UiTypography>
			</a>

			<UiButton
				type='button'
				theme='fill'
				onClick={handleCopy}
				className='!h-[52px] !w-full !max-w-none flex items-center justify-center text-center'
			>
				<UiTypography font='Montserrat-SB' className='text-[15px]'>
					Скопировать почту
				</UiTypography>
			</UiButton>

			<Link
				href='/contacts'
				className='h-[52px] px-4 rounded-lg bg-[#1E242D] border border-sky-400/35 hover:border-cyan-400 transition-colors flex items-center justify-center text-center'
			>
				<UiTypography font='Montserrat-SB' className='text-[15px] main-text-gradient'>
					Условия работы 
				</UiTypography>
			</Link>
		</div>
	)
}

export { Form }


