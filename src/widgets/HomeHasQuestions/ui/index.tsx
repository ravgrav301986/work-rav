import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { UiContainer } from '@/shared/ui/UiContainer'
import { cn } from '@/shared/lib/cn'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { UiTypography } from '@/shared/ui/UiTypography'
import { Form } from './Form'

interface Props extends TClassName {}

const HomeHasQuestions: FC<Props> = ({ className }) => {
	return (
		<UiContainer tag='section' className={cn('', className)}>
			<div className='md-mid:py-10 py-7 md-mid:px-7 px-5 rounded-lg bg-primary-background'>
				<UiDecorationTitle className='md-mid:text-3xl text-2xl'>
					Остались вопросы?
				</UiDecorationTitle>
				<UiTypography font='Montserrat-R' className='mt-5 mb-7 text-[15px]'>
					Наш специалист подробно ответит на них
				</UiTypography>
				<Form />
			</div>
		</UiContainer>
	)
}

export { HomeHasQuestions }
