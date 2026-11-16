import { FC } from 'react'
import { HomeAbout } from '@/widgets/HomeAbout'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'О компании — Инженерная IT-студия | RAV:Coder',
	description:
		'IT-студия RAV:Coder: разработка ПО на заказ (C++, Python), программирование робототехники, автоматизация бизнеса с помощью ИИ и создание современных веб-платформ.',
}

const HomeAboutScreen: FC = () => {
	return <HomeAbout title='О компании' />
}

export default HomeAboutScreen
