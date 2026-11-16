'use client'

import { FC } from 'react'
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
		<div className={cn('flex items-center gap-4 flex-wrap', className)}>
			<a
				href={`mailto:${email}`}
				className='px-5 py-3.5 rounded-lg bg-[#1E242D] border border-[#A1AEBF]/30 text-white hover:border-blue-400 transition-colors'
			>
				<UiTypography font='Montserrat-M' className='text-base'>
					{email}
				</UiTypography>
			</a>

			<UiButton
				type='button'
				theme='fill'
				onClick={handleCopy}
				className='md-low:max-w-[220px] w-full text-center'
			>
				<UiTypography font='Montserrat-SB'>Скопировать почту</UiTypography>
			</UiButton>
		</div>
	)
}

export { Form }
