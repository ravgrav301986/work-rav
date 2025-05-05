'use client'
import { FC, forwardRef, ReactNode, InputHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'
import { UiTypography } from '../UiTypography'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	label?: ReactNode
	inpCls?: string
}
const UiCheckbox: FC<Props> = forwardRef<HTMLInputElement, Props>(
	({ className, label, inpCls, ...other }, ref) => {
		return (
			<label
				className={cn(
					'flex gap-x-1.5 items-center cursor-pointer has-[input:disabled]:cursor-not-allowed text-third-text has-[input:disabled]:text-plaque-primary-dark',
					className
				)}
			>
				<input
					type='checkbox'
					className={cn(
						'cursor-pointer bg-secondary-background appearance-none [-webkit-appearance:none] rounded min-w-[14px] size-[14px] flex items-center justify-center before:size-[calc(100%-3px)] before:block backg-checkmark before:duration-150 before:transition-transform before:origin-bottom-left before:[transform:scale(0)] checked:before:[transform:scale(1)]',
						inpCls
					)}
					{...other}
					ref={ref}
				/>
				{label && (
					<UiTypography font='Montserrat-R' className='text-xs'>
						{label}
					</UiTypography>
				)}
			</label>
		)
	}
)

export { UiCheckbox }
