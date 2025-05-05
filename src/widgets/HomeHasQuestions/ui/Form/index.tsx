import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { UiInput } from '@/shared/ui/UiInput'
import { UiButton } from '@/shared/ui/UiButton'
import { UiTypography } from '@/shared/ui/UiTypography'
import { UiCheckbox } from '@/shared/ui/UiCheckbox'

interface Props extends TClassName {}

const Form: FC<Props> = ({ className }) => {
	return (
		<form className={cn('', className)}>
			<div className='flex gap-5 flex-wrap'>
				<UiInput
					wrapperClassName='md-mid:flex-initial flex-1'
					placeholder='Имя'
					className='md-mid:max-w-[240px] min-w-[240px] w-full '
				/>
				<UiInput
					wrapperClassName='md-mid:flex-initial flex-1'
					placeholder='Телефон'
					className='md-mid:max-w-[240px] min-w-[240px]  w-full'
				/>
				<UiButton
					type='submit'
					theme='fill'
					className='md-low:max-w-[200px] w-full text-center'
				>
					<UiTypography font='Montserrat-SB'>Отправить</UiTypography>
				</UiButton>
			</div>
			<UiCheckbox
				className='mt-4'
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
