import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeLayout } from '@/app/layouts/Theme'
import { ToastContainer, Slide } from 'react-toastify'

export const metadata: Metadata = {
	title: 'RAV:Coder — Робототехника на C++ и Python, нейросети и веб-разработка',
	description:
		'Инженерная IT-студия RAV:Coder: программирование робототехники на C++ и Python, компьютерное зрение, внедрение ИИ-решений для бизнеса и разработка веб-платформ под ключ в Москве и по всей России.',
	other: {
		['yandex-verification']: 'e30a47380f9a2208',
		['google-site-verification']: '_EiG94FPoBoK8WMppe9gBnO6jORUyFy--VP2jtWsdOc',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
				<Script id='yandex-metrika' strategy='afterInteractive'>
					{`
						(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
						m[i].l=1*new Date();
						for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
						k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
						(window, document, "script", "https://yandex.ru", "ym");

						ym(101718173, "init", {
							clickmap:true,
							trackLinks:true,
							accurateTrackBounce:true,
							webvisor:true
						});
					`}
				</Script>
				<noscript>
					<div>
						<img
							src='https://yandex.ru'
							style={{ position: 'absolute', left: '-9999px' }}
							alt=''
						/>
					</div>
				</noscript>

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
