
import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import { ContentItem } from '../ContentItem'
import { UiTypography } from '@/shared/ui/UiTypography'

interface Props extends TClassName {}

const Content: FC<Props> = ({ className }) => {
	return (
		<ul className={cn('flex flex-col gap-y-5', className)}>
			<ContentItem icon='/images/Home/vectors/Services/web-dev.svg' size={26}>
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
			<ContentItem icon='/images/dog.png' size={34}>
				Берём на себя самые нестандартные задачи —{' '}
				<UiTypography font='Montserrat-M' tag='span'>
					от управления реальными роботами до запуска высоконагруженных
					ИИ-сервисов,
				</UiTypography>{' '}
				доводя каждый проект до измеримого результата.
			</ContentItem>
		</ul>
	)
}

export { Content }
