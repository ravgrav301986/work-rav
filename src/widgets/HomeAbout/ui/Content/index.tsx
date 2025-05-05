import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { ContentItem } from '../ContentItem'
import { UiTypography } from '@/shared/ui/UiTypography'

interface Props extends TClassName {}

const Content: FC<Props> = ({ className }) => {
	return (
		<ul className={cn('flex flex-col gap-y-5', className)}>
			<ContentItem>
				Наша команда профессионалов, специализирующихся{' '}
				<UiTypography font='Montserrat-M' tag='span'>
					на разработке современных веб-сайтов и мобильных приложений.
				</UiTypography>
			</ContentItem>
			<ContentItem>
				Мы создаем цифровые продукты, которые помогают бизнесу расти,
				обеспечивая{' '}
				<UiTypography font='Montserrat-M' tag='span'>
					удобство, функциональность и стильный дизайн.
				</UiTypography>
			</ContentItem>
			<ContentItem>
				Наши услуги включают:{' '}
				<UiTypography font='Montserrat-M' tag='span'>
					проектирование пользовательских интерфейсов, программирование,
					оптимизацию и сопровождение проектов.
				</UiTypography>
			</ContentItem>
			<ContentItem>
				Мы нацелены на
				<UiTypography font='Montserrat-M' tag='span'>
					{' '}
					индивидуальный подход
				</UiTypography>{' '}
				к каждому клиенту и
				<UiTypography font='Montserrat-M' tag='span'>
					{' '}
					реализацию идей на высоком уровне.
				</UiTypography>
			</ContentItem>
		</ul>
	)
}

export { Content }
