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
				Мы — команда инженеров и разработчиков, специализирующихся{' '}
				<UiTypography font='Montserrat-M' tag='span'>
					на разработке ПО на заказ (C++, Python), программировании робототехники
					и создании современных веб-платформ.
				</UiTypography>
			</ContentItem>
			<ContentItem>
				Проектируем надёжные алгоритмы управления, системы компьютерного зрения
				и цифровые продукты, которые{' '}
				<UiTypography font='Montserrat-M' tag='span'>
					помогают бизнесу расти, сокращать издержки и опережать конкурентов.
				</UiTypography>
			</ContentItem>
			<ContentItem>
				Выполняем полный цикл работ:{' '}
				<UiTypography font='Montserrat-M' tag='span'>
					архитектура и ТЗ, UI/UX-дизайн, программирование, тестирование,
					SEO-оптимизация и дальнейшая поддержка.
				</UiTypography>
			</ContentItem>
			<ContentItem>
				Внедряем{' '}
				<UiTypography font='Montserrat-M' tag='span'>
					автоматизацию бизнеса с помощью ИИ и нейросетей
				</UiTypography>{' '}
				— создаём умных ассистентов, системы распознавания и инструменты
				интеллектуального анализа данных.
			</ContentItem>
			<ContentItem>
				Гарантируем{' '}
				<UiTypography font='Montserrat-M' tag='span'>
					индивидуальный инженерный подход
				</UiTypography>{' '}
				к каждой задаче, прозрачные сроки и{' '}
				<UiTypography font='Montserrat-M' tag='span'>
					реализацию проектов любой сложности на высоком уровне.
				</UiTypography>
			</ContentItem>
		</ul>
	)
}

export { Content }
