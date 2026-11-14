import { FC } from 'react'
import { Metadata } from 'next'
import { TChildren } from '@/shared/types/shared'
import { MainLayout } from '@/app/layouts/Main'

export const metadata: Metadata = {
	title: {
		default: 'RAV:Coder — Робототехника на C++ и Python, нейросети и веб-разработка',
		template: '%s | RAV:Coder',
	},
	description:
		'IT-студия RAV:Coder: программирование роботов и умных систем на C++ и Python, внедрение нейросетей и ИИ, разработка современных сайтов, мобильных приложений и UI/UX-дизайн под ключ.',
	keywords: [
		'разработка роботов C++ Python',
		'программирование робототехники',
		'внедрение нейросетей и ИИ',
		'разработка сайтов и приложений',
		'UI UX дизайн',
		'RAV Coder',
	],
	openGraph: {
		title: 'RAV:Coder — Робототехника, ИИ и разработка IT-проектов',
		description:
			'Программируем роботов на C++ и Python, внедряем нейросети и создаём современные веб-платформы и приложения под ключ.',
		url: 'https://ravcoder.ru',
		siteName: 'RAV:Coder',
		locale: 'ru_RU',
		type: 'website',
	},
}

interface Props extends TChildren {}

const Layout: FC<Props> = ({ children }) => {
	return <MainLayout>{children}</MainLayout>
}

export default Layout
