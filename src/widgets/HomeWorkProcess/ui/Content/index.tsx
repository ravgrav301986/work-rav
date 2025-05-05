'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import Image from 'next/image'
import { UiTypography } from '@/shared/ui/UiTypography'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { ARROWS_CONFIG } from '../../config/arrows'

interface Props extends TClassName {}

const Content: FC<Props> = ({ className }) => {
	return (
		<ArcherContainer
			strokeColor='#333'
			strokeWidth={2}
			lineStyle='angle'
			noCurves={true}
			endShape={{ arrow: { arrowLength: 0 } }}
		>
			<ul className={cn('flex justify-between', className)}>
				<li className='max-w-[200px]'>
					<ArcherElement
						id={ARROWS_CONFIG.discussion.id}
						relations={[
							{
								targetId: ARROWS_CONFIG.discussion.targetId,
								sourceAnchor: 'right',
								targetAnchor: 'left',
								style: {
									strokeDasharray: '12,6',
									strokeColor: 'var(--color-primary)',
								},
							},
						]}
					>
						<Image
							src='/images/Home/vectors/WorkProcess/discussion.svg'
							alt='Иконка для "Обсуждение
						задачи"'
							width={82}
							height={82}
						/>
					</ArcherElement>
					<div className='flex flex-col gap-y-2.5 mt-5'>
						<UiTypography font='Montserrat-B' tag='h2'>
							Обсуждение задачи
						</UiTypography>
						<UiTypography font='Montserrat-L'>
							Изучаем ваш проект, уточняем цели и детали.
						</UiTypography>
					</div>
				</li>

				<li className='mt-28 max-w-[225px]'>
					<ArcherElement
						id={ARROWS_CONFIG.preparingTk.id}
						relations={[
							{
								targetId: ARROWS_CONFIG.preparingTk.targetId,
								sourceAnchor: 'right',
								targetAnchor: 'left',
								style: {
									strokeDasharray: '12,6',
									strokeColor: 'var(--color-primary)',
								},
							},
						]}
					>
						<Image
							src='/images/Home/vectors/WorkProcess/preparation-tk.svg'
							alt='Иконка для "Подготовка ТЗ"'
							width={82}
							height={82}
						/>
					</ArcherElement>
					<div className='flex flex-col gap-y-2.5 mt-5'>
						<UiTypography font='Montserrat-B' tag='h2'>
							Подготовка ТЗ
						</UiTypography>
						<UiTypography font='Montserrat-L'>
							Формируем план работы и согласовываем его с вами.
						</UiTypography>
					</div>
				</li>

				<li className='max-w-[250px]'>
					<ArcherElement
						id={ARROWS_CONFIG.development.id}
						relations={[
							{
								targetId: ARROWS_CONFIG.development.targetId,
								sourceAnchor: 'right',
								targetAnchor: 'left',
								style: {
									strokeDasharray: '12,6',
									strokeColor: 'var(--color-primary)',
								},
							},
						]}
					>
						<Image
							src='/images/Home/vectors/WorkProcess/development.svg'
							alt='Иконка для "Разработка и тестирование"'
							width={82}
							height={82}
							id='home-work-process--development'
						/>
					</ArcherElement>
					<div className='flex flex-col gap-y-2.5 mt-5'>
						<UiTypography font='Montserrat-B' tag='h2'>
							Разработка и тестирование
						</UiTypography>
						<UiTypography font='Montserrat-L'>
							Создаем дизайн, программируем и показываем результаты на каждом
							этапе.
						</UiTypography>
					</div>
				</li>

				<li className='mt-7 max-w-[250px]'>
					<ArcherElement id={ARROWS_CONFIG.runSupport.id}>
						<Image
							src='/images/Home/vectors/WorkProcess/run-support.svg'
							alt='Иконка для "Запуск и поддержка"'
							width={82}
							height={82}
							id='home-work-process--run-support'
						/>
					</ArcherElement>
					<div className='flex flex-col gap-y-2.5 mt-5'>
						<UiTypography font='Montserrat-B' tag='h2'>
							Запуск и поддержка
						</UiTypography>
						<UiTypography font='Montserrat-L'>
							Проверяем проект и запускаем его в работу.
						</UiTypography>
					</div>
				</li>
			</ul>
		</ArcherContainer>
	)
}

export { Content }
