'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { cn } from '@/shared/lib/cn'
import Image from 'next/image'
import { UiTypography } from '@/shared/ui/UiTypography'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { ARROWS_CONFIG } from '../../config/arrows'
import { useScreen } from '@/shared/hooks'
import { LG_BIG, MD_LOW } from '@/shared/constants/breakpoints'
import { IconDecorBorder } from '../IconDecorBorder'

const itemContentCls = 'flex flex-col gap-y-2.5 mt-5'
const itemIconCls = 'lg-big:mx-0 md-low:mx-auto'
const itemIconWrapperCls = 'relative inline-flex'

interface Props extends TClassName {}

const Content: FC<Props> = ({ className }) => {
	const { screenWidth } = useScreen()

	return (
		<ArcherContainer
			strokeColor='#333'
			strokeWidth={2}
			lineStyle='angle'
			noCurves={true}
			endShape={{ arrow: { arrowLength: 0 } }}
		>
			<ul
				className={cn(
					'lg-big:flex lg-big:justify-between lg-big:text-start md-low:text-center grid md-low:grid-cols-2 md-low:pl-0 pl-16 md-low:gap-y-0 gap-y-5 relative',
					className
				)}
			>
				{screenWidth < MD_LOW ? (
					<li className='absolute left-0 top-[4.4%] h-[79.5%]'>
						<Image
							src='/images/Home/illustrations/WorkProcess/mobile-binds.png'
							alt='Очередность'
							width={55}
							height={695}
							className='h-full w-auto'
						/>
					</li>
				) : null}
				<li className='lg-big:max-w-[200px]'>
					<ArcherElement
						id={ARROWS_CONFIG.discussion.id}
						relations={
							screenWidth >= MD_LOW
								? [
										{
											targetId: ARROWS_CONFIG.discussion.targetId,
											sourceAnchor: 'right',
											targetAnchor: 'left',
											style: {
												strokeDasharray: '12,6',
												strokeColor: 'var(--color-primary)',
											},
										},
								  ]
								: undefined
						}
					>
						<div className={itemIconWrapperCls}>
							<IconDecorBorder hide={screenWidth >= MD_LOW}>
								<Image
									src='/images/Home/vectors/WorkProcess/discussion.svg'
									alt='Иконка для "Обсуждение
							задачи"'
									width={82}
									height={82}
									className={itemIconCls}
								/>
							</IconDecorBorder>
						</div>
					</ArcherElement>
					<div className={itemContentCls}>
						<UiTypography font='Montserrat-B' tag='h2'>
							Обсуждение задачи
						</UiTypography>
						<UiTypography font='Montserrat-L'>
							Изучаем ваш проект, уточняем цели и детали.
						</UiTypography>
					</div>
				</li>

				<li className='lg-big:mt-28 lg-big:max-w-[225px]'>
					<ArcherElement
						id={ARROWS_CONFIG.preparingTk.id}
						relations={
							screenWidth >= MD_LOW
								? [
										{
											targetId: ARROWS_CONFIG.preparingTk.targetId,
											sourceAnchor: 'right',
											targetAnchor: screenWidth >= LG_BIG ? 'left' : 'right',
											style: {
												strokeDasharray: '12,6',
												strokeColor: 'var(--color-primary)',
											},
										},
								  ]
								: undefined
						}
					>
						<div className={itemIconWrapperCls}>
							<IconDecorBorder hide={screenWidth >= MD_LOW}>
								<Image
									src='/images/Home/vectors/WorkProcess/preparation-tk.svg'
									alt='Иконка для "Подготовка ТЗ"'
									width={82}
									height={82}
									className={itemIconCls}
								/>
							</IconDecorBorder>
						</div>
					</ArcherElement>
					<div className={itemContentCls}>
						<UiTypography font='Montserrat-B' tag='h2'>
							Подготовка ТЗ
						</UiTypography>
						<UiTypography font='Montserrat-L'>
							Формируем план работы и согласовываем его с вами.
						</UiTypography>
					</div>
				</li>

				<li className='lg-big:max-w-[250px] lg-big:order-[0] md-low:order-last'>
					<ArcherElement
						id={ARROWS_CONFIG.development.id}
						relations={
							screenWidth >= MD_LOW
								? [
										{
											targetId: ARROWS_CONFIG.development.targetId,
											sourceAnchor: screenWidth >= LG_BIG ? 'right' : 'left',
											targetAnchor: screenWidth >= LG_BIG ? 'left' : 'right',
											style: {
												strokeDasharray: '12,6',
												strokeColor: 'var(--color-primary)',
											},
										},
								  ]
								: undefined
						}
					>
						<div className={itemIconWrapperCls}>
							<IconDecorBorder hide={screenWidth >= MD_LOW}>
								<Image
									src='/images/Home/vectors/WorkProcess/development.svg'
									alt='Иконка для "Разработка и тестирование"'
									width={82}
									height={82}
									className={itemIconCls}
								/>
							</IconDecorBorder>
						</div>
					</ArcherElement>
					<div className={itemContentCls}>
						<UiTypography font='Montserrat-B' tag='h2'>
							Разработка и тестирование
						</UiTypography>
						<UiTypography font='Montserrat-L'>
							Создаем дизайн, программируем и показываем результаты на каждом
							этапе.
						</UiTypography>
					</div>
				</li>

				<li className='lg-big:mt-7 lg-big:max-w-[250px]'>
					<ArcherElement id={ARROWS_CONFIG.runSupport.id}>
						<div className={itemIconWrapperCls}>
							<IconDecorBorder hide={screenWidth >= MD_LOW}>
								<Image
									src='/images/Home/vectors/WorkProcess/run-support.svg'
									alt='Иконка для "Запуск и поддержка"'
									width={82}
									height={82}
									className={itemIconCls}
								/>
							</IconDecorBorder>
						</div>
					</ArcherElement>
					<div className={itemContentCls}>
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
