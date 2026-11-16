'use client'

import { FC, FormEvent, useState } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiInput } from '@/shared/ui/UiInput'
import { UiButton } from '@/shared/ui/UiButton'
import { UiTypography } from '@/shared/ui/UiTypography'
import { UiCheckbox } from '@/shared/ui/UiCheckbox'
import { toast } from 'react-toastify'

interface Props extends TClassName {}

const Form: FC<Props> = ({ className }) => {
	const [name, setName] = useState('')
	const [contact, setContact] = useState('')
	const [agreed, setAgreed] = useState(true)
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!name.trim() || !contact.trim()) {
			toast.error('Пожалуйста, заполните имя и контакт для связи')
			return
		}

		if (!agreed) {
			toast.error('Необходимо согласие на обработку персональных данных')
			return
		}

		setIsLoading(true)

		try {
			const response = await fetch('https://web3forms.com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					access_key: 'ВСТАВЬТЕ_СЮДА_ВАШ_КЛЮЧ_ИЗ_ПИСЬМА',
					subject: 'Новая заявка с сайта RAV:Coder',
					from_name: 'Сайт ravcoder.ru',
					Имя: name,
					Контакт: contact,
				}),
			})

			const result = await response.json()

			if (result.success) {
				toast.success('Заявка отправлена! Мы скоро свяжемся с вами.')
				setName('')
				setContact('')
			} else {
				toast.error('Не удалось отправить заявку. Попробуйте позже.')
			}
		} catch {
			toast.error('Ошибка сети. Проверьте подключение к интернету.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit} className={cn('', className)}>
			<div className='flex gap-5 flex-wrap'>
				<UiInput
					wrapperClassName='md-mid:flex-initial flex-1'
					placeholder='Имя'
					value={name}
					onChange={(e: any) => setName(e.target.value)}
					className='md-mid:max-w-[240px] min-w-[240px] w-full'
				/>
				<UiInput
					wrapperClassName='md-mid:flex-initial flex-1'
					placeholder='Телефон, Email или Telegram'
					value={contact}
					onChange={(e: any) => setContact(e.target.value)}
					className='md-mid:max-w-[240px] min-w-[240px] w-full'
				/>
				<UiButton
					type='submit'
					theme='fill'
					disabled={isLoading}
					className='md-low:max-w-[200px] w-full text-center'
				>
					<UiTypography font='Montserrat-SB'>
						{isLoading ? 'Отправка...' : 'Отправить'}
					</UiTypography>
				</UiButton>
			</div>
			<UiCheckbox
				className='mt-4'
				checked={agreed}
				onChange={(e: any) => setAgreed(e.target.checked)}
				label={
					<>
						Нажимая на кнопку "Отправить", я даю{' '}
						<span className='underline decoration-third-text underline-offset-2'>
							согласие на обработку персональных данных
						</span>
					</>
				}
			/>
		</form>
	)
}

export { Form }
