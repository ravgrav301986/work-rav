import { Metadata } from 'next'
import { UiContainer } from '@/shared/ui/UiContainer'
import { UiDecorationTitle } from '@/shared/ui/UiDecorationTitle'
import { UiTypography } from '@/shared/ui/UiTypography'

export const metadata: Metadata = {
	title: 'Политика конфиденциальности | RAV:Coder',
	description:
		'Политика обработки персональных данных и использования файлов cookie на сайте IT-студии RAV:Coder (ravcoder.ru) в соответствии с 152-ФЗ.',
}

export default function PrivacyPolicyPage() {
	return (
		<section className='md-mid:py-12 py-8 text-primary-text'>
			<UiContainer>
				<UiDecorationTitle className='md-mid:text-3xl text-2xl mb-8'>
					Политика конфиденциальности
				</UiDecorationTitle>

				<div className='bg-primary-background rounded-lg md-mid:p-10 p-6 flex flex-col gap-y-6 text-primary-text leading-relaxed md-mid:text-base text-sm'>
					<p className='opacity-80 text-xs'>
						Редакция от {new Date().getFullYear()} года • Сайт: https://ravcoder.ru
					</p>

					<div>
						<UiTypography font='Montserrat-SB' className='text-lg mb-2'>
							1. Общие положения
						</UiTypography>
						<p>
							Настоящая Политика обработки персональных данных (далее — Политика)
							составлена в соответствии с требованиями Федерального закона от
							27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок
							обработки персональных данных и меры по обеспечению их безопасности,
							предпринимаемые администрацией сайта{' '}
							<span className='main-text-gradient font-medium'>https://ravcoder.ru</span> (далее —
							Оператор).
						</p>
						<p className='mt-2'>
							Использование Пользователем сайта означает согласие с настоящей
							Политикой и условиями обработки его персональных данных. В случае
							несогласия с условиями Политики Пользователь должен прекратить
							использование сайта.
						</p>
					</div>

					<div>
						<UiTypography font='Montserrat-SB' className='text-lg mb-2'>
							2. Какие данные мы собираем
						</UiTypography>
						<p>Оператор может обрабатывать следующие данные Пользователя:</p>
						<ul className='list-disc pl-5 mt-2 space-y-1.5'>
							<li>
								Данные, которые Пользователь добровольно передаёт при обращении по
								электронной почте{' '}
								<span className='main-text-gradient font-medium'>ravcoder@yandex.ru</span> или через
								официальный мессенджер Telegram (имя, никнейм, контактный телефон,
								описание задачи).
							</li>
							<li>
								Обезличенные технические данные, собираемые автоматически при
								посещении сайта: файлы cookie, IP-адрес, тип и версия браузера,
								операционная система, источник перехода и сведения о действиях на
								страницах (в том числе с помощью сервисов веб-аналитики Яндекс
								Метрика).
							</li>
						</ul>
					</div>

					<div>
						<UiTypography font='Montserrat-SB' className='text-lg mb-2'>
							3. Цели обработки персональных данных
						</UiTypography>
						<ul className='list-disc pl-5 space-y-1.5'>
							<li>
								Обработка входящих заявок, консультация по услугам разработки ПО,
								робототехники, ИИ-решений и веб-проектов, подготовка коммерческих
								предложений и заключение договоров.
							</li>
							<li>
								Обеспечение корректной технической работы сайта, повышение его
								безопасности и удобства использования.
							</li>
							<li>
								Анализ посещаемости и улучшение качества контента и сервисов сайта.
							</li>
						</ul>
					</div>

					<div>
						<UiTypography font='Montserrat-SB' className='text-lg mb-2'>
							4. Использование файлов cookie
						</UiTypography>
						<p>
							Файлы cookie — это небольшие текстовые файлы, сохраняемые браузером
							на устройстве Пользователя. Они необходимы для сохранения настроек
							интерфейса и сбора обезличенной статистики посещений. Пользователь
							может в любой момент отключить или удалить файлы cookie в настройках
							своего браузера.
						</p>
					</div>

					<div>
						<UiTypography font='Montserrat-SB' className='text-lg mb-2'>
							5. Порядок хранения, защиты и передачи данных
						</UiTypography>
						<p>
							Оператор обеспечивает сохранность персональных данных, применяет
							организационные и технические меры защиты от неправомерного доступа и
							не передаёт персональные данные третьим лицам, за исключением случаев,
							прямо предусмотренных законодательством Российской Федерации.
							Обработка и хранение персональных данных граждан РФ осуществляются с
							использованием баз данных, находящихся на территории Российской
							Федерации.
						</p>
					</div>

					<div>
						<UiTypography font='Montserrat-SB' className='text-lg mb-2'>
							6. Права Пользователя и контакты Оператора
						</UiTypography>
						<p>
							Пользователь вправе запросить уточнение своих персональных данных, их
							блокирование или уничтожение, а также отозвать согласие на обработку
							персональных данных, направив обращение на электронную почту Оператора:{' '}
							<a
								href='mailto:ravcoder@yandex.ru'
								className='main-text-gradient font-semibold underline'
							>
								ravcoder@yandex.ru
							</a>
							.
						</p>
					</div>
				</div>
			</UiContainer>
		</section>
	)
}
