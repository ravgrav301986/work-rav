import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { UiContainer } from '@/shared/ui/UiContainer'
import { cn } from '@/shared/lib/cn'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { UiTypography } from '@/shared/ui/UiTypography'
import { Content } from './Content'

interface Props extends TClassName {}

const HomeWorkProcess: FC<Props> = ({ className }) => {
	return (
		<UiContainer tag='section' className={cn('', className)}>
			<div className='md-mid:py-10 py-7 md-mid:px-7 px-5 rounded-lg bg-primary-background'>
				<UiDecorationTitle className='md-mid:text-3xl text-2xl'>
					Процесс работы (Workflow)
				</UiDecorationTitle>
				<UiTypography font='Montserrat-R' className='mt-5 mb-9 text-[15px]'>
					Мы разрабатываем сайты на HTML, CSS и JavaScript.
					<br className='md-mid:block hidden' /> HTML отвечает за структуру и
					содержимое страницы, CSS - за внешний вид и стиль, а JavaScript - за
					интерактивность и динамическое поведение сайта.
				</UiTypography>
				<Content />
			</div>
		</UiContainer>
	)
}

export { HomeWorkProcess }
