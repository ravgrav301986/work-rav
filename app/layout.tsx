import type { Metadata } from 'next'
import './globals.css'
import { ThemeLayout } from '@/app/layouts/Theme'
import { ToastContainer, Slide } from 'react-toastify'
import Head from 'next/head'

export const metadata: Metadata = {
	title: 'Ravcoder',
	description:
		'Профессиональная разработка веб-сайтов и мобильных приложений для бизнеса. Создаем удобные, функциональные и стильные цифровые продукты с индивидуальным подходом. Полный цикл услуг: проектирование UI/UX, программирование, оптимизация и поддержка.',
	 other: {
    ['yandex-verification']: 'e30a47380f9a2208',
  },
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<Head>
			<meta name="yandex-verification" content="e30a47380f9a2208" />
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></meta>
			</Head>
			<body>
				<ThemeLayout>{children}</ThemeLayout>
				<div id='modals' style={{ position: 'relative', zIndex: 100 }}></div>
				<ToastContainer
					position='bottom-center'
					autoClose={1200}
					limit={2}
					newestOnTop
					closeOnClick
					rtl={false}
					draggable
					theme='light'
					transition={Slide}
				/>
			</body>
		</html>
	)
}
