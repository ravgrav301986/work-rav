import { FC } from 'react'
import { TClassName } from '@/shared/types/shared'
import { UiContainer } from '@/shared/ui/UiContainer'
import { cn } from '@/shared/lib/cn'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { UiTypography } from '@/shared/ui/UiTypography'
import { UiButton } from '@/shared/ui/UiButton'
import { EMAIL } from '@/shared/constants/main-info'
import { Item } from './Item'

const copyTextCls = 'xs-big:w-[200px] flex-1 text-center text-[15px] text-primary-text'

const GUARANTEES = [
	{
		code: 'МОСКВА И РФ',
		title: 'Личные встречи и онлайн',
		desc: 'Приедем в ваш офис или на объект в Москве после первичного обсуждения задачи, а с регионами работаем по видеосвязи.',
	},
	{
		code: 'БЕЗОПАСНОСТЬ',
		title: 'Защита проекта и данных бизнеса',
		desc: 'Не выкладываем ваш проект в открытый доступ. Все документы о неразглашении оформляем через юристов и нотариуса только с вашего разрешения.',
	},
	{
		code: '100% ПРАВ',
		title: 'Весь код принадлежит вам',
		desc: 'По завершении работ передаём все исходные файлы, доступы и понятную документацию.',
	},
	{
		code: 'ЭТАПЫ',
		title: 'Поэтапная оплата',
		desc: 'Делим проект на понятные шаги по 1–2 недели и показываем готовый результат на каждом этапе.',
	},
]

interface Props extends TClassName {}

const HomContacts: FC<Props> = ({ className }) => {
	return (
		<UiContainer tag='section' className={cn('text-primary-text', className)}>
			<div className='md-mid:py-10 py-7 md-mid:px-8 px-5 rounded-lg bg-primary-background border border-sky-400/15'>
				{/* Шапка секции с живым индикатором онлайн-статуса */}
				<div className='flex flex-wrap items-center justify-between gap-4'>
					<UiDecorationTitle className='md-mid:text-3xl text-2xl'>
						Контакты
					</UiDecorationTitle>

					<div className='inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary-background/80 border border-sky-400/35 text-xs font-medium'>
						<span className='relative flex h-2.5 w-2.5'>
							<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75' />
							<span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400' />
						</span>
						<span className='main-text-gradient font-semibold'>
							На связи • 10:00–20:00 МСК
						</span>
					</div>
				</div>

				{/* Основная двухколоночная сетка */}
				<div className='grid lg-mid:grid-cols-12 grid-cols-1 gap-8 mt-6 items-start'>
					{/* Левая колонка: Почта и Telegram */}
					<div className='lg-mid:col-span-7 flex flex-col gap-y-5'>
						<UiTypography
							font='Montserrat-R'
							className='text-[15px] text-primary-text/90 leading-relaxed'
						>
							Работаем с действующим бизнесом и стартапами по Москве и всей
							России: сначала проводим короткий онлайн-разбор вашей задачи, а{' '}
							<span className='main-text-gradient font-semibold'>
								по Москве организуем выезд специалиста в ваш офис или на объект
							</span>{' '}
							для детального обсуждения и запуска.
						</UiTypography>

						<ul className='flex flex-col gap-y-5'>
							<Item
								title='Почта для задач и документов'
								copyItems={[
									{
										content: (
											<UiTypography font='Montserrat-M' className={copyTextCls}>
												{EMAIL}
											</UiTypography>
										),
										value: EMAIL,
									},
								]}
							/>
						</ul>

						{/* Карточка быстрого диалога в Telegram */}
						<div className='p-5 rounded-lg bg-secondary-background/60 border border-sky-400/25 flex flex-wrap items-center justify-between gap-4'>
							<div>
								<UiTypography font='Montserrat-SB' className='text-base text-primary-text mb-1'>
									Прямой чат в{' '}
									<span className='main-text-gradient'>Telegram</span>
								</UiTypography>
								<UiTypography font='Montserrat-R' className='text-xs text-primary-text/80'>
									Отвечаем за 15–30 минут • Написать можно круглосуточно
								</UiTypography>
							</div>
							<UiButton theme='fill' className='uppercase xs-big:w-auto w-full text-center'>
								<UiTypography font='Montserrat-SB'>
									<a
										href='https://t.me'
										target='_blank'
										rel='noopener noreferrer'
									>
										Написать в Telegram
									</a>
								</UiTypography>
							</UiButton>
						</div>
					</div>

					{/* Правая колонка: Простой чек-лист первого сообщения */}
					<div className='lg-mid:col-span-5 p-6 rounded-lg bg-secondary-background/50 border border-sky-400/20'>
						<UiTypography font='Montserrat-SB' className='text-base text-primary-text mb-2'>
							Как узнать сроки и стоимость{' '}
							<span className='main-text-gradient'>за 2 часа?</span>
						</UiTypography>
						<UiTypography
							font='Montserrat-R'
							className='text-xs text-primary-text/80 mb-4 leading-relaxed'
						>
							Просто напишите нам в Telegram или на почту 3 простых пункта:
						</UiTypography>
						<ul className='flex flex-col gap-y-3.5 text-sm'>
							<li className='flex items-start gap-2.5'>
								<span className='main-text-gradient font-bold'>01.</span>
								<span className='text-primary-text/95'>
									Что нужно сделать (робот, умная система, ИИ-помощник, сайт или
									стартап с нуля).
								</span>
							</li>
							<li className='flex items-start gap-2.5'>
								<span className='main-text-gradient font-bold'>02.</span>
								<span className='text-primary-text/95'>
									Когда хотите запуститься и на какой примерный бюджет рассчитываете.
								</span>
							</li>
							<li className='flex items-start gap-2.5'>
								<span className='main-text-gradient font-bold'>03.</span>
								<span className='text-primary-text/95'>
									Примеры похожих решений, описание задачи или ваш город.
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Нижняя полоса преимуществ и гарантий */}
				<div className='grid lg-mid:grid-cols-4 md-mid:grid-cols-2 grid-cols-1 gap-4 mt-8 pt-7 border-t border-sky-400/15'>
					{GUARANTEES.map(item => (
						<div
							key={item.code}
							className='p-4 rounded-lg bg-secondary-background/40 border border-white/10 hover:border-sky-400/30 transition-colors'
						>
							<span className='inline-block text-xs font-bold tracking-wider uppercase main-text-gradient mb-1.5'>
								// {item.code}
							</span>
							<UiTypography font='Montserrat-SB' className='text-sm text-primary-text mb-1'>
								{item.title}
							</UiTypography>
							<UiTypography font='Montserrat-R' className='text-xs text-primary-text/80 leading-relaxed'>
								{item.desc}
							</UiTypography>
						</div>
					))}
				</div>
			</div>
		</UiContainer>
	)
}

export { HomContacts }
