import type { Metadata } from 'next'
import './globals.css'
import { ThemeLayout } from '@/app/layouts/Theme'
import { ToastContainer, Slide } from 'react-toastify'

export const metadata: Metadata = {
	title: 'Ravcoder',
	description:
		'Профессиональная разработка веб-сайтов и мобильных приложений для бизнеса. Создаем удобные, функциональные и стильные цифровые продукты с индивидуальным подходом. Полный цикл услуг: проектирование UI/UX, программирование, оптимизация и поддержка.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
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
